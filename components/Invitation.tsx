"use client";
import { useRef, useState } from "react";
import type { Invite } from "@/content/types";
import { InviteProvider, useLang } from "@/lib/language";
import { Intro } from "./Intro";
import { Hero } from "./Hero";
import { Countdown } from "./Countdown";
import { Story, Program } from "./Story";
import { EventDetails, DressAndGifts, Faq } from "./EventDetails";
import { Rsvp } from "./Rsvp";

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "sw" : "en")}
      className="fixed right-4 top-4 z-40 rounded-full border border-gold/50 bg-ivory/80 px-4 py-2 text-xs uppercase tracking-widest backdrop-blur"
    >
      {lang === "en" ? "Kiswahili" : "English"}
    </button>
  );
}

function Page() {
  const { invite } = useLang();
  const [open, setOpen] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  return (
    <main>
      {invite.media.music && <audio ref={audio} src={invite.media.music} loop preload="auto" />}
      <Intro open={open} onOpen={() => { setOpen(true); audio.current?.play().catch(() => {}); }} />
      <LangToggle />
      <Hero />
      <Countdown />
      <Story />
      <Program />
      <EventDetails />
      <DressAndGifts />
      <Faq />
      <Rsvp />
      <footer className="py-10 text-center font-script text-3xl">
        {invite.couple.partnerOne} &amp; {invite.couple.partnerTwo}
      </footer>
    </main>
  );
}

export function Invitation({ invite }: { invite: Invite }) {
  return (
    <InviteProvider invite={invite}>
      <div data-theme={invite.theme}>
        <Page />
      </div>
    </InviteProvider>
  );
}
