import Link from "next/link";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/company";
import { MAIN_NAV } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const headingClass = "mb-4 text-sm font-semibold uppercase tracking-wider text-white";
  const linkClass = "text-sm transition-colors hover:text-white";

  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 text-sm leading-relaxed">{COMPANY.name}</p>
            <p className="mt-2 text-sm italic leading-relaxed text-brand-200">
              {COMPANY.principle}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className={headingClass}>Quick Links</h2>
            <ul className="space-y-3">
              {MAIN_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Services</h2>
            <ul className="space-y-3">
              {COMPANY.serviceGroups.map((group) => (
                <li key={group.id}>
                  <Link href={`/services#${group.id}`} className={linkClass}>
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <address className="space-y-4 text-sm not-italic">
              <p>
                <span className="block text-xs uppercase tracking-wider text-gray-400">Email</span>
                <a href={`mailto:${COMPANY.contact.email}`} className={`${linkClass} break-all`}>
                  {COMPANY.contact.email}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-gray-400">Phone</span>
                {COMPANY.contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className={`${linkClass} block`}>
                    {phone}
                  </a>
                ))}
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-gray-400">Location</span>
                <span className="whitespace-pre-line">{COMPANY.contact.location}</span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-8 text-center text-xs text-gray-400 sm:text-sm">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p>Photography on this website is illustrative of the engineering disciplines we work in.</p>
        </div>
      </div>
    </footer>
  );
}
