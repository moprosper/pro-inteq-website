import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { Section } from "@/components/ui";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${COMPANY.name} handles information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Privacy policy" breadcrumb="Privacy Policy" />
      <Section>
        <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy">
          <div>
            <h2>Who we are</h2>
            <p className="mt-2">
              This website is operated by {COMPANY.name}, Dar es Salaam, Tanzania. Contact:{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-primary underline">
                {COMPANY.contact.email}
              </a>
              .
            </p>
          </div>
          <div>
            <h2>Information we collect</h2>
            <p className="mt-2">
              When you submit the quotation or contact form we receive the details you enter: your name, company, email
              address, phone number, requirement, project location, message and any file you attach. The website does
              not use advertising or analytics cookies.
            </p>
          </div>
          <div>
            <h2>How we use it</h2>
            <p className="mt-2">
              We use this information only to respond to your enquiry, prepare quotations and communicate with you about
              your requirement. Form submissions are delivered to our company inbox by an email delivery provider. We do
              not sell your information.
            </p>
          </div>
          <div>
            <h2>Retention and your rights</h2>
            <p className="mt-2">
              Enquiries are kept for as long as needed to respond and for our business records. You may ask us to access,
              correct or delete the information you sent by emailing{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-primary underline">
                {COMPANY.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
