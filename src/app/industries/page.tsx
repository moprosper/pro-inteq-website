import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Industries We Serve | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "PRO-INTEQ serves telecommunications, construction, government institutions, industrial and commercial facilities, private organizations, infrastructure projects, and energy & electrical infrastructure across Tanzania.",
};

const industryDescriptions: Record<string, string> = {
  Telecommunications:
    "Telecom infrastructure, BTS installation, fiber optic networks, and integrated site maintenance.",
  Construction:
    "Civil works, tower erection, building construction, and infrastructure development.",
  "Government Institutions":
    "Reliable engineering and technical services for public institutions and infrastructure programmes.",
  "Industrial Facilities":
    "Mechanical, electrical, and automation support for industrial plants and facilities.",
  "Commercial Facilities":
    "Engineering, ICT, and security systems for commercial buildings and businesses.",
  "Private Organizations":
    "Tailored engineering and consulting services for private clients and developments.",
  "Infrastructure Projects":
    "Multidisciplinary engineering for infrastructure development and public works.",
  "Energy & Electrical Infrastructure":
    "Power generation, distribution, substations, and renewable energy solutions.",
};

export default function IndustriesPage() {
  return (
    <PageLayout>
       <PageHero
        label="Industries We Serve"
        title="Sectors We Support"
        description="PRO-INTEQ delivers engineering solutions to a broad range of clients and sectors, providing integrated technical services tailored to each industry's requirements."
        bgImage="/images/industrial-engineering.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Sectors"
            title="Built for Diverse Industries"
            description="From telecom operators to government institutions, our multidisciplinary capabilities serve the full spectrum of engineering and infrastructure clients."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.industries.map((industry) => (
              <div
                key={industry}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-brand-900">{industry}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {industryDescriptions[industry] ?? COMPANY.positioning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
