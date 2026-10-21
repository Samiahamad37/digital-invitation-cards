import Link from "next/link";
import { allCouples, getCouple } from "@/content/couples";
import { ensureTable, type RsvpRow } from "@/lib/db";

export const dynamic = "force-dynamic";

// /admin?key=YOUR_ADMIN_PASSWORD               → every couple with totals
// /admin?key=YOUR_ADMIN_PASSWORD&couple=<slug> → one couple's guest list
export default async function Admin({ searchParams }: { searchParams: Promise<{ key?: string; couple?: string }> }) {
  const { key, couple } = await searchParams;
  if (!process.env.ADMIN_PASSWORD || key !== process.env.ADMIN_PASSWORD) {
    return <p className="p-10 text-center">Not authorised.</p>;
  }
  const sql = await ensureTable();
  if (!sql) return <p className="p-10 text-center">Set DATABASE_URL to store RSVPs.</p>;

  const selected = couple ? getCouple(couple) : undefined;
  const rows = (selected
    ? await sql`SELECT * FROM rsvps WHERE couple_slug = ${selected.slug} ORDER BY created_at DESC`
    : await sql`SELECT * FROM rsvps ORDER BY created_at DESC`) as RsvpRow[];

  const summary = (list: RsvpRow[]) => {
    const yes = list.filter((r) => r.attending);
    return `${yes.length} attending (${yes.reduce((n, r) => n + r.guests, 0)} guests) · ${list.length - yes.length} declined`;
  };

  return (
    <main className="mx-auto max-w-4xl bg-white p-6 font-sans text-sm text-neutral-800">
      <h1 className="text-2xl font-semibold">{selected ? `${selected.couple.partnerOne} & ${selected.couple.partnerTwo}` : "All invitations"}</h1>

      {!selected && (
        <ul className="mt-6 space-y-2">
          {allCouples.map((c) => (
            <li key={c.slug} className="rounded border p-3">
              <Link className="font-semibold underline" href={`/admin?key=${encodeURIComponent(key)}&couple=${c.slug}`}>
                {c.couple.partnerOne} &amp; {c.couple.partnerTwo}
              </Link>{" "}
              · {summary(rows.filter((r) => r.couple_slug === c.slug))}
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <>
          <p className="mt-1">{summary(rows)}</p>
          <Link className="mt-2 inline-block underline" href={`/admin?key=${encodeURIComponent(key)}`}>← All invitations</Link>
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
        </>
      )}
    </main>
  );
}
