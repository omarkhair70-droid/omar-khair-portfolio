import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Khair — Websites & Digital Systems",
  description:
    "Omar Khair builds business websites, ordering experiences, product catalogs, RFQ systems, dashboards, and digital systems.",
  openGraph: {
    title: "Omar Khair — Websites & Digital Systems",
    description:
      "Omar Khair builds business websites, ordering experiences, product catalogs, RFQ systems, dashboards, and digital systems.",
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
