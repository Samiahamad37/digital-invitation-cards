// ─────────────────────────────────────────────────────────────
//  ALL BUSINESS CONTENT LIVES HERE.
//  Rename the brand, change prices, edit packages, showcase links,
//  stats, testimonials and FAQs in this one file. No other file
//  needs to change to rebrand the landing page.
//
//  Every piece of text has an English (en) and Kiswahili (sw) version.
// ─────────────────────────────────────────────────────────────

export type Text = { en: string; sw: string };

// ── Brand ────────────────────────────────────────────────────
export const brand = {
  /** Placeholder name ("Mwaliko" = invitation in Kiswahili). Rename freely. */
  name: "Mwaliko",
  tagline: {
    en: "Digital invitations for Tanzanian celebrations",
    sw: "Kadi za mialiko za kidijitali kwa sherehe za Kitanzania",
  } as Text,
  /** Public URL once deployed (used for share/OG tags). Update after you add a domain. */
  siteUrl: "https://mwaliko.vercel.app",
  /** WhatsApp number in international format, digits only (no +, no spaces). */
  whatsapp: "255714065166",
  /** Shown in the contact section. */
  phoneDisplay: "+255 714 065 166",
  /** PLACEHOLDER: replace with your real Instagram link. */
  instagram: "https://instagram.com/",
  instagramHandle: "@mwaliko (placeholder)",
  city: { en: "Dar es Salaam, Tanzania", sw: "Dar es Salaam, Tanzania" } as Text,
};

/** Builds a WhatsApp link with a prefilled message. */
export const waLink = (message: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;

/** The general "Get started" WhatsApp message (sent in Kiswahili). */
export const waGeneralMessage = `Habari ${brand.name}! Ningependa kupata kadi za mialiko za kidijitali kwa sherehe yangu.`;

// ── Hero ─────────────────────────────────────────────────────
export const hero = {
  kicker: { en: "Made in Tanzania · Karibu", sw: "Imetengenezwa Tanzania · Karibu" } as Text,
  headline: {
    en: "Beautiful digital invitations for every Tanzanian celebration",
    sw: "Kadi nzuri za mialiko za kidijitali kwa kila sherehe ya Kitanzania",
  } as Text,
  subline: {
    en: "Custom designed cards delivered on WhatsApp and SMS, with RSVPs, a guest list and QR check-in at the door. No printing, no lost cards, no stress.",
    sw: "Kadi zilizobuniwa maalum, zinazotumwa kwa WhatsApp na SMS, pamoja na uthibitisho wa kuhudhuria, orodha ya wageni na ukaguzi wa QR mlangoni. Bila kuchapisha, bila kadi kupotea, bila presha.",
  } as Text,
  ctaPrimary: { en: "Request a package", sw: "Omba kifurushi" } as Text,
  ctaSecondary: { en: "See a sample", sw: "Tazama mfano" } as Text,
};

/** The sample card shown on the phone mockup in the hero. */
export const sampleCard = {
  names: "Baraka & Zawadi",
  event: { en: "Wedding Invitation", sw: "Mwaliko wa Harusi" } as Text,
  date: { en: "Saturday, 19 June 2027", sw: "Jumamosi, 19 Juni 2027" } as Text,
  time: { en: "4:00 PM", sw: "Saa 10:00 jioni" } as Text,
  venue: "Serena Gardens, Dar es Salaam",
  guestCode: "G-00001",
  guestName: "Mr & Mrs Mushi",
};

// ── Stats (PLACEHOLDERS: replace with your real numbers) ─────
export const stats: { value: string; label: Text }[] = [
  { value: "2", label: { en: "Signature designs", sw: "Miundo maalum" } },
  { value: "24h", label: { en: "Card delivery to guests", sw: "Kadi kufika kwa wageni" } },
  { value: "EN · SW", label: { en: "English & Kiswahili", sw: "Kiingereza na Kiswahili" } },
  { value: "100%", label: { en: "Paperless", sw: "Bila karatasi" } },
];

// ── Events we cover ──────────────────────────────────────────
export const events: { icon: string; title: Text; body: Text }[] = [
  { icon: "rings", title: { en: "Weddings", sw: "Harusi" }, body: { en: "From the nikah or church service to the reception.", sw: "Kuanzia ndoa hadi sherehe ya jioni." } },
  { icon: "glass", title: { en: "Send-offs", sw: "Send-off" }, body: { en: "A graceful farewell for the bride-to-be.", sw: "Kumuaga bibi harusi mtarajiwa kwa heshima." } },
  { icon: "pot", title: { en: "Kitchen parties", sw: "Kitchen party" }, body: { en: "Gather the women who matter most.", sw: "Wakusanye wanawake muhimu kwake." } },
  { icon: "heart", title: { en: "Engagements", sw: "Uchumba" }, body: { en: "Announce the yes in style.", sw: "Tangaza uchumba kwa mtindo." } },
  { icon: "cap", title: { en: "Graduations", sw: "Mahafali" }, body: { en: "Celebrate years of hard work.", sw: "Sherehekea miaka ya juhudi." } },
  { icon: "briefcase", title: { en: "Corporate", sw: "Matukio ya kampuni" }, body: { en: "Launches, galas, dinners and AGMs.", sw: "Uzinduzi, hafla, chakula cha jioni na mikutano." } },
];

// ── Features ─────────────────────────────────────────────────
export const features: { icon: string; title: Text; body: Text }[] = [
  { icon: "pen", title: { en: "Custom designs", sw: "Miundo maalum" }, body: { en: "A card made for your colours, your story and your names. Never a recycled template.", sw: "Kadi iliyobuniwa kwa rangi zako, hadithi yako na majina yenu. Si kiolezo cha kurudiwa." } },
  { icon: "chat", title: { en: "WhatsApp & SMS delivery", sw: "Kutumwa kwa WhatsApp na SMS" }, body: { en: "Every guest gets a personal card straight to their phone.", sw: "Kila mgeni anapata kadi yake moja kwa moja kwenye simu." } },
  { icon: "check", title: { en: "RSVP tracking", sw: "Kufuatilia uthibitisho" }, body: { en: "See who is coming, who is not, and who still needs a nudge.", sw: "Jua nani anakuja, nani hatakuja, na nani bado hajajibu." } },
  { icon: "list", title: { en: "Guest list", sw: "Orodha ya wageni" }, body: { en: "One tidy list with names, phone numbers and seats per card.", sw: "Orodha moja safi yenye majina, namba za simu na idadi ya viti." } },
  { icon: "qr", title: { en: "QR check-in", sw: "Ukaguzi wa QR" }, body: { en: "Each card carries a unique entry pass, scanned at the gate.", sw: "Kila kadi ina pasi yake ya kuingia, inayoskaniwa getini." } },
  { icon: "clock", title: { en: "Countdown & add to calendar", sw: "Muda uliobaki na kalenda" }, body: { en: "A live countdown and one tap to save the date in their calendar.", sw: "Muda uliobaki na kuhifadhi tarehe kwenye kalenda kwa mguso mmoja." } },
  { icon: "thanks", title: { en: "Thank-you messages", sw: "Ujumbe wa shukrani" }, body: { en: "A warm thank-you sent to every guest after the event.", sw: "Ujumbe wa shukrani kwa kila mgeni baada ya sherehe." } },
  { icon: "chart", title: { en: "Event reports", sw: "Ripoti ya tukio" }, body: { en: "Who was invited, who replied and who arrived, in one report.", sw: "Walioalikwa, waliojibu na waliofika, kwenye ripoti moja." } },
];

// ── How it works ─────────────────────────────────────────────
export const steps: { title: Text; body: Text }[] = [
  { title: { en: "Tell us about your event", sw: "Tueleze kuhusu sherehe yako" }, body: { en: "Send us the date, venue, colours and guest list on WhatsApp.", sw: "Tutumie tarehe, ukumbi, rangi na orodha ya wageni kwa WhatsApp." } },
  { title: { en: "We design your card", sw: "Tunabuni kadi yako" }, body: { en: "You get a first design to review, and we refine it until you love it.", sw: "Unapata muundo wa kwanza kuukagua, tunaurekebisha hadi uupende." } },
  { title: { en: "We send it to your guests", sw: "Tunawatumia wageni wako" }, body: { en: "Personal cards go out on WhatsApp and SMS, and RSVPs start coming in.", sw: "Kadi binafsi zinatumwa kwa WhatsApp na SMS, na uthibitisho unaanza kuingia." } },
  { title: { en: "Check guests in on the day", sw: "Kagua wageni siku ya sherehe" }, body: { en: "Our team scans each QR pass at the door, so only invited guests enter.", sw: "Timu yetu inaskani kila pasi ya QR mlangoni, ili walioalikwa tu waingie." } },
];

// ── Showcase (set href to each live card's URL once deployed) ─
export const showcase: { title: string; design: Text; href: string; gradient: string; tone: "light" | "dark" }[] = [
  {
    title: "Amani & Neema",
    design: { en: "Bahari beach design", sw: "Muundo wa ufukweni, Bahari" },
    href: "#",
    gradient: "linear-gradient(180deg, #f6d7a7 0%, #f3c58f 30%, #9fc7cf 58%, #3f8597 80%, #1f5f73 100%)",
    tone: "light",
  },
  {
    title: "Juma & Aisha",
    design: { en: "Emerald Lakeside", sw: "Kando ya ziwa, Zumaridi" },
    href: "#",
    gradient: "linear-gradient(160deg, #0f3d2e 0%, #1d5c45 45%, #2f7a5c 70%, #c9a85c 120%)",
    tone: "dark",
  },
];

// ── Packages ─────────────────────────────────────────────────
// ⚠️ PRICES ARE PLACEHOLDERS. Set your real prices (in TZS, per card) before going live.
export const currency = "TZS";
export const packages: {
  id: string;
  name: Text;
  price: number;
  popular?: boolean;
  blurb: Text;
  /** Features listed on the card. The first line can say "Everything in X". */
  features: Text[];
}[] = [
  {
    id: "basic",
    name: { en: "Basic", sw: "Msingi" },
    price: 1000,
    blurb: { en: "A beautiful card in every guest's pocket.", sw: "Kadi nzuri mfukoni mwa kila mgeni." },
    features: [
      { en: "Custom QR invitation card", sw: "Kadi ya mwaliko yenye QR" },
      { en: "WhatsApp + SMS delivery", sw: "Kutumwa kwa WhatsApp + SMS" },
      { en: "Thank-you message after the event", sw: "Ujumbe wa shukrani baada ya sherehe" },
    ],
  },
  {
    id: "standard",
    name: { en: "Standard", sw: "Kawaida" },
    price: 1500,
    popular: true,
    blurb: { en: "Know exactly who is coming, and let them in smoothly.", sw: "Jua hasa nani anakuja, na waingie kwa urahisi." },
    features: [
      { en: "Everything in Basic", sw: "Vyote vya Msingi" },
      { en: "RSVP tracking", sw: "Kufuatilia uthibitisho wa kuhudhuria" },
      { en: "QR check-in on the day", sw: "Ukaguzi wa QR siku ya sherehe" },
      { en: "Save-the-date card", sw: "Kadi ya kuhifadhi tarehe" },
      { en: "Your own event web page", sw: "Ukurasa wako wa tukio mtandaoni" },
    ],
  },
  {
    id: "premium",
    name: { en: "Premium", sw: "Premium" },
    price: 2000,
    blurb: { en: "We handle the follow-ups, so you can enjoy the day.", sw: "Tunashughulikia ufuatiliaji, wewe ufurahie siku yako." },
    features: [
      { en: "Everything in Standard", sw: "Vyote vya Kawaida" },
      { en: "Event reminders to guests", sw: "Vikumbusho vya tukio kwa wageni" },
      { en: "Michango pledge reminders", sw: "Vikumbusho vya ahadi za michango" },
      { en: "Full event report", sw: "Ripoti kamili ya tukio" },
    ],
  },
];

/** The prefilled Kiswahili WhatsApp message for each package's "Request" button. */
export const packageMessage = (name: Text) =>
  `Habari ${brand.name}! Ningependa kuomba kifurushi cha ${name.sw}${name.sw === name.en ? "" : ` (${name.en})`} kwa kadi za mialiko za kidijitali. Naomba maelezo zaidi.`;

// ── Testimonials ─────────────────────────────────────────────
// ⚠️ PLACEHOLDERS. Replace with real quotes (with permission) from your first clients.
export const testimonials: { quote: Text; name: string; event: Text; placeholder: boolean }[] = [
  {
    quote: { en: "Placeholder: our guests kept saying the card was the most beautiful they had received.", sw: "Mfano: wageni wetu walisema kadi ilikuwa nzuri kuliko zote walizowahi kupokea." },
    name: "Client name",
    event: { en: "Wedding · Dar es Salaam", sw: "Harusi · Dar es Salaam" },
    placeholder: true,
  },
  {
    quote: { en: "Placeholder: the QR check-in made the gate calm and quick, with no gate-crashers.", sw: "Mfano: ukaguzi wa QR ulifanya mlango kuwa tulivu na wa haraka, bila wageni wasioalikwa." },
    name: "Client name",
    event: { en: "Send-off · Arusha", sw: "Send-off · Arusha" },
    placeholder: true,
  },
  {
    quote: { en: "Placeholder: we knew our numbers a week early, which made catering easy.", sw: "Mfano: tulijua idadi ya wageni wiki moja kabla, na chakula kikawa rahisi kupanga." },
    name: "Client name",
    event: { en: "Graduation · Dodoma", sw: "Mahafali · Dodoma" },
    placeholder: true,
  },
];

// ── FAQ ──────────────────────────────────────────────────────
export const faqs: { q: Text; a: Text }[] = [
  {
    q: { en: "How do guests receive their cards?", sw: "Wageni wanapokeaje kadi zao?" },
    a: { en: "Each guest gets a personal link by WhatsApp, and by SMS for anyone not on WhatsApp. The card opens straight in their phone's browser.", sw: "Kila mgeni anapata kiungo chake binafsi kwa WhatsApp, na kwa SMS kwa wasiotumia WhatsApp. Kadi inafunguka moja kwa moja kwenye kivinjari cha simu." },
  },
  {
    q: { en: "Do guests need to download an app?", sw: "Je, wageni wanahitaji kupakua programu?" },
    a: { en: "No. The card works on any smartphone browser. Guests simply tap the link.", sw: "Hapana. Kadi inafanya kazi kwenye kivinjari cha simu janja yoyote. Mgeni anagusa kiungo tu." },
  },
  {
    q: { en: "How does QR check-in work?", sw: "Ukaguzi wa QR unafanyaje kazi?" },
    a: { en: "Every card has a unique QR entry pass with a guest code. At the gate we scan it, confirm the name and seats, and mark the guest as arrived, so each pass can only be used once.", sw: "Kila kadi ina pasi ya QR yenye namba ya mgeni. Getini tunaiskani, tunathibitisha jina na idadi ya viti, na kumweka mgeni kama amefika, hivyo pasi moja inatumika mara moja tu." },
  },
  {
    q: { en: "How do I pay?", sw: "Ninalipaje?" },
    a: { en: "By M-Pesa, Mixx by Yas or bank transfer. We confirm the total from your guest count before we start.", sw: "Kwa M-Pesa, Mixx by Yas au uhamisho wa benki. Tunathibitisha jumla kulingana na idadi ya wageni kabla ya kuanza." },
  },
  {
    q: { en: "How long does it take?", sw: "Inachukua muda gani?" },
    a: { en: "Usually 2 to 4 days from your details to a finished design, depending on revisions. Cards can go out within 24 hours of your approval.", sw: "Kwa kawaida siku 2 hadi 4 kutoka utakapotupa maelezo hadi muundo ukamilike, kutegemea marekebisho. Kadi zinaweza kutumwa ndani ya saa 24 baada ya kuidhinisha." },
  },
  {
    q: { en: "Can the card be in Kiswahili?", sw: "Je, kadi inaweza kuwa kwa Kiswahili?" },
    a: { en: "Yes. Cards can be in Kiswahili, English, or both, with a toggle so each guest reads it in their language.", sw: "Ndiyo. Kadi inaweza kuwa kwa Kiswahili, Kiingereza au zote mbili, na kitufe cha kubadilisha lugha kwa kila mgeni." },
  },
];

// ── Contact form ─────────────────────────────────────────────
/** Event types offered in the contact form dropdown. */
export const eventTypes: Text[] = events.map((e) => e.title);

// ── Section headings, buttons and labels ─────────────────────
export const ui = {
  nav: {
    packages: { en: "Packages", sw: "Vifurushi" } as Text,
    how: { en: "How it works", sw: "Inavyofanya kazi" } as Text,
    showcase: { en: "Showcase", sw: "Mifano" } as Text,
    contact: { en: "Contact", sw: "Wasiliana" } as Text,
    getStarted: { en: "Get started", sw: "Anza sasa" } as Text,
    menu: { en: "Menu", sw: "Menyu" } as Text,
  },
  mockup: {
    entryPass: { en: "Entry pass", sw: "Pasi ya kuingia" } as Text,
    guest: { en: "Guest", sw: "Mgeni" } as Text,
    attending: { en: "Attending", sw: "Nitahudhuria" } as Text,
    decline: { en: "Can't make it", sw: "Sitaweza" } as Text,
    confirmed: { en: "RSVP received", sw: "Umethibitisha" } as Text,
  },
  events: { kicker: { en: "Every occasion", sw: "Kila tukio" } as Text, title: { en: "Events we cover", sw: "Matukio tunayohudumia" } as Text },
  features: {
    kicker: { en: "Everything included", sw: "Kila kitu kimo" } as Text,
    title: { en: "More than a pretty card", sw: "Zaidi ya kadi nzuri" } as Text,
    sub: { en: "From the first invite to the last thank-you, the whole guest journey in one place.", sw: "Kuanzia mwaliko wa kwanza hadi shukrani ya mwisho, safari nzima ya mgeni sehemu moja." } as Text,
  },
  how: { kicker: { en: "Simple from start to finish", sw: "Rahisi mwanzo hadi mwisho" } as Text, title: { en: "How it works", sw: "Inavyofanya kazi" } as Text, step: { en: "Step", sw: "Hatua" } as Text },
  showcase: {
    kicker: { en: "Our designs", sw: "Miundo yetu" } as Text,
    title: { en: "Cards our couples love", sw: "Kadi wanazozipenda maharusi wetu" } as Text,
    view: { en: "View card", sw: "Tazama kadi" } as Text,
  },
  packages: {
    kicker: { en: "Simple pricing", sw: "Bei rahisi" } as Text,
    title: { en: "Choose your package", sw: "Chagua kifurushi chako" } as Text,
    sub: { en: "Priced per card. One card can invite a couple or a family.", sw: "Bei ni kwa kila kadi. Kadi moja inaweza kualika wanandoa au familia." } as Text,
    perCard: { en: "per card", sw: "kwa kadi" } as Text,
    popular: { en: "Popular", sw: "Maarufu" } as Text,
    request: { en: "Request", sw: "Omba" } as Text,
  },
  testimonials: { kicker: { en: "Kind words", sw: "Maneno mazuri" } as Text, title: { en: "What clients say", sw: "Wateja wanasemaje" } as Text },
  faq: { kicker: { en: "Questions", sw: "Maswali" } as Text, title: { en: "Frequently asked", sw: "Maswali yanayoulizwa mara kwa mara" } as Text },
  contact: {
    kicker: { en: "Let's begin", sw: "Tuanze" } as Text,
    title: { en: "Request your invitations", sw: "Omba kadi zako za mialiko" } as Text,
    sub: { en: "Fill in a few details and we'll continue the conversation on WhatsApp.", sw: "Jaza maelezo machache na tutaendelea na mazungumzo kwa WhatsApp." } as Text,
    name: { en: "Your name", sw: "Jina lako" } as Text,
    phone: { en: "Phone number", sw: "Namba ya simu" } as Text,
    eventType: { en: "Event type", sw: "Aina ya tukio" } as Text,
    date: { en: "Event date", sw: "Tarehe ya tukio" } as Text,
    guests: { en: "Number of guests", sw: "Idadi ya wageni" } as Text,
    choose: { en: "Choose…", sw: "Chagua…" } as Text,
    submit: { en: "Send on WhatsApp", sw: "Tuma kwa WhatsApp" } as Text,
    note: { en: "Opens WhatsApp with your details filled in. Nothing is stored on this site.", sw: "Inafungua WhatsApp na maelezo yako tayari. Hakuna kinachohifadhiwa kwenye tovuti hii." } as Text,
    orChat: { en: "Prefer to chat directly?", sw: "Ungependa kuongea moja kwa moja?" } as Text,
  },
  footer: {
    rights: { en: "All rights reserved.", sw: "Haki zote zimehifadhiwa." } as Text,
    follow: { en: "Follow us", sw: "Tufuate" } as Text,
  },
};

/** The Kiswahili WhatsApp message built from the contact form. */
export const contactMessage = (f: { name: string; phone: string; eventType: string; date: string; guests: string }) =>
  [
    `Habari ${brand.name}! Ningependa kuomba kadi za mialiko za kidijitali.`,
    `Jina: ${f.name}`,
    `Simu: ${f.phone}`,
    `Aina ya tukio: ${f.eventType}`,
    `Tarehe: ${f.date}`,
    `Idadi ya wageni: ${f.guests}`,
  ].join("\n");
