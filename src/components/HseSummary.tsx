import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SiteImage from "@/components/SiteImage";
import { ArrowRightIcon, ShieldCheckIcon } from "@/components/icons";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

export default function HseSummary() {
  return (
    <section className="relative bg-brand-950 py-20 sm:py-24">
      <div className="absolute inset-0 opacity-15" aria-hidden="true">
        <SiteImage src={IMAGES.siteSafety.src} alt="" sizes="100vw" className="h-full w-full" rounded={false} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Health, Safety & Environment"
              title="A Commitment to Safe Engineering"
              description={COMPANY.hseSummary}
              align="left"
              theme="dark"
            />

            <Link
              href="/hse"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
            >
              Read Our HSE Policy
              <ArrowRightIcon />
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {COMPANY.hsePolicy.map((point) => (
              <li key={point.title} className="rounded-xl border border-white/10 bg-brand-950/70 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <ShieldCheckIcon />
                </div>
                <h3 className="text-sm font-bold text-white">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
