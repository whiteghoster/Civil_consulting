import { MetadataRoute } from "next";

const BASE_URL = "https://www.saranyacivilconsulting.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/architecture`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/career`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const projectPages = [
    "residential", "corporate", "bridges", "green", "housing", "stadiums",
  ].map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
