import { MetadataRoute } from "next";
import { guideUpdated } from "@/lib/guides";
import { siteConfig } from "@/lib/site.config";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/wrestle-bros-unblocked", changeFrequency: "monthly", priority: 0.9 },
  { path: "/wrestle-bros-controls", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wrestle-bros-how-to-pin", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: route.path.startsWith("/wrestle-bros-")
      ? new Date(guideUpdated)
      : undefined,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
