import Image from "next/image";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import SiteImage from "@/components/SiteImage";
import { CheckList } from "@/components/cards";
import { FinalCta } from "@/components/ctas";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";
import { QUOTE_HREF } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "PRO-INTEQ project case studies are published once client, scope and project details are confirmed for publication.",
  path: "/projects",
});

export default function ProjectsPage() {
  const { projects } = COMPANY;

  return (
    <PageLayout>
      <PageHero
        eyebrow="Projects"
        title="Project work"
        breadcrumb="Projects"
        description="Accurate project information matters more to us than a long list. Case studies appear here once client, scope and outcome details are confirmed for publication."
      />

      {projects.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="Case studies" title="Selected projects" />
          <ul className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.title}>
                <article className="h-full overflow-hidden rounded-lg border border-line bg-white">
                  {project.image && (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 768px) 600px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {project.sector}
                      {project.location && ` · ${project.location}`}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-navy">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                    <div className="mt-5">
                      <CheckList items={project.scope} columns={1} />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Case studies"
                title="Project case studies in preparation"
                description="We are preparing case studies covering scope, PRO-INTEQ's role and results. To discuss experience relevant to your project in the meantime, please contact our team."
              />
              <ButtonLink href={QUOTE_HREF} arrow>
                Discuss Your Project
              </ButtonLink>
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
      )}

      <FinalCta />
    </PageLayout>
  );
}
