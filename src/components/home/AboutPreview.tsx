import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SiteImage from "@/components/SiteImage";
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

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative hidden aspect-[16/10] lg:block">
              <SiteImage
                src="/images/industrial-engineering.jpg"
                alt="Industrial engineering facility representing PRO-INTEQ engineering environment"
                className="h-full"
              />
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-brand-900">
                Engineering with Precision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                From initial consultation through design, procurement,
                installation, and ongoing maintenance, PRO-INTEQ delivers
                integrated engineering services across six core sectors with
                disciplined execution and technical excellence.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-brand-600">6+</p>
                  <p className="text-xs text-gray-500">Core Sectors</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-600">End-to-End</p>
                  <p className="text-xs text-gray-500">Project Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
