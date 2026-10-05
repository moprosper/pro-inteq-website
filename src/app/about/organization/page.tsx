import OrganizationStructure from "@/components/OrganizationStructure";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { Section } from "@/components/ui";
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
        eyebrow="About Us"
        title="Organization structure"
        breadcrumb="Organization Structure"
        parent={{ href: "/about", label: "About Us" }}
        description="Clear lines of responsibility from governance to the technical departments that deliver our work."
      />
      <Section>
        <h2 className="sr-only">Organization chart</h2>
        <OrganizationStructure />
      </Section>
    </PageLayout>
  );
}
