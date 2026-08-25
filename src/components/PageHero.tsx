interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-300">
          {label}
        </span>
        <h1 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
