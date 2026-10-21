"use client";
import { useLang } from "@/lib/language";
import { Reveal, SectionTitle } from "./Reveal";

export function Story() {
  const { t } = useLang();
  return (
    <section className="px-6 py-20">
      <SectionTitle title={t.storyTitle} />
      <div className="mx-auto max-w-md space-y-8 text-center">
        {t.story.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <h3 className="text-xl font-semibold uppercase tracking-widest text-gold">{s.title}</h3>
            <p className="mt-2 text-lg leading-relaxed">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Program() {
  const { t } = useLang();
  return (
    <section className="bg-sand px-6 py-20">
      <SectionTitle title={t.programTitle} />
      <ol className="relative mx-auto max-w-md border-l border-gold/40 pl-8">
        {t.program.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-gold" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{p.time}</p>
            <h3 className="font-script text-3xl">{p.title}</h3>
            <p className="italic">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
