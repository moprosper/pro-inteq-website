"use client";

import { useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { ChevronDownIcon } from "@/components/icons";
import { COMPANY } from "@/lib/company";
import { MAIN_NAV } from "@/lib/site";

const SERVICES_HREF = "/services";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Escape") return;
    // Return focus to the toggle so keyboard users are not left on a removed element.
    if (mobileOpen) menuButtonRef.current?.focus();
    closeAll();
  };

  // Close the dropdown once keyboard focus leaves it.
  const handleServicesBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
  };

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-brand-600 ${
      isActive(href) ? "text-brand-600" : "text-gray-700"
    }`;

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md"
      onKeyDown={handleKeyDown}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {MAIN_NAV.map((link) =>
            link.href === SERVICES_HREF ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onBlur={handleServicesBlur}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 ${linkClass(link.href)}`}
                  // A mouse click follows the hover that already opened the menu, so it
                  // only opens; keyboard activation (detail === 0) toggles.
                  onClick={(event) =>
                    setServicesOpen((open) => (event.detail === 0 ? !open : true))
                  }
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                >
                  {link.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="services-menu"
                  className={`absolute left-0 top-full w-80 pt-3 ${servicesOpen ? "block" : "hidden"}`}
                >
                  <ul className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                    <li>
                      <Link
                        href={SERVICES_HREF}
                        onClick={closeAll}
                        aria-current={pathname === SERVICES_HREF ? "page" : undefined}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-gray-50"
                      >
                        All services
                      </Link>
                    </li>
                    {COMPANY.serviceGroups.map((group) => (
                      <li key={group.id}>
                        <Link
                          href={`${SERVICES_HREF}#${group.id}`}
                          onClick={closeAll}
                          className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-600"
                        >
                          {group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkClass(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 lg:inline-block"
        >
          Request a Consultation
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-900 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-gray-100 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {MAIN_NAV.map((link) =>
              link.href === SERVICES_HREF ? (
                <li key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`flex-1 rounded-lg px-4 py-3 text-base font-medium hover:bg-gray-50 ${
                        isActive(link.href) ? "text-brand-600" : "text-gray-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      className="rounded-lg p-3 text-gray-600 hover:bg-gray-50"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      aria-label={mobileServicesOpen ? "Hide service areas" : "Show service areas"}
                    >
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <ul
                    id="mobile-services-menu"
                    className={`mb-2 ml-4 border-l border-gray-100 pl-2 ${mobileServicesOpen ? "block" : "hidden"}`}
                  >
                    {COMPANY.serviceGroups.map((group) => (
                      <li key={group.id}>
                        <Link
                          href={`${SERVICES_HREF}#${group.id}`}
                          onClick={closeAll}
                          className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-600"
                        >
                          {group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-lg px-4 py-3 text-base font-medium hover:bg-gray-50 ${
                      isActive(link.href) ? "text-brand-600" : "text-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            href="/contact"
            onClick={closeAll}
            className="mt-4 block rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700"
          >
            Request a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
