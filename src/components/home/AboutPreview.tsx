import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/company";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About PRO-INTEQ"
          title="A Trusted Tanzanian Engineering Company"
          description={COMPANY.description}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-gray-600">{COMPANY.positioning}</p>
            <p className="mt-4 leading-relaxed text-gray-600">
              {COMPANY.registration} We provide Electrical, Telecommunication,
              Civil Construction, Mechanical, ICT and Supply services to clients
              across Tanzania and the wider region.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Learn more about us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {COMPANY.mainObjective}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-900">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {COMPANY.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
