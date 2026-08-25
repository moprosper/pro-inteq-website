import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Technical Expertise",
      description:
        "Multidisciplinary engineering capabilities across Mechanical, Electrical, Telecommunication, Civil Construction, ICT, and General Supply.",
    },
    {
      title: "Reliable Delivery",
      description:
        "A technical contractor trusted by telecom operators, government institutions, construction firms, and private organizations.",
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

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose PRO-INTEQ"
          title="Integrated Multidisciplinary Engineering"
          description="From consultancy and design through installation, commissioning, supply, and maintenance, PRO-INTEQ delivers reliable engineering across six core sectors."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-900">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-brand-900 px-8 py-12 text-center">
          <h3 className="text-2xl font-bold text-white">
            Ready to discuss your project?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Contact our team for professional engineering consultancy and
            contracting services.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
