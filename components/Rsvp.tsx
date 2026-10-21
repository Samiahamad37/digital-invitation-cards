"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { invite } from "@/content/invite";
import { useLang } from "@/lib/language";
import { Reveal, SectionTitle } from "./Reveal";

export function Rsvp() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setStatus(res.ok ? "done" : "error");
  }

  const field = "w-full rounded-xl border border-gold/40 bg-ivory px-4 py-3 outline-none focus:border-gold";

  return (
    <section id="rsvp" className="bg-sand px-6 py-20">
      <SectionTitle kicker={t.rsvpSubtitle} title={t.rsvpTitle} />
      <Reveal className="mx-auto max-w-md">
        <p className="mb-6 text-center italic">{invite.rsvpDeadline[lang]}</p>
        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.div key="thanks" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl bg-ivory p-10 text-center shadow-lg">
              <h3 className="font-script text-5xl">{t.thanksTitle}</h3>
              <p className="mt-4 text-lg">{t.thanksBody}</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={submit} className="space-y-4" exit={{ opacity: 0 }}>
              <input name="name" required placeholder={t.name} className={field} />
              <input name="phone" type="tel" placeholder={t.phone} className={field} />
              <fieldset className="space-y-2">
                <legend className="mb-2 text-sm uppercase tracking-widest text-gold">{t.attending}</legend>
                <label className="flex items-center gap-2"><input type="radio" name="attending" value="yes" required defaultChecked /> {t.yes}</label>
                <label className="flex items-center gap-2"><input type="radio" name="attending" value="no" /> {t.no}</label>
              </fieldset>
              <input name="guests" type="number" min={1} max={2} defaultValue={1} placeholder={t.guests} className={field} />
              <textarea name="message" rows={3} placeholder={t.message} className={field} />
              <button disabled={status === "sending"} className="w-full rounded-full bg-gold-dark py-3 text-sm uppercase tracking-[0.25em] text-ivory transition hover:bg-gold disabled:opacity-60">
                {status === "sending" ? t.sending : t.send}
              </button>
              {status === "error" && <p className="text-center text-red-700">{t.error}</p>}
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}
