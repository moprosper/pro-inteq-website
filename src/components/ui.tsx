import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type SectionTone = "white" | "surface" | "soft" | "navy";

const toneClass: Record<SectionTone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  soft: "bg-soft",
  navy: "on-dark bg-navy text-white",
};

export function Section({
  tone = "white",
  className = "",
  children,
  ...props
}: { tone?: SectionTone; className?: string; children: ReactNode } & Omit<ComponentProps<"section">, "className">) {
  return (
    <section className={`py-16 sm:py-24 ${toneClass[tone]} ${className}`} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

type ButtonVariant = "primary" | "secondary" | "light" | "outline-light";

const buttonClass: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "border border-ink/25 text-ink hover:border-primary hover:text-primary",
  light: "bg-white text-navy hover:bg-soft",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors";

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className">) {
  const classes = `${buttonBase} ${buttonClass[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );
  // mailto:, tel: and file downloads are not client-side routes.
  if (/^(mailto:|tel:)/.test(href) || props.download !== undefined) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        onDark ? "text-primary-light" : "text-primary"
      }`}
    >
      <span className={`h-px w-8 ${onDark ? "bg-primary-light" : "bg-primary"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <Heading
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${onDark ? "text-white" : "text-navy"}`}
      >
        {title}
      </Heading>
      {description && (
        <div className={`mt-4 text-base leading-relaxed sm:text-lg ${onDark ? "text-white/75" : "text-muted"}`}>
          {description}
        </div>
      )}
    </div>
  );
}
