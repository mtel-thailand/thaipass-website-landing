"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { language } = useLanguage();
  const { nav, download } = content[language].header;
  const pathname = usePathname();
  const homePrefix = pathname === "/" ? "" : "/";

  const navItems = [
    { label: nav.features, href: `${homePrefix}#features` },
    { label: nav.howItWorks, href: `${homePrefix}#how-it-works` },
    { label: nav.whyThaiPass, href: `${homePrefix}#why-thaipass` },
    { label: nav.faq, href: `${homePrefix}#faq` },
  ];

  return (
    <header className="relative z-20 flex w-full items-center justify-between gap-6 px-6 py-8 md:px-[98px]">
      <Link href="/" aria-label="ThaiPass home" className="shrink-0">
        <Image src="/logo.svg" alt="ThaiPass" width={158} height={39} priority />
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

      <div className="flex shrink-0 items-center gap-3">
        <LanguageToggle />
        <button
          type="button"
          className="rounded-lg bg-navy-700 px-[10px] py-[10px] text-base text-white"
        >
          {download}
        </button>
      </div>
    </header>
  );
}
