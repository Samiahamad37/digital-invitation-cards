"use client";
// ─────────────────────────────────────────────────────────────
//  The landing page layout. All words, prices and links come from
//  ../config.ts — edit that file to rebrand, not this one.
// ─────────────────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { LangProvider, Reveal, useLang, useTr } from "@cards/shared";
import {
  brand, contactMessage, currency, eventTypes, events, faqs, features, hero, packageMessage, packages,
  showcase, stats, steps, testimonials, ui, waGeneralMessage, waLink,
} from "../config";
import { Icon } from "./Icon";
import { PhoneMockup } from "./PhoneMockup";

const formatPrice = (n: number) => `${currency} ${n.toLocaleString("en-US")}`;

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2" aria-label={`${brand.name} home`}>
      <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/70 font-display text-lg font-semibold italic text-gold">
        {brand.name.charAt(0)}
      </span>
      <span className={`font-display text-2xl font-semibold tracking-wide ${light ? "text-ivory" : "text-ink"}`}>{brand.name}</span>
    </a>
  );
}

function SectionHead({ kicker, title, sub, light = false }: { kicker: string; title: string; sub?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{kicker}</p>
      <h2 className={`mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl ${light ? "text-ivory" : "text-ink"}`}>{title}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-10 bg-gold/50" />✦<span className="h-px w-10 bg-gold/50" />
      </div>
      {sub && <p className={`mt-4 text-base leading-relaxed ${light ? "text-ivory/70" : "text-ink/70"}`}>{sub}</p>}
    </Reveal>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return (
    <div role="group" aria-label="Language" className="flex rounded-full border border-gold/50 p-0.5 text-[11px] font-semibold">
      {(["en", "sw"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${lang === l ? "bg-gold text-forest" : "text-ivory/80 hover:text-ivory"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// ── 1. Nav ───────────────────────────────────────────────────
function Nav() {
  const tr = useTr();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#packages", label: tr(ui.nav.packages) },
    { href: "#how", label: tr(ui.nav.how) },
    { href: "#showcase", label: tr(ui.nav.showcase) },
    { href: "#contact", label: tr(ui.nav.contact) },
  ];
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-forest/95 shadow-lg shadow-black/10 backdrop-blur" : "bg-forest"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Wordmark light />
        <ul className="hidden items-center gap-7 text-sm text-ivory/80 md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="transition-colors hover:text-gold">{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer" className="gold-btn hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 sm:flex">
            <Icon name="whatsapp" className="h-4 w-4" />{tr(ui.nav.getStarted)}
          </a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={tr(ui.nav.menu)} className="text-ivory md:hidden">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 md:hidden">
            <ul className="space-y-1 px-5 py-4 text-ivory">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg">{l.label}</a></li>
              ))}
              <li className="pt-2">
                <a href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer" className="gold-btn flex items-center justify-center gap-2 rounded-full py-3 font-semibold">
                  <Icon name="whatsapp" className="h-4 w-4" />{tr(ui.nav.getStarted)}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── 2. Hero ──────────────────────────────────────────────────
function Hero() {
  const tr = useTr();
  return (
    <section id="top" className="pattern-dark relative overflow-hidden text-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_1fr] md:pb-28 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
            {tr(hero.kicker.madeWith)}
            <Icon name="heartFill" className="h-3.5 w-3.5 text-rose-400 motion-safe:animate-pulse" />
            {tr(hero.kicker.love)} {tr(hero.kicker.and)}
            <Icon name="flame" className="h-3.5 w-3.5 text-gold" />
            {tr(hero.kicker.passion)}
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
            {tr(hero.headline)}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{tr(hero.subline)}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer" className="gold-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5">
              <Icon name="whatsapp" className="h-5 w-5" />{tr(hero.ctaPrimary)}
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 font-semibold text-gold-soft transition-colors hover:bg-gold/10">
              {tr(hero.ctaSecondary)}<Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <PhoneMockup />
        </motion.div>
      </div>
      {/* stats strip */}
      <div className="border-t border-white/10 bg-black/15">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <dt className="sr-only">{tr(s.label)}</dt>
              <dd className="gold-text font-display text-3xl font-semibold sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/60">{tr(s.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ── 3. Events ────────────────────────────────────────────────
function Events() {
  const tr = useTr();
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker={tr(ui.events.kicker)} title={tr(ui.events.title)} />
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.icon} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-gold/25 bg-white p-5 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-gold"><Icon name={e.icon} /></span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{tr(e.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{tr(e.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. Features ──────────────────────────────────────────────
function Features() {
  const tr = useTr();
  return (
    <section className="bg-sand px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker={tr(ui.features.kicker)} title={tr(ui.features.title)} sub={tr(ui.features.sub)} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.icon} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-3xl bg-ivory p-6 ring-1 ring-ink/5">
                <span className="text-gold"><Icon name={f.icon} className="h-8 w-8" /></span>
                <h3 className="mt-4 text-lg font-semibold">{tr(f.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{tr(f.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5. How it works ──────────────────────────────────────────
function How() {
  const tr = useTr();
  return (
    <section id="how" className="pattern-dark px-5 py-20 text-ivory sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker={tr(ui.how.kicker)} title={tr(ui.how.title)} light />
        <div className="relative grid gap-6 md:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative flex gap-4 md:block md:text-center">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/60 bg-forest font-display text-2xl font-semibold text-gold md:mx-auto">
                  {i + 1}
                </span>
                <div className="md:mt-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold/80">{tr(ui.how.step)} {i + 1}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{tr(s.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70">{tr(s.body)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 6. Showcase ──────────────────────────────────────────────
function Showcase() {
  const tr = useTr();
  return (
    <section id="showcase" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker={tr(ui.showcase.kicker)} title={tr(ui.showcase.title)} />
        <div className="grid gap-6 sm:grid-cols-2">
          {showcase.map((s, i) => {
            const light = s.tone === "light";
            const isExternal = s.href.startsWith("http");
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <a href={s.href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group block overflow-hidden rounded-[2rem] border border-gold/25 bg-white transition-shadow hover:shadow-2xl hover:shadow-gold/15">
                  <div className="relative grid aspect-[4/3] place-items-center overflow-hidden" style={{ background: s.gradient }}>
                    <div className={`absolute inset-5 rounded-3xl border ${light ? "border-white/60" : "border-gold/50"}`} />
                    <div className="text-center transition-transform duration-500 group-hover:scale-105">
                      <p className={`text-[10px] uppercase tracking-[0.35em] ${light ? "text-[#6b4d22]" : "text-gold-soft"}`}>{tr(ui.showcase.kicker)}</p>
                      <p className={`mt-2 font-display text-4xl font-semibold italic ${light ? "text-[#5e4320]" : "gold-text"}`}>{s.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                      <p className="text-sm text-ink/60">{tr(s.design)}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                      {tr(ui.showcase.view)}<Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── 7. Packages ──────────────────────────────────────────────
function Packages() {
  const tr = useTr();
  return (
    <section id="packages" className="bg-sand px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker={tr(ui.packages.kicker)} title={tr(ui.packages.title)} sub={tr(ui.packages.sub)} />
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((p, i) => {
            const pop = !!p.popular;
            return (
              <Reveal key={p.id} delay={i * 0.08} className="h-full">
                <div className={`relative flex h-full flex-col rounded-[2rem] p-7 ${pop ? "pattern-dark text-ivory shadow-2xl shadow-forest/30 ring-1 ring-gold/50 md:-my-4 md:py-11" : "bg-ivory ring-1 ring-ink/10"}`}>
                  {pop && (
                    <span className="gold-btn absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                      {tr(ui.packages.popular)}
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-semibold">{tr(p.name)}</h3>
                  <p className={`mt-1 text-sm ${pop ? "text-ivory/70" : "text-ink/60"}`}>{tr(p.blurb)}</p>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className={`font-display text-5xl font-semibold ${pop ? "gold-text" : ""}`}>{formatPrice(p.price)}</span>
                  </p>
                  <p className={`text-xs uppercase tracking-[0.2em] ${pop ? "text-gold-soft" : "text-ink/50"}`}>{tr(ui.packages.perCard)}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f.en} className="flex gap-2.5">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{tr(f)}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(packageMessage(p.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold transition-transform hover:-translate-y-0.5 ${pop ? "gold-btn" : "bg-forest text-ivory"}`}
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />{tr(ui.packages.request)} {tr(p.name)}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── 8. Testimonials ──────────────────────────────────────────
function Testimonials() {
  const tr = useTr();
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker={tr(ui.testimonials.kicker)} title={tr(ui.testimonials.title)} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-gold/25 bg-white p-7">
                <span aria-hidden className="font-display text-6xl leading-none text-gold">“</span>
                <blockquote className="-mt-4 font-display text-xl italic leading-snug text-ink/85">{tr(t.quote)}</blockquote>
                <figcaption className="mt-5 border-t border-gold/20 pt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-ink/55"> · {tr(t.event)}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 9. FAQ ───────────────────────────────────────────────────
function Faq() {
  const tr = useTr();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-sand px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHead kicker={tr(ui.faq.kicker)} title={tr(ui.faq.title)} />
        <div className="divide-y divide-ink/10 rounded-3xl bg-ivory px-6 ring-1 ring-ink/5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold"
                  >
                    {tr(f.q)}
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/50 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      <Icon name="plus" className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-ink/70">{tr(f.a)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── 10. Contact / request form ───────────────────────────────
function Contact() {
  const tr = useTr();
  const [form, setForm] = useState({ name: "", phone: "", eventType: "", date: "", guests: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const type = eventTypes[Number(form.eventType)];
    const msg = contactMessage({ ...form, eventType: type ? type.sw : "" });
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const field = "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/35 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 [color-scheme:dark]";
  const label = "text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft";

  return (
    <section id="contact" className="pattern-dark px-5 py-20 text-ivory sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{tr(ui.contact.kicker)}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{tr(ui.contact.title)}</h2>
          <p className="mt-4 leading-relaxed text-ivory/70">{tr(ui.contact.sub)}</p>
          <div className="mt-8 space-y-3 text-sm">
            <p className="text-ivory/60">{tr(ui.contact.orChat)}</p>
            <a href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-semibold text-gold-soft hover:text-gold">
              <Icon name="whatsapp" className="h-5 w-5" />{brand.phoneDisplay}
            </a>
            <p className="flex items-center gap-2 text-ivory/60"><Icon name="pin" className="h-4 w-4 text-gold" />{tr(brand.city)}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-[2rem] border border-gold/30 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2"><span className={label}>{tr(ui.contact.name)}</span>
                <input required autoComplete="name" value={form.name} onChange={set("name")} className={field} />
              </label>
              <label><span className={label}>{tr(ui.contact.phone)}</span>
                <input required type="tel" autoComplete="tel" inputMode="tel" placeholder="07xx xxx xxx" value={form.phone} onChange={set("phone")} className={field} />
              </label>
              <label><span className={label}>{tr(ui.contact.eventType)}</span>
                <select required value={form.eventType} onChange={set("eventType")} className={field}>
                  <option value="" disabled className="text-ink">{tr(ui.contact.choose)}</option>
                  {eventTypes.map((t, i) => (<option key={t.en} value={i} className="text-ink">{tr(t)}</option>))}
                </select>
              </label>
              <label><span className={label}>{tr(ui.contact.date)}</span>
                <input required type="date" value={form.date} onChange={set("date")} className={field} />
              </label>
              <label><span className={label}>{tr(ui.contact.guests)}</span>
                <input required type="number" min={1} inputMode="numeric" placeholder="200" value={form.guests} onChange={set("guests")} className={field} />
              </label>
            </div>
            <button type="submit" className="gold-btn mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full py-4 font-semibold transition-transform hover:-translate-y-0.5">
              <Icon name="whatsapp" className="h-5 w-5" />{tr(ui.contact.submit)}
            </button>
            <p className="mt-3 text-center text-xs text-ivory/50">{tr(ui.contact.note)}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

// ── 11. Footer ───────────────────────────────────────────────
function Footer() {
  const tr = useTr();
  return (
    <footer className="bg-[#07160f] px-5 py-12 text-ivory/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Wordmark light />
          <p className="mt-2 max-w-xs text-sm">{tr(brand.tagline)}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li><a href="#packages" className="hover:text-gold">{tr(ui.nav.packages)}</a></li>
          <li><a href="#how" className="hover:text-gold">{tr(ui.nav.how)}</a></li>
          <li><a href="#showcase" className="hover:text-gold">{tr(ui.nav.showcase)}</a></li>
          <li><a href="#contact" className="hover:text-gold">{tr(ui.nav.contact)}</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${tr(ui.footer.follow)} Instagram`} className="flex items-center gap-2 text-sm hover:text-gold">
            <Icon name="instagram" className="h-5 w-5" />{brand.instagramHandle}
          </a>
          <a href={waLink(waGeneralMessage)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gold">
            <Icon name="whatsapp" className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-ivory/45">
        © 2026 {brand.name}. {tr(ui.footer.rights)}
      </p>
    </footer>
  );
}

export function Landing() {
  return (
    <LangProvider>
      {/* reducedMotion="user": framer-motion skips movement when the visitor prefers reduced motion */}
      <MotionConfig reducedMotion="user">
        <Nav />
        <main>
          <Hero />
          <Events />
          <Features />
          <How />
          <Showcase />
          <Packages />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LangProvider>
  );
}
