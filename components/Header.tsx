"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { language } = useLanguage();
  const { nav } = content[language].header;
  const pathname = usePathname();
  const homePrefix = pathname === "/" ? "" : "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const navItems = [
    { label: nav.howItWorks, href: `${homePrefix}#how-it-works` },
    { label: nav.whyThaiPass, href: `${homePrefix}#why-thaipass` },
    { label: nav.faq, href: `${homePrefix}#faq` },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 flex w-full items-center justify-between gap-2 px-4 py-[18px] transition-colors duration-200 sm:gap-6 sm:px-6 sm:py-[22px] md:px-[98px] ${
        scrolled || menuOpen ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Link href="/" aria-label="ThaiPass home" className="shrink-0 lg:flex-1">
        <Image
          src="/Logo-emblem.svg"
          alt="ThaiPass"
          width={28}
          height={36}
          priority
          className="h-9 w-auto sm:hidden"
        />
        <Image
          src="/logo.svg"
          alt="ThaiPass"
          width={158}
          height={39}
          priority
          className="hidden h-auto w-[158px] sm:block"
        />
      </Link>

      <nav className="hidden items-center gap-[67px] lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-base text-navy-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:flex-1 lg:justify-end">
        <LanguageToggle />
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-navy-700 lg:hidden"
        >
          <span className="relative block h-[14px] w-5" aria-hidden>
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full flex flex-col border-t border-navy-100 bg-white px-4 py-2 shadow-lg sm:px-6 lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base text-navy-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
