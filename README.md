# ShipFast SaaS Lite

**Free Next.js SaaS starter for developers who want to ship fast.**

👉 <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f">
 <strong>Get ShipFast SaaS Pro ($199 – one-time payment)</strong>
</a>


Authentication and UI scaffolding included.  
Full Stripe subscription billing is available in the Pro version.

---

## What is this?

**ShipFast SaaS Lite** is the free, open-source version of **ShipFast SaaS**,  
a production-focused starter kit designed to help solo developers and early-stage founders launch SaaS products faster.

This Lite version provides:
- Authentication setup
- Application structure
- Dashboard and pricing UI
- Clean, documented project foundation

If you want **ready-to-use Stripe subscriptions, billing logic, and webhooks**, check out the **Pro version**.

👉 <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f">
<strong>Get ShipFast SaaS Pro ($199 – one-time payment)</strong>
</a>


---

## Who is this for?

This project is for developers who:

- Are building a SaaS with **Next.js**
- Want to avoid rewriting auth and UI scaffolding
- Plan to monetize with **subscriptions**
- Prefer a clean, understandable codebase over bloated boilerplates

If you've ever spent days just setting up auth and project structure, this is for you.

---

## What's included in Lite

✅ Next.js App Router setup  
✅ Email + OAuth authentication  
✅ Public pages (Landing, Pricing)  
✅ Protected dashboard layout  
✅ Basic user session handling  
✅ Clean folder structure  
✅ Environment variable examples  
✅ MIT licensed (Lite only)

---

## What's NOT included (Pro only)

## Lite vs Pro

| Feature | Lite | Pro |
|------|:---:|:---:|
| Auth & UI scaffolding | ✅ | ✅ |
| Stripe subscriptions | ❌ | ✅ |
| Checkout & billing portal | ❌ | ✅ |
| Webhooks & subscription status | ❌ | ✅ |
| Production billing workflows | ❌ | ✅ |

👉 **All of the above are included in ShipFast SaaS Pro**  
👉 <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f">
<strong>Get ShipFast SaaS Pro ($199 – one-time payment)</strong>
</a>


---

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **NextAuth**
- **Prisma + PostgreSQL**
- **Tailwind CSS**
- **Vercel-ready**

The stack is intentionally boring and proven.

---

## Project Structure

```

app/
├─ (public)/
│  └─ page.tsx          # Landing page
├─ pricing/
│  └─ page.tsx          # Pricing page
├─ (auth)/
│  └─ login/
│     └─ page.tsx       # Login page
├─ dashboard/
│  └─ page.tsx          # Protected dashboard
├─ lib/
│  ├─ auth.ts           # Auth configuration
│  └─ db.ts             # Database client
└─ prisma/
   └─ schema.prisma     # Database schema


````

The goal is clarity, not abstraction.

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/LeeSeokBin/shipfast-saas-lite.git
cd shipfast-saas-lite
````

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
* Auth secrets
* OAuth credentials (optional)

### 4. Run locally

```bash
npm run dev
```

App will be available at `http://localhost:3000`.

---

## License

This Lite version is released under the **MIT License**.

You are free to:

* Use it
* Modify it
* Learn from it

**Commercial SaaS usage with subscriptions requires the Pro version.**

---

## ShipFast SaaS Pro

The Pro version is designed for developers who want to **start charging users immediately**.

### Pro includes:

* Full Stripe subscription integration
* Webhooks & billing edge cases
* Feature gating (Free / Pro)
* Customer portal
* Production-ready deployment guide
* Clear billing documentation

👉 <a href="https://shipfast-app.lemonsqueezy.com/checkout/buy/891c501e-967a-47cb-b89f-10f2d17d727f">
<strong>Get ShipFast SaaS Pro ($199 – one-time payment)</strong>
</a>


---

## Philosophy

ShipFast is not about adding more features.
It's about removing everything that slows you down.

**Build less. Ship faster. Get paid sooner.**

---

## Roadmap

* ❌ Feature requests
* ❌ Community voting
* ❌ Endless abstraction

ShipFast focuses on stability and clarity.

---

## Author

Built by SeokBin Lee.  
Indie developer focused on shipping practical SaaS products.

If this repo helped you, consider starring it ⭐
It helps others discover the project.


---
