import { db, type RsvpRow } from "./db";

/** Server component: the couple's guest list. Protected by ADMIN_PASSWORD (?key=...). */
export async function GuestList({ coupleSlug, keyParam }: { coupleSlug: string; keyParam?: string }) {
  if (!process.env.ADMIN_PASSWORD || keyParam !== process.env.ADMIN_PASSWORD) {
    return <p style={{ padding: 40, textAlign: "center" }}>Not authorised.</p>;
  }
  const sql = await db();
  if (!sql) return <p style={{ padding: 40, textAlign: "center" }}>Set DATABASE_URL to store RSVPs.</p>;

  const rows = (await sql`SELECT * FROM rsvps WHERE couple_slug = ${coupleSlug} ORDER BY created_at DESC`) as RsvpRow[];
  const yes = rows.filter((r) => r.attending);
  const cell = { padding: "8px 6px", borderBottom: "1px solid #ddd", verticalAlign: "top" as const, textAlign: "left" as const };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif", fontSize: 14, color: "#222", background: "#fff" }}>
      <h1 style={{ fontSize: 24, fontWeight: 600 }}>Guest list</h1>
      <p>{yes.length} attending ({yes.reduce((n, r) => n + r.guests, 0)} guests) · {rows.length - yes.length} declined</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
        <thead><tr>{["Name", "Phone", "Attending", "Guests", "Message", "Date"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td style={cell}>{r.name}</td><td style={cell}>{r.phone}</td><td style={cell}>{r.attending ? "Yes" : "No"}</td>
              <td style={cell}>{r.guests}</td><td style={cell}>{r.message}</td><td style={cell}>{new Date(r.created_at).toLocaleDateString("en-GB")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
