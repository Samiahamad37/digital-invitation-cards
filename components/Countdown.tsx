"use client";
import { useEffect, useState } from "react";
import { invite } from "@/content/invite";
import { useLang } from "@/lib/language";
import { Reveal, SectionTitle } from "./Reveal";

function remaining() {
  const ms = Math.max(0, new Date(invite.dateISO).getTime() - Date.now());
  return { d: Math.floor(ms / 864e5), h: Math.floor((ms / 36e5) % 24), m: Math.floor((ms / 6e4) % 60), s: Math.floor((ms / 1e3) % 60) };
}

export function Countdown() {
  const { t } = useLang();
  const [left, setLeft] = useState<ReturnType<typeof remaining> | null>(null);
  useEffect(() => {
    setLeft(remaining());
    const id = setInterval(() => setLeft(remaining()), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { v: left?.d, l: t.days },
    { v: left?.h, l: t.hours },
    { v: left?.m, l: t.minutes },
    { v: left?.s, l: t.seconds },
  ];
  return (
    <section className="bg-sand px-6 py-20">
      <SectionTitle title={t.countdownTitle} />
      <Reveal className="mx-auto grid max-w-md grid-cols-4 gap-3">
        {items.map((it) => (
          <div key={it.l} className="rounded-2xl border border-gold/30 bg-ivory py-4 text-center shadow-sm">
            <div className="text-3xl font-semibold text-gold-dark">{it.v ?? "–"}</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-gold">{it.l}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
