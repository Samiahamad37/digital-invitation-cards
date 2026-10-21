"use client";
import { createContext, useContext, useState } from "react";
import { invite, type Lang } from "@/content/invite";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof invite.text)[Lang] };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LanguageContext.Provider value={{ lang, setLang, t: invite.text[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
