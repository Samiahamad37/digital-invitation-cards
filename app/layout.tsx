import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import { invite } from "@/content/invite";
import "./globals.css";

const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const serif = Cormorant_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-cormorant" });

const title = `${invite.couple.partnerOne} & ${invite.couple.partnerTwo} · Wedding Invitation`;

export const metadata: Metadata = {
  title,
  description: `${invite.text.en.dateLabel} · ${invite.venue.name}, ${invite.venue.address}`,
  // WhatsApp / social preview. Add /public/og.jpg (1200x630) for a photo preview.
  openGraph: { title, description: `${invite.text.en.dateLabel} · ${invite.venue.name}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
