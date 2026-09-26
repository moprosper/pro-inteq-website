import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheckIcon } from "@/components/icons";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Health, Safety & Environment",
  description:
    "PRO-INTEQ is committed to health, safety, and environmental responsibility across all engineering operations — protecting people, communities, and the environment through safe and responsible practices.",
  path: "/hse",
});

export default function HsePage() {
  return (
    <PageLayout>
      <PageHero
        label="Health, Safety & Environment"
        title="Our HSE Commitment"
        description={COMPANY.hseSummary}
        bgImage={IMAGES.siteSafety.src}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="HSE Policy" title="Our Commitments" />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {COMPANY.hsePolicy.map((point) => (
              <li key={point.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <ShieldCheckIcon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-brand-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{point.description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl bg-brand-900 px-6 py-12 text-center sm:px-8">
            <h2 className="text-2xl font-bold text-white">Working safely, by default</h2>
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
