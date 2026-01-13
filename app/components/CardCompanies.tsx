"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";
import { useMemo } from "react";

interface CardCompaniesProps {
  textCard: string;
  imageSrc: string;
}

export default function CardCompanies({
  textCard,
  imageSrc,
}: CardCompaniesProps) {
  const shouldReduceMotion = useReducedMotion();
  const magnetic = useMagnetic({ distance: 20, stiffness: 300, damping: 30 });

  let altImage = "";

  if (textCard === "BNE" || textCard === "360 ERP") {
    altImage = `Logo do ${textCard}`;
  } else {
    altImage = `Logo da ${textCard}`;
  }

  const hoverVariants = useMemo(
    () => ({
      y: shouldReduceMotion ? 0 : -8,
      scale: shouldReduceMotion ? 1 : 1.05,
      rotateY: shouldReduceMotion ? 0 : 2,
    }),
    [shouldReduceMotion]
  );

  return (
    <motion.div
      ref={magnetic.ref as React.RefObject<HTMLDivElement>}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.handleMouseMove}
      onMouseLeave={magnetic.handleMouseLeave}
      whileHover={hoverVariants}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className="flex flex-col items-start gap-2 max-sm:w-full cursor-pointer magnetic-element gpu-accelerated animation-container"
    >
      <motion.div
        whileHover={{ scale: 1.05, borderColor: "#5390e3" }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="w-[250px] h-[350px] border border-600 bg-gradient-3 rounded flex items-center justify-center overflow-hidden max-sm:w-full glow-effect transform-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="w-[80%] h-[80%] flex items-center justify-center"
        >
          <Image
            src={`/companies/${imageSrc}.png`}
            width={160}
            height={160}
            alt={altImage}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
      <span className="text-[14px] font-light text-white-normal">
        {textCard}
      </span>
    </motion.div>
  );
}
