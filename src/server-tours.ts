import fs from "node:fs";
import path from "node:path";
import { tours } from "@/data/tours";
import type { Tour } from "@/data/types";

const exts = ["jpg", "jpeg", "webp", "png"];

/**
 * Returns the tours with `image` filled in automatically when a file named
 * public/tours/<slug>.jpg (or .jpeg, .webp, .png) exists. Server-only.
 */
export function getTours(): Tour[] {
  return tours.map((t) => {
    if (t.image) return t;
    for (const e of exts) {
      if (fs.existsSync(path.join(process.cwd(), "public", "tours", `${t.slug}.${e}`))) {
        return { ...t, image: `/tours/${t.slug}.${e}` };
      }
    }
    return t;
  });
}
