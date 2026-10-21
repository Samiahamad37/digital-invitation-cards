import { NextResponse } from "next/server";
import { ensureTable } from "@/lib/db";
import { getCouple } from "@/content/couples";

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const couple = getCouple(clip(body.couple, 80));
  if (!couple) return NextResponse.json({ error: "Unknown invitation" }, { status: 400 });

  const name = clip(body.name, 120);
  if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
  const phone = clip(body.phone, 40) || null;
  const attending = body.attending !== "no";
  const guests = Math.min(couple.maxGuests ?? 2, Math.max(attending ? 1 : 0, Number(body.guests) || 1));
  const message = clip(body.message, 1000) || null;

  const sql = await ensureTable();
  if (!sql) {
    // No database configured yet: the RSVP still "works" for testing.
    console.log("RSVP (no DATABASE_URL set):", { couple: couple.slug, name, phone, attending, guests, message });
    return NextResponse.json({ ok: true, stored: false });
  }
  await sql`INSERT INTO rsvps (couple_slug, name, phone, attending, guests, message) VALUES (${couple.slug}, ${name}, ${phone}, ${attending}, ${guests}, ${message})`;
  return NextResponse.json({ ok: true, stored: true });
}
