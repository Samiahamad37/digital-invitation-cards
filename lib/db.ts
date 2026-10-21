import { neon } from "@neondatabase/serverless";

export type RsvpRow = {
  id: number; couple_slug: string | null; name: string; phone: string | null; attending: boolean;
  guests: number; message: string | null; created_at: string;
};

export function getSql() {
  const url = process.env.DATABASE_URL;
  return url ? neon(url) : null;
}

let ready = false;
export async function ensureTable() {
  const sql = getSql();
  if (!sql || ready) return sql;
  await sql`CREATE TABLE IF NOT EXISTS rsvps (
    id SERIAL PRIMARY KEY,
    couple_slug TEXT,
    name TEXT NOT NULL,
    phone TEXT,
    attending BOOLEAN NOT NULL,
    guests INT NOT NULL DEFAULT 1,
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`;
  // Upgrades a table created by the single-couple version
  await sql`ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS couple_slug TEXT`;
  await sql`CREATE INDEX IF NOT EXISTS rsvps_couple_idx ON rsvps (couple_slug)`;
  ready = true;
  return sql;
}
