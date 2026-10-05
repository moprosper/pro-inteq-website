import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { Section } from "@/components/ui";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";
import { REQUIREMENT_OPTIONS } from "@/lib/requirements";

export const metadata = pageMetadata({
  title: "Contact & Request a Quote",
  description: `Request a quote or contact ${COMPANY.name} in Dar es Salaam, Tanzania. Email ${COMPANY.contact.email} or call ${COMPANY.contact.phones[0]}.`,
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    {
      icon: Mail,
      label: "Email",
      content: (
        <a href={`mailto:${COMPANY.contact.email}`} className="break-all hover:text-primary">
          {COMPANY.contact.email}
        </a>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      content: COMPANY.contact.phones.map((phone) => (
        <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-primary">
          {phone}
        </a>
      )),
    },
    {
      icon: MapPin,
      label: "Office",
      content: (
        <>
          <span className="block whitespace-pre-line">{COMPANY.contact.location}</span>
          <span className="mt-1 block text-muted">{COMPANY.contact.postal}</span>
        </>
      ),
    },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Request a quote"
        breadcrumb="Contact"
        description="Tell us about your engineering, technical service or supply requirement. Share as much detail as you can — scope, location, quantities or specifications — and we will respond by email or phone."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside aria-label="Contact details" className="space-y-8">
            {details.map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-soft text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 text-sm text-ink">
                  <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">{label}</h2>
                  {content}
                </div>
              </div>
            ))}
            <p className="border-t border-line pt-6 text-sm text-muted">Service coverage: {COMPANY.coverage}</p>
          </aside>

          <div id="quote" className="scroll-mt-28 rounded-lg border border-line bg-surface p-6 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-navy">Quotation request</h2>
            <p className="mt-2 text-sm text-muted">Fields marked * are required.</p>
            <div className="mt-8">
              <ContactForm requirementOptions={REQUIREMENT_OPTIONS} />
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
