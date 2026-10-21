"use client";
import { motion } from "framer-motion";

// Fades + lifts its children into view as you scroll.
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Divider() {
  return (
    <div className="my-5 flex items-center justify-center gap-4 text-gold">
      <span className="h-px w-16 bg-gold/60" />
      <span className="text-sm">✦</span>
      <span className="h-px w-16 bg-gold/60" />
    </div>
  );
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <Reveal className="text-center">
      {kicker && <p className="text-xs uppercase tracking-[0.3em] text-gold">{kicker}</p>}
      <h2 className="mt-2 font-script text-5xl text-gold-dark md:text-6xl">{title}</h2>
      <Divider />
    </Reveal>
  );
}
