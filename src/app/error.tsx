"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { buttonBase } from "@/components/ui";
import { COMPANY } from "@/lib/company";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <main id="main-content" className="flex min-h-screen items-center bg-white px-4 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{COMPANY.shortName}</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy">Something went wrong</h1>
        <p className="mt-4 text-muted">
          This page could not be displayed. Please try again, or contact us at{" "}
          <a href={`mailto:${COMPANY.contact.email}`} className="font-semibold text-primary">
            {COMPANY.contact.email}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => retry()} className={`${buttonBase} bg-primary text-white hover:bg-primary-hover`}>
            Try Again
          </button>
          <Link href="/" className={`${buttonBase} border border-ink/25 text-ink hover:border-primary hover:text-primary`}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
