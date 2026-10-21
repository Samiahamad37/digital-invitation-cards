"use client";
import { createContext, useContext, useState } from "react";
import type { Invite, InviteText, Lang } from "@/content/types";

type Ctx = { invite: Invite; lang: Lang; setLang: (l: Lang) => void; t: InviteText };
const InviteContext = createContext<Ctx | null>(null);

// Gives every component the current couple's invite + the chosen language.
export function InviteProvider({ invite, children }: { invite: Invite; children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <InviteContext.Provider value={{ invite, lang, setLang, t: invite.text[lang] }}>{children}</InviteContext.Provider>;
}

export function useLang() {
  const ctx = useContext(InviteContext);
  if (!ctx) throw new Error("useLang must be used inside InviteProvider");
  return ctx;
}
