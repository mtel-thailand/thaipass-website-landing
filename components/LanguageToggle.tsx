"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage, type Language } from "@/lib/language-context";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-9 w-auto items-center justify-center gap-[5px] rounded-lg bg-transparent px-2 sm:h-10 sm:w-24 sm:px-0"
      >
        <Image src="/icons/globe.svg" alt="" width={13} height={13} className="h-[13px] w-[13px]" />
        <span className="font-manrope text-sm text-navy-700 sm:text-base">
          {language.toUpperCase()}
        </span>
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={13}
          height={7}
          className={`h-[7px] w-[13px] ${open ? "rotate-180 transition-transform" : "transition-transform"}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-[calc(100%+4px)] left-0 z-10 w-full min-w-[72px] overflow-hidden rounded-lg bg-white shadow-lg sm:w-24"
        >
          {LANGUAGES.map(({ code, label }) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={language === code}
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-base font-manrope ${
                  language === code ? "text-navy-700 font-bold" : "text-navy-700/70"
                } hover:bg-navy-100`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
