import Link from "next/link";
import { DEMO_MODE, PRO_BUY_URL } from "@/lib/constants";
import LoginForm from "./LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ callbackUrl?: string }>;
}) {
  if (DEMO_MODE) {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-neutral-900">
            Login is disabled on the demo site
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            This demo is UI-only. To test authentication and API keys, run the
            repo locally.
          </p>

          <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700">
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

  const params = (await searchParams) ?? {};
  const callbackUrl = params.callbackUrl ?? "/dashboard";

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-16">
      <LoginForm callbackUrl={callbackUrl} />
    </main>
  );
}
