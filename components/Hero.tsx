"use client";
import { motion } from "framer-motion";
import { invite } from "@/content/invite";
import { useLang } from "@/lib/language";
import { OceanBackground } from "./OceanBackground";

export function Hero() {
  const { t } = useLang();
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {invite.media.heroVideo ? (
        <video src={invite.media.heroVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <OceanBackground />
      )}
      <motion.div
        className="relative z-10 -mt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">{t.gettingMarried}</p>
        <h1 className="gold-text mt-3 font-script text-7xl leading-tight md:text-8xl">
          {invite.couple.partnerOne} &amp; {invite.couple.partnerTwo}
        </h1>
        <div className="my-4 flex items-center justify-center gap-4 text-gold-dark">
          <span className="h-px w-16 bg-gold-dark" />✦<span className="h-px w-16 bg-gold-dark" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">{t.dateLabel}</p>
      </motion.div>
      <a href="#rsvp" className="absolute bottom-10 z-10 text-xs uppercase tracking-[0.3em] text-ivory">
        {t.confirm}
        <span className="mt-3 block animate-bounce">↓</span>
      </a>
    </section>
  );
}
