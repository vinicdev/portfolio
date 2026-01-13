"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className={`w-[300px] p-4 pt-12 rounded-lg bg-400 flex flex-col items-center box-shadow 
      h-[${selectedHeight}] ${selectedHeight === "300px" ? "h-[300px]" : ""}
      max-[995px]:!h-[300px] max-sm:!w-[100%] cursor-pointer`}
      style={{ height: `${height}px` }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
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
