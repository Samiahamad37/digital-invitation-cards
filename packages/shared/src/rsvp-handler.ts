import { db } from "./db";

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** In a card's app/api/rsvp/route.ts:  export const POST = createRsvpHandler("amani-neema"); */
export function createRsvpHandler(coupleSlug: string, maxGuests = 2) {
  return async function POST(req: Request) {
    let body: Record<string, unknown>;
    try { body = await req.json(); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400 }); }

    const name = clip(body.name, 120);
    if (!name) return Response.json({ error: "Name is required" }, { status: 400 });
    const phone = clip(body.phone, 40) || null;
    const attending = body.attending !== "no";
    const guests = attending ? Math.min(maxGuests, Math.max(1, Number(body.guests) || 1)) : 0;
    const message = clip(body.message, 1000) || null;

    const sql = await db();
    if (!sql) {
      console.log(`RSVP for ${coupleSlug} (no DATABASE_URL set):`, { name, phone, attending, guests, message });
      return Response.json({ ok: true, stored: false });
    }
    await sql`INSERT INTO rsvps (couple_slug, name, phone, attending, guests, message)
              VALUES (${coupleSlug}, ${name}, ${phone}, ${attending}, ${guests}, ${message})`;
    return Response.json({ ok: true, stored: true });
  };
}
