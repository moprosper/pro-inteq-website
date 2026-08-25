import ServiceIcon from "@/components/ServiceIcon";
import { COMPANY } from "@/lib/company";

export default function ServiceGroups() {
  return (
    <div className="space-y-8">
      {COMPANY.serviceGroups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <ServiceIcon type={group.icon} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-brand-900">{group.title}</h2>
              <p className="mt-1 text-sm font-medium text-brand-600">{group.overview}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{group.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
