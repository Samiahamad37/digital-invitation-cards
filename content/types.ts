export type Lang = "en" | "sw";

export type InviteText = {
  tapToOpen: string; gettingMarried: string; dateLabel: string; confirm: string;
  countdownTitle: string; days: string; hours: string; minutes: string; seconds: string;
  storyTitle: string; story: { title: string; body: string }[];
  programTitle: string; program: { time: string; title: string; body: string }[];
  eventSubtitle: string; eventTitle: string; ceremonyBegins: string; openMaps: string; addCalendar: string;
  dressTitle: string; dress: string; giftsTitle: string; gifts: string;
  faqTitle: string; faq: { q: string; a: string }[];
  rsvpTitle: string; rsvpSubtitle: string; name: string; phone: string; guests: string;
  attending: string; yes: string; no: string; message: string; send: string; sending: string;
  thanksTitle: string; thanksBody: string; error: string;
};

export type Invite = {
  /** URL of this invitation: yoursite.com/<slug> */
  slug: string;
  /** Colour theme, see the [data-theme] blocks in app/globals.css */
  theme: "bahari" | "golden" | "classic";
  couple: { partnerOne: string; partnerTwo: string; monogram: string };
  /** ISO date with offset, e.g. 2026-12-12T16:00:00+03:00 */
  dateISO: string;
  endISO: string;
  venue: { name: string; address: string; mapsUrl: string };
  media: { heroVideo: string; eventVideo: string; music: string };
  rsvpDeadline: Record<Lang, string>;
  /** Max guests one RSVP can bring */
  maxGuests?: number;
  gifts: {
    mobileMoney: { label: string; number: string; name: string };
    bank: { label: string; details: string };
  };
  text: Record<Lang, InviteText>;
};
