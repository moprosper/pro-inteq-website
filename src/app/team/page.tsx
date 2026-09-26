import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TeamGrid from "@/components/TeamGrid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Team",
  description:
    "The leadership and engineering disciplines behind PRO-INTEQ — serving clients across mechanical, electrical, telecommunication, civil, and ICT disciplines.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Team"
        title="Leadership & Expertise"
        description="PRO-INTEQ is led by its Managing Director and organized into multidisciplinary engineering departments across our core sectors."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="People"
            title="The Team Behind PRO-INTEQ"
            description="Our strength lies in combining technical depth with practical field experience across multiple engineering disciplines."
          />
          <TeamGrid />
        </div>
      </section>
    </PageLayout>
  );
}
