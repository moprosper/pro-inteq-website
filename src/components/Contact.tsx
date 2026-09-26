import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { COMPANY } from "@/lib/company";

const iconBoxClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact Us"
          title="Let's Discuss Your Engineering Project"
          description="Reach out to discuss your project requirements. Our team is ready to provide professional guidance and tailored engineering solutions."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className={iconBoxClass}>
                <MailIcon />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-brand-900">Email</h3>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="mt-1 block break-all text-gray-600 transition-colors hover:text-brand-600"
                >
                  {COMPANY.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className={iconBoxClass}>
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Phone</h3>
                {COMPANY.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-gray-600 transition-colors hover:text-brand-600"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className={iconBoxClass}>
                <MapPinIcon />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Location</h3>
                <p className="mt-1 whitespace-pre-line text-gray-600">{COMPANY.contact.location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 lg:col-span-3">
            <h3 className="mb-6 text-lg font-bold text-brand-900">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
