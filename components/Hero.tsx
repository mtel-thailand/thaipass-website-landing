"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";

export function Hero() {
  const { language } = useLanguage();
  const { badge, headline, subcopy } = content[language].hero;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_100%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-15% via-white/70 via-45% to-transparent to-80%" />
      </div>

      <div className="relative z-10 w-full px-6 py-20 sm:px-10 md:py-28 md:pr-6 md:pl-[118px] lg:py-[201px]">
        <div className="flex max-w-[543px] flex-col items-start gap-6">
          <span className="w-fit rounded-[100px] bg-navy-100 px-3 py-2 font-sans text-xs font-bold text-navy-700">
            {badge}
          </span>

          <h1 className="font-serif text-[40px] font-semibold leading-[1.1] text-navy-900 sm:text-[48px] lg:text-[60px]">
            {headline.prefix}
            <span className="text-accent">{headline.highlight}</span>
            {headline.suffix}
          </h1>

          <p className="font-sans text-lg leading-[1.3] text-navy-900 lg:text-xl lg:leading-[1.1]">
            {subcopy}
          </p>

          <div className="flex flex-wrap items-center gap-[18px] pt-4">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </div>
    </section>
  );
}
