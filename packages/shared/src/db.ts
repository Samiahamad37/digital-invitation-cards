import { neon } from "@neondatabase/serverless";

export type RsvpRow = {
  id: number; couple_slug: string | null; name: string; phone: string | null;
  attending: boolean; guests: number; message: string | null; created_at: string;
};

let ready = false;

/** All couples share one Neon table; each row is tagged with couple_slug. */
export async function db() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  const sql = neon(url);
  if (!ready) {
    await sql`CREATE TABLE IF NOT EXISTS rsvps (
      id SERIAL PRIMARY KEY, couple_slug TEXT, name TEXT NOT NULL, phone TEXT,
      attending BOOLEAN NOT NULL, guests INT NOT NULL DEFAULT 1, message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now())`;
    await sql`ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS couple_slug TEXT`;
    ready = true;
  }
  return sql;
}
