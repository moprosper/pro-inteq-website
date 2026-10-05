import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { IndustryCard } from "@/components/cards";
import { FinalCta } from "@/components/ctas";
import { Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { INDUSTRIES } from "@/lib/industries";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "PRO-INTEQ supports mining & minerals, manufacturing, energy & utilities, telecommunications, infrastructure and commercial projects in Tanzania with engineering, technical services and industrial supply.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Industries"
        title="Industries we serve"
        breadcrumb="Industries"
        description="Engineering, technical services and industrial supply for the project environments our clients work in."
        image={IMAGES.powerTransformers}
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Sectors"
          title="One engineering partner across sectors"
          description="For each sector we combine engineering work, technical services and supply — so clients can deal with one accountable company."
        />
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <li key={industry.id} className="scroll-mt-28">
              <IndustryCard industry={industry} detailed />
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta
        title="Working in one of these sectors?"
        text="Tell us about your site, scope and timeline, and we will advise on the engineering, technical services and supply your project needs."
      />
    </PageLayout>
  );
}
