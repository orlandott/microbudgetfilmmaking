"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Trailers", href: "/trailers" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type SiteShellProps = {
  children: ReactNode;
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
};

export default function SiteShell({
  children,
  heroTitle = "MICROBUDGET FILMMAKING",
  heroSubtitle,
  heroButtonText,
}: SiteShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`site-shell ${mobileOpen ? "menu-open" : ""}`}>
      <div className="body-wrap">
        <aside className="navmobile-wrapper">
          <nav id="navmobile" aria-label="Mobile">
            <ul>
              {navItems.map((item) => (
                <li key={item.href} className={navLinkActive(pathname, item.href) ? "is-active" : undefined}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <header id="header">
          <button
            type="button"
            className="nav-trigger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="mobile" />
            <span className="mobile" />
            <span className="mobile" />
          </button>
          <div id="sitename">
            <Link href="/">MICROBUDGET FILMMAKING</Link>
          </div>
        </header>

        <main id="wrapper">
          <div className="bg-wrapper">
            <nav id="navigation" aria-label="Primary">
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className={navLinkActive(pathname, item.href) ? "is-active" : undefined}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="banner-wrap">
              <div className="banner-vignette" aria-hidden="true" />
              <div className="banner-grain" aria-hidden="true" />
              <div id="banner">
                <div id="banner-container">
                  <p className="hero-eyebrow">Independent film · Story first</p>
                  <h1>{heroTitle}</h1>
                  {heroSubtitle ? <p className="hero-lede">{heroSubtitle}</p> : null}
                  {heroButtonText ? (
                    <Link className="cta-button" href="/services">
                      {heroButtonText}
                    </Link>
                  ) : null}
                </div>
              </div>
            </section>

            <div id="content-wrapper">{children}</div>
          </div>

          <footer id="footer">
            <div id="footer-content">
              <p>© 2026 Microbudget Filmmaking. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
      {mobileOpen ? (
        <button
          type="button"
          className="menu-overlay"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </div>
  );
}
