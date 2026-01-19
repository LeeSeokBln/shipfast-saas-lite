"use client";

import { useEffect, useState } from "react";

type LoginFormProps = {
  callbackUrl: string;
};

export default function LoginForm({ callbackUrl }: LoginFormProps) {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const res = await fetch("/api/auth/csrf", { cache: "no-store" });
        const data = (await res.json()) as { csrfToken?: string };
        setCsrfToken(data.csrfToken ?? null);
      } catch {
        setCsrfToken(null);
      }
    };
    loadToken();
  }, []);

  return (
    <div className="w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">Sign in</h1>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          Demo login
        </span>
      </div>
      <p className="mt-2 text-sm text-neutral-600">
        Use any email to access the Lite dashboard.
      </p>
      <form
        className="mt-6 grid gap-4"
        method="post"
        action="/api/auth/callback/credentials"
      >
        <input type="hidden" name="csrfToken" value={csrfToken ?? ""} />
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <label className="grid gap-2 text-sm font-medium text-neutral-700">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-700">
          Name (optional)
          <input
            name="name"
            type="text"
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
          />
        </label>
        <button
          type="submit"
          disabled={!csrfToken}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
