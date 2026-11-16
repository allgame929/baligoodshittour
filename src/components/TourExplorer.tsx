"use client";

import { useMemo, useState } from "react";
import type { Tour } from "@/data/types";
import { TourCard } from "./TourCard";

type Length = "any" | "short" | "full" | "long";

const CARDS_PER_PAGE = 9;

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

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, "...", total];
  }
  if (current >= total - 3) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export function TourExplorer({ tours }: { tours: Tour[] }) {
  const interests = useMemo(() => Array.from(new Set(tours.map((t) => t.interest))), [tours]);
  const regions = useMemo(() => Array.from(new Set(tours.map((t) => t.region))), [tours]);

  const [interest, setInterest] = useState("all");
  const [format, setFormat] = useState("all");
  const [length, setLength] = useState<Length>("any");
  const [region, setRegion] = useState("all");
  const [page, setPage] = useState(1);

  const shown = tours.filter(
    (t) =>
      (interest === "all" || t.interest === interest) &&
      (format === "all" || t.format === format) &&
      (region === "all" || t.region === region) &&
      inLength(t.hours, length),
  );

  const totalPages = Math.ceil(shown.length / CARDS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const paginatedTours = shown.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE);

  const active = interest !== "all" || format !== "all" || region !== "all" || length !== "any";

  const reset = () => {
    setInterest("all");
    setFormat("all");
    setRegion("all");
    setLength("any");
    setPage(1);
  };

  const handleInterest = (v: string) => {
    setInterest(v);
    setPage(1);
  };

  const handleFormat = (v: string) => {
    setFormat(v);
    setPage(1);
  };

  const handleLength = (v: Length) => {
    setLength(v);
    setPage(1);
  };

  const handleRegion = (v: string) => {
    setRegion(v);
    setPage(1);
  };

  const scrollToTours = () => {
    const el = document.getElementById("tours");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    setPage(p);
    scrollToTours();
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter tours">
        <Chips
          label="What you want to see"
          value={interest}
          onChange={handleInterest}
          options={[{ value: "all", label: "Everything" }, ...interests.map((i) => ({ value: i, label: i }))]}
        />
        <Chips
          label="Tour style"
          value={format}
          onChange={handleFormat}
          options={[
            { value: "all", label: "Any style" },
            { value: "Private", label: "Private" },
            { value: "Small group", label: "Small group" },
          ]}
        />
        <Chips
          label="Length"
          value={length}
          onChange={handleLength}
          options={(Object.keys(lengthLabels) as Length[]).map((k) => ({ value: k, label: lengthLabels[k] }))}
        />
        <div className="filter">
          <label className="filter__label" htmlFor="region">
            Area
          </label>
          <select id="region" className="select" value={region} onChange={(e) => handleRegion(e.target.value)}>
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
        {shown.length > CARDS_PER_PAGE
          ? `Showing ${(currentPage - 1) * CARDS_PER_PAGE + 1}–${Math.min(currentPage * CARDS_PER_PAGE, shown.length)} of ${shown.length} tours`
          : `${shown.length} of ${tours.length} tours`}
        {active && (
          <button type="button" className="linkbtn" onClick={reset}>
            Clear filters
          </button>
        )}
      </p>

      {shown.length > 0 ? (
        <>
          <div className="grid">
            {paginatedTours.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="pagination" aria-label="Tours pagination">
              <button
                type="button"
                className="pagination__btn pagination__arrow"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {pageNumbers.map((p, idx) =>
                p === "..." ? (
                  <span key={`ellipsis-${idx}`} className="pagination__ellipsis" aria-hidden="true">
                    &hellip;
                  </span>
                ) : (
                  <button
                    key={p}
                    type="button"
                    className="pagination__btn"
                    onClick={() => goToPage(p)}
                    aria-current={p === currentPage ? "page" : undefined}
                    aria-label={`Page ${p}`}
                  >
                    {p}
                  </button>
                ),
              )}

              <button
                type="button"
                className="pagination__btn pagination__arrow"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </nav>
          )}
        </>
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
