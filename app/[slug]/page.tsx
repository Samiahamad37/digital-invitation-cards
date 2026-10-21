import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCouples, getCouple } from "@/content/couples";
import { Invitation } from "@/components/Invitation";

// Pre-build a page for every registered couple: /amani-neema, /juma-aisha, ...
export function generateStaticParams() {
  return allCouples.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const invite = getCouple((await params).slug);
  if (!invite) return {};
  const title = `${invite.couple.partnerOne} & ${invite.couple.partnerTwo} · Wedding Invitation`;
  const description = `${invite.text.en.dateLabel} · ${invite.venue.name}, ${invite.venue.address}`;
  // WhatsApp preview. Add /public/og/<slug>.jpg (1200x630) and list it in `images` for a photo.
  return { title, description, openGraph: { title, description } };
}

export default async function CouplePage({ params }: { params: Promise<{ slug: string }> }) {
  const invite = getCouple((await params).slug);
  if (!invite) notFound();
  return <Invitation invite={invite} />;
}
