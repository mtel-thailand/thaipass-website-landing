"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, transition, variants, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants ?? defaultVariants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1], ...transition }}
      {...props}
    />
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerItem: Variants = defaultVariants;
