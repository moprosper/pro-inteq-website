import { COMPANY } from "@/lib/company";

export default function OrganizationStructure() {
  const { board, managingDirector, management, departments } = COMPANY.organization;

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Board of Directors */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white px-8 py-5 text-center shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Governance
          </div>
          <div className="mt-1 text-base font-bold text-brand-900">{board}</div>
        </div>

        <div className="my-6 w-px h-10 bg-brand-300/50" />
        <div className="w-px h-4 bg-brand-300/50" />

        {/* Managing Director */}
        <div className="w-full max-w-md rounded-2xl border-2 border-brand-500 bg-brand-600 px-8 py-6 text-center text-white shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wide text-brand-200">
            Executive Leadership
          </div>
          <div className="mt-1 text-lg font-bold">{managingDirector.title}</div>
          <div className="text-sm text-brand-100">{managingDirector.name}</div>
        </div>
      </div>

      {/* Management Level - Technical Director & Administration & Finance */}
      <div className="mt-10">
        <div className="mx-auto w-px h-10 bg-brand-300/50" />
        <div className="mx-auto w-px h-4 bg-brand-300/50" />

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {management.map((mgr) => (
            <div key={mgr.title} className="flex flex-col items-center">
              <div className="w-full max-w-xs rounded-xl border border-brand-300 bg-brand-50 px-6 py-4 text-center shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Management
                </div>
                <div className="mt-1 text-base font-bold text-brand-900">{mgr.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div className="mt-10">
        <div className="mx-auto w-px h-10 bg-brand-300/50" />
        <div className="mx-auto w-px h-4 bg-brand-300/50" />

        <div className="mt-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {departments.map((dept) => (
              <div key={dept.title} className="flex flex-col items-center">
                <div className="w-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="border-b border-gray-100 bg-brand-50 px-5 py-3">
                    <div className="text-sm font-semibold text-brand-900 text-center">{dept.title}</div>
                  </div>
                  <div className="p-4 space-y-2">
                    {dept.roles.map((role) => (
                      <div
                        key={`${dept.title}-${role}`}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span className="font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {dept !== departments[departments.length - 1] && (
                  <div className="mt-4 w-px h-6 bg-brand-300/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}