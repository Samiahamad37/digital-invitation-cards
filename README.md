# Digital Invitation Cards 💍

A **monorepo** of luxury digital wedding invitations. Every couple gets their **own card with its own design**,
and the hard parts (RSVP, countdown, calendar, guest list, Kiswahili toggle) are written once and shared.

```
digital-invitation-cards/
├── packages/
│   └── shared/            ← built once, used by every card
│       └── src/
│           ├── Rsvp.tsx           RSVP form (EN/SW)
│           ├── Countdown.tsx      live countdown
│           ├── AddToCalendar.tsx  .ics download
│           ├── Reveal.tsx         scroll animation
│           ├── lang.tsx           English / Kiswahili toggle
│           ├── rsvp-handler.ts    API route that saves RSVPs to Neon
│           └── GuestList.tsx      private guest list page
└── apps/
    ├── landing/           ← business landing page (port 3000)
    ├── amani-neema/       ← "Bahari" beach design
    └── juma-aisha/        ← "Emerald Lakeside" design
```

Each app is a normal Next.js app. Its whole design lives in **`app/Card.tsx`** (plus colours in `globals.css` and fonts in `layout.tsx`).

## Run locally
```bash
npm install
npm run dev                    # all cards (3001, 3002, ...)
npm run dev -w amani-neema     # just one
```

## New couple
```bash
npm run new-couple -- baraka-zuhura juma-aisha   # copy juma-aisha as a starting point
npm install
```
Then redesign `apps/baraka-zuhura/app/Card.tsx`. Using a shared piece is one line:
```tsx
<Countdown date="2027-03-20T15:00:00+03:00" />
<AddToCalendar title="Baraka & Zuhura Wedding" start="..." end="..." place="..." />
<Rsvp maxGuests={2} />
```
Shared components take their colours from CSS variables each card sets: `--ink`, `--accent`, `--card`, `--soft`.

## Deploy (one Vercel project per couple)
1. Vercel → **Add New Project** → choose `digital-invitation-cards`
2. **Root Directory**: `apps/<couple>`
3. Environment variables: `DATABASE_URL` (Neon) and `ADMIN_PASSWORD`
4. Deploy, then add the couple's domain if they bought one

All couples can share one Neon database: every RSVP is saved with its couple's slug.
Guest list: `https://<card-url>/guests?key=ADMIN_PASSWORD`

## apps/landing (business landing page)
The marketing site for the invitation business: packages, how it works, showcase, FAQ and a request form
that opens WhatsApp with the details filled in (no backend, no database). English / Kiswahili toggle included.

```bash
npm install
npm run dev -w landing         # http://localhost:3000
npm run build -w landing
```

**Rebrand / edit content:** everything (brand name, tagline, WhatsApp number, prices, packages, showcase links,
stats, testimonials, FAQs, every label in EN + SW) lives in **`apps/landing/app/config.ts`**. The brand name
"Mwaliko" is a placeholder. Prices and testimonials are placeholders too, marked in the file.
Once the couple cards are live, set each showcase `href` to its URL.

**Deploy on Vercel:**
1. Vercel → **Add New Project** → choose `digital-invitation-cards`
2. **Root Directory**: `apps/landing` (no environment variables needed)
3. Deploy, then set `brand.siteUrl` in `config.ts` to the final domain so share previews use it

## Rules
- Use only your own or licensed videos, photos and music. Put them in `apps/<couple>/public/`.
- This repo is public, so keep passwords in Vercel env vars, never in code.
