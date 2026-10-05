import { BadgeCheck, ClipboardCheck, HardHat, RefreshCw, ScanSearch, type LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import SiteImage from "@/components/SiteImage";
import { FinalCta } from "@/components/ctas";
import { Section, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "HSE & Quality",
  description:
    "How PRO-INTEQ approaches health and safety, quality assurance, compliance, inspection and testing, and continuous improvement on engineering projects.",
  path: "/hse-quality",
});

const icons: LucideIcon[] = [HardHat, BadgeCheck, ClipboardCheck, ScanSearch, RefreshCw];

export default function HsePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="HSE & Quality"
        title="Safety and quality, built in"
        breadcrumb="HSE & Quality"
        description="Safe working and verified quality are part of how PRO-INTEQ plans, executes and hands over every scope of work."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our commitments" title="How we manage HSE and quality" />
            <ul className="space-y-6">
              {COMPANY.hse.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <li key={item.title} className="flex gap-5 border-b border-line pb-6 last:border-0">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-soft text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SiteImage
              src={IMAGES.siteSafety.src}
              alt={IMAGES.siteSafety.alt}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="aspect-[3/4]"
              rounded={false}
            />
          </div>
        </div>
      </Section>

      <FinalCta
        title="Discuss your site requirements"
        text="Share your site safety, quality and documentation requirements and we will plan our work to meet them."
      />
    </PageLayout>
  );
}
