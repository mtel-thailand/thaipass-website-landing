"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";

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
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-7, 3]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#FFFEFE]">
      <div className="absolute inset-y-0 right-0 w-[60vw] overflow-hidden">
        <Image
          src="/hero-bg 2.png"
          alt=""
          fill
          sizes="60vw"
          aria-hidden
          priority
          className="object-cover object-[80%_100%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFEFE] from-5% via-[#FFFEFE]/60 via-20% to-transparent to-40%" />

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

      <div className="relative z-10 w-full px-6 py-20 sm:px-10 md:py-28 md:pr-6 lg:mx-auto lg:max-w-[1200px] lg:px-0 lg:py-[201px]">
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
            <AppStoreButton />
            <GooglePlayButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
