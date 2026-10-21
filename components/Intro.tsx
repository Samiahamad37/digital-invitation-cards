"use client";
import { AnimatePresence, motion } from "framer-motion";
import { invite } from "@/content/invite";
import { useLang } from "@/lib/language";

// Full-screen "envelope" the guest taps to open. Opening also starts the music.
export function Intro({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const { t } = useLang();
  return (
    <AnimatePresence>
      {!open && (
        <motion.button
          onClick={onOpen}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sand"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.8 }}
          aria-label={t.tapToOpen}
        >
          <motion.div
            className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#e5c582] via-[#b98a45] to-[#7d5a2a] shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <span className="font-script text-4xl text-ivory">{invite.couple.monogram}</span>
          </motion.div>
          <p className="mt-8 text-xs uppercase tracking-[0.35em] text-gold">{t.tapToOpen}</p>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
