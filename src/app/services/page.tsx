import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ServiceGroups from "@/components/ServiceGroups";

export const metadata: Metadata = {
  title: "Services | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "PRO-INTEQ provides multidisciplinary engineering services including engineering consultancy, electrical works, telecommunication, fiber optic, ICT & security, civil & construction, mechanical works, and general supply.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Services"
        title="Integrated Engineering Services"
        description="PRO-INTEQ delivers multidisciplinary engineering, contracting, consulting, and supply services across eight core areas — supporting clients from design through installation, commissioning, and maintenance."
      />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceGroups />

          <div className="mt-12 rounded-2xl bg-brand-900 px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white">
              Need a tailored engineering solution?
            </h3>
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
