interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleClass = theme === "dark" ? "text-white" : "text-navy-900";
  const descriptionClass = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-orange-500">
        {label}
      </span>
      <h2 className={`text-3xl font-bold md:text-4xl ${titleClass}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-lg ${descriptionClass}`}>{description}</p>
      )}
    </div>
  );
}
