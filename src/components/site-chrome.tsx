"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [navScrolled, setNavScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={navScrolled ? "nav nav-scrolled" : "nav"}>
        <Link href="/" className="nav-logo" aria-label="OpenResumes início">
          <span className="nav-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="nav-logo-text">
            open<span>resumes</span>
          </span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className={pathname === item.href ? "active" : undefined}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link className="btn-nav-ghost" href="/depoimentos">
            Entrar
          </Link>
          <Link className="btn-nav-primary" href="/criar-curriculo">
            Começar grátis →
          </Link>
        </div>
      </nav>

      {children}

      <footer>
        <div className="footer-logo">
          open<span>resumes</span>
        </div>
        <p className="footer-copy">© 2026 OpenResumes · Feito no Brasil</p>
        <div className="footer-links">
          <Link href="/">Privacidade</Link>
          <Link href="/">Termos</Link>
          <Link href="/">Contato</Link>
        </div>
      </footer>
    </>
  );
}
