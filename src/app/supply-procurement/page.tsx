import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import ProcessSteps from "@/components/ProcessSteps";
import { CheckList, SupplyCategoryCard } from "@/components/cards";
import { FinalCta } from "@/components/ctas";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";
import { QUOTE_HREF } from "@/lib/site";
import { SUPPLY_CATEGORIES } from "@/lib/supply";

export const metadata = pageMetadata({
  title: "Supply & Procurement",
  description:
    "Technical supply and procurement from PRO-INTEQ: electrical, mechanical, pipes and valves, workshop consumables, water treatment, PPE, ICT, security and construction materials sourced to specification.",
  path: "/supply-procurement",
});

// "Our Supply Advantage", company profile.
const advantages = [
  "Quality-assured materials from trusted manufacturers",
  "Compliance with engineering and safety standards",
  "Technical support in material selection based on project requirements",
  "Ability to supply in bulk for large projects",
  "Supply can be combined with installation and commissioning",
];

export default function SupplyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Supply & Procurement"
        title="Technical supply & procurement"
        breadcrumb="Supply & Procurement"
        description="Reliable sourcing for demanding technical and industrial requirements."
        image={IMAGES.supplyComponents}
        actions={
          <ButtonLink href={QUOTE_HREF} variant="light" arrow>
            Request a Quote
          </ButtonLink>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Technical sourcing"
            title="Supply backed by engineering"
            description="PRO-INTEQ sources equipment, materials and consumables for engineering projects, maintenance teams and industrial operations. The categories below show the type of requirements we support — they are not a fixed catalogue."
          />
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
            <CheckList items={advantages} columns={1} />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Categories" title="What we supply" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPLY_CATEGORIES.map((category) => (
            <li key={category.id} id={category.id} className="scroll-mt-28">
              <SupplyCategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Procurement process"
          title="Requirement → Specification → Sourcing → Quotation → Supply → Delivery"
          description="Where needed, our engineers review the technical requirement before procurement so that what is supplied fits the application."
          onDark
        />
        <ProcessSteps steps={COMPANY.procurementProcess} onDark />
        <p className="mt-6 text-sm text-white/70">
          Lead times depend on the product, source and quantity, and are confirmed in each quotation.
        </p>
      </Section>

      <FinalCta
        title="Need a specific product or technical specification?"
        text="Our procurement team can source and supply products according to project requirements and specifications."
      />
    </PageLayout>
  );
}
