# Araz Terrace — Premium Multilingual Restaurant Website

Luxury redesign for **Araz Terrace** (Baku), with **Azerbaijani (default)** and **Turkish** locales, real restaurant imagery, and research-backed menu content.

## Research summary

| Source | Findings |
| --- | --- |
| Official site `arazterrace.az` | Brand presence; site intermittently unreachable during build |
| Google Maps | İslam Səfərli 1, Baku · `+994 50 318 02 07` · terrace dining |
| 2GIS | Daily ~10:00–01:45 · VIP hall · summer terrace · Azerbaijani cuisine |
| Menu listings (SE MENY) | Real dishes: Şah Plov, Lülə Kabab, Qutab, Araz Salad, Düşbərə… |
| Instagram `@arazterrace` | Active social presence |
| Reviews (Google / Yandex / Tripadvisor themes) | Central location, terrace, national cuisine, warm hospitality |

Images were downloaded from public Araz Terrace listings (Google/Yandex/Trip aggregators), converted to WebP (max 1920px), and stored under `public/images/`.

## Run

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000/az](http://localhost:3000/az) (default) or `/tr`.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · next-intl · GSAP · Framer Motion · Lenis · React Hook Form · Zod · Lucide · sharp

## Structure

```text
app/[locale]/     Localized routes (/az, /tr)
messages/         az.json · tr.json
data/menu.json    Real Araz Terrace dishes (AZ/TR)
public/images/    hero · gallery · menu · interior · exterior · logo · events
components/       UI · layout · forms
sections/         Homepage blocks
i18n/             routing + request config
```

## Features

- Dark/gold luxury UI, glassmorphism, loading + page transitions
- AZ/TR i18n with navbar switcher, `localStorage` + cookie persistence, browser language detection
- hreflang `az` / `tr` / `x-default`, localized SEO metadata, Restaurant JSON-LD
- Responsive from 320px to 1920px+ (hamburger, sticky nav, touch targets)
- Reservation form with Zod validation (localized errors)

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run images` | Re-download/convert image sources |

## Notes

- Reservation submit is demo-validated client-side; connect a backend for production.
- Prefer restaurant-owned photography for long-term licensing when available.
