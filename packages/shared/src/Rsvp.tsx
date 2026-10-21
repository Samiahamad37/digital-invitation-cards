"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTr } from "./lang";

const T = {
  en: {
    name: "Full name", phone: "Phone (WhatsApp)", guests: "Number of guests", attending: "Will you attend?",
    yes: "Joyfully accept", no: "Regretfully decline", message: "A message for the couple (optional)",
    send: "Send RSVP", sending: "Sending…", thanksTitle: "Thank you!",
    thanksBody: "We are so excited to celebrate this very special day with you.", error: "Something went wrong. Please try again.",
  },
  sw: {
    name: "Jina kamili", phone: "Simu (WhatsApp)", guests: "Idadi ya wageni", attending: "Utahudhuria?",
    yes: "Nitahudhuria kwa furaha", no: "Sitaweza kuhudhuria", message: "Ujumbe kwa maharusi (si lazima)",
    send: "Tuma", sending: "Inatuma…", thanksTitle: "Asante sana!",
    thanksBody: "Tuna furaha kubwa kusherehekea siku hii maalum pamoja nawe.", error: "Kuna hitilafu. Tafadhali jaribu tena.",
  },
};

/** RSVP form. Posts to this app's own /api/rsvp route. */
export function Rsvp({ maxGuests = 2, thanksClassName = "font-serif text-4xl" }: { maxGuests?: number; thanksClassName?: string }) {
  const t = useTr()(T);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).catch(() => null);
    setStatus(res?.ok ? "done" : "error");
  }

  const field = "w-full rounded-xl border border-[var(--accent)]/40 bg-[var(--card)] px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]";

  return (
    <div className="mx-auto max-w-md text-left">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div key="thanks" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl bg-[var(--card)] p-10 text-center shadow-lg">
            <h3 className={thanksClassName}>{t.thanksTitle}</h3>
            <p className="mt-4 text-lg">{t.thanksBody}</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} className="space-y-4" exit={{ opacity: 0 }}>
            <input name="name" required placeholder={t.name} className={field} />
            <input name="phone" type="tel" placeholder={t.phone} className={field} />
            <fieldset className="space-y-2">
              <legend className="mb-2 text-sm uppercase tracking-widest text-[var(--accent)]">{t.attending}</legend>
              <label className="flex items-center gap-2"><input type="radio" name="attending" value="yes" required defaultChecked /> {t.yes}</label>
              <label className="flex items-center gap-2"><input type="radio" name="attending" value="no" /> {t.no}</label>
            </fieldset>
            <input name="guests" type="number" min={1} max={maxGuests} defaultValue={1} placeholder={t.guests} className={field} />
            <textarea name="message" rows={3} placeholder={t.message} className={field} />
            <button disabled={status === "sending"} className="w-full rounded-full bg-[var(--ink)] py-3 text-sm uppercase tracking-[0.25em] text-[var(--card)] transition hover:bg-[var(--accent)] disabled:opacity-60">
              {status === "sending" ? t.sending : t.send}
            </button>
            {status === "error" && <p className="text-center text-red-700">{t.error}</p>}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
