import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";
import { absoluteUrl } from "@/lib";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    ...tours.map((t) => ({
      url: absoluteUrl(`/tours/${t.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
