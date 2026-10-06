import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import SiteImage from "@/components/SiteImage";
import { CheckList } from "@/components/cards";
import { FinalCta } from "@/components/ctas";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";
import { PROJECT_TYPES } from "@/lib/project-types";
import { QUOTE_HREF } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "PRO-INTEQ project work, including structured cabling and network infrastructure, and the HVAC, pump, power, telecom, civil and mechanical projects we deliver.",
  path: "/projects",
});

export default function ProjectsPage() {
  const { projects } = COMPANY;

  return (
    <PageLayout>
      <PageHero
        eyebrow="Projects"
        title="Our Project Experience"
        breadcrumb="Projects"
        description="Explore selected engineering, installation, maintenance and technical works undertaken by PRO-INTEQ, reflecting our multidisciplinary capabilities, practical expertise and commitment to reliable project delivery."
        image={IMAGES.cablingCoordination}
      />

      {projects.map((project, index) => {
        const [lead, ...gallery] = project.images;
        return (
          <Section key={project.title} tone={index % 2 ? "surface" : "white"}>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading eyebrow={project.sector} title={project.title} description={project.description} />
                {project.location && (
                  <p className="-mt-6 mb-8 text-sm font-semibold text-navy">Location: {project.location}</p>
                )}
                <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-navy">
                  Work shown
                </h3>
                <CheckList items={project.scope} columns={1} />
              </div>
              {lead && (
                <SiteImage
                  src={lead.src}
                  alt={lead.alt}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  eager={index === 0}
                  className="aspect-[4/3]"
                  rounded={false}
                />
              )}
            </div>
            {gallery.length > 0 && (
              <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" aria-label={`${project.title} photographs`}>
                {gallery.map((image) => (
                  <li key={image.src}>
                    <SiteImage
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                      className="aspect-square"
                      rounded={false}
                    />
                  </li>
                ))}
              </ul>
            )}
          </Section>
        );
      })}

      <Section tone="surface" id="project-types">
        <SectionHeading
          eyebrow="Project types"
          title="Projects we deliver"
          description="From engineering installations and infrastructure works to industrial systems and technical services, PRO-INTEQ delivers practical solutions across a broad range of project requirements."
        />
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECT_TYPES.map((type) => {
            const [lead, ...more] = type.images;
            return (
              <li key={type.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white">
                  <div className="relative">
                    <SiteImage
                      src={lead.src}
                      alt={lead.alt}
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[4/3]"
                      rounded={false}
                    />
                  </div>
                  {more.length > 0 && (
                    <div className="grid grid-cols-3 gap-1 bg-white p-1">
                      {more.map((image) => (
                        <SiteImage
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          sizes="(min-width: 1280px) 130px, 33vw"
                          className="aspect-[4/3]"
                          rounded={false}
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-navy">{type.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{type.description}</p>
                    <Link
                      href={`/services#${type.serviceId}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Related service <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="soft">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="More case studies"
            title="Further projects in preparation"
            description="Additional case studies covering scope, PRO-INTEQ's role and results are added as project documentation is approved for publication. To discuss experience relevant to your project, please contact our team."
          />
          <ButtonLink href={QUOTE_HREF} arrow>
            Discuss Your Project
          </ButtonLink>
        </div>
      </Section>

      <FinalCta />
    </PageLayout>
  );
}
