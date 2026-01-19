import { requireUser } from "@/lib/guards";
import KeysClient from "./KeysClient";

export default async function KeysPage() {
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
