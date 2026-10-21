import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--nf-script" });
const serif = Cormorant_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--nf-serif" });

export const metadata: Metadata = {
  title: "Amani & Neema · Wedding Invitation",
  description: "Saturday, 12th December 2026 · Bahari Beach, Dar es Salaam",
  openGraph: { title: "Amani & Neema · Wedding Invitation", description: "Saturday, 12th December 2026 · Bahari Beach, Dar es Salaam" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
