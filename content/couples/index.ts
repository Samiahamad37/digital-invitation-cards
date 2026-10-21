import type { Invite } from "../types";
import { amaniNeema } from "./amani-neema";
import { jumaAisha } from "./juma-aisha";

// ── Register every couple here. The key is the URL slug. ──
const couples: Invite[] = [amaniNeema, jumaAisha];

export const allCouples = couples;

export function getCouple(slug: string): Invite | undefined {
  return couples.find((c) => c.slug === slug);
}
