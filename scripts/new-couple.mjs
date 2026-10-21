// Usage: npm run new-couple -- <new-slug> [copy-from]
// Example: npm run new-couple -- baraka-zuhura juma-aisha
// Copies an existing card app so you can start redesigning it.
import { cpSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [slug, from = "amani-neema"] = process.argv.slice(2);
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("Give a slug like: npm run new-couple -- baraka-zuhura");
  process.exit(1);
}
const src = join("apps", from);
const dest = join("apps", slug);
if (!existsSync(src)) { console.error(`apps/${from} does not exist`); process.exit(1); }
if (existsSync(dest)) { console.error(`apps/${slug} already exists`); process.exit(1); }

cpSync(src, dest, { recursive: true, filter: (p) => !/node_modules|\.next|\.turbo/.test(p) });

// Point the package name, RSVP route and guest list at the new couple
const edit = (file, fn) => { const p = join(dest, file); writeFileSync(p, fn(readFileSync(p, "utf8"))); };
edit("package.json", (s) => s.replace(`"name": "${from}"`, `"name": "${slug}"`));
edit("app/api/rsvp/route.ts", (s) => s.replaceAll(from, slug));
edit("app/guests/page.tsx", (s) => s.replaceAll(from, slug));

console.log(`Created apps/${slug}. Next:
  1. npm install
  2. Redesign apps/${slug}/app/Card.tsx (names, date, venue, colours in globals.css, fonts in layout.tsx)
  3. npm run dev -w ${slug}
  4. On Vercel: New Project, choose this repo, set Root Directory to apps/${slug}`);
