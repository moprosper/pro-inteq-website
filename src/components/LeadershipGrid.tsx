import { COMPANY } from "@/lib/company";

function initials(name: string) {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
}

/** Leadership names and roles only; no photos or biographies until supplied. */
export default function LeadershipGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
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
