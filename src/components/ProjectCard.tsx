interface ProjectCardProps {
  title: string;
  sector: string;
  location?: string;
  service?: string;
  description: string;
  image?: string;
  placeholder?: boolean;
}

export default function ProjectCard({
  title,
  sector,
  location,
  service,
  description,
  image,
  placeholder = false,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-brand-900 to-brand-700">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg
              className="h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-900">
          {sector}
        </span>
        {placeholder && (
          <span className="absolute right-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
            Coming soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand-900 group-hover:text-brand-600">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {(location || service) && (
          <dl className="mt-4 space-y-1 text-xs text-gray-500">
            {location && (
              <div className="flex gap-2">
                <dt className="font-semibold text-gray-700">Location:</dt>
                <dd>{location}</dd>
              </div>
            )}
            {service && (
              <div className="flex gap-2">
                <dt className="font-semibold text-gray-700">Service:</dt>
                <dd>{service}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="mt-5">
          <span
            className={`inline-flex items-center gap-2 text-sm font-semibold ${
              placeholder
                ? "cursor-not-allowed text-gray-400"
                : "text-brand-600 transition-colors group-hover:gap-3"
            }`}
          >
            {placeholder ? "Details to be published" : "View project"}
            {!placeholder && (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
