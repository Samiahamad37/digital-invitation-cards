"use client";
import { invite } from "@/content/invite";
import { useLang } from "@/lib/language";
import { Reveal, Divider } from "./Reveal";

export function EventDetails() {
  const { t } = useLang();
  const btn = "inline-flex items-center gap-2 rounded-full border border-gold/70 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-gold hover:text-ivory";
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {invite.media.eventVideo && (
        <video src={invite.media.eventVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-40" />
      )}
      <Reveal className="relative mx-auto max-w-md rounded-[2.5rem] border-2 border-gold/50 bg-ivory/90 px-8 py-14 text-center shadow-xl">
        <p className="text-lg">{t.eventSubtitle}</p>
        <h2 className="font-script text-6xl text-[#5c5a3a]">{t.eventTitle}</h2>
        <Divider />
        <p className="text-xl">{t.dateLabel}</p>
        <p className="mt-1">{t.ceremonyBegins}</p>
        <p className="mt-6 font-script text-5xl">{invite.venue.name}</p>
        <p className="text-sm opacity-80">{invite.venue.address}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a className={btn} href={invite.venue.mapsUrl} target="_blank" rel="noopener noreferrer">📍 {t.openMaps}</a>
          <a className={btn} href="/api/calendar">📅 {t.addCalendar}</a>
        </div>
      </Reveal>
    </section>
  );
}

export function DressAndGifts() {
  const { t } = useLang();
  return (
    <section className="bg-sand px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-script text-5xl">{t.dressTitle}</h2>
        <Divider />
        <p className="text-lg">{t.dress}</p>
        <div className="mt-4 flex justify-center gap-3">
          {["#c9a25d", "#f5ede0", "#1f5f73"].map((c) => (
            <span key={c} className="h-8 w-8 rounded-full border border-gold/40" style={{ background: c }} />
          ))}
        </div>
      </Reveal>
      <Reveal className="mx-auto mt-16 max-w-md">
        <h2 className="font-script text-5xl">{t.giftsTitle}</h2>
        <Divider />
        <p className="text-lg">{t.gifts}</p>
        <div className="mt-6 space-y-3 text-sm">
          <div className="rounded-xl border border-gold/30 bg-ivory p-4">
            <p className="uppercase tracking-widest text-gold">{invite.gifts.mobileMoney.label}</p>
            <p className="text-lg">{invite.gifts.mobileMoney.number}</p>
            <p>{invite.gifts.mobileMoney.name}</p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-ivory p-4">
            <p className="uppercase tracking-widest text-gold">{invite.gifts.bank.label}</p>
            <p className="text-lg">{invite.gifts.bank.details}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  return (
    <section className="px-6 py-20">
      <Reveal className="mx-auto max-w-md">
        <h2 className="text-center font-script text-5xl">{t.faqTitle}</h2>
        <Divider />
        {t.faq.map((f) => (
          <details key={f.q} className="border-b border-gold/30 py-4">
            <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
            <p className="mt-2">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
