import { Check } from "lucide-react";
import LeadershipGrid from "@/components/LeadershipGrid";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import SiteImage from "@/components/SiteImage";
import { CompanyProfileCta, FinalCta } from "@/components/ctas";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "PRO-INTEQ Engineering and Consulting Company Limited is a Tanzanian multidisciplinary engineering, technical services and industrial supply company based in Dar es Salaam.",
  path: "/about",
});

export default function AboutPage() {
  // Mission and Vision appear only once the official wording is set in company.ts.
  const statements = [
    { label: "Mission", text: COMPANY.mission },
    { label: "Vision", text: COMPANY.vision },
    { label: "Principle", text: COMPANY.principle },
    { label: "Tagline", text: COMPANY.tagline },
  ].filter((statement): statement is { label: string; text: string } => Boolean(statement.text));

  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="Engineering a more reliable future"
        breadcrumb="About Us"
        description={COMPANY.positioningStatement}
        image={IMAGES.projectManagement}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="A multidisciplinary engineering company" />
            <div className="space-y-4 leading-relaxed text-muted">
              <p>{COMPANY.description}</p>
              <p>
                We deliver engineering services, technical services and industrial supply for clients in mining,
                manufacturing, energy, telecommunications, infrastructure and the commercial sector. Our work can
                cover the full project lifecycle — design, supply, installation, testing and commissioning, and
                maintenance — or a single scope within it.
              </p>
              <p>Service coverage: {COMPANY.coverage}</p>
            </div>
          </div>
          <figure>
            <SiteImage
              src={IMAGES.teamOnSite.src}
              alt={IMAGES.teamOnSite.alt}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="aspect-[4/3]"
              rounded={false}
            />
            <figcaption className="mt-3 text-xs text-muted">PRO-INTEQ team on site.</figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="navy">
        <ul className="grid gap-px overflow-hidden rounded-lg bg-white/15 md:grid-cols-2">
          {statements.map((statement) => (
            <li key={statement.label} className="bg-navy-soft p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                {statement.label}
              </h2>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-white">{statement.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Values" title="How we work" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.values.map((value) => (
            <li key={value.title} className="rounded-lg border border-line bg-white p-6">
              <Check className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="leadership">
        <SectionHeading eyebrow="Leadership" title="Company leadership" />
        <LeadershipGrid />
        <div className="mt-8">
          <ButtonLink href="/about/organization" variant="secondary" arrow>
            Organization Structure
          </ButtonLink>
        </div>
      </Section>

      <CompanyProfileCta />
      <FinalCta />
    </PageLayout>
  );
}
