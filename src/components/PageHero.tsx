import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import SiteImage from "@/components/SiteImage";
import { Container, Eyebrow } from "@/components/ui";
import type { SiteImageAsset } from "@/lib/assets";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  /** Current page label for the breadcrumb trail. */
  breadcrumb: string;
  /** Optional parent crumb between Home and the current page. */
  parent?: { href: string; label: string };
  image?: SiteImageAsset;
  actions?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, breadcrumb, parent, image, actions }: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy py-16 text-white sm:py-24">
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <SiteImage src={image.src} alt="" sizes="100vw" eager className="h-full w-full" rounded={false} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
      )}
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {parent && (
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                <Link href={parent.href} className="hover:text-white">
                  {parent.label}
                </Link>
              </li>
            )}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span aria-current="page" className="text-white">
                {breadcrumb}
              </span>
            </li>
          </ol>
        </nav>
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">{title}</h1>
        {description && (
          <div className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</div>
        )}
        {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
      </Container>
    </section>
  );
}
