# SyncStore Website — Developer Guide

Marketing site built with Next.js 16 (App Router), React 19 and Tailwind CSS 4. The project overview, with screenshots, is [README.md](README.md).

## Prerequisites

- Node.js 22 LTS (minimum 20.9)
- The [server](../server/DEVELOPERS.md) running, for the demo request form

## Install and run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

## Environment

```bash
cp .env.example .env.local
```

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | This site's public URL: `metadataBase`, canonical links, Open Graph, sitemap and robots |
| `NEXT_PUBLIC_ONBOARDING_URL` | `http://localhost:5174` | Onboarding app for Sign in (`/`) and Get started (`/register`) |
| `API_URL` | `http://localhost:8080` | API server. Server-only; used by `/api/demo-requests`. |

`NEXT_PUBLIC_*` values are inlined into the browser bundle at build time, so rebuild after changing them. The defaults live in [lib/site.ts](lib/site.ts).

## Structure

```
app/
  layout.tsx            Root metadata (title template, Open Graph, Twitter)
  page.tsx              Home
  pricing/ reviews/ faq/ demo/ contact/ terms/ privacy/
  style-guide/          Internal design reference: 404 in production, noindex
  not-found.tsx         404 page
  robots.ts sitemap.ts  Generated /robots.txt and /sitemap.xml
  api/demo-requests/    POST route that forwards the demo form to the API
components/             Header, Footer and per-page sections
data/                   Static content (FAQ, plans, POS sections, reviews)
lib/site.ts             Site URLs and names
lib/demoRequest.ts      Demo form schema (zod) + options; mirrors the server DTO
```

## Demo requests

1. `components/demo/DemoContent.tsx` posts camelCase JSON to `/api/demo-requests`.
2. `app/api/demo-requests/route.ts` validates it with `demoRequestSchema`, maps it to snake_case and POSTs to `${API_URL}/demo-requests`.
3. The server (`src/demo-requests`) validates it again, saves it to `demo_requests` and logs it.

Errors from the API come back to the browser as a generic 502 message; details are logged on the Next.js server. Keep `BUSINESS_TYPES` / `BRANCH_COUNTS` in `lib/demoRequest.ts` in step with `server/src/demo-requests/dto/create-demo-request.dto.ts`.

## SEO

- Every page exports `metadata` with its own title (`%s | SyncStore`), description and `alternates.canonical`.
- `robots.ts` disallows `/api/` and `/style-guide`. `sitemap.ts` lists the 8 public pages.
- The Open Graph image is the logo for now; a 1200×630 image is in [TODO.md](../TODO.md).

## Placeholders

Social links, the phone number (text and `tel:` don't match), the support email and the marketing numbers (500+ businesses, 4.9 rating, 98% retention) are placeholders. They're tracked in [TODO.md](../TODO.md).

## Screenshots

`docs/screenshots/` holds the images used in the README (1440×900, plus `home-mobile.png` at 390×844). Recapture them against a running site when the pages change.
