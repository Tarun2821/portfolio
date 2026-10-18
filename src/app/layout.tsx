import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { site } from "@/data/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.description,
  openGraph: { title: `${site.name} — ${site.role}`, description: site.description, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${body.variable}`}>
      <body className="font-body">
        <div className="grain" aria-hidden />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
