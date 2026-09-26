import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import SiteImage from "@/components/SiteImage";
import { ArrowRightIcon } from "@/components/icons";
import { SERVICE_IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Engineering Solutions"
          description="From consultancy to installation and supply, we deliver integrated engineering services across six core sectors."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COMPANY.servicePreviews.map((service) => {
            const image = SERVICE_IMAGES[service.id];
            return (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                >
                  <div className="relative h-40 overflow-hidden">
                    {image && (
                      <SiteImage
                        src={image.src}
                        alt=""
                        sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                        className="h-full"
                        rounded={false}
                      />
                    )}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <ServiceIcon type={service.icon} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-bold text-brand-900 group-hover:text-brand-600">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                      View details
                      <ArrowRightIcon />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            View All Services
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
