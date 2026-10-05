import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { MAIN_NAV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageLayout>
      <section className="py-24 sm:py-32">
        <Container className="max-w-2xl text-center [&>p:first-child]:justify-center">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="font-display text-4xl font-bold text-navy">Page not found</h1>
          <p className="mt-4 text-muted">The page you are looking for does not exist or may have moved.</p>
          <ButtonLink href="/" className="mt-8">
            Back to Home
          </ButtonLink>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {MAIN_NAV.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageLayout>
  );
}
