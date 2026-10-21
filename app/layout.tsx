import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const serif = Cormorant_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: "Invitation Cards · Digital Wedding Invitations",
  description: "Elegant digital wedding invitations with RSVP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
