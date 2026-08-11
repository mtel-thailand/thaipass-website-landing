"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { DownloadButton } from "./DownloadButton";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { language } = useLanguage();
  const { badge, headline, subcopy } = content[language].hero;
  const { download } = content[language].header;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-7, 3]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#FFFEFE]">
      <div className="relative h-[360px] w-full overflow-hidden sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60vw]">
        <Image
          src="/hero-bg 2.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 60vw, 225vw"
          aria-hidden
          priority
          className="origin-[100%_22%] scale-[1.173] object-cover object-[83%_100%] lg:origin-center lg:scale-100 lg:object-[80%_100%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FFFEFE] to-transparent lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#FFFEFE] from-5% via-[#FFFEFE]/60 via-20% to-transparent to-40% lg:block" />

        <motion.div
          style={{ y: phoneY, rotate: phoneRotate }}
          className="pointer-events-none absolute right-[6vw] -bottom-[100px] hidden w-[24vw] max-w-[380px] origin-bottom [@media(min-width:1370px)]:block"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/hero-phone.png"
              alt=""
              width={944}
              height={1723}
              className="h-auto w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 -mt-[30px] w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:mx-auto lg:mt-0 lg:max-w-[1280px] lg:px-10 lg:pt-[201px] lg:pb-[201px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex max-w-[543px] flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="w-fit rounded-[100px] bg-navy-100 px-3 py-2 font-sans text-xs font-bold text-navy-700"
          >
            {badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif text-[40px] font-semibold leading-[1.1] text-navy-900 sm:text-[48px] lg:text-[60px]"
          >
            {headline.prefix}
            <span className="text-accent">{headline.highlight}</span>
            {headline.suffix}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-sans text-lg leading-[1.3] text-navy-900 lg:text-xl lg:leading-[1.1]"
          >
            {subcopy}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-[18px] pt-4">
            <DownloadButton label={download} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
