import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "Contact PRO-INTEQ Engineering and Consulting Company Limited by email at prointeq.engineering@gmail.com or call +255 719303529 to discuss your engineering project.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        label="Contact Us"
        title="Let's Discuss Your Project"
        description="Reach out to PRO-INTEQ for engineering consultancy, contracting, and supply services. Our team is ready to help."
      />
      <Contact />
    </PageLayout>
  );
}
