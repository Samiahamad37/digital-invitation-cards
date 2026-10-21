import { invite } from "@/content/invite";

// Generates an .ics file so guests can add the wedding to their phone calendar.
const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function GET() {
  const { partnerOne, partnerTwo } = invite.couple;
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//wedding-invite-starter//EN", "BEGIN:VEVENT",
    `UID:${fmt(invite.dateISO)}-${partnerOne}-${partnerTwo}@invite`,
    `DTSTAMP:${fmt(new Date().toISOString())}`,
    `DTSTART:${fmt(invite.dateISO)}`, `DTEND:${fmt(invite.endISO)}`,
    `SUMMARY:${partnerOne} & ${partnerTwo} Wedding`,
    `LOCATION:${invite.venue.name}\\, ${invite.venue.address.replace(/,/g, "\\,")}`,
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  return new Response(ics, {
    headers: { "Content-Type": "text/calendar; charset=utf-8", "Content-Disposition": 'attachment; filename="wedding.ics"' },
  });
}
