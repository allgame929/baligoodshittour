"use client";

import { useMemo, useState } from "react";
import type { Tour } from "@/data/types";
import { TourCard } from "./TourCard";

type Length = "any" | "short" | "full" | "long";

const lengthLabels: Record<Length, string> = {
  any: "Any length",
  short: "Up to 7 hours",
  full: "8 to 10 hours",
  long: "11 hours or more",
};

const inLength = (h: number, l: Length) =>
  l === "any" || (l === "short" && h <= 7) || (l === "full" && h >= 8 && h <= 10) || (l === "long" && h >= 11);

function Chips<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="filter">
      <legend className="filter__label">{label}</legend>
      <div className="filter__chips">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className="chip"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function TourExplorer({ tours }: { tours: Tour[] }) {
  const interests = useMemo(() => Array.from(new Set(tours.map((t) => t.interest))), [tours]);
  const regions = useMemo(() => Array.from(new Set(tours.map((t) => t.region))), [tours]);

  const [interest, setInterest] = useState("all");
  const [format, setFormat] = useState("all");
  const [length, setLength] = useState<Length>("any");
  const [region, setRegion] = useState("all");

  const shown = tours.filter(
    (t) =>
      (interest === "all" || t.interest === interest) &&
      (format === "all" || t.format === format) &&
      (region === "all" || t.region === region) &&
      inLength(t.hours, length),
  );
  const active = interest !== "all" || format !== "all" || region !== "all" || length !== "any";
  const reset = () => {
    setInterest("all");
    setFormat("all");
    setRegion("all");
    setLength("any");
  };

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter tours">
        <Chips
          label="What you want to see"
          value={interest}
          onChange={setInterest}
          options={[{ value: "all", label: "Everything" }, ...interests.map((i) => ({ value: i, label: i }))]}
        />
        <Chips
          label="Tour style"
          value={format}
          onChange={setFormat}
          options={[
            { value: "all", label: "Any style" },
            { value: "Private", label: "Private" },
            { value: "Small group", label: "Small group" },
          ]}
        />
        <Chips
          label="Length"
          value={length}
          onChange={setLength}
          options={(Object.keys(lengthLabels) as Length[]).map((k) => ({ value: k, label: lengthLabels[k] }))}
        />
        <div className="filter">
          <label className="filter__label" htmlFor="region">
            Area
          </label>
          <select id="region" className="select" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="all">All of Bali</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="count" role="status" aria-live="polite">
        {shown.length} of {tours.length} tours
        {active && (
          <button type="button" className="linkbtn" onClick={reset}>
            Clear filters
          </button>
        )}
      </p>

      {shown.length > 0 ? (
        <div className="grid">
          {shown.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p className="empty__title">No tour matches all of these filters.</p>
          <p>Clear the filters, or ask for a custom route and we will build it around your plan.</p>
          <div className="empty__actions">
            <button type="button" className="btn btn--ink" onClick={reset}>
              Clear filters
            </button>
            <a className="btn btn--line" href="#contact">
              Ask for a custom route
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
