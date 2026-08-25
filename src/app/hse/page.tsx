import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Health, Safety & Environment | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "PRO-INTEQ is committed to health, safety, and environmental responsibility across all engineering operations — protecting people, communities, and the environment through safe and responsible practices.",
};

export default function HsePage() {
  return (
    <PageLayout>
      <PageHero
        label="Health, Safety & Environment"
        title="Our HSE Commitment"
        description={COMPANY.hseSummary}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY.hsePolicy.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-900 px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white">Working safely, by default</h3>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Safety and environmental responsibility are part of how PRO-INTEQ operates on every
              project site and in every discipline we deliver.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-gray-100"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
