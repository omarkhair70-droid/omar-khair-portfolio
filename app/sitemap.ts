import type { MetadataRoute } from "next";

import { getPublicCaseStudyProjects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omar-khair-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/work`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/local-business`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/privacy/wavezero`, changeFrequency: "yearly", priority: 0.6 }
  ];

  const caseStudies: MetadataRoute.Sitemap = getPublicCaseStudyProjects()
    .filter((project) => project.caseStudyPath)
    .map((project) => ({
      url: `${siteUrl}${project.caseStudyPath}`,
      changeFrequency: "monthly",
      priority: project.tier === "flagship" ? 0.85 : 0.7
    }));

  return [...coreRoutes, ...caseStudies];
}
