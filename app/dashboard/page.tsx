import { PRO_BUY_URL } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-sm text-neutral-600">
        This is the Lite dashboard scaffold.
      </p>

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
