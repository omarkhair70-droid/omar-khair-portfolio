import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";

import SignatureMotion from "@/components/SignatureMotion";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteIdentity } from "@/data/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omar-khair-portfolio.vercel.app";
const title = "Omar Khair — Product Builder | Web & Mobile";
const description =
  "Omar Khair builds digital products end-to-end across product direction, engineering, visual direction, and launch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: siteIdentity.name,
    type: "website",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"]
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=ok3", type: "image/svg+xml" },
      { url: "/logo-mark.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.svg?v=ok3",
    apple: "/apple-icon.svg?v=ok3"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased">
        <SignatureMotion />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
