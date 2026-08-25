import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "Meet the leadership and multidisciplinary engineering team behind PRO-INTEQ — serving clients across mechanical, electrical, telecommunication, civil, and ICT disciplines.",
};

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Team"
        title="Leadership & Expertise"
        description="PRO-INTEQ is led by an experienced management team and supported by multidisciplinary engineering professionals across our core sectors."
      />

      <section className="bg-white py-20">
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
