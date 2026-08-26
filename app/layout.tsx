import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omar-khair-portfolio.vercel.app";
const title = "Omar Khair — Product Builder | Web & Mobile";
const description =
  "Omar Khair builds websites, mobile products, ordering experiences, RFQ systems, dashboards, and business software — from product direction to deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Omar Khair",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
