import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipFast SaaS Lite",
  description: "Modern SaaS starter scaffold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-950 antialiased`}>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
        <header className="sticky top-0 z-20 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-sm font-semibold tracking-tight">
              ShipFast SaaS Lite
            </a>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-neutral-600 transition hover:text-neutral-950" href="/pricing">
                Pricing
              </a>
              <a className="rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950" href="/dashboard">
                Dashboard
              </a>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

