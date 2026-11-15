import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { ContactForm } from "@/components/ContactForm";
import { ContourArt } from "@/components/ContourArt";
import { TourCard } from "@/components/TourCard";
import Image from "next/image";
import { getTours } from "@/server-tours";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getTours().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTours().find((t) => t.slug === slug);
  if (!tour) return {};
  const title = tour.title;
  const description = `${tour.summary} ${tour.duration}, ${tour.format.toLowerCase()}, hotel pickup.`;
  return {
    title,
    description,
    keywords: [...tour.keywords, "Bali", tour.region],
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: { title, description, url: `/tours/${tour.slug}`, type: "website", ...(tour.image ? { images: [tour.image] } : {}) },
  };
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tours = getTours();
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.id !== tour.id && (t.interest === tour.interest || t.region === tour.region)).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name: tour.title,
        description: tour.summary,
        url: absoluteUrl(`/tours/${tour.slug}`),
        touristType: tour.keywords,
        provider: { "@type": "TravelAgency", name: site.name, url: absoluteUrl("/") },
        itinerary: {
          "@type": "ItemList",
          itemListElement: tour.itinerary.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.time ? `${s.time} ${s.text}` : s.text,
          })),
        },
        ...(tour.priceFrom
          ? { offers: { "@type": "Offer", price: tour.priceFrom, priceCurrency: "USD", url: absoluteUrl(`/tours/${tour.slug}`) } }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Tours", item: absoluteUrl("/#tours") },
          { "@type": "ListItem", position: 2, name: tour.title, item: absoluteUrl(`/tours/${tour.slug}`) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main">
        <div className="tour__hero">
          {tour.image ? (
            <Image src={tour.image} alt="" fill priority sizes="100vw" className="tour__photo" />
          ) : (
            <ContourArt seed={tour.id} interest={tour.interest} />
          )}
          <div className="wrap tour__heroin">
            <Link href="/#tours" className="tour__back">
              All tours
            </Link>
            <h1 className="tour__title">{tour.title}</h1>
            <p className="tour__meta">
              <span>{tour.region}</span>
              <span>{tour.duration}</span>
              <span>{tour.format}</span>
              <span>{tour.priceFrom ? `From $${tour.priceFrom} per person` : "Ask for a quote"}</span>
            </p>
          </div>
        </div>

        <div className="wrap tour__grid">
          <div className="tour__main">
            <p className="tour__summary">{tour.summary}</p>

            <h2 className="h3">Highlights</h2>
            <ul className="list">
              {tour.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2 className="h3">Itinerary</h2>
            <Timeline steps={tour.itinerary} />
            {tour.note && <p className="tour__note">{tour.note}</p>}

            <div className="twocol">
              <div>
                <h2 className="h3">Included</h2>
                <ul className="list list--yes">
                  {tour.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="h3">Not included</h2>
                <ul className="list list--no">
                  {tour.excludes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="h3">Meeting point</h2>
            <p>{cap(tour.meetingPoint)}</p>

            <h2 className="h3">Options and add-ons</h2>
            <p>{cap(tour.options)}</p>
          </div>

          <aside className="tour__side" id="contact">
            <h2 className="h3">Ask about this tour</h2>
            <ContactForm tours={tours.map(({ slug, title }) => ({ slug, title }))} defaultTour={tour.title} />
          </aside>
        </div>

        {related.length > 0 && (
          <section className="section section--tint">
            <div className="wrap">
              <h2 className="h2">Similar tours</h2>
              <div className="grid">
                {related.map((t) => (
                  <TourCard key={t.id} tour={t} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1) + (s.endsWith(".") ? "" : ".");
}
