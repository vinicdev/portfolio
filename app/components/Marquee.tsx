"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function CustomMarquee({
  items,
  direction = "left",
  speed = 50,
  className = "",
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  const transitionConfig = useMemo(
    () => ({
      type: "spring" as const,
      damping: 25,
      stiffness: 100,
    }),
    []
  );

  return (
    <div className={`overflow-hidden ${className} py-12 relative animation-container`}>
      <div className="absolute w-[102%] h-[115px] bg-gradient-2 transform rotate-[-3deg] -left-2 -z-10 gpu-accelerated" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={transitionConfig}
        className="flex items-center w-full h-[104px] bg-white-dark z-20 gpu-accelerated"
      >
        <Marquee direction={direction} speed={speed} gradient={false}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 px-4 whitespace-nowrap"
            >
              <span className="text-black-dark text-[40px] font-medium">
                {item}
              </span>
              <div className="w-[16px] h-[16px] bg-no-repeat bg-cover flex items-center justify-center icon-star" />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
}
