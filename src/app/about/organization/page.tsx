import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/company";
import { ORG_CHART_PATH } from "@/lib/assets";

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
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <Image
              src={ORG_CHART_PATH}
              alt={`${COMPANY.name} Organization Chart`}
              width={1200}
              height={800}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-6 text-gray-600">
            Our hierarchical structure ensures efficient operations and clear leadership roles.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
