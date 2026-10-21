// Second demo couple: same structure, different words, date, venue and theme.
import type { Invite } from "../types";

export const jumaAisha: Invite = {
  slug: "juma-aisha",
  theme: "golden",
  couple: { partnerOne: "Juma", partnerTwo: "Aisha", monogram: "J & A" },

  // ISO date with East Africa offset (+03:00)
  dateISO: "2027-01-16T15:00:00+03:00",
  endISO: "2027-01-16T23:00:00+03:00",

  venue: {
    name: "Malaika Beach Resort",
    address: "Mwanza, Tanzania",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Malaika+Beach+Resort+Mwanza",
  },

  // Put your OWN or licensed clips in /public/videos and set the paths here.
  // Leave empty ("") to use the built-in animated ocean background.
  media: {
    heroVideo: "",
    eventVideo: "",
    music: "", // e.g. "/music/our-song.mp3"
  },

  rsvpDeadline: { en: "Kindly RSVP by 2 January 2027", sw: "Tafadhali thibitisha kabla ya 2 Januari 2027" },

  gifts: {
    mobileMoney: { label: "M-Pesa / Mixx by Yas", number: "+255 7XX XXX XXX", name: "Juma & Aisha" },
    bank: { label: "Bank", details: "CRDB · Acc 01XXXXXXXXX" },
  },

  text: {
    en: {
      tapToOpen: "Tap to open",
      gettingMarried: "We're Getting Married",
      dateLabel: "Saturday, 16th January 2027",
      confirm: "Confirm Attendance",
      countdownTitle: "Counting the Days",
      days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
      storyTitle: "Our Story",
      story: [
        { title: "How we met", body: "A chance meeting at a friend's birthday in Mwanza." },
        { title: "The proposal", body: "At sunset by Lake Victoria, a question was asked and forever began." },
      ],
      programTitle: "Order of the Day",
      program: [
        { time: "4:00 PM", title: "Guest Arrivals", body: "A warm welcome by the sea" },
        { time: "4:30 PM", title: "Ceremony", body: "Where two hearts become one" },
        { time: "6:30 PM", title: "Dinner", body: "An evening of love and shared meals" },
        { time: "8:30 PM", title: "First Dance & Party", body: "Let the celebration begin" },
      ],
      eventSubtitle: "Join us to celebrate",
      eventTitle: "Event Details",
      ceremonyBegins: "Ceremony begins at 4:00 PM",
      openMaps: "Open in Google Maps",
      addCalendar: "Add to Calendar",
      dressTitle: "Dress Code",
      dress: "Beach formal in soft gold, ivory and ocean blue. Comfortable shoes for the sand.",
      giftsTitle: "Gifts",
      gifts: "Your presence is our greatest gift. If you wish to bless us, you can use the details below.",
      faqTitle: "Questions",
      faq: [
        { q: "Can I bring a plus one?", a: "Each invitation is for the guests named on it." },
        { q: "Is there parking?", a: "Yes, free parking is available at the venue." },
      ],
      rsvpTitle: "RSVP",
      rsvpSubtitle: "Be our guest",
      name: "Full name", phone: "Phone (WhatsApp)", guests: "Number of guests",
      attending: "Will you attend?", yes: "Joyfully accept", no: "Regretfully decline",
      message: "A message for the couple (optional)",
      send: "Send RSVP", sending: "Sending…",
      thanksTitle: "Thank you!",
      thanksBody: "We are so excited to celebrate this very special day with you.",
      error: "Something went wrong. Please try again.",
    },
    sw: {
      tapToOpen: "Gusa kufungua",
      gettingMarried: "Tunafunga Ndoa",
      dateLabel: "Jumamosi, 16 Januari 2027",
      confirm: "Thibitisha Kuhudhuria",
      countdownTitle: "Siku Zilizobaki",
      days: "Siku", hours: "Saa", minutes: "Dakika", seconds: "Sekunde",
      storyTitle: "Hadithi Yetu",
      story: [
        { title: "Tulivyokutana", body: "Tulikutana kwenye sherehe ya rafiki Mwanza." },
        { title: "Posa", body: "Jua likizama kando ya Ziwa Victoria, swali liliulizwa na milele ikaanza." },
      ],
      programTitle: "Ratiba ya Siku",
      program: [
        { time: "Saa 10:00 jioni", title: "Wageni Kuwasili", body: "Karibu kando ya bahari" },
        { time: "Saa 10:30 jioni", title: "Ndoa", body: "Mioyo miwili kuwa mmoja" },
        { time: "Saa 12:30 jioni", title: "Chakula cha Jioni", body: "Jioni ya upendo na chakula" },
        { time: "Saa 2:30 usiku", title: "Ngoma na Sherehe", body: "Sherehe ianze!" },
      ],
      eventSubtitle: "Karibu tusherehekee pamoja",
      eventTitle: "Maelezo ya Tukio",
      ceremonyBegins: "Sherehe inaanza saa 10:00 jioni",
      openMaps: "Fungua Ramani",
      addCalendar: "Weka kwenye Kalenda",
      dressTitle: "Mavazi",
      dress: "Mavazi rasmi ya ufukweni: dhahabu, cream na bluu ya bahari.",
      giftsTitle: "Zawadi",
      gifts: "Uwepo wako ndio zawadi kubwa kwetu. Ukipenda kutubariki, tumia maelezo haya.",
      faqTitle: "Maswali",
      faq: [
        { q: "Naweza kuja na mtu mwingine?", a: "Kadi ni kwa waliotajwa tu." },
        { q: "Kuna maegesho?", a: "Ndiyo, maegesho ya bure yapo." },
      ],
      rsvpTitle: "Thibitisha",
      rsvpSubtitle: "Karibu mgeni wetu",
      name: "Jina kamili", phone: "Simu (WhatsApp)", guests: "Idadi ya wageni",
      attending: "Utahudhuria?", yes: "Nitahudhuria kwa furaha", no: "Sitaweza kuhudhuria",
      message: "Ujumbe kwa maharusi (si lazima)",
      send: "Tuma", sending: "Inatuma…",
      thanksTitle: "Asante sana!",
      thanksBody: "Tuna furaha kubwa kusherehekea siku hii maalum pamoja nawe.",
      error: "Kuna hitilafu. Tafadhali jaribu tena.",
    },
  },
};
