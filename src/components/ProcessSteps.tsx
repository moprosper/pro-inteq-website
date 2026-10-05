interface Step {
  title: string;
  description: string;
}

/** Numbered left-to-right process (stacks vertically on small screens). */
export default function ProcessSteps({ steps, onDark = false }: { steps: readonly Step[]; onDark?: boolean }) {
  const columns = steps.length >= 6 ? "lg:grid-cols-6" : "lg:grid-cols-5";

  return (
    <ol className={`grid gap-px overflow-hidden rounded-lg sm:grid-cols-2 ${columns} ${onDark ? "bg-white/15" : "bg-line"}`}>
      {steps.map((step, index) => (
        <li key={step.title} className={`relative p-6 ${onDark ? "bg-navy-soft" : "bg-white"}`}>
          <span
            className={`font-display text-sm font-bold tracking-widest ${onDark ? "text-primary-light" : "text-primary"}`}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-3 font-display text-lg font-bold ${onDark ? "text-white" : "text-navy"}`}>
            <span className="sr-only">Step {index + 1}: </span>
            {step.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${onDark ? "text-white/70" : "text-muted"}`}>
            {step.description}
          </p>
          <span
            className={`absolute bottom-0 left-6 h-1 w-10 ${onDark ? "bg-primary-light" : "bg-primary"}`}
            aria-hidden="true"
          />
        </li>
      ))}
    </ol>
  );
}
