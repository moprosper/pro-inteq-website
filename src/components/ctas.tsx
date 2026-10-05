import { Download, FileText } from "lucide-react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { COMPANY_PROFILE_PDF } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { QUOTE_HREF } from "@/lib/site";

type ButtonVariant = "primary" | "secondary" | "light" | "outline-light";

/**
 * "Download Company Profile" when the PDF is configured in lib/assets.ts;
 * otherwise an email request, so the button never links to a missing file.
 */
export function CompanyProfileButton({ variant = "primary" }: { variant?: ButtonVariant }) {
  if (COMPANY_PROFILE_PDF) {
    return (
      <ButtonLink href={COMPANY_PROFILE_PDF.href} variant={variant} download={COMPANY_PROFILE_PDF.filename}>
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Company Profile
      </ButtonLink>
    );
  }
  const subject = encodeURIComponent("Company profile request");
  return (
    <ButtonLink href={`mailto:${COMPANY.contact.email}?subject=${subject}`} variant={variant}>
      <FileText className="h-4 w-4" aria-hidden="true" />
      Request Company Profile
    </ButtonLink>
  );
}

export function CompanyProfileCta() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <Eyebrow>Get to know PRO-INTEQ</Eyebrow>
          <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
            Explore our company profile, capabilities and areas of expertise.
          </h2>
          <p className="mt-3 text-sm text-muted">
            {COMPANY_PROFILE_PDF
              ? `Official company profile (${COMPANY_PROFILE_PDF.sizeLabel}).`
              : "Request a copy of our company profile and we will send it by email."}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CompanyProfileButton />
          <ButtonLink href="/company-profile" variant="secondary">
            View Profile Page
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta({
  title = "Have a project or supply requirement?",
  text = "Talk to PRO-INTEQ about engineering services, technical support, or sourcing and supply for your next project.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="on-dark bg-navy py-16 text-white sm:py-20">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <ButtonLink href={QUOTE_HREF} variant="light" arrow>
            Request a Quote
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline-light">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
