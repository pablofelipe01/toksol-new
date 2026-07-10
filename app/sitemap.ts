import type { MetadataRoute } from "next";
import { SITE_URL, complianceLinks, navLinks } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-10");

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...navLinks.map((link) => ({
      url: `${SITE_URL}${link.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...complianceLinks.map((link) => ({
      url: `${SITE_URL}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
