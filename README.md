# Sync Store — Landing

Marketing site built with Next.js (App Router) and Tailwind CSS.

## Prerequisites

- Node.js 22 LTS (minimum 20.9)
- The [server](../server/README.md) running, for the demo request form

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
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | This site's public URL (canonical links, Open Graph, sitemap, robots) |
| `NEXT_PUBLIC_ONBOARDING_URL` | `http://localhost:5174` | Onboarding app for the Sign in / Get started buttons |
| `API_URL` | `http://localhost:8080` | API server; server-only, used by `/api/demo-requests` |

`NEXT_PUBLIC_*` values are built into the browser bundle, so rebuild after changing them.

## Demo requests

The `/demo` form posts to this site's `/api/demo-requests` route, which forwards it to the API server's `POST /demo-requests`. The server saves it in the `demo_requests` table and logs it.

## Style guide

`/style-guide` is an internal design reference: it works in `npm run dev` and returns 404 in production builds.
