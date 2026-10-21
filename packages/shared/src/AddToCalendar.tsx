"use client";
import { useTr } from "./lang";

const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const esc = (s: string) => s.replace(/,/g, "\\,").replace(/;/g, "\\;");

/** Downloads an .ics file so guests can save the wedding in their phone calendar. */
export function AddToCalendar({ title, start, end, place, className }: { title: string; start: string; end: string; place: string; className?: string }) {
  const tr = useTr();
  function download() {
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//invitation-cards//EN", "BEGIN:VEVENT",
      `UID:${fmt(start)}-${title.replace(/\W/g, "")}@invitation-cards`, `DTSTAMP:${fmt(new Date().toISOString())}`,
      `DTSTART:${fmt(start)}`, `DTEND:${fmt(end)}`, `SUMMARY:${esc(title)}`, `LOCATION:${esc(place)}`,
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "wedding.ics";
    a.click();
  }
  return (
    <button onClick={download} className={className ?? "rounded-full border border-[var(--accent)]/70 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)] transition hover:bg-[var(--accent)] hover:text-[var(--card)]"}>
      📅 {tr({ en: "Add to Calendar", sw: "Weka kwenye Kalenda" })}
    </button>
  );
}
