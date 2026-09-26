"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { COMPANY } from "@/lib/company";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <main id="main-content" className="flex min-h-screen items-center bg-white px-4 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">
          {COMPANY.shortName}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-brand-900">Something went wrong</h1>
        <p className="mt-4 text-gray-600">
          This page could not be displayed. Please try again, or contact us at{" "}
          <a href={`mailto:${COMPANY.contact.email}`} className="font-semibold text-brand-600">
            {COMPANY.contact.email}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className="rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-gray-300 px-8 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-gray-50"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
