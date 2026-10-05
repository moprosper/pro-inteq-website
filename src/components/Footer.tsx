import Link from "next/link";
import Logo from "@/components/Logo";
import { Container } from "@/components/ui";
import { COMPANY } from "@/lib/company";
import { QUOTE_HREF } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/industries", label: "Industries" },
      { href: "/projects", label: "Projects" },
      { href: "/hse-quality", label: "HSE & Quality" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/services", label: "Engineering" },
      { href: "/services#maintenance", label: "Technical Services" },
      { href: "/supply-procurement", label: "Supply & Procurement" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/company-profile", label: "Company Profile" },
      { href: QUOTE_HREF, label: "Request a Quote" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkClass = "text-sm text-white/70 transition-colors hover:text-white";

  return (
    <footer className="on-dark bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.4fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-6 text-sm leading-relaxed text-white/70">{COMPANY.name}</p>
            <p className="mt-2 text-sm font-semibold text-white">{COMPANY.tagline}</p>
            <p className="mt-1 text-sm italic text-primary-light">{COMPANY.principle}</p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
            <address className="space-y-3 text-sm not-italic text-white/70">
              <p className="whitespace-pre-line">{COMPANY.contact.location}</p>
              <p>
                <a href={`mailto:${COMPANY.contact.email}`} className="break-all hover:text-white">
                  {COMPANY.contact.email}
                </a>
              </p>
              {COMPANY.contact.phones.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </p>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>Some photographs are illustrative of the disciplines we work in.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
