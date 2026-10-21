"use client";
import { useEffect, useState } from "react";
import { useTr } from "./lang";

const L = {
  en: ["Days", "Hours", "Minutes", "Seconds"],
  sw: ["Siku", "Saa", "Dakika", "Sekunde"],
};

function left(dateISO: string) {
  const ms = Math.max(0, new Date(dateISO).getTime() - Date.now());
  return [Math.floor(ms / 864e5), Math.floor((ms / 36e5) % 24), Math.floor((ms / 6e4) % 60), Math.floor((ms / 1e3) % 60)];
}

/** <Countdown date="2026-12-12T16:00:00+03:00" /> — style the boxes with boxClassName */
export function Countdown({ date, boxClassName = "rounded-2xl border border-[var(--accent)]/30 bg-[var(--card)]" }: { date: string; boxClassName?: string }) {
  const tr = useTr();
  const [v, setV] = useState<number[] | null>(null);
  useEffect(() => {
    setV(left(date));
    const id = setInterval(() => setV(left(date)), 1000);
    return () => clearInterval(id);
  }, [date]);
  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-3">
      {tr(L).map((label, i) => (
        <div key={label} className={`py-4 text-center ${boxClassName}`}>
          <div className="text-3xl font-semibold text-[var(--ink)]">{v ? v[i] : "–"}</div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-[var(--accent)]">{label}</div>
        </div>
      ))}
    </div>
  );
}
