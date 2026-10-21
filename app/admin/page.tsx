import { ensureTable, type RsvpRow } from "@/lib/db";

export const dynamic = "force-dynamic";

// Open /admin?key=YOUR_ADMIN_PASSWORD to see the guest list.
export default async function Admin({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  if (!process.env.ADMIN_PASSWORD || key !== process.env.ADMIN_PASSWORD) {
    return <p className="p-10 text-center">Not authorised.</p>;
  }
  const sql = await ensureTable();
  if (!sql) return <p className="p-10 text-center">Set DATABASE_URL to store RSVPs.</p>;

  const rows = (await sql`SELECT * FROM rsvps ORDER BY created_at DESC`) as RsvpRow[];
  const coming = rows.filter((r) => r.attending);
  const total = coming.reduce((n, r) => n + r.guests, 0);

  return (
    <main className="mx-auto max-w-4xl p-6 font-sans text-sm text-neutral-800">
      <h1 className="text-2xl font-semibold">Guest list</h1>
      <p className="mt-1">{coming.length} replies attending · {total} guests · {rows.length - coming.length} declined</p>
      <table className="mt-6 w-full border-collapse">
        <thead><tr className="border-b text-left"><th className="py-2">Name</th><th>Phone</th><th>Attending</th><th>Guests</th><th>Message</th><th>Date</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b align-top">
              <td className="py-2">{r.name}</td><td>{r.phone}</td><td>{r.attending ? "Yes" : "No"}</td>
              <td>{r.guests}</td><td>{r.message}</td><td>{new Date(r.created_at).toLocaleDateString("en-GB")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
