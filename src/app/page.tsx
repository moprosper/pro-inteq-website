import Image from "next/image";
import { HardHat, Handshake, Layers, PackageSearch, ShieldCheck, Wrench } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ProcessSteps from "@/components/ProcessSteps";
import SiteImage from "@/components/SiteImage";
import { CapabilityTile, IndustryCard, ServiceCard, SupplyCategoryCard } from "@/components/cards";
import { CompanyProfileButton, CompanyProfileCta, FinalCta } from "@/components/ctas";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { INDUSTRIES } from "@/lib/industries";
import { SERVICES } from "@/lib/services";
import { QUOTE_HREF } from "@/lib/site";
import { SUPPLY_CATEGORIES } from "@/lib/supply";

const pillars = ["Engineering", "Technical Services", "Industrial Supply"];
const whyIcons = [Layers, Handshake, PackageSearch, HardHat, ShieldCheck, Wrench];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src={IMAGES.heroPlant.src}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </div>
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Eyebrow onDark>Engineering &amp; Industrial Solutions</Eyebrow>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Built for demanding projects.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {COMPANY.name} delivers multidisciplinary engineering, technical services and industrial supply
              solutions for mining, infrastructure, energy, telecommunications, manufacturing and commercial
              projects.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/services" variant="light" arrow>
                Explore Our Services
              </ButtonLink>
              <ButtonLink href={QUOTE_HREF} variant="outline-light">
                Request a Quote
              </ButtonLink>
              <CompanyProfileButton variant="outline-light" />
            </div>
          </div>
        </Container>
        <div className="border-t border-white/15 bg-navy/80">
          <Container>
            <ul className="grid divide-white/15 sm:grid-cols-3 sm:divide-x" aria-label="What we do">
              {pillars.map((pillar, index) => (
                <li key={pillar} className="flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0">
                  <span className="font-display text-sm font-bold text-primary-light" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.15em]">{pillar}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <SectionHeading eyebrow="Who we are" title="Engineering with purpose. Delivered with precision." />
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                {COMPANY.description} We support clients across Tanzania, including Zanzibar, with mechanical,
                electrical, HVAC, telecommunications, civil and security systems work — combined with the technical
                sourcing that keeps projects supplied.
              </p>
              <p>
                Our approach is straightforward: understand the requirement, engineer it properly, supply what the
                specification calls for, install it safely, and stand behind the work with ongoing technical support.
              </p>
            </div>
            <dl className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Based in</dt>
                <dd className="mt-1 font-semibold text-navy">Dar es Salaam</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Serving</dt>
                <dd className="mt-1 font-semibold text-navy">Tanzania, incl. Zanzibar</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Principle</dt>
                <dd className="mt-1 font-semibold text-navy">{COMPANY.principle}</dd>
              </div>
            </dl>
            <ButtonLink href="/about" variant="secondary" arrow className="mt-8">
              About PRO-INTEQ
            </ButtonLink>
          </div>
          <figure className="reveal">
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

      {/* Integrated project support */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Integrated project support"
          title="From design to maintenance — one accountable partner."
          description="PRO-INTEQ can support your project from engineering and procurement through installation, commissioning and ongoing technical support, as your scope requires."
          onDark
        />
        <div className="reveal">
          <ProcessSteps steps={COMPANY.lifecycle} onDark />
        </div>
      </Section>

      {/* Services */}
      <Section tone="surface">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Multidisciplinary engineering services"
            description="Eight service lines that can be delivered individually or combined into a single scope."
          />
          <ButtonLink href="/services" variant="secondary" arrow className="mb-10 self-start sm:mb-12 lg:self-auto">
            All Services
          </ButtonLink>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <li key={service.id} className="reveal">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Capabilities & supply */}
      <Section>
        <SectionHeading
          eyebrow="Capabilities & Supply"
          title="Engineering expertise backed by reliable sourcing and technical supply."
          description="PRO-INTEQ combines multidisciplinary engineering capabilities with technical sourcing and industrial supply to support demanding projects across Tanzania. From engineering services and equipment installation to project materials, consumables and technical supplies, we support clients throughout the project lifecycle."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-navy">
              Engineering capabilities
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <CapabilityTile service={service} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-navy">
              Supply categories
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {SUPPLY_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <SupplyCategoryCard category={category} compact />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="on-dark mt-12 flex flex-col gap-6 rounded-lg bg-primary p-8 text-white lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">Have a technical requirement?</p>
            <p className="mt-1 text-white/85">Let us source, supply and support your project.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={QUOTE_HREF} variant="light">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/supply-procurement" variant="outline-light" arrow>
              Explore Supply &amp; Procurement
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section tone="surface">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title="Supporting demanding project environments"
            description="Engineering, technical services and supply tailored to the sectors we serve."
          />
          <ButtonLink href="/industries" variant="secondary" arrow className="mb-10 self-start sm:mb-12 lg:self-auto">
            All Industries
          </ButtonLink>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <li key={industry.id} className="reveal">
              <IndustryCard industry={industry} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Why PRO-INTEQ */}
      <Section>
        <SectionHeading
          eyebrow="Why PRO-INTEQ"
          title="A dependable engineering partner"
          description={COMPANY.principle}
        />
        <ul className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.whyChoose.map((reason, index) => {
            const Icon = whyIcons[index % whyIcons.length];
            return (
              <li key={reason.title} className="bg-white p-8">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{reason.description}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Projects */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Projects"
              title={COMPANY.projects[0]?.title ?? "Project work"}
              description="PRO-INTEQ technicians installing and testing data cabling and network infrastructure on site — documented with our own photographs."
            />
            <ButtonLink href="/projects" variant="primary" arrow>
              View Projects
            </ButtonLink>
          </div>
          <figure>
            <div className="grid grid-cols-2 gap-4">
              {[IMAGES.teamCabling, IMAGES.siteSupervision].map((image) => (
                <SiteImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1024px) 300px, 50vw"
                  className="aspect-[3/4]"
                  rounded={false}
                />
              ))}
            </div>
            <figcaption className="mt-3 text-xs text-muted">PRO-INTEQ team on site.</figcaption>
          </figure>
        </div>
      </Section>

      <CompanyProfileCta />
      <FinalCta />
    </PageLayout>
  );
}
