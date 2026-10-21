"use client";
import { createContext, useContext, useState } from "react";

export type Lang = "en" | "sw";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

/** Wrap a card in this to get the English / Kiswahili toggle. */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Pick the right words: tr({ en: "Hello", sw: "Habari" }) */
export function useTr() {
  const { lang } = useLang();
  return <T,>(text: Record<Lang, T>) => text[lang];
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "sw" : "en")}
      className={`fixed right-4 top-4 z-40 rounded-full border border-[var(--accent)]/50 bg-[var(--card)]/80 px-4 py-2 text-xs uppercase tracking-widest text-[var(--ink)] backdrop-blur ${className}`}
    >
      {lang === "en" ? "Kiswahili" : "English"}
    </button>
  );
}
