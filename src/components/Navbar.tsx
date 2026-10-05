"use client";

import { useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { buttonBase } from "@/components/ui";
import { SERVICES } from "@/lib/services";
import { MAIN_NAV, QUOTE_HREF } from "@/lib/site";

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

  const desktopLinkClass = (href: string) =>
    `relative py-2 text-[13px] font-semibold transition-colors hover:text-primary ${
      isActive(href)
        ? "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-primary"
        : "text-ink"
    }`;

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur-md"
      onKeyDown={handleKeyDown}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-4 xl:flex 2xl:gap-6">
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
                  className={`flex items-center gap-1 ${desktopLinkClass(link.href)}`}
                  // A mouse click follows the hover that already opened the menu, so it
                  // only opens; keyboard activation (detail === 0) toggles.
                  onClick={(event) => setServicesOpen((open) => (event.detail === 0 ? !open : true))}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id="services-menu"
                  className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 ${servicesOpen ? "block" : "hidden"}`}
                >
                  <ul className="rounded-lg border border-line bg-white p-2 shadow-xl">
                    <li>
                      <Link
                        href={SERVICES_HREF}
                        onClick={closeAll}
                        aria-current={pathname === SERVICES_HREF ? "page" : undefined}
                        className="block rounded-md px-4 py-2.5 text-sm font-semibold text-primary hover:bg-soft"
                      >
                        All services
                      </Link>
                    </li>
                    {SERVICES.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`${SERVICES_HREF}#${service.id}`}
                          onClick={closeAll}
                          className="block rounded-md px-4 py-2.5 text-sm text-ink hover:bg-soft hover:text-primary"
                        >
                          {service.title}
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
                  className={desktopLinkClass(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={QUOTE_HREF}
            className={`${buttonBase} hidden bg-primary px-5 py-2.5 text-xs text-white hover:bg-primary-hover sm:inline-flex`}
          >
            Request a Quote
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy xl:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] lg:max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line bg-white px-4 pb-6 pt-2 xl:hidden"
        >
          <ul className="flex flex-col">
            {MAIN_NAV.map((link) => (
              <li key={link.href} className="border-b border-line last:border-0">
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex-1 px-2 py-3.5 text-base font-semibold ${
                      isActive(link.href) ? "text-primary" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.href === SERVICES_HREF && (
                    <button
                      type="button"
                      className="rounded-md p-3 text-muted"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      aria-label={mobileServicesOpen ? "Hide service list" : "Show service list"}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
                {link.href === SERVICES_HREF && (
                  <ul id="mobile-services-menu" className={`mb-2 pl-4 ${mobileServicesOpen ? "block" : "hidden"}`}>
                    {SERVICES.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`${SERVICES_HREF}#${service.id}`}
                          onClick={closeAll}
                          className="block px-2 py-2.5 text-sm text-muted hover:text-primary"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href={QUOTE_HREF}
            onClick={closeAll}
            className={`${buttonBase} mt-5 w-full bg-primary text-white hover:bg-primary-hover`}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
