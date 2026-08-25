import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/company";

export default function Approach() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Approach"
          title="How We Deliver Engineering Projects"
          description="PRO-INTEQ supports clients through the full project lifecycle — from initial consultation to ongoing maintenance and after-sales support."
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.approach.map((item) => (
            <li
              key={item.step}
              className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
            >
              <span className="mb-4 block text-4xl font-bold text-brand-100 transition-colors group-hover:text-brand-200">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
