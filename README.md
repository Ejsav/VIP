# The Afterlist

> Private access to the city after dark.

A fictional premium nightlife access platform concept designed and built by **Eric Jokl** as a portfolio demonstration of luxury UX, marketplace structure, mobile-first conversion flows, and reusable product systems.

## Concept notice

The Afterlist is a fictional nightlife access product concept designed and built by Eric Jokl for portfolio demonstration purposes. Venue names, access drops, memberships, and booking flows are sample content only. This is not an active booking service and does not represent real venue partnerships or guaranteed access.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom luxury token system
- **Framer Motion** for cinematic, restrained motion
- **Lucide** for iconography
- **Google Fonts** — Fraunces (display) + Inter (body) + JetBrains Mono (mono)

## What is in here

- Eight fictional cities with mood, demand, and lead-time data
- Ten fictional venues across the network
- Nine sample limited access drops
- Three demo membership tiers (Guest, Select, Black Card)
- A polished seven-step request flow with confirmation state
- Dynamic city and venue detail pages
- A portfolio case study page
- A concept-notice page and footer-wide disclaimers

## Pages

- `/` — Home (hero with product dashboard mockup, network, drops, membership, system)
- `/cities` — City browsing with filters
- `/cities/[slug]` — City detail
- `/venues` — Marketplace browsing with mobile drawer filters
- `/venues/[slug]` — Venue detail
- `/access-drops` — Limited drops
- `/membership` — Three-tier comparison
- `/request` — Multi-step request flow + demo confirmation
- `/how-it-works` — Product flow explainer
- `/case-study` — Portfolio case study
- `/concept-notice` — Legal-clean disclaimer page

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

Deploy on Vercel out of the box. No environment variables required.

## Credits

Designed and built by **Eric Jokl** · [EricJokl.com](https://ericjokl.com)
