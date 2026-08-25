import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/company";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Clients & Partners"
          title="Our Network"
          description={COMPANY.partnersNote}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex h-28 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white"
            >
              <span className="text-sm font-medium text-gray-400">Logo placeholder</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Client, technology partner, and supplier logos will appear here.
        </p>
      </div>
    </section>
  );
}
