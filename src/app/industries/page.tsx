import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BuildingIcon } from "@/components/icons";
import { IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "PRO-INTEQ serves telecommunications, construction, government institutions, industrial and commercial facilities, private organizations, infrastructure projects, and energy & electrical infrastructure across Tanzania.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Industries We Serve"
        title="Sectors We Support"
        description="PRO-INTEQ delivers engineering solutions to a broad range of clients and sectors, providing integrated technical services tailored to each industry's requirements."
        bgImage={IMAGES.solarFarm.src}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Sectors"
            title="Built for Diverse Industries"
            description="From telecom operators to government institutions, our multidisciplinary capabilities serve the full spectrum of engineering and infrastructure clients."
          />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.industries.map((industry) => (
              <li
                key={industry.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <BuildingIcon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-brand-900">{industry.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{industry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
