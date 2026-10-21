# Wedding Invite Starter 💍

A luxury digital wedding invitation built with **Next.js 16, TypeScript, Tailwind CSS v4 and Framer Motion**.
Sample theme: *Bahari Beach, Dar es Salaam*, with an English / Kiswahili toggle.

## Features
- Tap-to-open intro (starts background music if you add one)
- Hero with shimmering gold names over an animated ocean (or your own video)
- Live countdown, our story, order of the day
- Event details with Google Maps and **Add to Calendar** (.ics)
- Dress code, gifts (M-Pesa / bank), FAQ
- **RSVP form saved to Neon Postgres**, with a private guest list at `/admin?key=…`

## Run it
```bash
npm install
cp .env.example .env.local   # optional: add DATABASE_URL and ADMIN_PASSWORD
npm run dev
```
Open http://localhost:3000. Without `DATABASE_URL`, RSVPs are just logged to the terminal.

## Make a new invitation
Everything a couple changes lives in **`content/invite.ts`**: names, date, venue, gifts, all words in both languages, and media paths.

## Where to learn each piece
| File | What it teaches |
|---|---|
| `components/Reveal.tsx` | Scroll animations with Framer Motion |
| `components/Intro.tsx` | Enter/exit animations (`AnimatePresence`) |
| `components/Hero.tsx` | Video background + gradient "gold" text |
| `components/Countdown.tsx` | Timers with `useEffect` |
| `lib/language.tsx` | React context for the language toggle |
| `app/api/rsvp/route.ts` | API route + Postgres insert |
| `app/admin/page.tsx` | Server component reading the database |
| `app/api/calendar/route.ts` | Generating an .ics file |

## Deploy
Import the repo on Vercel, add `DATABASE_URL` and `ADMIN_PASSWORD` as environment variables, deploy.

## Assets
Use only your own or licensed videos, photos and music.
