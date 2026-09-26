import Image from "next/image";
import { BuildingIcon } from "@/components/icons";
import type { Project } from "@/lib/company";

export default function ProjectCard({ title, sector, location, service, description, image }: Project) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-brand-900 to-brand-700">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
            <BuildingIcon className="h-24 w-24" strokeWidth={0.5} />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-900">
          {sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>

        {(location || service) && (
          <dl className="mt-4 space-y-1 text-xs text-gray-600">
            {location && (
              <div className="flex gap-2">
                <dt className="font-semibold text-gray-800">Location:</dt>
                <dd>{location}</dd>
              </div>
            )}
            {service && (
              <div className="flex gap-2">
                <dt className="font-semibold text-gray-800">Service:</dt>
                <dd>{service}</dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </article>
  );
}
