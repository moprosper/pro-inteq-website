import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import OrganizationStructure from "@/components/OrganizationStructure";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Organization Structure",
  description:
    "PRO-INTEQ's organization structure, from the Board of Directors and executive leadership to its engineering, procurement and HSE departments.",
  path: "/about/organization",
});

export default function OrganizationPage() {
  return (
    <PageLayout>
      <PageHero
        label="Organization"
        title="Organization Structure"
        description="Our structure ensures efficient operations and clear leadership roles across every engineering discipline."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Organization chart</h2>
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
