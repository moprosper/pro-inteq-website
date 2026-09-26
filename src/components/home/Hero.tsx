import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-brand-900 pt-16">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/25 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-300">
              {COMPANY.tagline}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {COMPANY.name}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-200 sm:text-lg">
              A Tanzanian engineering contractor and consultancy based in Dar es Salaam, delivering
              design, supervision, installation, maintenance and supply services for telecom,
              construction, industrial, government and private clients.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Engineering sectors">
              {COMPANY.sectors.map((sector) => (
                <li
                  key={sector}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-brand-100"
                >
                  {sector}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3.5 text-center text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
              >
                Request a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-white/30 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <SiteImage
                src={IMAGES.siteEngineers.src}
                alt={IMAGES.siteEngineers.alt}
                sizes="(min-width: 1024px) 512px, 100vw"
                eager
                className="aspect-[4/3]"
                rounded={false}
                overlay
                overlayClassName="bg-gradient-to-t from-brand-950/70 via-transparent to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold text-white">{COMPANY.principle}</p>
                <p className="text-xs text-brand-100">Engineering consultancy, contracting &amp; supply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
