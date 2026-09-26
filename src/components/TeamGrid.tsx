import { CheckIcon, UserIcon } from "@/components/icons";
import { COMPANY } from "@/lib/company";

export default function TeamGrid() {
  return (
    <div className="space-y-12">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {COMPANY.team.map((member) => (
          <li
            key={member.name}
            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-brand-500 ring-4 ring-white">
              <UserIcon className="h-10 w-10" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-brand-900">{member.name}</h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">{member.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.profile}</p>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-10">
        <h3 className="text-xl font-bold text-brand-900">Our Disciplines</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">{COMPANY.teamNote}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.teamDisciplines.map((discipline) => (
            <li
              key={discipline}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-800"
            >
              <CheckIcon className="h-5 w-5 shrink-0 text-brand-600" />
              {discipline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
