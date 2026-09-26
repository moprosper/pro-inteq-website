import { COMPANY } from "@/lib/company";

function Connector({ className = "h-8" }: { className?: string }) {
  return <div className={`mx-auto w-px bg-brand-300 ${className}`} aria-hidden="true" />;
}

export default function OrganizationStructure() {
  const { board, executive, managingDirector, management, departments } = COMPANY.organization;

  return (
    <div className="mx-auto max-w-6xl" role="group" aria-label="PRO-INTEQ organization structure">
      <ol className="flex flex-col items-center" aria-label="Leadership, from governance to management">
        <li className="w-full max-w-md rounded-xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Governance</p>
          <p className="mt-1 text-base font-bold text-brand-900">{board}</p>
        </li>
        <li aria-hidden="true">
          <Connector />
        </li>
        <li className="w-full max-w-md rounded-xl border border-brand-300 bg-brand-50 px-6 py-5 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Chief Executive</p>
          <p className="mt-1 text-base font-bold text-brand-900">{executive.title}</p>
        </li>
        <li aria-hidden="true">
          <Connector />
        </li>
        <li className="w-full max-w-md rounded-2xl border-2 border-brand-500 bg-brand-600 px-6 py-6 text-center text-white shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">Executive Leadership</p>
          <p className="mt-1 text-lg font-bold">{managingDirector.title}</p>
          <p className="text-sm text-brand-50">{managingDirector.name}</p>
        </li>
      </ol>

      <Connector className="h-10" />

      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2" aria-label="Management">
        {management.map((mgr) => (
          <li
            key={mgr.title}
            className="mx-auto w-full max-w-xs rounded-xl border border-brand-300 bg-brand-50 px-6 py-4 text-center shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Management</p>
            <p className="mt-1 text-base font-bold text-brand-900">{mgr.title}</p>
          </li>
        ))}
      </ul>

      <Connector className="h-10" />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Departments">
        {departments.map((dept) => (
          <li key={dept.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <p className="border-b border-gray-100 bg-brand-50 px-5 py-3 text-center text-sm font-semibold text-brand-900">
              {dept.title}
            </p>
            <ul className="space-y-2 p-4">
              {dept.roles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
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
