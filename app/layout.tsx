import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Khair — Websites & Digital Systems",
  description:
    "Portfolio of Omar Khair, building business websites, RFQ systems, product catalogs, dashboards, and digital experiences.",
  openGraph: {
    title: "Omar Khair — Websites & Digital Systems",
    description:
      "Portfolio of Omar Khair, building business websites, RFQ systems, product catalogs, dashboards, and digital experiences.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
