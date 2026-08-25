"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/company";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/hse", label: "HSE" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.href === "/services" ? (
              <li key={link.href} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive(link.href) ? "text-brand-600" : "text-gray-700"
                  }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full w-72 pt-3"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <ul className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      {COMPANY.serviceGroups.map((group) => (
                        <li key={group.id}>
                          <Link
                            href={`/services#${group.id}`}
                            className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-600"
                          >
                            {group.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive(link.href) ? "text-brand-600" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 lg:inline-block"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-900 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-50 ${
                    isActive(link.href) ? "text-brand-600" : "text-gray-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Services
            </li>
            {COMPANY.serviceGroups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/services#${group.id}`}
                  className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {group.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-3 block rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
