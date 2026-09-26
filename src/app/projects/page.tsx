import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "PRO-INTEQ's engineering project portfolio across telecommunications, civil construction, electrical, mechanical, and ICT sectors. Case studies will be published as project information is confirmed.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Projects & Portfolio"
        title="Our Engineering Portfolio"
        description="PRO-INTEQ delivers multidisciplinary engineering projects across key sectors. A detailed portfolio of completed works will be published here."
      />
      <ProjectsPreview variant="page" />
    </PageLayout>
  );
}
