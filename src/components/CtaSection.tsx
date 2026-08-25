import Link from "next/link";
import { COMPANY } from "@/lib/company";

export default function CtaSection() {
  return (
    <section className="bg-brand-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have an engineering project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
            Let&apos;s discuss how PRO-INTEQ can support your project with reliable,
            professional, and integrated engineering solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="rounded-lg border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
