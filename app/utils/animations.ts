"use client";

import { Variants } from "framer-motion";

export const springConfig = {
  gentle: {
    type: "spring" as const,
    damping: 25,
    stiffness: 120,
    mass: 0.8,
  },
  snappy: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
    mass: 0.6,
  },
  bouncy: {
    type: "spring" as const,
    damping: 15,
    stiffness: 200,
    mass: 0.5,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.gentle,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.gentle,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.gentle,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.gentle,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springConfig.snappy,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
} as const;

