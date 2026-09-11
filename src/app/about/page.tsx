import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CoreValues from "@/components/home/CoreValues";
import OrganizationStructure from "@/components/OrganizationStructure";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "Learn about PRO-INTEQ — a Tanzanian private limited engineering company providing multidisciplinary engineering, contracting, consulting, and supply services across Mechanical, Electrical, Telecommunication, Civil Construction, ICT, and General Supply sectors.",
};

export default function AboutPage() {
  return (
    <PageLayout>
       <PageHero
        label="About Us"
        title="About PRO-INTEQ"
        description={COMPANY.description}
        bgImage="/images/engineering-consultancy.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-900">Company Introduction</h2>
              <p className="mt-4 leading-relaxed text-gray-600">{COMPANY.description}</p>
              <p className="mt-4 leading-relaxed text-gray-600">{COMPANY.positioning}</p>
              <p className="mt-4 leading-relaxed text-gray-600">{COMPANY.registration}</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <h2 className="text-xl font-bold text-brand-900">
                Message from the Managing Director
              </h2>

              <p className="mt-4 text-lg font-semibold text-brand-600">
                Precision in every project
              </p>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  We believe reliable infrastructure is built on sound engineering,
                  honest advice, and disciplined execution.
                </p>
                <p>Engineering with honesty, ensuring reliability.</p>
                <p>
                  Every engagement is an opportunity to deliver technical excellence
                  that our clients can depend on.
                </p>
              </div>

              <p className="mt-6 text-sm font-semibold text-brand-900">
                Eng. Moses Prosper
                <span className="block font-normal text-gray-500">
                  Managing Director
                </span>
                <span className="block font-normal text-gray-500">{COMPANY.name}</span>
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{COMPANY.vision}</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{COMPANY.mainObjective}</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-brand-900">Company Capabilities</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {COMPANY.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 px-5 py-4 text-sm text-gray-700"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-2xl bg-brand-950 px-8 py-10">
            <h3 className="text-xl font-bold text-white">Our Engineering Philosophy</h3>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-brand-300">
              Precision in every project
            </p>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-300">
              This principle guides how PRO-INTEQ approaches engineering and project delivery —
              combining sound engineering, honest professional advice, and disciplined execution
              to deliver technical excellence our clients can depend on.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-brand-900">Organizational Structure</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
              PRO-INTEQ&apos;s organizational structure reflects the company&apos;s management
              and operational organization, supporting the delivery of multidisciplinary
              engineering services across its core sectors.
            </p>
            <div className="mt-6">
              <OrganizationStructure />
            </div>
          </div>
        </div>
      </section>

      <CoreValues />
    </PageLayout>
  );
}
