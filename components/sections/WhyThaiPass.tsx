"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function WhyThaiPass() {
  const { language } = useLanguage();
  const { badge, headline, items } = content[language].whyThaiPass;

  return (
    <section id="why-thaipass" className="bg-white px-6 py-20 md:px-[118px] md:py-28">
      <div className="mx-auto flex max-w-[1203px] flex-col gap-[59px] rounded-3xl bg-navy-100 px-6 pt-10 pb-[50px] md:px-[60px]">
        <div className="mx-auto flex max-w-[543px] flex-col items-center gap-[13px] text-center">
          <span className="w-fit rounded-[100px] bg-navy-200 px-3 py-2 font-sans text-xs font-bold text-navy-700">
            {badge}
          </span>
          <h2 className="font-serif text-[32px] font-semibold leading-[1.1] text-neutral-900 sm:text-[40px]">
            {headline}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:justify-center">
          {items.map((item, index) => (
            <div key={item.title} className="flex items-stretch">
              {index > 0 && (
                <div className="mr-10 hidden w-px shrink-0 bg-navy-200 md:block" aria-hidden />
              )}
              <div className="flex w-[221px] flex-col items-center gap-6 text-center">
                <div className="flex h-11 w-11 items-center justify-center">
                  {item.icon === "/icons/phone.svg" ? (
                    <Image
                      src={item.icon}
                      alt=""
                      width={25}
                      height={36}
                      className="h-9 w-[25px]"
                    />
                  ) : (
                    <Image src={item.icon} alt="" width={44} height={44} className="h-11 w-11" />
                  )}
                </div>
                <div className="flex flex-col gap-3 text-navy-700">
                  <h3 className="font-sans text-2xl font-semibold leading-[1.1]">{item.title}</h3>
                  <p className="font-sans text-base leading-[1.4]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
