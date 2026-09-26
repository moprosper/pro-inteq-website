import SectionHeading from "@/components/SectionHeading";
import { CheckIcon } from "@/components/icons";
import { COMPANY } from "@/lib/company";

export default function CoreValues() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Core Values"
          title="The Principles That Guide Our Work"
          description="Our core values define how we deliver engineering solutions and serve our clients, partners, and communities."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.coreValues.map((value) => (
            <li
              key={value.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
