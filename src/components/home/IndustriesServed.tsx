import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/company";

export default function IndustriesServed() {
  return (
    <section className="bg-brand-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industries Served"
          title="Supporting Key Sectors Across Tanzania"
          description="We partner with organizations across critical industries, delivering engineering solutions tailored to each sector's requirements."
          theme="dark"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-semibold text-white">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
