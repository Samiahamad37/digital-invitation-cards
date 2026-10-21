"use client";
// ─────────────────────────────────────────────────────────────
//  AMANI & NEEMA — "Bahari" beach design.
//  This whole file is the card. Design it however you like;
//  the shared pieces (Countdown, Rsvp, AddToCalendar...) are one line each.
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AddToCalendar, Countdown, LangProvider, LangToggle, Reveal, Rsvp, useTr } from "@cards/shared";

const DATE = "2026-12-12T16:00:00+03:00";
const END = "2026-12-12T23:30:00+03:00";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Bahari+Beach+Dar+es+Salaam";

const txt = {
  en: {
    tap: "Tap to open", married: "We're Getting Married", date: "Saturday, 12th December 2026", confirm: "Confirm Attendance",
    countdown: "Counting the Days", story: "Our Story",
    storyItems: [
      ["How we met", "A chance meeting at a friend's birthday by the ocean in Dar es Salaam."],
      ["The proposal", "At sunset on the sand, a question was asked and forever began."],
    ],
    program: "Order of the Day",
    programItems: [
      ["4:00 PM", "Guest Arrivals", "A warm welcome by the sea"],
      ["4:30 PM", "Ceremony", "Where two hearts become one"],
      ["6:30 PM", "Dinner", "An evening of love and shared meals"],
      ["8:30 PM", "First Dance & Party", "Let the celebration begin"],
    ],
    join: "Join us to celebrate", details: "Event Details", begins: "Ceremony begins at 4:00 PM", maps: "Open in Google Maps",
    dress: "Dress Code", dressBody: "Beach formal in soft gold, ivory and ocean blue. Comfortable shoes for the sand.",
    gifts: "Gifts", giftsBody: "Your presence is our greatest gift. If you wish to bless us:",
    rsvp: "RSVP", rsvpKicker: "Be our guest", deadline: "Kindly RSVP by 28 November 2026",
  },
  sw: {
    tap: "Gusa kufungua", married: "Tunafunga Ndoa", date: "Jumamosi, 12 Desemba 2026", confirm: "Thibitisha Kuhudhuria",
    countdown: "Siku Zilizobaki", story: "Hadithi Yetu",
    storyItems: [
      ["Tulivyokutana", "Tulikutana kwenye sherehe ya rafiki kando ya bahari, Dar es Salaam."],
      ["Posa", "Jua likizama ufukweni, swali liliulizwa na milele ikaanza."],
    ],
    program: "Ratiba ya Siku",
    programItems: [
      ["Saa 10:00 jioni", "Wageni Kuwasili", "Karibu kando ya bahari"],
      ["Saa 10:30 jioni", "Ndoa", "Mioyo miwili kuwa mmoja"],
      ["Saa 12:30 jioni", "Chakula cha Jioni", "Jioni ya upendo na chakula"],
      ["Saa 2:30 usiku", "Ngoma na Sherehe", "Sherehe ianze!"],
    ],
    join: "Karibu tusherehekee pamoja", details: "Maelezo ya Tukio", begins: "Sherehe inaanza saa 10:00 jioni", maps: "Fungua Ramani",
    dress: "Mavazi", dressBody: "Mavazi rasmi ya ufukweni: dhahabu, cream na bluu ya bahari.",
    gifts: "Zawadi", giftsBody: "Uwepo wako ndio zawadi kubwa kwetu. Ukipenda kutubariki:",
    rsvp: "Thibitisha", rsvpKicker: "Karibu mgeni wetu", deadline: "Tafadhali thibitisha kabla ya 28 Novemba 2026",
  },
};

function Divider() {
  return (
    <div className="my-5 flex items-center justify-center gap-4 text-[var(--accent)]">
      <span className="h-px w-16 bg-[var(--accent)]/60" />✦<span className="h-px w-16 bg-[var(--accent)]/60" />
    </div>
  );
}

function Title({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
  return (
    <Reveal className="text-center">
      {kicker && <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{kicker}</p>}
      <h2 className="mt-2 font-script text-5xl md:text-6xl">{children}</h2>
      <Divider />
    </Reveal>
  );
}

function Ocean() {
  return (
    <div className="ocean-bg absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[38%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#fff1cf] opacity-80 blur-sm" />
      <svg className="wave absolute bottom-0 left-[-10%] h-[45%] w-[120%]" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0 120 C 200 60 400 180 600 120 S 1000 60 1200 120 V400 H0 Z" fill="#3f8597" opacity="0.55" />
      </svg>
      <svg className="wave wave-2 absolute bottom-0 left-[-10%] h-[35%] w-[120%]" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0 160 C 250 100 450 220 700 160 S 1050 110 1200 160 V400 H0 Z" fill="#1f5f73" opacity="0.8" />
      </svg>
      <svg className="absolute bottom-0 left-0 h-[14%] w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0 40 C 300 10 600 70 1200 30 V100 H0 Z" fill="#f2dfc2" />
      </svg>
    </div>
  );
}

function Invitation() {
  const t = useTr()(txt);
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* Intro: tap the seal to open */}
      <AnimatePresence>
        {!open && (
          <motion.button onClick={() => setOpen(true)} exit={{ opacity: 0, scale: 1.06 }} transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--soft)]">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2.4, repeat: Infinity }}
              className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#e5c582] via-[#b98a45] to-[#7d5a2a] shadow-2xl">
              <span className="font-script text-4xl text-[var(--card)]">A &amp; N</span>
            </motion.div>
            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[var(--accent)]">{t.tap}</p>
          </motion.button>
        )}
      </AnimatePresence>
      <LangToggle />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <Ocean />
        <motion.div className="relative z-10 -mt-40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">{t.married}</p>
          <h1 className="gold-text mt-3 font-script text-7xl leading-tight md:text-8xl">Amani &amp; Neema</h1>
          <div className="my-4 flex items-center justify-center gap-4"><span className="h-px w-16 bg-[var(--ink)]" />✦<span className="h-px w-16 bg-[var(--ink)]" /></div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">{t.date}</p>
        </motion.div>
        <a href="#rsvp" className="absolute bottom-10 z-10 text-xs uppercase tracking-[0.3em] text-white">
          {t.confirm}<span className="mt-3 block animate-bounce">↓</span>
        </a>
      </section>

      <section className="bg-[var(--soft)] px-6 py-20">
        <Title>{t.countdown}</Title>
        <Reveal><Countdown date={DATE} /></Reveal>
      </section>

      <section className="px-6 py-20">
        <Title>{t.story}</Title>
        <div className="mx-auto max-w-md space-y-8 text-center">
          {t.storyItems.map(([h, b], i) => (
            <Reveal key={h} delay={i * 0.1}>
              <h3 className="text-xl font-semibold uppercase tracking-widest text-[var(--accent)]">{h}</h3>
              <p className="mt-2 text-lg leading-relaxed">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--soft)] px-6 py-20">
        <Title>{t.program}</Title>
        <ol className="relative mx-auto max-w-md border-l border-[var(--accent)]/40 pl-8">
          {t.programItems.map(([time, h, b], i) => (
            <Reveal key={h} delay={i * 0.08} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-[var(--accent)]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">{time}</p>
              <h3 className="font-script text-3xl">{h}</h3>
              <p className="italic">{b}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="px-6 py-24">
        <Reveal className="mx-auto max-w-md rounded-[2.5rem] border-2 border-[var(--accent)]/50 bg-[var(--card)] px-8 py-14 text-center shadow-xl">
          <p className="text-lg">{t.join}</p>
          <h2 className="font-script text-6xl text-[#5c5a3a]">{t.details}</h2>
          <Divider />
          <p className="text-xl">{t.date}</p>
          <p className="mt-1">{t.begins}</p>
          <p className="mt-6 font-script text-5xl">Bahari Beach</p>
          <p className="text-sm opacity-80">Dar es Salaam, Tanzania</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={MAPS} target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-[var(--accent)]/70 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-[var(--accent)] hover:text-[var(--card)]">📍 {t.maps}</a>
            <AddToCalendar title="Amani & Neema Wedding" start={DATE} end={END} place="Bahari Beach, Dar es Salaam, Tanzania" />
          </div>
        </Reveal>
      </section>

      <section className="bg-[var(--soft)] px-6 py-20 text-center">
        <Reveal className="mx-auto max-w-md">
          <h2 className="font-script text-5xl">{t.dress}</h2>
          <Divider />
          <p className="text-lg">{t.dressBody}</p>
          <div className="mt-4 flex justify-center gap-3">
            {["#c9a25d", "#f5ede0", "#1f5f73"].map((c) => <span key={c} className="h-8 w-8 rounded-full border border-[var(--accent)]/40" style={{ background: c }} />)}
          </div>
        </Reveal>
        <Reveal className="mx-auto mt-16 max-w-md">
          <h2 className="font-script text-5xl">{t.gifts}</h2>
          <Divider />
          <p className="text-lg">{t.giftsBody}</p>
          <div className="mt-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--card)] p-4">
            <p className="uppercase tracking-widest text-[var(--accent)]">M-Pesa / Mixx by Yas</p>
            <p className="text-lg">+255 7XX XXX XXX · Amani &amp; Neema</p>
          </div>
        </Reveal>
      </section>

      <section id="rsvp" className="px-6 py-20">
        <Title kicker={t.rsvpKicker}>{t.rsvp}</Title>
        <p className="mb-6 text-center italic">{t.deadline}</p>
        <Reveal><Rsvp maxGuests={2} thanksClassName="font-script text-5xl" /></Reveal>
      </section>

      <footer className="bg-[var(--soft)] py-10 text-center font-script text-3xl">Amani &amp; Neema</footer>
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
