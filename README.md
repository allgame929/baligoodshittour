# Bali Good Shit Tour (Next.js + TypeScript)

## Change content (all hardcoded)
- `src/data/site.ts`: brand name, your name, bio, about photo, email, WhatsApp, Instagram, pickup areas.
- `src/data/tours.ts`: every tour. Add `priceFrom: 85` for a price and `image: "/tours/<file>.jpg"` for a photo (put files in `public/tours/`).
- `src/app/page.tsx`: hero text, the "start times" box, steps and FAQ.

## Email form
The form posts to `/api/contact`, which sends an email through Resend.
1. Create a free account at resend.com and make an API key.
2. In Vercel, Project Settings, Environment Variables, add the values from `.env.example`.
3. Redeploy.
Until you verify your own domain in Resend, keep `onboarding@resend.dev` as the sender. It delivers only to the email you signed up to Resend with.

## Run and deploy
    npm install
    cp .env.example .env.local
    npm run dev
Push to GitHub, import the repo in Vercel, set `NEXT_PUBLIC_SITE_URL` to your live URL.
