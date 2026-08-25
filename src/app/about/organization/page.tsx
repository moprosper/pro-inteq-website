import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import OrganizationStructure from "@/components/OrganizationStructure";

export const metadata: Metadata = {
  title: "Organization Structure | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "PRO-INTEQ's organizational structure ensures efficient operations and clear leadership roles across its engineering disciplines.",
};

export default function OrganizationPage() {
  return (
    <PageLayout>
      <PageHero
        label="Organization"
        title="Organization Structure"
        description="Our structure ensures efficient operations and clear leadership roles across every engineering discipline."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OrganizationStructure />
          <p className="mx-auto mt-10 max-w-3xl text-center text-gray-600">
            Our structure reflects the company&apos;s management and operational organization,
            supporting the delivery of multidisciplinary engineering services across its core
            sectors.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
