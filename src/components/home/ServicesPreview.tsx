import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import SiteImage from "@/components/SiteImage";
import { COMPANY } from "@/lib/company";

const serviceImages: Record<string, string> = {
  consultancy: "/images/engineering-consultancy.jpg",
  electrical: "/images/electrical-substation.jpg",
  supply: "/images/electrical-panel.jpg",
  telecom: "/images/telecommunication-tower.jpg",
  fiber: "/images/fiber-optic-installation.jpg",
  civil: "/images/civil-construction.jpg",
  mechanical: "/images/hvac-mechanical.jpg",
};

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Engineering Solutions"
          description="From consultancy to installation and supply, we deliver integrated engineering services across six core sectors."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COMPANY.servicePreviews.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden">
                <SiteImage
                  src={serviceImages[service.icon] || serviceImages.consultancy}
                  alt={`${service.title} - representative engineering imagery`}
                  className="h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <ServiceIcon type={service.icon} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-bold text-brand-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
