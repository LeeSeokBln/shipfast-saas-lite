export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">ShipFast SaaS Lite</h1>
      <p className="mt-3 text-neutral-700">
        Free Next.js SaaS starter scaffold. Billing is available in Pro.
      </p>

      <div className="mt-6 flex gap-3">
        <a className="rounded-md border px-4 py-2 text-sm" href="/pricing">
          Pricing
        </a>
        <a className="rounded-md border px-4 py-2 text-sm" href="/dashboard">
          Dashboard
        </a>
      </div>
    </main>
  );
}
