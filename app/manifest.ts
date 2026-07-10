import type { MetadataRoute } from "next";
import { site, taglines } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${taglines.hero}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070A12",
    theme_color: "#FFB020",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
