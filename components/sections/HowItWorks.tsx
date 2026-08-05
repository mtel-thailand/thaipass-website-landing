"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function HowItWorks() {
  const { language } = useLanguage();
  const { badge, headline, subcopy, cards } = content[language].howItWorks;

  return (
    <section id="how-it-works" className="bg-white px-6 py-20 md:px-[118px] md:py-28">
      <div className="mx-auto flex max-w-[1203px] flex-col items-center gap-4 text-center">
        <span className="w-fit rounded-[100px] bg-navy-100 px-3 py-2 font-sans text-xs font-bold text-navy-700">
          {badge}
        </span>

        <h2 className="max-w-[543px] font-serif text-[32px] font-semibold leading-[1.1] text-navy-900 sm:text-[40px]">
          {headline.prefix}
          <span className="text-accent">{headline.highlight}</span>
          {headline.suffix}
        </h2>

        <p className="max-w-[543px] font-sans text-sm leading-[1.4] text-navy-900">{subcopy}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1203px] grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-8 rounded-xl border border-neutral-300 p-4"
          >
            <div className="relative aspect-[1448/1086] w-full overflow-hidden rounded-[15px]">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[13px] text-neutral-800">
                <h3 className="font-serif text-[28px] font-bold leading-[1.1]">{card.title}</h3>
                <p className="font-sans text-base leading-[1.4]">{card.description}</p>
              </div>

              <ul className="flex flex-col gap-[6px]">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <Image
                      src="/icons/check-fill.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    <span className="flex-1 font-sans text-sm leading-[1.4] text-neutral-800">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
