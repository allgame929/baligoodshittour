import { tours } from "@/data/tours";
import type { Interest } from "@/data/types";

export const interestColor: Record<Interest, string> = {
  Culture: "#34476F",
  "Waterfalls & nature": "#2D6A4F",
  Trekking: "#5E5430",
  Snorkeling: "#1F7A8C",
  Sunset: "#B8541C",
  Custom: "#4A5568",
};

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
export const getTourById = (id: number) => tours.find((t) => t.id === id);

export const unique = <T,>(xs: T[]) => Array.from(new Set(xs));

export function absoluteUrl(path = "") {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app").replace(/\/$/, "");
  return `${base}${path}`;
}
