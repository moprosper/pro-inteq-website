import ServiceIcon from "@/components/ServiceIcon";
import SiteImage from "@/components/SiteImage";
import { CheckIcon } from "@/components/icons";
import { SERVICE_IMAGES } from "@/lib/assets";
import { COMPANY } from "@/lib/company";

export default function ServiceGroups() {
  return (
    <div className="space-y-8">
      {COMPANY.serviceGroups.map((group) => {
        const image = SERVICE_IMAGES[group.id];
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-5">
              {image && (
                <div className="relative hidden lg:col-span-2 lg:block">
                  <SiteImage
                    src={image.src}
                    alt={image.alt}
                    sizes="(min-width: 1280px) 500px, 40vw"
                    className="h-full min-h-80"
                    rounded={false}
                  />
                </div>
              )}
              <div className={`p-6 sm:p-10 ${image ? "lg:col-span-3" : "lg:col-span-5"}`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <ServiceIcon type={group.icon} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 id={`${group.id}-title`} className="text-2xl font-bold text-brand-900">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-brand-600">{group.overview}</p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">{group.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700"
                        >
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
