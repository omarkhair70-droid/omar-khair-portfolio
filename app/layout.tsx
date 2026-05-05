import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omar-khair-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Omar Khair — Websites & Digital Systems",
  description:
    "Omar Khair builds business websites, ordering experiences, product catalogs, RFQ systems, dashboards, and digital systems.",
  openGraph: {
    title: "Omar Khair — Websites & Digital Systems",
    description:
      "Omar Khair builds business websites, ordering experiences, product catalogs, RFQ systems, dashboards, and digital systems.",
    type: "website",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Khair — Websites & Digital Systems",
    description:
      "Omar Khair builds business websites, ordering experiences, product catalogs, RFQ systems, dashboards, and digital systems.",
    images: ["/twitter-image"]
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
    shortcut: "/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
