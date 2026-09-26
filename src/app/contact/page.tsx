import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact ${COMPANY.name} in Dar es Salaam, Tanzania. Email ${COMPANY.contact.email} or call ${COMPANY.contact.phones[0]} to discuss your engineering project.`,
  path: "/contact",
});

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
