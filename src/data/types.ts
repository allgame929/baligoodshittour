export type Interest =
  | "Culture"
  | "Waterfalls & nature"
  | "Trekking"
  | "Snorkeling"
  | "Sunset"
  | "Custom";

export type TourFormat = "Private" | "Small group";

export interface ItineraryStep {
  time?: string;
  text: string;
}

export interface Tour {
  id: number;
  slug: string;
  title: string;
  region: string;
  interest: Interest;
  format: TourFormat;
  /** Human readable, e.g. "9 hours" */
  duration: string;
  /** Numeric hours, used by the duration filter */
  hours: number;
  /** First clock time of the day, e.g. "07:00" */
  start: string | null;
  summary: string;
  highlights: string[];
  itinerary: ItineraryStep[];
  includes: string[];
  excludes: string[];
  meetingPoint: string;
  options: string;
  keywords: string[];
  note?: string;
  /** Optional photo in /public, e.g. "/tours/ubud-early-start.jpg" */
  image?: string;
  /** Optional price in USD per person. Leave empty to show "Ask for a quote". */
  priceFrom?: number;
}
