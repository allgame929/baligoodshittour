import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/data/types";
import { ContourArt } from "./ContourArt";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="card">
      <Link href={`/tours/${tour.slug}`} scroll={true} className="card__media" aria-label={`${tour.title}, view details`} tabIndex={-1}>
        {tour.image ? (
          <Image src={tour.image} alt="" fill sizes="(min-width: 960px) 33vw, 100vw" className="card__photo" />
        ) : (
          <ContourArt seed={tour.id} interest={tour.interest} />
        )}
        <span className="card__region">{tour.region}</span>
        {tour.start && <span className="card__start">Pickup {tour.start}</span>}
      </Link>
      <div className="card__body">
        <h3 className="card__title">
          <Link href={`/tours/${tour.slug}`} scroll={true} className="card__link">
            {tour.title}
          </Link>
        </h3>
        <p className="card__summary">{tour.summary}</p>
        <p className="card__meta">
          <span>{tour.duration}</span>
          <span>{tour.format}</span>
          <span>{tour.priceFrom ? `From $${tour.priceFrom} per person` : "Ask for a quote"}</span>
        </p>
      </div>
    </article>
  );
}
