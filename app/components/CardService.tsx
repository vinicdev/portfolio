"use client";

import { ReactNode, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";

interface cardProps {
  title: string;
  children: ReactNode;
  text: string;
  height: string;
}

export default function CardService({
  title,
  children,
  text,
  height,
}: cardProps) {
  const selectedHeight = height;
  const shouldReduceMotion = useReducedMotion();
  const magnetic = useMagnetic({ distance: 25, stiffness: 300, damping: 30 });

  const hoverVariants = useMemo(
    () => ({
      y: shouldReduceMotion ? 0 : -10,
      scale: shouldReduceMotion ? 1 : 1.02,
      rotateY: shouldReduceMotion ? 0 : 5,
      rotateX: shouldReduceMotion ? 0 : -2,
    }),
    [shouldReduceMotion]
  );

  return (
    <motion.div
      ref={magnetic.ref}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.handleMouseMove}
      onMouseLeave={magnetic.handleMouseLeave}
      whileHover={hoverVariants}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className={`w-[300px] p-4 pt-12 rounded-lg bg-400 flex flex-col items-center box-shadow 
      h-[${selectedHeight}] ${selectedHeight === "300px" ? "h-[300px]" : ""}
      max-[995px]:!h-[300px] max-sm:!w-[100%] cursor-pointer magnetic-element glow-effect transform-3d gpu-accelerated animation-container`}
      style={{ height: `${height}px`, transformStyle: "preserve-3d" }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5, rotateZ: shouldReduceMotion ? 0 : 5 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="gpu-accelerated"
      >
        {children}
      </motion.div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <h3 className="text-[24px] text-white-light font-semibold">{title}</h3>

        <span className="text-[16px] text-gray-7 max-w-[268px]">{text}</span>
      </div>
    </motion.div>
  );
}
