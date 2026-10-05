import Link from "next/link";
import LeadershipGrid from "@/components/LeadershipGrid";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { CheckList } from "@/components/cards";
import { CompanyProfileButton, FinalCta } from "@/components/ctas";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { COMPANY_PROFILE_PDF, IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { INDUSTRIES } from "@/lib/industries";
import { pageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";
import { QUOTE_HREF } from "@/lib/site";
import { SUPPLY_CATEGORIES } from "@/lib/supply";

export const metadata = pageMetadata({
  title: "Company Profile",
  description:
    "Company profile of PRO-INTEQ Engineering and Consulting Company Limited: overview, services, industries, supply capability and leadership.",
  path: "/company-profile",
});

export default function CompanyProfilePage() {
  const facts = [
    { label: "Company", value: COMPANY.name },
    { label: "Positioning", value: COMPANY.positioning },
    { label: "Headquarters", value: "Dar es Salaam, Tanzania" },
    { label: "Service coverage", value: COMPANY.coverage },
    { label: "Tagline", value: COMPANY.tagline },
    { label: "Principle", value: COMPANY.principle },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Company Profile"
        title="PRO-INTEQ at a glance"
        breadcrumb="Company Profile"
        description={COMPANY.positioningStatement}
        image={IMAGES.heroPlant}
        actions={<CompanyProfileButton variant="light" />}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Overview" title="Company overview" />
            <p className="leading-relaxed text-muted">{COMPANY.description}</p>
            <p className="mt-4 leading-relaxed text-muted">
              We support projects across the lifecycle — design, supply, installation, testing and commissioning, and
              maintenance — for clients in mining, manufacturing, energy, telecommunications, infrastructure and the
              commercial sector.
            </p>
            {!COMPANY_PROFILE_PDF && (
              <p className="mt-6 rounded-md border border-line bg-surface p-4 text-sm text-muted">
                The downloadable PDF company profile is being finalised. Use &ldquo;Request Company Profile&rdquo;
                and we will email you a copy.
              </p>
            )}
          </div>
          <dl className="divide-y divide-line rounded-lg border border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 p-5 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-primary">{fact.label}</dt>
                <dd className="text-sm font-medium text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Services</h2>
            <ul className="mt-5 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="text-sm text-ink hover:text-primary">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Industries</h2>
            <ul className="mt-5 space-y-2">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <Link href={`/industries#${industry.id}`} className="text-sm text-ink hover:text-primary">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Supply capability</h2>
            <ul className="mt-5 space-y-2">
              {SUPPLY_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link href={`/supply-procurement#${category.id}`} className="text-sm text-ink hover:text-primary">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Leadership" title="Company leadership" />
            <LeadershipGrid />
          </div>
          <div>
            <SectionHeading eyebrow="Capabilities" title="What clients can expect" />
            <CheckList
              columns={1}
              items={[
                "Multidisciplinary engineering under one company",
                "Integrated design, supply, installation, commissioning and maintenance",
                "Technical sourcing reviewed against engineering requirements",
                "Safe working practices, inspection and testing",
                "Responsive communication and technical support",
              ]}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={QUOTE_HREF} arrow>
                Request a Quote
              </ButtonLink>
              <CompanyProfileButton variant="secondary" />
            </div>
          </div>
        </div>
      </Section>

      <FinalCta />
    </PageLayout>
  );
}
