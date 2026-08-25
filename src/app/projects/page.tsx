import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export const metadata: Metadata = {
  title: "Projects | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "Explore PRO-INTEQ's engineering project portfolio across telecommunications, civil construction, electrical, mechanical, and ICT sectors. Detailed case studies will be published as project information is confirmed.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Projects & Portfolio"
        title="Our Engineering Portfolio"
        description="PRO-INTEQ delivers multidisciplinary engineering projects across key sectors. A detailed portfolio of completed works will be published here."
      />
      <ProjectsPreview />
    </PageLayout>
  );
}
