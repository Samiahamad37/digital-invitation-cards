import Link from "next/link";
import { allCouples } from "@/content/couples";

// Your brand's home page. Replace with your own landing page, prices, contact, etc.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sand px-6 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-gold">Digital Wedding Invitations</p>
      <h1 className="mt-3 font-script text-6xl">Invitation Cards</h1>
      <p className="mt-4 max-w-md text-lg">Elegant invitations with RSVP, countdown, maps and Kiswahili / English. Shared by one WhatsApp link.</p>
      <div className="mt-10 grid w-full max-w-md gap-4">
        {allCouples.map((c) => (
          <Link key={c.slug} href={`/${c.slug}`} data-theme={c.theme}
            className="rounded-2xl border border-gold/40 px-6 py-5 shadow-sm transition hover:shadow-lg">
            <span className="block font-script text-4xl">{c.couple.partnerOne} &amp; {c.couple.partnerTwo}</span>
            <span className="text-sm">{c.text.en.dateLabel} · {c.venue.name}</span>
            <span className="mt-1 block text-xs uppercase tracking-widest text-gold">{c.theme} theme · /{c.slug}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
