import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import ProcessSteps from "@/components/ProcessSteps";
import SiteImage from "@/components/SiteImage";
import { CheckList } from "@/components/cards";
import { FinalCta } from "@/components/ctas";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";
import { QUOTE_HREF } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Engineering Services in Tanzania",
  description:
    "Mechanical, electrical, HVAC, telecommunications & ICT, civil, security & ELV, project management and maintenance services from PRO-INTEQ in Tanzania.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Services"
        title="Engineering and technical services"
        breadcrumb="Services"
        description="Multidisciplinary engineering and technical services, delivered as single scopes or combined into an integrated project."
        image={IMAGES.industrialFacility}
      />

      <nav aria-label="Service lines" className="sticky top-16 z-30 border-b border-line bg-white/95 backdrop-blur lg:top-[4.5rem]">
        <Container>
          <ul className="-mx-1 flex gap-1 overflow-x-auto py-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service.id} className="shrink-0">
                <a
                  href={`#${service.id}`}
                  className="block rounded-md px-3 py-1.5 font-medium text-muted hover:bg-soft hover:text-primary"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="divide-y divide-line">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-title`}
              className={`scroll-mt-32 py-16 sm:py-20 ${index % 2 ? "bg-surface" : "bg-white"}`}
            >
              <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 id={`${service.id}-title`} className="mt-5 font-display text-3xl font-bold text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{service.summary}</p>
                  <div className="mt-6">
                    <CheckList items={service.items} />
                  </div>
                  <ButtonLink href={QUOTE_HREF} variant="secondary" arrow className="mt-8">
                    Request a Quote
                  </ButtonLink>
                </div>
                <SiteImage
                  src={service.image.src}
                  alt={service.image.alt}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="aspect-[4/3]"
                  rounded={false}
                />
              </Container>
            </section>
          );
        })}
      </div>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Integrated delivery"
          title="Design → Supply → Installation → Testing & Commissioning → Maintenance"
          description="Combine services into a single scope and work with one accountable partner across the project lifecycle."
          onDark
        />
        <ProcessSteps steps={COMPANY.lifecycle} onDark />
      </Section>

      <FinalCta />
    </PageLayout>
  );
}
