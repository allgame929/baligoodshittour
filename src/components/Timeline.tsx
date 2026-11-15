import type { ItineraryStep } from "@/data/types";

export function Timeline({ steps }: { steps: ItineraryStep[] }) {
  return (
    <ol className="timeline">
      {steps.map((s, i) => (
        <li key={i} className="timeline__step">
          <span className="timeline__time">{s.time ?? ""}</span>
          <span className="timeline__text">{s.text}</span>
        </li>
      ))}
    </ol>
  );
}
