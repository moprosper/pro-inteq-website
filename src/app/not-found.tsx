import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const suggestions = [
  { href: "/services", label: "Our services" },
  { href: "/about", label: "About PRO-INTEQ" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <PageLayout>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">Error 404</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-gray-600">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Back to home
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {suggestions.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-brand-600 hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
