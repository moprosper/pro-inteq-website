import SectionHeading from "@/components/SectionHeading";
import SiteImage from "@/components/SiteImage";
import { BuildingIcon } from "@/components/icons";
import { IMAGES, INDUSTRY_IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

export default function IndustriesServed() {
  return (
    <section className="relative bg-brand-900 py-20 sm:py-24">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <SiteImage src={IMAGES.industrialHall.src} alt="" sizes="100vw" className="h-full w-full" rounded={false} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industries Served"
          title="Supporting Key Sectors Across Tanzania"
          description="We work with organizations across critical industries, delivering engineering solutions tailored to each sector's requirements."
          theme="dark"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY.industries.map((industry) => {
            const image = INDUSTRY_IMAGES[industry.name];
            return (
              <li
                key={industry.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-brand-400/30 hover:bg-white/10"
              >
                <div className="relative h-32 overflow-hidden">
                  {image && (
                    <SiteImage
                      src={image.src}
                      alt=""
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                      className="h-full"
                      rounded={false}
                    />
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/40 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-center gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <BuildingIcon />
                  </div>
                  <h3 className="font-semibold text-white">{industry.name}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
