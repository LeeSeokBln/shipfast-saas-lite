import { PRO_BUY_URL } from "@/lib/constants";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Lite is free. Pro includes billing and production-ready workflows.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Lite */}
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Lite</h2>
          <p className="mt-2 text-3xl font-bold">$0</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>✅ Auth scaffolding</li>
            <li>✅ Dashboard UI</li>
            <li>❌ Billing</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="mt-2 text-3xl font-bold">$199</p>
          <p className="mt-1 text-sm text-neutral-600">One-time payment</p>

          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>✅ Stripe subscriptions</li>
            <li>✅ Webhooks & billing logic</li>
            <li>✅ Feature gating</li>
          </ul>

          <a
            href={PRO_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full rounded-md bg-black px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Get ShipFast SaaS Pro
          </a>
        </div>
      </div>
    </main>
  );
}
