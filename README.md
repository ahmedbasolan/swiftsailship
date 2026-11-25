# Swift Sail Shipping LLC Website

[![CI](https://github.com/ahmedbasolan/swiftsailship/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmedbasolan/swiftsailship/actions/workflows/ci.yml)

**Live: [swiftsailship.com](https://www.swiftsailship.com)**

The website of Swift Sail Shipping LLC, a Dubai-based freight forwarding and logistics company. Built with Next.js 16, Tailwind CSS v4 and Framer Motion, and deployed on Vercel from `main`.

![Swift Sail homepage: hero, quote and cargo-calculator calls to action, and headline figures](docs/images/home.png)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page: hero, services, trade tools, interactive route globe |
| `/about` | Company information and team |
| `/services` | Freight and logistics service offerings |
| `/how-it-works` | Step-by-step process explanation |
| `/get-quote` | Quote request form |
| `/blog`, `/blog/[slug]` | Articles on Gulf shipping and UAE customs, statically generated |
| `/privacy`, `/terms` | Privacy policy and terms of service |

## Trade tools

On the homepage, all client-side:

- **Cargo calculator**: CBM, air volumetric and chargeable weight, ocean W/M revenue tons, and a container recommendation. "Get a quote" carries the figures into the quote form.
- **Customs duty guide**, **Incoterms matrix** and **trade corridors**: reference tools for UAE importers.

## How quote requests reach the desk

There is no backend. Submitting the quote form opens WhatsApp with the request pre-filled to the operations desk, and the customer presses send. **Send by Email Instead** opens the same request as an email to info@swiftsailship.com.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Globe | cobe |
| Language | TypeScript |
| UI Components | Radix UI + shadcn/ui |
| Hosting | Vercel (production deploys from `main`) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

CI runs lint, `tsc --noEmit` and a production build on every push and pull request.
