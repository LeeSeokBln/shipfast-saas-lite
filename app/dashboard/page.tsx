import { DEMO_MODE, PRO_BUY_URL } from "@/lib/constants";
import { requireUser } from "@/lib/guards";

export default async function DashboardPage() {
  if (DEMO_MODE) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Demo mode is UI-only. Run locally to unlock login and API keys.
        </p>

        <section className="mt-8 rounded-xl border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">API Keys</h2>
            <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
              Locked on demo
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-700">
            Keys are disabled on the demo site. Run locally to test key creation,
            revoke, and limits.
          </p>
          <a
            href={PRO_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Upgrade to Pro ($199)
          </a>
        </section>

        <section className="mt-8 rounded-xl border p-6 bg-neutral-50">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Billing</h2>
            <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold">
              Pro-only
            </span>
          </div>

          <p className="mt-2 text-sm text-neutral-700">
            Stripe subscriptions, webhooks, and production-ready billing workflows
            are available in Pro.
          </p>

          <a
            href={PRO_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
          >
            Unlock with Pro ($199)
          </a>
        </section>
      </main>
    );
  }

  const user = await requireUser();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Welcome, {user.name ?? user.email}. This is your Lite dashboard.
      </p>

      <section className="mt-8 rounded-xl border border-neutral-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">API Keys</h2>
          <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
            Free limit: 1 key
          </span>
        </div>
        <p className="mt-2 text-sm text-neutral-700">
          Create a single API key in Lite. Pro unlocks unlimited keys, rotate,
          and export.
        </p>
        <a
          href="/dashboard/keys"
          className="mt-4 inline-block rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-300 hover:text-neutral-950"
        >
          Open API Keys
        </a>
      </section>

      <section className="mt-8 rounded-xl border p-6 bg-neutral-50">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Billing</h2>
          <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold">
            Pro-only
          </span>
        </div>

        <p className="mt-2 text-sm text-neutral-700">
          Stripe subscriptions, webhooks, and production-ready billing workflows
          are available in Pro.
        </p>

        <a
          href={PRO_BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Unlock with Pro ($199)
        </a>
      </section>
    </main>
  );
}
