"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface smalLinksProps {
  textSmall: string;
  linkSmall: string;
}

export default function SmallLink({ textSmall, linkSmall }: smalLinksProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
    >
      <Link href={linkSmall || "/"} className="flex items-center gap-1 group">
        <motion.small
          whileHover={{ color: "#5390e3" }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 400,
          }}
          className="text-[14px] text-blue-light group-hover:underline transition-all duration-300"
        >
          {textSmall}
        </motion.small>

        <motion.div
          whileHover={{ x: 3 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="icon-arrow w-[15px] h-[15px]"
        ></motion.div>
      </Link>
    </motion.div>
  );
}
