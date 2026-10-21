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

## One site, many couples
Each couple gets their own link: `yoursite.com/amani-neema`, `yoursite.com/juma-aisha`.

**Add a new couple (about 10 minutes):**
1. Copy `content/couples/amani-neema.ts` to `content/couples/<their-slug>.ts`
2. Change `slug`, `theme` (`bahari`, `golden` or `classic`), names, date, venue, gifts and the words
3. Register it in `content/couples/index.ts`
4. Push. Vercel redeploys and the new link is live

RSVPs are saved with the couple's slug, so every couple's guest list stays separate.
Guest lists: `/admin?key=ADMIN_PASSWORD` (all couples) or `&couple=<slug>` (one couple).
New themes: add a `[data-theme="..."]` block in `app/globals.css`.

> This repo is public, so never put passwords or real client phone numbers you don't want public in content files.

## Where to learn each piece
| File | What it teaches |
|---|---|
| `components/Reveal.tsx` | Scroll animations with Framer Motion |
| `components/Intro.tsx` | Enter/exit animations (`AnimatePresence`) |
| `components/Hero.tsx` | Video background + gradient "gold" text |
| `components/Countdown.tsx` | Timers with `useEffect` |
| `lib/language.tsx` | React context: current couple + language toggle |
| `app/[slug]/page.tsx` | Dynamic routes + `generateStaticParams` |
| `content/types.ts` | TypeScript types every couple must follow |
| `app/api/rsvp/route.ts` | API route + Postgres insert |
| `app/admin/page.tsx` | Server component reading the database |
| `app/api/calendar/route.ts` | Generating an .ics file |

## Deploy
Import the repo on Vercel, add `DATABASE_URL` and `ADMIN_PASSWORD` as environment variables, deploy.

## Assets
Use only your own or licensed videos, photos and music.
