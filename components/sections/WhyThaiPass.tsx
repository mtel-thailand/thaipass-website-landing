"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function WhyThaiPass() {
  const { language } = useLanguage();
  const { badge, headline, subcopy, items } = content[language].whyThaiPass;

  return (
    <section
      id="why-thaipass"
      className="bg-gradient-to-b from-navy-100 to-white px-6 py-20 md:px-10 xl:px-[118px] md:py-28"
    >
      <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
        <span className="w-fit rounded-[100px] bg-navy-200 px-3 py-2 font-sans text-xs font-bold text-navy-700">
          {badge}
        </span>
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] text-navy-900 sm:text-[40px]">
          {headline.prefix}
          <span className="text-accent">{headline.highlight}</span>
        </h2>
        <p className="font-sans text-base leading-[1.4] text-navy-700">{subcopy}</p>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-[1300px] flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-0">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center lg:flex-1"
          >
            <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(20,40,80,0.08)]">
              <div className="relative h-[200px] w-full shrink-0">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative flex flex-col items-center gap-3 px-6 pt-10 pb-8 text-center">
                <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(20,40,80,0.15)]">
                  {item.icon === "/icons/phone.svg" ? (
                    <Image src={item.icon} alt="" width={18} height={26} className="h-[26px] w-[18px]" />
                  ) : (
                    <Image src={item.icon} alt="" width={28} height={28} className="h-7 w-7" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900">{item.title}</h3>
                <span className="h-[3px] w-6 rounded-full bg-accent" aria-hidden />
                <p className="font-sans text-sm leading-[1.4] text-navy-700">{item.description}</p>
              </div>
            </div>

            {index < items.length - 1 && (
              <div className="hidden shrink-0 items-center justify-center px-2 lg:flex" aria-hidden>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(20,40,80,0.1)]">
                  <Image
                    src="/icons/chevron-down.svg"
                    alt=""
                    width={12}
                    height={7}
                    className="h-[7px] w-3 -rotate-90"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
