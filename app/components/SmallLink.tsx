"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface smalLinksProps {
  textSmall: string;
  linkSmall: string;
}

export default function SmallLink({ textSmall, linkSmall }: smalLinksProps) {
  const shouldReduceMotion = useReducedMotion();

  const transitionConfig = useMemo(
    () => ({
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    }),
    []
  );

  return (
    <motion.div
      whileHover={{ x: shouldReduceMotion ? 0 : 5 }}
      transition={transitionConfig}
      className="gpu-accelerated"
    >
      <Link href={linkSmall || "/"} className="flex items-center gap-1 group">
        <motion.small
          whileHover={{ color: "#5390e3" }}
          transition={transitionConfig}
          className="text-[14px] text-blue-light group-hover:underline transition-all duration-300"
        >
          {textSmall}
        </motion.small>

        <motion.div
          whileHover={{ x: shouldReduceMotion ? 0 : 3 }}
          transition={transitionConfig}
          className="icon-arrow w-[15px] h-[15px] gpu-accelerated"
        ></motion.div>
      </Link>
    </motion.div>
  );
}
