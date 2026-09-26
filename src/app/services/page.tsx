import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ServiceGroups from "@/components/ServiceGroups";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Engineering Services in Tanzania",
  description:
    "PRO-INTEQ provides engineering consultancy, electrical works and materials supply, telecommunication, ICT and security systems, fiber optic solutions, civil works and tower erection, mechanical works, and general supply in Tanzania.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Services"
        title="Integrated Engineering Services"
        description="PRO-INTEQ delivers multidisciplinary engineering, contracting, consulting, and supply services across eight service areas — supporting clients from design through installation, commissioning, and maintenance."
        bgImage={IMAGES.industrialHall.src}
      />

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Service areas" className="mb-10">
            <ul className="flex flex-wrap gap-2">
              {COMPANY.serviceGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-block rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ServiceGroups />

          <div className="mt-12 rounded-2xl bg-brand-900 px-6 py-12 text-center sm:px-8">
            <h2 className="text-2xl font-bold text-white">Need a tailored engineering solution?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Contact our team to discuss how PRO-INTEQ can support your project across multiple
              disciplines.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
