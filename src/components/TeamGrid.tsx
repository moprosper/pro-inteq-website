import { COMPANY } from "@/lib/company";

function Avatar({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full bg-brand-100 text-brand-400 ring-4 ring-white`}
    >
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="space-y-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {COMPANY.team.map((member, index) => (
          <article
            key={index}
            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Avatar />
            <h3 className="mt-5 text-lg font-bold text-brand-900">
              {member.name || member.role}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {member.profile}
            </p>
          </article>
        ))}
      </div>

      <div>
        <h3 className="mb-6 text-center text-xl font-bold text-brand-900">
          Our Disciplines
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-gray-600">
          {COMPANY.teamNote}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COMPANY.teamDisciplines.map((discipline) => (
            <div
              key={discipline}
              className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center"
            >
              <Avatar className="h-16 w-16" />
              <p className="mt-4 text-sm font-semibold text-gray-700">{discipline}</p>
              <span className="mt-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                Profile coming soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
