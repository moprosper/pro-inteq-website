import SiteImage from "@/components/SiteImage";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  bgImage?: string;
}

export default function PageHero({ label, title, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 sm:py-20">
      {bgImage && (
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <SiteImage src={bgImage} alt="" sizes="100vw" className="h-full w-full" rounded={false} />
        </div>
      )}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-300">
          {label}
        </p>
        <h1 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
