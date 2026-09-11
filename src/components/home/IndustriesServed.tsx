import SectionHeading from "@/components/SectionHeading";
import SiteImage from "@/components/SiteImage";
import { COMPANY } from "@/lib/company";

const industryImages: Record<string, string> = {
  Telecommunications: "/images/telecommunication-tower.jpg",
  Construction: "/images/civil-construction.jpg",
  "Government Institutions": "/images/engineering-team.jpg",
  "Industrial Facilities": "/images/industrial-engineering.jpg",
  "Commercial Facilities": "/images/hvac-mechanical.jpg",
  "Private Organizations": "/images/engineering-consultancy.jpg",
  "Infrastructure Projects": "/images/civil-construction.jpg",
  "Energy & Electrical Infrastructure": "/images/electrical-substation.jpg",
};

export default function IndustriesServed() {
  return (
    <section className="relative bg-brand-900 py-24">
      <div className="absolute inset-0 opacity-10">
        <SiteImage
          src="/images/industrial-engineering.jpg"
          alt=""
          className="h-full w-full"
          objectFit="cover"
          overlay={false}
          rounded={false}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industries Served"
          title="Supporting Key Sectors Across Tanzania"
          description="We partner with organizations across critical industries, delivering engineering solutions tailored to each sector's requirements."
          theme="dark"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY.industries.map((industry) => (
            <div
              key={industry}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/10"
            >
              <div className="relative h-32 overflow-hidden">
                <SiteImage
                  src={industryImages[industry] || "/images/industrial-engineering.jpg"}
                  alt={`${industry} sector imagery`}
                  className="h-full"
                  overlay={false}
                  rounded={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/40 to-transparent" />
              </div>
              <div className="flex items-center gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-semibold text-white">{industry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
