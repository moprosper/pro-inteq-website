import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SiteImage from "@/components/SiteImage";
import { ArrowRightIcon } from "@/components/icons";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About PRO-INTEQ"
          title="A Tanzanian Engineering and Consulting Company"
          description={COMPANY.description}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-gray-600">{COMPANY.positioning}</p>
            <p className="mt-4 leading-relaxed text-gray-600">
              {COMPANY.registration} We provide Electrical, Telecommunication, Civil
              Construction, Mechanical, ICT and Supply services to clients in Tanzania.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Learn more about us
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{COMPANY.mission}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-900">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{COMPANY.vision}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <SiteImage
              src={IMAGES.powerTransformers.src}
              alt={IMAGES.powerTransformers.alt}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="aspect-[16/9] lg:aspect-auto lg:h-full"
              rounded={false}
            />
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-brand-900">Engineering with Precision</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                From initial consultation through design, procurement, installation, and ongoing
                maintenance, PRO-INTEQ delivers integrated engineering services across six core
                sectors with disciplined execution and attention to technical detail.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs text-gray-500">Core sectors</dt>
                  <dd className="text-2xl font-bold text-brand-600">{COMPANY.sectors.length}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Project delivery</dt>
                  <dd className="text-2xl font-bold text-brand-600">End-to-end</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
