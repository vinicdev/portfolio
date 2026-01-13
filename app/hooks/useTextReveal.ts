"use client";

import { useMemo } from "react";

interface TextRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function useTextReveal(
  text: string,
  options: TextRevealOptions = {}
) {
  const { delay = 0, duration = 0.6, stagger = 0.02 } = options;

  const characters = useMemo(() => text.split(""), [text]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return {
    characters,
    containerVariants,
    characterVariants,
  };
}

