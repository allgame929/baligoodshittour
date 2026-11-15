import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TourExplorer } from "@/components/TourExplorer";
import { ContactForm } from "@/components/ContactForm";
import { getTours } from "@/server-tours";
import { site } from "@/data/site";
import { absoluteUrl, getTourById } from "@/lib";

// The day clock in the hero. Times come from the tour itineraries.
const clock: { time: string; label: string; tourId: number }[] = [
  { time: "03:30", label: "Meet at the Mount Batur trailhead", tourId: 4 },
  { time: "05:30", label: "Gate of Heaven before the queue builds", tourId: 10 },
  { time: "06:00", label: "Tegalalang terraces, before the tour buses", tourId: 1 },
  { time: "15:00", label: "Leave for Uluwatu temple, Kecak and a Jimbaran dinner", tourId: 13 },
];

const steps = [
  { title: "Pick a tour or describe your day", body: "Use the filters, or tell us what you want to see and how long you have." },
  { title: "Get a clear quote by email", body: "The price says what is included. Entrance fees, lunch and parking are listed per tour." },
  { title: "Meet your driver-guide at your hotel", body: "You get a pickup time and the name of your guide the day before." },
];

const faqs = [
  {
    q: "Are entrance fees included?",
    a: "It depends on the tour, and each tour page says which fees are in the price. Some tours offer a choice between fees included and fees paid on site.",
  },
  {
    q: "Where do you pick me up?",
    a: `Hotel pickup is included in ${site.pickupAreas}. Other areas can be arranged and may carry a surcharge.`,
  },
  {
    q: "Is the Mount Batur trek suitable for beginners?",
    a: "Yes for the short route if you are reasonably fit. It starts in the dark, and a local guide is required on the mountain.",
  },
  {
    q: "What if it rains?",
    a: "November to March is the wet season, with showers mostly in the afternoon. We can move stops, start earlier or reschedule, and we will tell you before pickup.",
  },
  {
    q: "Can I travel alone or change the route?",
    a: "Yes. A single traveler can book, and the custom day tour lets you choose your own stops from the menu on the tour page.",
  },
];

export default function Home() {
  const tours = getTours();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": absoluteUrl("/#business"),
        name: site.name,
        description: site.description,
        url: absoluteUrl("/"),
        email: site.email,
        areaServed: "Bali, Indonesia",
        knowsLanguage: site.languages,
      },
      {
        "@type": "ItemList",
        name: "Bali day tours",
        itemListElement: tours.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/tours/${t.slug}`),
          name: t.title,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main">
        <section className="hero">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <h1 className="hero__title">Bali is quiet before 7 AM.</h1>
              <p className="hero__lead">
                Private day tours across mainland Bali with a local driver-guide. Start early, skip the queues and see
                Ubud, Mount Batur, waterfalls, East Bali and the south coast on your own schedule.
              </p>
              <div className="hero__actions">
                <Link href="/#tours" className="btn btn--ink">
                  Browse {tours.length} tours
                </Link>
                <Link href="/#contact" className="btn btn--line">
                  Ask for a quote
                </Link>
              </div>
            </div>
            <aside className="clock" aria-label="Example start times">
              <p className="clock__title">A few of our start times</p>
              <ol className="clock__list">
                {clock.map((c) => {
                  const t = getTourById(c.tourId)!;
                  return (
                    <li key={c.time}>
                      <Link href={`/tours/${t.slug}`} className="clock__row">
                        <span className="clock__time">{c.time}</span>
                        <span className="clock__label">{c.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </aside>
          </div>
        </section>

        <section className="facts" aria-label="What every tour includes">
          <ul className="wrap facts__list">
            <li>Hotel pickup and drop-off</li>
            <li>Local English-speaking driver-guide</li>
            <li>Solo travelers and groups welcome</li>
            <li>Inclusions listed on every tour</li>
          </ul>
        </section>

        <section id="tours" className="section">
          <div className="wrap">
            <h2 className="h2">Day tours in mainland Bali</h2>
            <p className="section__lead">
              Filter by what you want to see, how long you have and where you are staying.
            </p>
            <TourExplorer tours={tours} />
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap about">
            {site.aboutPhoto && (
              <Image src={site.aboutPhoto} alt={`${site.guide}, your guide`} width={720} height={720} className="about__photo" priority={false} />
            )}
            <div className="about__text">
              <h2 className="h2">Your guide, {site.guide}</h2>
              {site.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="about__facts">
                {site.aboutFacts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p>
                <Link href="/#contact" className="btn btn--line">
                  Message {site.guide.split(" ")[0]}
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section id="how" className="section section--tint">
          <div className="wrap">
            <h2 className="h2">How booking works</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="steps__item">
                  <span className="steps__n">{i + 1}</span>
                  <div>
                    <h3 className="h3">{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="wrap wrap--narrow">
            <h2 className="h2">Questions travelers ask</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q} className="faq__item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <div className="faq__contact">
              <span>Have questions or prefer email?</span>
              <a href={`mailto:${site.email}`} className="faq__contact-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{site.email}</span>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--ink">
          <div className="wrap contact">
            <div>
              <h2 className="h2 h2--light">Tell us your dates</h2>
              <p className="contact__lead">
                Send the tour you like, your dates and where you are staying. You get a reply by email, usually within a day.
              </p>
              <div className="contact__direct">
                <span>Prefer email?</span>
                <a href={`mailto:${site.email}`} className="contact__direct-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{site.email}</span>
                </a>
                {site.whatsapp && (
                  <span className="contact__direct-extra">
                    or{" "}
                    <a href={`https://wa.me/${site.whatsapp}`} className="contact__wa-link">
                      message on WhatsApp
                    </a>
                  </span>
                )}
              </div>
            </div>
            <div className="contact__form">
              <ContactForm tours={tours.map(({ slug, title }) => ({ slug, title }))} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
