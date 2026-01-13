"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface iconTechProps {
  pathIcon: string;
}

export default function IconTech({ pathIcon }: iconTechProps) {
  const shouldReduceMotion = useReducedMotion();

  const hoverVariants = useMemo(
    () => ({
      scale: shouldReduceMotion ? 1.1 : 1.15,
      rotate: shouldReduceMotion ? 0 : 5,
      rotateY: shouldReduceMotion ? 0 : 10,
      rotateX: shouldReduceMotion ? 0 : -5,
    }),
    [shouldReduceMotion]
  );

  return (
    <motion.div
      whileHover={hoverVariants}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 400,
      }}
      className="w-[80px] h-[80px] shadow bg-black-light flex items-center justify-center rounded-full cursor-pointer hover:bg-400 transition-colors duration-300 glow-effect transform-3d gpu-accelerated animation-container"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 400,
        }}
        className={`w-[40px] h-[40px] bg-no-repeat bg-cover flex items-center justify-center ${pathIcon}`}
      ></motion.div>
    </motion.div>
  );
}
