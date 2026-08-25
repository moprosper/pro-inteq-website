import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { COMPANY } from "@/lib/company";

const placeholderProjects = [
  {
    title: "Telecommunication & ICT Project",
    sector: "Telecommunications",
    service: "Telecom, Fiber & ICT",
    description:
      "Representative project card. Detailed scope, location, and outcomes will be published here as project information is confirmed.",
  },
  {
    title: "Civil & Construction Project",
    sector: "Civil Construction",
    service: "Civil Works & Tower Erection",
    description:
      "Representative project card. Detailed scope, location, and outcomes will be published here as project information is confirmed.",
  },
  {
    title: "Electrical Engineering Project",
    sector: "Electrical",
    service: "Electrical Works & Supply",
    description:
      "Representative project card. Detailed scope, location, and outcomes will be published here as project information is confirmed.",
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Projects"
          title="Project Portfolio"
          description="PRO-INTEQ delivers multidisciplinary engineering projects across telecommunications, construction, electrical, mechanical, and ICT sectors. Detailed case studies will be published here."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              sector={project.sector}
              service={project.service}
              description={project.description}
              placeholder
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">{COMPANY.projectNote}</p>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-600 px-6 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
          >
            View Project Portfolio
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
