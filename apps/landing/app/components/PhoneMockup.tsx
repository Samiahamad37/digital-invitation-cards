"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTr } from "@cards/shared";
import { sampleCard, ui } from "../config";
import { Icon } from "./Icon";
import { QrPattern } from "./QrPattern";

/** The animated phone in the hero, showing a sample invitation (CSS/SVG only). */
export function PhoneMockup() {
  const tr = useTr();
  const reduce = useReducedMotion();
  const [confirmed, setConfirmed] = useState(false);

  // Gently demo the RSVP tap: toggles between "choose" and "received".
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setConfirmed((c) => !c), 3600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <motion.div
      className="relative mx-auto w-[290px] sm:w-[310px]"
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(201,163,95,.35),transparent_65%)] blur-2xl" />

      {/* phone body */}
      <div className="rounded-[2.8rem] bg-gradient-to-b from-[#2a2a2a] via-[#111] to-[#2a2a2a] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)] ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[2.3rem] bg-ivory">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* card header */}
          <div className="relative bg-gradient-to-b from-emerald to-forest px-5 pb-6 pt-10 text-center text-ivory">
            <div className="pointer-events-none absolute inset-3 top-8 rounded-2xl border border-gold/40" />
            <p className="text-[9px] uppercase tracking-[0.35em] text-gold-soft">{tr(sampleCard.event)}</p>
            <p className="gold-text mt-2 font-display text-[30px] font-semibold italic leading-none">{sampleCard.names}</p>
            <div className="mx-auto my-3 flex items-center justify-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold/60" />✦<span className="h-px w-8 bg-gold/60" />
            </div>
            <p className="flex items-center justify-center gap-1.5 text-[11px]"><Icon name="calendar" className="h-3.5 w-3.5 text-gold" />{tr(sampleCard.date)} · {tr(sampleCard.time)}</p>
            <p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-ivory/80"><Icon name="pin" className="h-3.5 w-3.5 text-gold" />{sampleCard.venue}</p>
          </div>

          {/* entry pass */}
          <div className="px-5 pt-5">
            <div className="rounded-2xl border border-gold/40 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg text-forest" style={{ ["--scan-h" as string]: "88px" }}>
                  <QrPattern seed={sampleCard.guestCode} className="h-full w-full" />
                  <div className="scanline absolute inset-x-1 top-1 h-0.5 rounded bg-gold shadow-[0_0_8px_2px_rgba(201,163,95,.7)]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-gold">{tr(ui.mockup.entryPass)}</p>
                  <p className="mt-1 font-mono text-lg font-semibold tracking-wider text-forest">{sampleCard.guestCode}</p>
                  <p className="text-[10px] text-ink/60">{tr(ui.mockup.guest)}</p>
                  <p className="truncate text-xs font-semibold text-ink">{sampleCard.guestName}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RSVP */}
          <div className="relative h-[76px] px-5 pb-6 pt-4">
            <AnimatePresence mode="wait" initial={false}>
              {confirmed ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex h-11 items-center justify-center gap-2 rounded-full bg-emerald text-xs font-semibold text-ivory"
                >
                  <Icon name="check" className="h-4 w-4 text-gold" />{tr(ui.mockup.confirmed)}
                </motion.div>
              ) : (
                <motion.div key="choose" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-2 gap-2">
                  <span className="gold-btn flex h-11 items-center justify-center rounded-full text-xs font-semibold">{tr(ui.mockup.attending)}</span>
                  <span className="flex h-11 items-center justify-center rounded-full border border-ink/20 text-xs font-semibold text-ink/70">{tr(ui.mockup.decline)}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
