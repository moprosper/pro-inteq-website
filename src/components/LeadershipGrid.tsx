import { COMPANY } from "@/lib/company";

function initials(name: string) {
  // Skip honorifics such as "Eng." so the initials are the person's own.
  const parts = name.split(" ").filter((part) => !part.endsWith("."));
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
}

/** Leadership names and roles only; no photos or biographies until supplied. */
export default function LeadershipGrid() {
  return (
    <ul className={`grid gap-6 ${COMPANY.leadership.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {COMPANY.leadership.map((leader) => (
        <li key={leader.name} className="flex items-center gap-5 rounded-lg border border-line bg-white p-6">
          <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-white"
            aria-hidden="true"
          >
            {initials(leader.name)}
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-navy">{leader.name}</h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{leader.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
