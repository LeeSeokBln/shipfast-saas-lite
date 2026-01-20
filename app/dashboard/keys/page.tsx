import Link from "next/link";
import { DEMO_MODE, PRO_BUY_URL } from "@/lib/constants";
import { requireUser } from "@/lib/guards";
import KeysClient from "./KeysClient";

export default async function KeysPage() {
  if (DEMO_MODE) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-neutral-500">API Keys</p>
          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
            API Keys are disabled on the demo
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            This demo is UI-only. Run locally to test key creation, revoke, and
            limits.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <pre className="whitespace-pre-wrap rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700">
{`git clone https://github.com/LeeSeokBin/shipfast-saas-lite.git
cd shipfast-saas-lite
cp .env.example .env
npm install
npx prisma migrate dev --name add_api_keys
npm run dev`}
          </pre>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <Link className="text-neutral-700 underline" href="/pricing">
              Go to Pricing
            </Link>
            <a className="text-neutral-700 underline" href={PRO_BUY_URL}>
              Get Pro
            </a>
          </div>
        </div>
      </main>
    );
  }

  await requireUser();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div>
        <p className="text-sm font-semibold text-neutral-500">API Keys</p>
        <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
          Secure access for your SaaS
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          Keys are stored hashed. The raw key is shown only once at creation.
        </p>
      </div>

      <KeysClient />
    </main>
  );
}
