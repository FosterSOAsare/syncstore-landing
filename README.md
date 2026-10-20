<div align="center">

# SyncStore

### An offline‑first point of sale and inventory system for businesses with one or more branches.

Staff keep selling, receiving stock and serving customers when the internet drops. Every device keeps its own encrypted copy of the business, and changes sync with the server and the other branches once the connection is back.

![Apps](https://img.shields.io/badge/Apps-React%2019%20%C2%B7%20Vite%207-61dafb.svg)
![Website](https://img.shields.io/badge/Website-Next.js%2016-000000.svg)
![Styling](https://img.shields.io/badge/Styling-Tailwind%204-38bdf8.svg)
![Offline](https://img.shields.io/badge/Offline-IndexedDB%20%C2%B7%20Dexie%204%20%C2%B7%20PWA-7c3aed.svg)
![API](https://img.shields.io/badge/API-NestJS%2011%20%C2%B7%20TypeScript-e0234e.svg)
![Realtime](https://img.shields.io/badge/Sync-Socket.IO%204-010101.svg)
![Database](https://img.shields.io/badge/DB-PostgreSQL%20%C2%B7%20TypeORM-336791.svg)
![Queue](https://img.shields.io/badge/Jobs-Redis%20%C2%B7%20BullMQ-dc382d.svg)

</div>

---

## Table of contents

- [What is SyncStore?](#what-is-syncstore)
- [Screenshots](#screenshots): [website](#website) · [setup app](#setup-app) · [store app](#store-app) · [on a phone](#on-a-phone)
- [Features](#features)
- [Tech stack](#tech-stack)
- [System architecture](#system-architecture)
- [How sync works](#how-sync-works)
- [Keeping data correct](#keeping-data-correct)
- [Repository layout](#repository-layout)
- [Getting started](#getting-started)
- [Environment configuration](#environment-configuration)
- [API reference](#api-reference)
- [Deployment](#deployment)
- [Project status & roadmap](#project-status--roadmap)
- [Author](#author)
- [License](#license)

---

## What is SyncStore?

**SyncStore** is a point of sale (POS) and stock system for shops, supermarkets and other retail businesses, built for places where the internet isn't reliable. A business owner can:

1. **Set up the business once.** Create an account, confirm the email address, then go through five short steps: business details, receipt text, taxes, currency, and brand colour.
2. **Run every branch from one account.** Add branches and staff, and decide which branches each person works in and what they're allowed to do.
3. **Sell and manage stock offline.** Ring up sales, receive deliveries, adjust stock and move stock between branches, all without a connection.
4. **Stay in step everywhere.** When a device is back online it sends its changes to the server, and gets everything that changed on other devices and branches.

The project is made of three apps plus a marketing site:

| Part | Repo | What it is |
| --- | --- | --- |
| **Store app** | [`syncstore.com-client`](https://github.com/FosterSOAsare/syncstore.com-client) | The daily POS: React 19 + Vite PWA with an encrypted local database |
| **Setup app** | [`sync-store-onb`](https://github.com/FosterSOAsare/sync-store-onb) | Sign‑up, email confirmation, password reset and the business setup wizard |
| **Server** | [`sync-store-server`](https://github.com/FosterSOAsare/sync-store-server) | NestJS API: accounts, sync over WebSockets, background jobs, emails and logo uploads |
| **Website** | [`syncstore-landing`](https://github.com/FosterSOAsare/syncstore-landing) (this repo) | Next.js 16 marketing site: plans, reviews, FAQ and the "Request a demo" form |

---

## Screenshots

> All screenshots use a sample business, **Demo Mart**, with seeded sample data. The store app's dashboard shows placeholder figures for now.

### Website

<table>
  <tr>
    <td colspan="2"><img src="docs/screenshots/home.png" alt="SyncStore website home page" /><br/><sub><b>Home</b>: works offline, across every branch</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/pricing.png" alt="Pricing page with Free, Professional and Enterprise plans" /><br/><sub><b>Pricing</b>: Free, Professional and Enterprise plans</sub></td>
    <td width="50%"><img src="docs/screenshots/demo-filled.png" alt="Request a demo form filled in" /><br/><sub><b>Request a demo</b>: saved by the server and emailed to the team</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/reviews.png" alt="Reviews page" /><br/><sub><b>Reviews</b></sub></td>
    <td width="50%"><img src="docs/screenshots/faq.png" alt="Frequently asked questions" /><br/><sub><b>FAQ</b></sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/contact.png" alt="Contact page" /><br/><sub><b>Contact</b></sub></td>
    <td width="50%"><img src="docs/screenshots/demo.png" alt="Request a demo page" /><br/><sub><b>Demo page</b> before it's filled in</sub></td>
  </tr>
</table>

### Setup app

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/setup-register.png" alt="Create an account form" /><br/><sub><b>Sign up</b>: create the owner account</sub></td>
    <td width="50%"><img src="docs/screenshots/setup-sign-in.png" alt="Sign in page" /><br/><sub><b>Sign in</b></sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/setup-step-1-profile.png" alt="Setup step 1: business profile" /><br/><sub><b>Step 1</b>: business details</sub></td>
    <td width="50%"><img src="docs/screenshots/setup-step-2-receipt.png" alt="Setup step 2: receipt header, footer and tax breakdown" /><br/><sub><b>Step 2</b>: receipt header, footer and tax breakdown</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/setup-step-3-taxes.png" alt="Setup step 3: taxes" /><br/><sub><b>Step 3</b>: taxes</sub></td>
    <td width="50%"><img src="docs/screenshots/setup-step-4-currency.png" alt="Setup step 4: currency and number format" /><br/><sub><b>Step 4</b>: currency and number format</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/setup-step-5-customization.png" alt="Setup step 5: brand colour and default staff password" /><br/><sub><b>Step 5</b>: brand colour and default staff password</sub></td>
    <td width="50%"><img src="docs/screenshots/setup-organization-details.png" alt="Organization page showing profile, receipt, currency, branding and taxes" /><br/><sub><b>Organization page</b>: review or edit the settings later</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/setup-forgot-password.png" alt="Forgot password form" /><br/><sub><b>Forgot password</b></sub></td>
    <td width="50%"><img src="docs/screenshots/setup-forgot-password-sent.png" alt="Reset link sent confirmation" /><br/><sub><b>Reset link sent</b></sub></td>
  </tr>
  <tr>
    <td colspan="2"><img src="docs/screenshots/setup-set-password.png" alt="Set a new password" /><br/><sub><b>Set a new password</b> from the emailed link</sub></td>
  </tr>
</table>

### Store app

<table>
  <tr>
    <td colspan="2"><img src="docs/screenshots/store-new-sale.png" alt="New sale screen with product catalogue and a cart of three items" /><br/><sub><b>New sale</b>: pick variants from the catalogue; tax and total are worked out as you go</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/store-sales.png" alt="Sales list with receipts, customers, totals, payment methods and statuses" /><br/><sub><b>Sales</b>: receipts with completed, pending and refunded statuses</sub></td>
    <td width="50%"><img src="docs/screenshots/store-dashboard.png" alt="Dashboard with sales, products, low stock alerts and recent sales" /><br/><sub><b>Dashboard</b> (placeholder figures)</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/store-products.png" alt="Products list with categories, price ranges and variant counts" /><br/><sub><b>Products</b>: price ranges and variant counts</sub></td>
    <td width="50%"><img src="docs/screenshots/store-product-detail.png" alt="Product detail panel showing two variants with stock levels" /><br/><sub><b>Product detail</b>: each variant's price, cost and stock in this branch</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/store-restocks.png" alt="Restocks list with pending, approved and rejected statuses" /><br/><sub><b>Restocks</b>: deliveries from suppliers, approved or rejected</sub></td>
    <td width="50%"><img src="docs/screenshots/store-stock-adjustments.png" alt="Stock adjustments list with reasons and statuses" /><br/><sub><b>Stock adjustments</b>: damage, theft, counts and returns</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/store-customers.png" alt="Customers list with credit balances" /><br/><sub><b>Customers</b>: credit balances at a glance</sub></td>
    <td width="50%"><img src="docs/screenshots/store-payments.png" alt="Customer credit payments list" /><br/><sub><b>Credit payments</b>: cash, card and mobile money</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/store-categories.png" alt="Categories list" /><br/><sub><b>Categories</b></sub></td>
    <td width="50%"><img src="docs/screenshots/store-suppliers.png" alt="Suppliers list" /><br/><sub><b>Suppliers</b></sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/store-branches.png" alt="Branches list with a store and a warehouse" /><br/><sub><b>Branches</b>: stores and warehouses</sub></td>
    <td width="50%"><img src="docs/screenshots/store-users.png" alt="Users list" /><br/><sub><b>Users</b>: staff, branches and admin roles</sub></td>
  </tr>
  <tr>
    <td colspan="2"><img src="docs/screenshots/store-organization.png" alt="Organization settings in the store app" /><br/><sub><b>Organization settings</b>: edited here or in the setup app, then synced to every device</sub></td>
  </tr>
</table>

### On a phone

<table>
  <tr>
    <td width="33%" align="center"><img src="docs/screenshots/store-dashboard-mobile.png" alt="Store app dashboard on a phone" width="230" /><br/><sub><b>Store</b>: dashboard</sub></td>
    <td width="33%" align="center"><img src="docs/screenshots/store-menu-mobile.png" alt="Store app menu on a phone" width="230" /><br/><sub><b>Store</b>: menu</sub></td>
    <td width="33%" align="center"><img src="docs/screenshots/store-new-sale-mobile.png" alt="New sale on a phone" width="230" /><br/><sub><b>Store</b>: new sale</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/store-sales-mobile.png" alt="Sales list on a phone" width="230" /><br/><sub><b>Store</b>: sales</sub></td>
    <td align="center"><img src="docs/screenshots/store-products-mobile.png" alt="Products on a phone" width="230" /><br/><sub><b>Store</b>: products</sub></td>
    <td align="center"><img src="docs/screenshots/store-customers-mobile.png" alt="Customers on a phone" width="230" /><br/><sub><b>Store</b>: customers</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/setup-sign-in-mobile.png" alt="Setup app sign in on a phone" width="230" /><br/><sub><b>Setup</b>: sign in</sub></td>
    <td align="center"><img src="docs/screenshots/setup-register-mobile.png" alt="Setup app sign up on a phone" width="230" /><br/><sub><b>Setup</b>: sign up</sub></td>
    <td align="center"><img src="docs/screenshots/setup-organization-mobile.png" alt="Setup app organization page on a phone" width="230" /><br/><sub><b>Setup</b>: organization</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/home-mobile.png" alt="Website home on a phone" width="230" /><br/><sub><b>Website</b>: home</sub></td>
    <td align="center"><img src="docs/screenshots/website-pricing-mobile.png" alt="Website pricing on a phone" width="230" /><br/><sub><b>Website</b>: pricing</sub></td>
    <td align="center"><img src="docs/screenshots/website-demo-mobile.png" alt="Website demo page on a phone" width="230" /><br/><sub><b>Website</b>: request a demo</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/website-reviews-mobile.png" alt="Website reviews on a phone" width="230" /><br/><sub><b>Website</b>: reviews</sub></td>
    <td align="center"><img src="docs/screenshots/website-faq-mobile.png" alt="Website FAQ on a phone" width="230" /><br/><sub><b>Website</b>: FAQ</sub></td>
    <td></td>
  </tr>
</table>

---

## Features

<table>
<tr><td width="50%" valign="top">

**Inventory**
- Categories, products and product **variants** (sizes, flavours, …)
- Stock is tracked **per branch** for every variant
- **Restocks** from suppliers and **stock adjustments** (damage, counts, …), each approved or rejected
- **Stock requests** between branches: request, approve or reject, fulfil or cancel
- A branch switcher for staff who work in more than one branch

**Sales & customers**
- A new‑sale screen with cash, card and mobile payments
- Refunds on past sales
- Customers with running balances and **credit payments**
- Suppliers list
- Receipts with your own header, footer and an optional tax breakdown

**Team & branches**
- Branches, each with its own stock
- Staff accounts assigned to branches, with branch admins and per‑branch permissions
- An owner (super admin) with full access
- New staff get an email with a sign‑in link and the branches they work in

</td><td width="50%" valign="top">

**Offline‑first**
- Installable **PWA** that opens and works without a connection
- A full local copy of the business in **IndexedDB**, encrypted with AES‑256 via `dexie-encrypted`
- Every change goes into an outbox, and is sent automatically when the device is back online
- Other devices are told about changes straight away over WebSockets, and download only what changed

**Setup app**
- Sign up, email confirmation, sign in and password reset
- A 5‑step business setup wizard
- Logo upload to Cloudinary
- Organization page to review and edit settings, which then sync to every device

**Website**
- Home, pricing, reviews, FAQ and contact pages
- "Request a demo" form, forwarded to the server by a Next.js route handler
- Sign in and Get started buttons that open the setup app
- Per‑page SEO metadata, a sitemap and robots rules

**Server**
- Prices, totals and stock checks decided on the server inside database transactions
- Rate limits on sign‑in, sign‑up, password and demo‑request endpoints, stored in Redis
- Background queues for sync downloads, incoming changes and emails
- HTML emails: confirm email, welcome, password reset, password changed, staff account created, demo requests

</td></tr>
</table>

---

## Tech stack

| Tier | Technology | Notes |
| --- | --- | --- |
| **Store app** | React 19 · Vite 7 · TypeScript | Feature folders (`src/features/*`), installable through `vite-plugin-pwa` |
| **Local database** | Dexie 4 · `dexie-encrypted` · IndexedDB | Encrypted tables for customers, payments, suppliers, settings, the outbox and the signed‑in user |
| **Data & state** | TanStack Query 5 · React Context | `SyncContext` drives the sync, React Query reads from Dexie |
| **Realtime** | Socket.IO client 4 | Namespace `/ws`, authenticated with the sign‑in JWT |
| **Setup app** | React 19 · Vite 7 · Framer Motion | Plain REST calls to the server |
| **Website** | Next.js 16 (App Router) · React 19 · Framer Motion | Static content in `data/`; `/api/demo-requests` forwards the demo form |
| **Forms & validation** | React Hook Form · Zod 4 | A schema for each form and wizard step |
| **Styling** | Tailwind CSS 4 · Lucide icons · React Toastify | |
| **API** | NestJS 11 · TypeScript · Helmet | One module per feature, `class-validator` DTOs |
| **Database** | PostgreSQL · TypeORM 0.3 | Per‑organization version counters for each synced feature |
| **Queues** | Redis · BullMQ | Sync downloads, incoming changes and emails run as jobs |
| **Auth** | JWT · bcrypt | 30‑day sign‑in tokens; short‑lived, single‑purpose link tokens |
| **Email** | Nodemailer (SMTP) | HTML templates in `server/src/mail/templates` |
| **Uploads** | Cloudinary REST API | Uploads are signed on the server; only the URL is stored |

---

## System architecture

```mermaid
flowchart LR
    SITE["Website<br/>Next.js"]
    ONB["Setup app<br/>React · Vite"]

    subgraph device [Each device]
        APP["Store app<br/>React PWA"]
        IDB[("IndexedDB<br/>encrypted copy")]
        APP <--> IDB
    end

    API["Server<br/>NestJS"]
    PG[("PostgreSQL<br/>master copy")]
    REDIS[("Redis<br/>BullMQ queues")]
    SMTP["SMTP"]
    CDN["Cloudinary"]

    SITE -- "POST /demo-requests" --> API
    ONB -- "REST: accounts, settings" --> API
    APP <-- "Socket.IO /ws: sync" --> API
    APP -- "REST: sign in" --> API
    API --> PG
    API <--> REDIS
    API -- "emails" --> SMTP
    API -- "signed logo upload" --> CDN
```

The **server keeps the master copy** in PostgreSQL. Each device keeps a full, encrypted copy for the branches its user works in, so the store app reads and writes locally and never waits on the network.

---

## How sync works

Each synced section of data (branches, products, sales, …, 14 in all) has a **version number** per organization, which goes up every time something in it changes. A device remembers the last version it saw for each section.

```mermaid
sequenceDiagram
    participant App as Store app
    participant WS as Server (Socket.IO /ws)
    participant Q as BullMQ worker
    participant DB as PostgreSQL

    App->>WS: connect with sign-in token
    WS-->>App: authenticated
    App->>WS: sync_init { versions }
    WS->>WS: compare with server versions
    WS-->>App: sync_total (how many chunks to expect)
    WS->>Q: queue download jobs
    Q-->>App: sync_chunk … (only newer rows)
    Q-->>App: server_sync_complete

    Note over App: Offline work goes into the outbox

    App->>WS: client_sync { feature, mutations } (up to 100)
    WS-->>App: client_sync_queued
    WS->>Q: queue the batch
    Q->>DB: check and apply each change in a transaction
    Q-->>App: client_sync_received { successful, failed }
    Q-->>WS: data_changed to the other devices
```

1. **First sign‑in on a device:** the device starts from version 0 everywhere, so the server sends a full copy in chunks while a progress bar fills up.
2. **Working offline:** every change is saved locally and added to the **outbox** (`pending_mutations`).
3. **Back online:** the outbox is sent **one section at a time, dependencies first** (branches → users → categories → products → … → sales), in batches of up to 100.
4. **The server checks each change**, applies it and replies with what succeeded and what failed. Successful changes leave the outbox, and the device stores the server's final version of each record.
5. **Everyone else catches up:** the server sends `data_changed` to the other devices in the organization, and they download only what's newer than their versions.

Besides create and update, devices can send `approve`, `reject`, `fulfill`, `cancel`, `refund` and `transfer` changes, and each section accepts only the kinds that make sense for it.

---

## Keeping data correct

- **The server decides money.** Sale prices, totals, customer balances and stock‑request fulfilment are calculated on the server, inside transactions with row locks. A price changed on a device isn't accepted.
- **Stock is checked** before a sale or a transfer between branches is accepted.
- **Sending the same new record twice saves it once.** New records use a UUID made on the device, so a change re‑sent after a bad connection doesn't duplicate anything.
- **Server time is the official time.** The device's clock is kept only as a note.
- **Devices only download their own organization's data**, and every change is checked against the sender's organization.
- **Plan and expiry are set only by the server**, never taken from a device.
- **Passwords are hashed with bcrypt.** Reset links expire after 1 hour and work once. Email confirmation links expire after 24 hours.
- **Tokens have one job each.** A reset or confirmation link token can't be used to sign in or to open a socket.

---

## Repository layout

```
sync-store/
├── landing/                   # Website (syncstore-landing, this repo)
│   ├── app/                   # App Router pages: home, pricing, reviews, faq, demo, contact, …
│   │   └── api/demo-requests/ # forwards the demo form to the server
│   ├── components/            # header, footer and per‑page sections
│   ├── data/                  # FAQ, plans, POS sections, reviews
│   ├── lib/                   # site URLs, demo form schema
│   └── docs/screenshots/
│
├── client/                    # Store app (syncstore.com-client)
│   ├── public/                # PWA icons, fonts, screenshots
│   └── src/
│       ├── config/            # Dexie database + encryption key
│       ├── pages/             # one component per route
│       └── features/          # feature folders: actions/ · types/ · ui/ · utils/
│           ├── products/ · variants/ · categories/
│           ├── restocks/ · stock-adjustments/ · stock-requests/
│           ├── sales/ · payments/ · customers/ · suppliers/
│           ├── branches/ · users/ · settings/ · reports/
│           ├── auth/ · user/
│           ├── sync/          #   outbox, transformers, apply‑server‑result hooks
│           └── shared/        #   SyncContext, layout, navigation, UI primitives
│
├── onb/                       # Setup app (sync-store-onb)
│   ├── docs/screenshots/
│   └── src/
│       ├── components/        # sign in, register, password reset, setup wizard steps
│       ├── contexts/          # OnboardingContext (wizard state)
│       ├── actions/           # API client
│       └── lib/               # session helpers, zod schemas
│
└── server/                    # Server (sync-store-server)
    └── src/
        ├── auth/              # register, login, verify email, passwords, AuthGuard
        ├── organizations/     # create / read / update the organization
        ├── branches/ · users/ · categories/ · products/ · customers/ · suppliers/ · taxes/
        ├── sales/ · payments/ · restocks/ · stock-adjustments/ · stock-requests/
        ├── sync/              # feature handlers, mutation sanitizer, chunked downloads, queues
        ├── versioning/        # per‑organization feature version counters
        ├── websocket/         # Socket.IO gateway on /ws
        ├── mail/              # email queue, worker and HTML templates
        ├── rate-limit/        # Redis‑backed @RateLimit guard
        ├── uploads/           # signed Cloudinary logo uploads
        └── demo-requests/     # "Request a demo" from the website
```

---

## Getting started

### Prerequisites

- **Node.js 22 LTS** (20.19 or newer) and npm
- **PostgreSQL 14+**
- **Redis 6+**, local or hosted (e.g. Upstash, using its `rediss://` TCP URL)
- (Optional) **SMTP** credentials, e.g. Gmail with an App Password. Without them, emails and their links are written to the server log.
- (Optional) A **Cloudinary** account for logo uploads. Everything else works without it.

### 1. Clone the repos

```bash
mkdir sync-store && cd sync-store
git clone https://github.com/FosterSOAsare/sync-store-server.git server
git clone https://github.com/FosterSOAsare/sync-store-onb.git onb
git clone https://github.com/FosterSOAsare/syncstore.com-client.git client
git clone https://github.com/FosterSOAsare/syncstore-landing.git landing
```

### 2. Database and Redis

```bash
createdb sync_store
docker run -d --name sync-store-redis -p 6379:6379 redis:7
```

Tables are created automatically on startup while `DB_SYNC=true`.

### 3. Server

```bash
cd server
npm install
cp .env.example .env          # fill in DATABASE_URL, JWT_SECRET, FRONTEND_URL, FRONTEND_URL_ALT
npm run start:dev             # http://localhost:8080  (GET / is the health check)
```

### 4. Setup app

```bash
cd onb
npm install
cp .env.example .env          # VITE_API_BASE_URL=http://localhost:8080
npm run dev                   # http://localhost:5174 (fixed port)
```

### 5. Store app

```bash
cd client
npm install
cp .env.example .env
node generate-encryption-key.js   # paste the key into .env as VITE_ENCRYPTION_KEY
npm run dev                       # http://localhost:5173
```

> **Note:** the store app won't open its database without a real `VITE_ENCRYPTION_KEY` (64 hex characters). The placeholder in `.env.example` isn't valid. Use the same key on every deployment: changing it makes the data already stored in browsers unreadable.

### 6. Website

```bash
cd landing
npm install
cp .env.example .env.local
npm run dev                       # http://localhost:3000
```

Then create an account in the setup app, confirm your email (the link is in the server log if SMTP isn't set up), finish the wizard and click **Open store app**.

### Scripts

| Where | Script | What it does |
| --- | --- | --- |
| server | `npm run start:dev` | NestJS in watch mode |
| server | `npm run build` / `npm run start:prod` | Compile to `dist/` and run it |
| server | `npm run seed` | Add sample data to the current organization |
| server | `npm run lint` | ESLint with `--fix` |
| onb, client | `npm run dev` | Vite dev server |
| onb, client | `npm run build` | Type‑check, then build into `dist/` |
| onb, client | `npm run preview` | Serve the production build locally |
| onb, client | `npm run lint` | ESLint |
| landing | `npm run dev` / `npm run build` / `npm run start` | Next.js dev server, production build, and serving that build |

---

## Environment configuration

### Server (`server/.env`)

| Variable | Required | Purpose |
| --- | --- | --- |
| `PORT` | No | HTTP and WebSocket port (default `8080`) |
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `DB_SYNC` | No | Auto‑create tables from entities (default `true`). **Set to `false` in production** |
| `JWT_SECRET` | Yes | Long random secret for signing tokens |
| `FRONTEND_URL` | Yes | Store app URL: CORS and store app links in emails (dev `http://localhost:5173`) |
| `FRONTEND_URL_ALT` | Yes | Setup app URL: CORS and setup links in emails (dev `http://localhost:5174`) |
| `WEBSITE_URL` | No | Landing site, linked from demo request emails (default `http://localhost:3000`) |
| `REDIS_URL` | No | Full Redis URL. Overrides `REDIS_HOST` / `REDIS_PORT` / `REDIS_PASSWORD` / `REDIS_DB` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | For email | SMTP server (port defaults to `465`) |
| `SMTP_USER` / `SMTP_PASSWORD` | For email | SMTP login. If left blank, emails are logged instead of sent |
| `MAIL_FROM` / `MAIL_FROM_NAME` | No | Sender address and name (default name `SyncStore`) |
| `SUPPORT_EMAIL` | No | Shown in email footers; receives demo request notifications |
| `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | For logos | Cloudinary credentials (the secret stays on the server) |
| `CLOUDINARY_FOLDER` | No | Top‑level Cloudinary folder (default `sync-store`) |

### Setup app (`onb/.env`)

| Variable | Purpose |
| --- | --- |
| `VITE_API_BASE_URL` | Server URL (default `http://localhost:8080`) |
| `VITE_CLIENT_APP_URL` | Store app URL, opened by "Open store app" (default `http://localhost:5173`) |

### Store app (`client/.env`)

| Variable | Purpose |
| --- | --- |
| `VITE_API_URL` | Server URL, e.g. `http://localhost:8080` |
| `VITE_ENCRYPTION_KEY` | 64‑character hex key for the local database. Generate one with `node generate-encryption-key.js` |

### Website (`landing/.env.local`)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | This site's public URL, for canonical links, Open Graph, sitemap and robots (default `http://localhost:3000`) |
| `NEXT_PUBLIC_ONBOARDING_URL` | Setup app, opened by Sign in and Get started (default `http://localhost:5174`) |
| `API_URL` | Server URL, used only on the Next.js server to forward demo requests (default `http://localhost:8080`) |

> **Secrets never go in the repo.** `.env` files are gitignored and only `.env.example` is committed.

---

## API reference

### REST

Authenticated routes need an `Authorization: Bearer <sign-in JWT>` header.

| Method | Route | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/` | Public | Health check |
| `POST` | `/auth/register` | Public | Create an owner account and send the confirmation email |
| `POST` | `/auth/login` | Public | Returns `{ user, organization, token }` (30‑day JWT) |
| `GET` | `/auth/me` | Signed in | Current user, with `is_verified` and `has_organization` |
| `POST` | `/auth/verify-email` | Public | Confirm an email address with the link's token |
| `POST` | `/auth/resend-verification` | Signed in | Send a new confirmation email |
| `POST` | `/auth/reset-password` | Public | Send a password reset link (`app`: `client` or `onboarding`) |
| `POST` | `/auth/set-password` | Public | Set a new password with a reset token |
| `POST` | `/auth/change-password` | Signed in | Change the current password |
| `POST` | `/organizations` | Signed in | Create the user's organization (email must be confirmed) |
| `GET` / `PATCH` | `/organizations/me` | Signed in | Read or update the organization's settings |
| `PATCH` | `/organizations/me/default-user-password` | Signed in | Set the default password for new staff |
| `POST` | `/uploads/logo` | Signed in | Upload a logo (PNG, JPG, WebP or GIF, max 2 MB). Returns `{ url }` |
| `POST` | `/demo-requests` | Public | "Request a demo" form from the website |

### WebSocket (Socket.IO, namespace `/ws`)

Connect with `auth: { token: <sign-in JWT> }`.

| Direction | Event | Purpose |
| --- | --- | --- |
| Server → app | `authenticated` / `auth_error` | Result of the handshake |
| Server → app | `sync_user` | The signed‑in user's details, branches and permissions |
| App → server | `sync_init { versions }` | Ask for everything newer than these versions |
| Server → app | `sync_total` · `sync_chunk` · `server_sync_complete` | The download, in chunks |
| App → server | `client_sync { feature, mutations }` | Send a batch from the outbox |
| Server → app | `client_sync_queued` · `client_sync_received` | Batch accepted, then the result for each change |
| Server → app | `data_changed { features }` | Something changed on another device; sync again |

---

## Deployment

| Piece | Host | Notes |
| --- | --- | --- |
| Website | Vercel or any Next.js host | Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ONBOARDING_URL` and `API_URL`, then rebuild (the `NEXT_PUBLIC_*` values are baked in at build time) |
| Store app | Any static host (e.g. Vercel) | Rewrite every path to `index.html`. Set `VITE_API_URL` and the **same** `VITE_ENCRYPTION_KEY` for every build |
| Setup app | Any static host | Set `VITE_API_BASE_URL` and `VITE_CLIENT_APP_URL` |
| Server | Any Node host that allows WebSockets | `npm run build` then `npm run start:prod`. Set `FRONTEND_URL` and `FRONTEND_URL_ALT` to the live apps for CORS and email links |
| Database | Managed PostgreSQL | Set `DB_SYNC=false` once the schema is in place |
| Redis | Managed Redis | Use the TCP URL. BullMQ polls continuously, so a free plan's daily command limit can run out and stall syncing |

---

## Project status & roadmap

**Working from start to finish:** sign‑up with email confirmation · password reset · the 5‑step setup wizard and organization page · logo uploads · offline sales, inventory, customers and suppliers · branch‑to‑branch stock requests · two‑way sync with chunked downloads and live change notifications · server‑side pricing and stock checks · transactional emails · rate limiting.

**Placeholders:** the store app's **dashboard** and **reports** pages show sample data and aren't connected to real figures yet.

**Ideas for later:**
- Connect the dashboard and reports to real sales and stock data
- Check staff roles and branch permissions on the server for every change, not just in the app
- Download only the branches a device's user works in, and page large downloads
- Paid plans and billing
- Unit and end‑to‑end tests

---

## Author

Built by **Foster Solomon Owusu Asare** ([@FosterSOAsare](https://github.com/FosterSOAsare)).

---

## License

No license has been chosen yet, so all rights are reserved. Third‑party dependencies keep their own licenses.
