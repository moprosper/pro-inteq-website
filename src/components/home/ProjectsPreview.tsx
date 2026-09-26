import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowRightIcon } from "@/components/icons";
import { COMPANY } from "@/lib/company";

interface ProjectsPreviewProps {
  /** "home" shows a short preview and is hidden until projects are published. */
  variant?: "home" | "page";
}

export default function ProjectsPreview({ variant = "home" }: ProjectsPreviewProps) {
  const { projects } = COMPANY;

  if (projects.length === 0) {
    return variant === "page" ? <PortfolioInPreparation /> : null;
  }

  const shown = variant === "home" ? projects.slice(0, 3) : projects;

  return (
    <section id="projects" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Projects"
          title="Project Portfolio"
          description="Selected engineering projects delivered by PRO-INTEQ."
        />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project) => (
            <li key={project.title}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>

        {variant === "home" && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-600 px-6 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
            >
              View Project Portfolio
              <ArrowRightIcon />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function PortfolioInPreparation() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Project Case Studies"
          description={COMPANY.projectNote}
        />

        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-10">
          <h3 className="text-lg font-bold text-brand-900">Areas of project work</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Case studies will cover the service areas PRO-INTEQ delivers. To discuss experience
            relevant to your project in the meantime, please contact our team.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {COMPANY.serviceGroups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/services#${group.id}`}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-600 text-white">
                    <ServiceIcon type={group.icon} className="h-4 w-4" />
                  </span>
                  {group.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Discuss Your Project
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
