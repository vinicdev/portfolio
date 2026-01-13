"use client";

import { motion } from "framer-motion";

interface iconTechProps {
  pathIcon: string;
}

export default function IconTech({ pathIcon }: iconTechProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 400,
      }}
      className="w-[80px] h-[80px] shadow bg-black-light flex items-center justify-center rounded-full cursor-pointer hover:bg-400 transition-colors duration-300"
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
