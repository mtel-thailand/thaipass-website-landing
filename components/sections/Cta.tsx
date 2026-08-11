"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { DownloadButton } from "@/components/DownloadButton";
import { Reveal } from "@/components/Reveal";

export function Cta() {
  const { language } = useLanguage();
  const { line1, headline, subcopy } = content[language].cta;
  const { download } = content[language].header;

  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-white px-6 pt-10 pb-20 md:px-[99px] md:pt-10 md:pb-28"
    >
      <div className="absolute inset-0">
        <Image src="/cta-bg.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-[1285px] overflow-hidden rounded-[32px] sm:rounded-[51px]">
        <div className="absolute inset-0">
          <Image src="/cta-card.png" alt="" fill sizes="(min-width: 1285px) 1285px, 100vw" className="object-cover" />
        </div>

        <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16">
          <Reveal className="flex max-w-[543px] flex-col items-start gap-8">
            <div className="flex flex-col gap-2 text-white">
              <h2 className="font-serif text-[28px] font-semibold leading-[1.5] sm:text-[32px]">
                <span className="block">{line1}</span>
                <span className="block">
                  {headline.prefix}
                  <span className="text-accent">{headline.highlight}</span>
                  {headline.suffix}
                </span>
              </h2>
              <p className="font-sans text-base leading-[1.4]">{subcopy}</p>
            </div>

            <div className="flex flex-wrap items-center gap-[18px]">
              <DownloadButton label={download} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
