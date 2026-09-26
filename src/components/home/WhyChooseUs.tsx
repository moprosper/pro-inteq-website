import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheckIcon } from "@/components/icons";

const reasons = [
  {
    title: "Technical Expertise",
    description:
      "Multidisciplinary engineering capabilities across Mechanical, Electrical, Telecommunication, Civil Construction, ICT, and General Supply.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Structured project delivery for telecom operators, construction firms, government institutions, and private organizations.",
  },
  {
    title: "Quality & Safety",
    description:
      "Committed to high standards of quality, integrity, safety, and technical excellence in every project.",
  },
  {
    title: "Integrated Solutions",
    description:
      "End-to-end services from consultancy and design through installation, commissioning, supply, and maintenance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose PRO-INTEQ"
          title="Integrated Multidisciplinary Engineering"
          description="From consultancy and design through installation, commissioning, supply, and maintenance, PRO-INTEQ delivers reliable engineering across six core sectors."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <ShieldCheckIcon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-brand-900">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-brand-900 px-6 py-12 text-center sm:px-8">
          <h3 className="text-2xl font-bold text-white">Ready to discuss your project?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Contact our team for professional engineering consultancy and contracting services.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
