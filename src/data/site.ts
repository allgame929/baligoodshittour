// Edit the values below. Everything on the site reads from here.
export const site = {
  name: "Bali Good Shit Tour",
  guide: "Stephen Bagas",
  tagline: "Private day tours across mainland Bali, with a local driver-guide.",
  description:
    "Private and small-group day tours in mainland Bali: Ubud, Mount Batur sunrise, waterfalls, East Bali, Uluwatu sunset and snorkeling. Hotel pickup, local driver-guide, clear inclusions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app",
  // Shown on the page. The form itself sends to CONTACT_TO_EMAIL (see .env.example).
  email: "info@baligoodshittour.com",
  // International format without "+" or spaces, e.g. "6281234567890". Leave "" to hide the button.
  whatsapp: "",
  instagram: "",
  region: "Bali, Indonesia",
  // About section. Edit the text freely. Add a photo at public/about.jpg and set aboutPhoto to "/about.jpg".
  aboutPhoto: "/about.jpg",
  bio: [
    "Hey, I'm Stephen Bagas. I'm 29, born in Jogja and living in Bali for a couple of years now.",
    "I love meeting new people and picking up new cultures and languages, so expect good conversation, not a lecture. Scripts and stiff formal tours aren't my thing. If you want a very formal guide, I'm honestly not your guy, hehehe.",
    "I do the driving myself, so we can stop whenever something looks good: a hidden waterfall, a roadside coffee, a temple with nobody in it. Tell me what you like and we'll build the day around it. Bring good vibes and sunscreen.",
  ],
  aboutFacts: ["From Yogyakarta, based in Bali", "Licensed to drive both car and motorbike", "Relaxed, friendly and never scripted"],

  pickupAreas: "Ubud, Sanur, Seminyak, Canggu, Kuta, Nusa Dua, Jimbaran",
  languages: ["English"],
};
