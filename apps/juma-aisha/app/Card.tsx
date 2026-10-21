"use client";
// ─────────────────────────────────────────────────────────────
//  JUMA & AISHA — "Emerald Lakeside" design.
//  A completely different look from Amani & Neema, same shared pieces.
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { motion } from "framer-motion";
import { AddToCalendar, Countdown, LangProvider, LangToggle, Reveal, Rsvp, useTr } from "@cards/shared";

const DATE = "2027-01-16T15:00:00+03:00";
const END = "2027-01-16T23:00:00+03:00";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Malaika+Beach+Resort+Mwanza";

const txt = {
  en: {
    open: "Open the invitation", together: "Together with their families", invite: "invite you to celebrate their wedding",
    date: "Saturday · 16 · January · 2027", until: "Until we say I do",
    story: "Our Journey",
    storyItems: [
      ["2021", "First hello", "We met on a boat ride across Lake Victoria."],
      ["2024", "Forever begins", "He asked, she said yes, at sunset by the rocks of Mwanza."],
    ],
    ceremony: "Ceremony", ceremonyBody: "3:00 PM · Lakeside garden",
    reception: "Reception", receptionBody: "6:00 PM · Grand terrace",
    venue: "Malaika Beach Resort", place: "Mwanza, Tanzania", maps: "Directions",
    dress: "Dress code: Emerald, gold or black. Formal.",
    rsvp: "Kindly reply", deadline: "Please RSVP by 2 January 2027",
  },
  sw: {
    open: "Fungua mwaliko", together: "Pamoja na familia zao", invite: "wanakualika kusherehekea harusi yao",
    date: "Jumamosi · 16 · Januari · 2027", until: "Mpaka tutakaposema ndiyo",
    story: "Safari Yetu",
    storyItems: [
      ["2021", "Salamu ya kwanza", "Tulikutana kwenye safari ya boti Ziwa Victoria."],
      ["2024", "Milele inaanza", "Aliuliza, akasema ndiyo, jua likizama kando ya miamba ya Mwanza."],
    ],
    ceremony: "Ndoa", ceremonyBody: "Saa 9:00 alasiri · Bustani ya ziwani",
    reception: "Sherehe", receptionBody: "Saa 12:00 jioni · Terasi kuu",
    venue: "Malaika Beach Resort", place: "Mwanza, Tanzania", maps: "Ramani",
    dress: "Mavazi: Kijani, dhahabu au nyeusi. Rasmi.",
    rsvp: "Tafadhali jibu", deadline: "Thibitisha kabla ya 2 Januari 2027",
  },
};

/** Intro: two emerald doors slide apart */
function Doors({ onOpen, label }: { onOpen: () => void; label: string }) {
  const [opening, setOpening] = useState(false);
  const door = "absolute top-0 h-full w-1/2 bg-[var(--card)] border-[var(--accent)]/40";
  const go = () => { setOpening(true); setTimeout(onOpen, 1300); };
  return (
    <div className="fixed inset-0 z-50 overflow-hidden" onClick={go}>
      <motion.div className={`${door} left-0 border-r`} animate={{ x: opening ? "-100%" : 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
      <motion.div className={`${door} right-0 border-l`} animate={{ x: opening ? "100%" : 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center" animate={{ opacity: opening ? 0 : 1 }}>
        <span className="font-script text-6xl text-[var(--accent)]">J &amp; A</span>
        <span className="mt-6 cursor-pointer border-b border-[var(--accent)] pb-1 text-xs uppercase tracking-[0.4em]">{label}</span>
      </motion.div>
    </div>
  );
}

function Invitation() {
  const t = useTr()(txt);
  const [open, setOpen] = useState(false);

  return (
    <main className="text-center">
      {!open && <Doors onOpen={() => setOpen(true)} label={t.open} />}
      <LangToggle />

      {/* Hero: names inside a golden arch */}
      <section className="flex min-h-[100svh] items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={open ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.4 }}
          className="arch relative w-full max-w-sm border border-[var(--accent)] px-8 pb-14 pt-24"
        >
          <span className="sparkle absolute left-8 top-16 text-[var(--accent)]">✧</span>
          <span className="sparkle absolute right-10 top-28 text-[var(--accent)]" style={{ animationDelay: "1s" }}>✧</span>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">{t.together}</p>
          <h1 className="mt-8 font-script text-7xl leading-none text-[var(--accent)]">Juma</h1>
          <p className="my-2 italic">&amp;</p>
          <h1 className="font-script text-7xl leading-none text-[var(--accent)]">Aisha</h1>
          <p className="mt-8 italic">{t.invite}</p>
          <div className="gold-line my-6" />
          <p className="text-sm uppercase tracking-[0.3em]">{t.date}</p>
        </motion.div>
      </section>

      <section className="px-6 py-16">
        <Reveal>
          <p className="mb-8 font-script text-4xl text-[var(--accent)]">{t.until}</p>
          <Countdown date={DATE} boxClassName="rounded-full aspect-square flex flex-col justify-center border border-[var(--accent)]/60" />
        </Reveal>
      </section>

      {/* Story: alternating timeline */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <Reveal><h2 className="mb-12 font-script text-6xl text-[var(--accent)]">{t.story}</h2></Reveal>
        {t.storyItems.map(([year, h, b], i) => (
          <Reveal key={year} delay={0.1} className={`mb-10 flex items-center gap-6 ${i % 2 ? "flex-row-reverse text-right" : "text-left"}`}>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] text-lg text-[var(--accent)]">{year}</div>
            <div>
              <h3 className="text-xl">{h}</h3>
              <p className="italic opacity-80">{b}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Details: two cards side by side */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
          {[[t.ceremony, t.ceremonyBody], [t.reception, t.receptionBody]].map(([h, b], i) => (
            <Reveal key={h} delay={i * 0.15} className="arch border border-[var(--accent)]/60 bg-[var(--card)] px-6 pb-10 pt-16">
              <h3 className="font-script text-5xl text-[var(--accent)]">{h}</h3>
              <p className="mt-3">{b}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="text-2xl">{t.venue}</p>
          <p className="italic opacity-80">{t.place}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={MAPS} target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-[var(--accent)]/70 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-[var(--accent)] hover:text-[var(--soft)]">📍 {t.maps}</a>
            <AddToCalendar title="Juma & Aisha Wedding" start={DATE} end={END} place="Malaika Beach Resort, Mwanza, Tanzania" />
          </div>
          <div className="gold-line mx-auto my-10 max-w-xs" />
          <p className="italic">{t.dress}</p>
        </Reveal>
      </section>

      <section id="rsvp" className="px-6 pb-24 pt-8">
        <Reveal>
          <h2 className="font-script text-6xl text-[var(--accent)]">{t.rsvp}</h2>
          <p className="mb-8 mt-2 italic opacity-80">{t.deadline}</p>
          <Rsvp maxGuests={4} thanksClassName="font-script text-5xl text-[var(--accent)]" />
        </Reveal>
      </section>
    </main>
  );
}

export function Card() {
  return (
    <LangProvider>
      <Invitation />
    </LangProvider>
  );
}
