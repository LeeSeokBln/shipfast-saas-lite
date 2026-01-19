export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
            <span className="size-1.5 rounded-full bg-indigo-500" />
            Modern SaaS Starter
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Launch faster, keep growing
            <span className="block text-indigo-600">with a modern SaaS core</span>
          </h1>
          <p className="mt-5 text-base text-neutral-600 sm:text-lg">
            A lightweight template that covers auth, billing, and dashboard essentials.
            Validate and iterate your product in days, not weeks.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
              href="/pricing"
            >
              View Pricing
            </a>
            <a
              className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900"
              href="/dashboard"
            >
              Demo Dashboard
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["24h", "Initial setup"],
              ["3x", "Ship faster"],
              ["99.9%", "Uptime target"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="text-xl font-semibold text-neutral-900">{value}</p>
                <p className="mt-1 text-xs text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-lg shadow-indigo-100">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">Weekly active users</p>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                +18.4%
              </span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-neutral-950">12,430</p>
            <div className="mt-6 h-24 rounded-xl bg-gradient-to-r from-indigo-500/10 via-indigo-500/30 to-indigo-500/10" />
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-500">
              <div className="rounded-lg border border-neutral-200 px-3 py-2">
                <p className="text-neutral-900">3.2%</p>
                Conversion
              </div>
              <div className="rounded-lg border border-neutral-200 px-3 py-2">
                <p className="text-neutral-900">4.7k</p>
                New signups
              </div>
              <div className="rounded-lg border border-neutral-200 px-3 py-2">
                <p className="text-neutral-900">87%</p>
                Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Modular architecture",
            desc: "Keep core features isolated for faster experiments and growth.",
          },
          {
            title: "Design system ready",
            desc: "Token-based styling keeps UI consistent and modern.",
          },
          {
            title: "Metrics built in",
            desc: "Track product performance instantly from the dashboard.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold text-neutral-900">{card.title}</p>
            <p className="mt-3 text-sm text-neutral-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
