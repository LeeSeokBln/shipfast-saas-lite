# ShipFast SaaS Lite

**Free, open-source Next.js SaaS starter.**
A clean foundation to start building a real SaaS—without billing complexity.

**Live Demo:** [https://shipfast-saas-lite.vercel.app/](https://shipfast-saas-lite.vercel.app/)

👉 **Upgrade to Pro (Stripe subscriptions included)** <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f"> <strong>Get ShipFast SaaS Pro ($199 · one-time payment)</strong> </a>

---

## What is ShipFast SaaS Lite?

**ShipFast SaaS Lite** is the **free and open-source foundation** of ShipFast SaaS.

It gives you everything you need to start building a SaaS **before billing**:

* Authentication
* Application structure
* Dashboard layout
* Clean, understandable project setup

Lite is intentionally focused on **clarity and correctness**, not features.

If you want **subscription billing, webhooks, and production-ready monetization**, that’s what **Pro** is for.

---

## Who is this for?

ShipFast SaaS Lite is for developers who:

* Are building a SaaS with **Next.js (App Router)**
* Want a clean starting point instead of a bloated boilerplate
* Prefer understanding their codebase over copy-pasting magic
* Plan to monetize later, but want to build first

If you’ve ever thought

> “I’ll deal with billing later—right now I just need a solid base”

this repo is for you.

---

## What’s included in Lite

* ✅ Next.js App Router setup
* ✅ Email-based authentication
* ✅ Public pages (Landing, Pricing)
* ✅ Protected dashboard layout
* ✅ Example SaaS module: API Keys (free limit = 1)
* ✅ Basic user session handling
* ✅ Prisma setup (no billing models)
* ✅ Clean folder structure
* ✅ Environment variable examples
* ✅ MIT License (Lite only)

Lite is designed to be **forked, extended, and understood**.

---

## What’s NOT included (Pro only)

Lite intentionally does **not** include any billing logic.

| Feature                      | Lite | Pro |
| ---------------------------- | :--: | :-: |
| Auth & app scaffolding       |   ✅  |  ✅  |
| Example SaaS structure       |   ✅  |  ✅  |
| API Keys module (free limit) |   ✅  |  ✅  |
| Stripe subscriptions         |   ❌  |  ✅  |
| Checkout & billing portal    |   ❌  |  ✅  |
| Webhooks & idempotency       |   ❌  |  ✅  |
| Subscription status syncing  |   ❌  |  ✅  |
| Feature gating (Free / Pro)  |   ❌  |  ✅  |
| Production billing workflows |   ❌  |  ✅  |

👉 **All billing-related functionality lives in ShipFast SaaS Pro** <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f"> <strong>Get ShipFast SaaS Pro ($199 · one-time payment)</strong> </a>

---

## Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **Auth.js (NextAuth)**
* **Prisma**
* **Tailwind CSS**
* **Vercel-ready**

No experimental tech. No abstractions for the sake of abstractions.

---

## Project Structure

```text
app/
├─ (public)/
│  └─ page.tsx          # Landing page
├─ pricing/
│  └─ page.tsx          # Pricing page (CTA only)
├─ (auth)/
│  └─ login/
│     └─ page.tsx       # Login page
├─ dashboard/
│  └─ page.tsx          # Protected dashboard
│  └─ keys/page.tsx     # API Keys module (Lite)
├─ lib/
│  ├─ auth.ts           # Auth configuration
│  └─ db.ts             # Prisma client
└─ prisma/
   └─ schema.prisma     # Database schema
```

The goal is **readability over cleverness**.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/LeeSeokBin/shipfast-saas-lite.git
cd shipfast-saas-lite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Fill in:

* Database URL
* Auth secret
* OAuth credentials (optional)

### 4. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`

---

## When should you upgrade to Pro?

Upgrade to **ShipFast SaaS Pro** when you’re ready to:

* Charge users
* Add Stripe subscriptions
* Handle webhooks correctly
* Gate features by subscription status
* Avoid billing edge-case bugs

Pro is not “more UI”.
It’s **billing correctness and production architecture**.

👉 <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f"> <strong>Get ShipFast SaaS Pro ($199 · one-time payment)</strong> </a>

---

## Lite → Pro conversion trigger (API Keys)

Lite includes an example SaaS feature module (API Keys) with a Free limit (1 key).
Pro unlocks unlimited keys, rotation, export, and Stripe subscription gating.

---

## Philosophy

ShipFast is about **removing friction**, not adding features.

* Fewer abstractions
* Fewer decisions
* Less setup time

**Build less. Ship faster. Get paid sooner.**

---

## License

This Lite version is released under the **MIT License**.

You are free to use it, modify it, and learn from it.

Commercial SaaS usage **with subscriptions** requires the Pro version.

---

## Author

Built by **SeokBin Lee**
Indie developer focused on shipping practical SaaS products.

If this repository helped you, consider starring it ⭐
It helps other developers find it.