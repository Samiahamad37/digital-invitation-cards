import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { brand, hero } from "./config";
import "./globals.css";

const display = Cormorant_Garamond({ weight: ["500", "600", "700"], subsets: ["latin"], variable: "--nf-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--nf-sans" });

const title = `${brand.name} · ${brand.tagline.en}`;
const description = hero.subline.en;

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title,
  description,
  keywords: ["digital invitations", "kadi za mialiko", "wedding invitation Tanzania", "harusi", "send-off", "kitchen party", "QR check-in", "RSVP", "Dar es Salaam"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: brand.name, title, description, url: "/", locale: "en_TZ", alternateLocale: ["sw_TZ"] },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0b2119" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
