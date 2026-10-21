import { neon } from "@neondatabase/serverless";

export type RsvpRow = {
  id: number; name: string; phone: string | null; attending: boolean;
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
    name TEXT NOT NULL,
    phone TEXT,
    attending BOOLEAN NOT NULL,
    guests INT NOT NULL DEFAULT 1,
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`;
  ready = true;
  return sql;
}
