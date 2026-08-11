"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  const { language } = useLanguage();
  const { tagline, terms, privacy, refund } = content[language].footer;

  return (
    <footer className="bg-navy-950 px-6 py-12 md:px-[70px] md:py-[49px]">
      <Reveal
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[1300px] flex-col gap-10 md:flex-row md:items-start md:justify-between"
      >
        <div className="flex flex-col gap-6">
          <div>
            <Link href="/" aria-label="ThaiPass home">
              <Image src="/logo-footer.svg" alt="ThaiPass" width={158} height={39} />
            </Link>
            <p className="mt-[7px] max-w-[249px] font-sans text-base leading-[1.4] text-white/50">
              {tagline}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/mythaipass" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/mythaipass_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="" width={32} height={32} />
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 md:gap-10 md:pt-[15px]">
          <Link href="/terms" className="font-sans text-base leading-[1.4] text-white">
            {terms}
          </Link>
          <Link href="/privacy" className="font-sans text-base leading-[1.4] text-white">
            {privacy}
          </Link>
          <Link href="/refund-policy" className="font-sans text-base leading-[1.4] text-white">
            {refund}
          </Link>
        </nav>
      </Reveal>
    </footer>
  );
}
