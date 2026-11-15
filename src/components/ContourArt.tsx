import type { Interest } from "@/data/types";
import { interestColor } from "@/lib";

// Deterministic topographic lines, so every tour gets its own relief map without photos.
function ring(seed: number, i: number) {
  const cx = 60 + ((seed * 37) % 80);
  const cy = 40 + ((seed * 53) % 40);
  const r = 14 + i * 11;
  const pts: string[] = [];
  const n = 36;
  for (let k = 0; k <= n; k++) {
    const a = (k / n) * Math.PI * 2;
    const wob =
      1 +
      0.16 * Math.sin(a * 3 + seed + i * 0.35) +
      0.09 * Math.sin(a * 5 - seed * 0.7 + i * 0.2);
    pts.push(`${(cx + Math.cos(a) * r * wob * 1.5).toFixed(1)},${(cy + Math.sin(a) * r * wob).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

export function ContourArt({ seed, interest }: { seed: number; interest: Interest }) {
  const bg = interestColor[interest];
  return (
    <svg
      className="art"
      viewBox="0 0 200 120"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="200" height="120" fill={bg} />
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={ring(seed, i)} fill="none" stroke="#fff" strokeOpacity={0.1 + (i % 3) * 0.06} strokeWidth="0.9" />
      ))}
    </svg>
  );
}
