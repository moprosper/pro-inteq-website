import ServiceIcon from "@/components/ServiceIcon";
import { COMPANY } from "@/lib/company";

export default function OrganizationStructure() {
  const { board, managingDirector, departments } = COMPANY.organization;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Governance + Leadership */}
      <div className="flex flex-col items-center">
        <div className="rounded-xl border border-gray-200 bg-white px-8 py-4 text-center shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Governance
          </div>
          <div className="mt-1 text-base font-bold text-brand-900">{board}</div>
        </div>

        <div className="h-10 w-px bg-brand-300/50" />

        <div className="w-full max-w-md rounded-2xl border-2 border-brand-500 bg-brand-600 px-8 py-5 text-center text-white shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wide text-brand-200">
            Leadership
          </div>
          <div className="mt-1 text-lg font-bold">{managingDirector.title}</div>
          <div className="text-sm text-brand-100">{managingDirector.name}</div>
        </div>
      </div>

      {/* Departments */}
      <div className="mt-10">
        <div className="mx-auto h-10 w-px bg-brand-300/50" />
        <div className="mx-auto h-px w-24 bg-brand-300/50" />

        <div className="mt-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <div key={dept.title} className="flex flex-col items-center">
              <div className="h-6 w-px bg-brand-300/50" />
              <div className="w-full rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <ServiceIcon type={dept.icon} />
                </div>
                <div className="text-sm font-semibold text-brand-900">{dept.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
