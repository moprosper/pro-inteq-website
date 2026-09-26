import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/company";

/** Lists confirmed clients and partners; renders nothing until some are added. */
export default function Partners() {
  const { partners } = COMPANY;
  if (partners.length === 0) return null;

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Clients & Partners" title="Our Network" description={COMPANY.partnersNote} />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => {
            const logo = (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
              />
            );
            return (
              <li
                key={partner.name}
                className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4"
              >
                {partner.url ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
