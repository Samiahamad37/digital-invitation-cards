import type { Metadata } from "next";
import { Pinyon_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const script = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--nf-script" });
const serif = Playfair_Display({ weight: ["400", "500", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--nf-serif" });

export const metadata: Metadata = {
  title: "Juma & Aisha · Wedding Invitation",
  description: "Saturday, 16th January 2027 · Malaika Beach Resort, Mwanza",
  openGraph: { title: "Juma & Aisha · Wedding Invitation", description: "Saturday, 16th January 2027 · Malaika Beach Resort, Mwanza" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
