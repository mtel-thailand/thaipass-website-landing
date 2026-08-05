"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";

export function Hero() {
  const { language } = useLanguage();
  const { badge, headline, subcopy } = content[language].hero;

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEFE]">
      <div className="absolute inset-y-0 right-0 w-[60vw] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.png"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[80%_100%]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFEFE] from-5% via-[#FFFEFE]/60 via-20% to-transparent to-40%" />
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
