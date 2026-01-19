"use client";

import { useEffect, useMemo, useState } from "react";
import { PRO_BUY_URL } from "@/lib/constants";

type ApiKey = {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  revokedAt: string | null;
};

type ApiResponse = {
  keys: ApiKey[];
};

export default function KeysClient() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [name, setName] = useState("");
  const [plainKey, setPlainKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const activeCount = useMemo(
    () => keys.filter((key) => !key.revokedAt).length,
    [keys]
  );

  const loadKeys = async () => {
    const res = await fetch("/api/keys", { cache: "no-store" });
    if (!res.ok) return;
    const data = (await res.json()) as ApiResponse;
    setKeys(data.keys);
  };

  useEffect(() => {
    void loadKeys();
  }, []);

  const onCreate = async () => {
    setLoading(true);
    setError(null);
    setPlainKey(null);

    try {
      const res = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (res.status === 403) {
        const data = (await res.json()) as { error?: string };
        setError(
          data.error ??
            "Free plan allows only 1 API key. Upgrade to Pro for unlimited keys."
        );
        return;
      }

      if (!res.ok) {
        setError("Failed to create key. Try again.");
        return;
      }

      const data = (await res.json()) as { key: ApiKey; plainKey: string };
      setPlainKey(data.plainKey);
      setName("");
      await loadKeys();
    } finally {
      setLoading(false);
    }
  };

  const onRevoke = async (id: string) => {
    await fetch(`/api/keys/${id}/revoke`, { method: "POST" });
    await loadKeys();
  };

  return (
    <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Your API keys</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Free plan supports 1 active key. Pro unlocks unlimited keys,
            rotate, and export.
          </p>
        </div>
        <div className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
          Active keys: {activeCount} / 1
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Key name (e.g. Production)"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
        />
        <button
          type="button"
          onClick={onCreate}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Create key
        </button>
      </div>

      {plainKey && (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <p className="font-semibold">Your new API key</p>
          <p className="mt-1 break-all font-mono text-xs">{plainKey}</p>
          <button
            type="button"
            onClick={() => void navigator.clipboard.writeText(plainKey)}
            className="mt-3 inline-flex items-center rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Copy key
          </button>
          <p className="mt-2 text-xs text-emerald-800">
            This key is shown once. Store it somewhere safe.
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Upgrade required</p>
          <p className="mt-1">{error}</p>
          <a
            href={PRO_BUY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white"
          >
            Unlock Pro features
          </a>
        </div>
      )}

      <div className="mt-6 grid gap-3">
        {keys.map((key) => (
          <div
            key={key.id}
            className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold text-neutral-900">{key.name}</p>
              <p className="text-xs text-neutral-500">
                {key.prefix} • Created{" "}
                {new Date(key.createdAt).toLocaleDateString()}
              </p>
              {key.revokedAt && (
                <p className="mt-1 text-xs text-neutral-400">
                  Revoked {new Date(key.revokedAt).toLocaleDateString()}
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-500"
              >
                Rotate (Pro)
              </button>
              <button
                type="button"
                disabled
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-500"
              >
                Export (Pro)
              </button>
              {!key.revokedAt && (
                <button
                  type="button"
                  onClick={() => void onRevoke(key.id)}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900"
                >
                  Revoke
                </button>
              )}
            </div>
          </div>
        ))}
        {keys.length === 0 && (
          <div className="rounded-2xl border border-dashed border-neutral-200 p-6 text-sm text-neutral-500">
            No API keys yet. Create your first key to get started.
          </div>
        )}
      </div>
    </div>
  );
}
