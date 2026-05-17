import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omar-khair-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/work/hiltech`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work/teswa`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work/tuscanini`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work/farrag-coffee`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work/habba`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/work/bahja-store`, changeFrequency: "monthly", priority: 0.8 }
  ];
}
