import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteImage from "@/components/SiteImage";
import type { Industry } from "@/lib/industries";
import type { Service } from "@/lib/services";
import type { SupplyCategory } from "@/lib/supply";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <SiteImage
          src={service.image.src}
          alt=""
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
          className="h-full transition-transform duration-500 group-hover:scale-105"
          rounded={false}
        />
        <span className="absolute bottom-0 left-0 flex h-11 w-11 items-center justify-center bg-primary text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-navy group-hover:text-primary">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function CapabilityTile({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex items-center gap-4 rounded-lg border border-line bg-white p-4 transition-colors hover:border-primary"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-soft text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-navy group-hover:text-primary">{service.title}</span>
    </Link>
  );
}

export function SupplyCategoryCard({ category, compact = false }: { category: SupplyCategory; compact?: boolean }) {
  const Icon = category.icon;
  return (
    <div className="flex h-full gap-4 rounded-lg border border-line bg-white p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-navy">{category.title}</h3>
        {!compact && <p className="mt-1.5 text-sm leading-relaxed text-muted">{category.description}</p>}
      </div>
    </div>
  );
}

export function IndustryCard({ industry, detailed = false }: { industry: Industry; detailed?: boolean }) {
  const Icon = industry.icon;
  const rows = [
    { label: "Engineering", text: industry.engineering },
    { label: "Technical services", text: industry.technical },
    { label: "Supply", text: industry.supply },
  ];
  return (
    <article id={detailed ? industry.id : undefined} className="flex h-full flex-col rounded-lg border border-line bg-white p-6 sm:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-soft text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-navy">{industry.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{industry.summary}</p>
      {detailed && (
        <dl className="mt-5 space-y-3 border-t border-line pt-5">
          {rows.map((row) => (
            <div key={row.label} className="flex gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-navy">{row.label}</dt>
                <dd className="text-muted">{row.text}</dd>
              </div>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}

export function CheckList({ items, columns = 2 }: { items: readonly string[]; columns?: 1 | 2 | 3 }) {
  const grid = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 xl:grid-cols-3" }[columns];
  return (
    <ul className={`grid gap-x-6 gap-y-2.5 ${grid}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
