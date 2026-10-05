import { COMPANY } from "@/lib/company";

// Mirrors the company organization chart (assets/brand/organization-chart.jpg).
const LEVELS = [
  { label: "Governance", title: "Board of Directors" },
  { label: "Executive Leadership", title: "Managing Director", name: COMPANY.leadership[0].name },
];

const MANAGEMENT = ["Technical Director", "Administration & Finance"];

const DEPARTMENTS = [
  { title: "Telecommunication, ICT & Security Systems", roles: ["Project Manager", "Supervisors", "Engineers", "Technicians"] },
  { title: "Mechanical Department", roles: ["Mechanical Supervisors", "Engineers", "Technicians"] },
  { title: "Electrical Department", roles: ["Project Manager", "Supervisors", "Engineers", "Technicians"] },
  { title: "Civil & Building Department", roles: ["Project Manager", "Supervisors", "Engineers", "Technicians"] },
  { title: "Procurement & Logistics", roles: ["Managers & Officers"] },
  { title: "Health, Safety & Environment", roles: ["HSE Manager"] },
];

function Connector() {
  return <div className="mx-auto h-8 w-px bg-primary/40" aria-hidden="true" />;
}

export default function OrganizationStructure() {
  return (
    <div className="mx-auto max-w-6xl">
      <ol className="flex flex-col items-center" aria-label="Leadership levels">
        {LEVELS.map((level, index) => (
          <li key={level.title} className="flex w-full flex-col items-center">
            {index > 0 && <Connector />}
            <div
              className={`w-full max-w-md rounded-lg px-6 py-5 text-center ${
                index === LEVELS.length - 1 ? "bg-primary text-white" : "border border-line bg-white"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${
                  index === LEVELS.length - 1 ? "text-white/80" : "text-primary"
                }`}
              >
                {level.label}
              </p>
              <p className={`mt-1 font-display text-lg font-bold ${index === LEVELS.length - 1 ? "" : "text-navy"}`}>
                {level.title}
              </p>
              {level.name && (
                <p className={`text-sm ${index === LEVELS.length - 1 ? "text-white" : "text-muted"}`}>{level.name}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <Connector />
      <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2" aria-label="Management">
        {MANAGEMENT.map((title) => (
          <li key={title} className="rounded-lg border border-line bg-soft px-6 py-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Management</p>
            <p className="mt-1 font-display font-bold text-navy">{title}</p>
          </li>
        ))}
      </ul>

      <Connector />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Departments">
        {DEPARTMENTS.map((dept) => (
          <li key={dept.title} className="overflow-hidden rounded-lg border border-line bg-white">
            <p className="bg-navy px-5 py-3 text-center text-sm font-semibold text-white">{dept.title}</p>
            <ul className="space-y-1.5 p-5">
              {dept.roles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {role}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
