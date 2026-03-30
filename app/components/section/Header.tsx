"use client";

import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";
import { useMemo } from "react";

export default function Header() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 150], {
    clamp: false,
  });
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.3], {
    clamp: false,
  });

  const magnetic = useMagnetic({ distance: 15, stiffness: 300, damping: 30 });

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const titleText = useMemo(() => "FULL STACK", []);
  const subtitleText = useMemo(() => "DEVELOPER", []);

  return (
    <header className="flex flex-col items-center pt-[90px] relative min-h-screen max-sm:justify-center max-sm:pt-[120px] overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
          mass: 0.8,
        }}
        className="flex gap-2 subtitle-resize text-gray-7"
      >
        👋, meu nome é<span className="font-bold text-blue-dark">Vinicius</span>{" "}
        e eu sou freelancer
      </motion.p>

      <h1 className="mt-[12px] title-risize text-white-normal font-bold flex flex-col items-center gap-4">
        <span>{titleText}</span>
        <span className="text-transparent text-stroke">{subtitleText}</span>
      </h1>

      <motion.div
        style={{ y: imageY }}
        className="absolute image-resize max-sm:relative max-sm:top-[-110px] max-sm:opacity-100 flex flex-col items-center gpu-accelerated"
      >
        <motion.div
          style={{ opacity: imageOpacity }}
          whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="grayscale-image transform-3d cursor-pointer gpu-accelerated"
        >
          <Image
            width={550}
            height={200}
            alt="Desenvolvedor front-end vinicius cardoso"
            src="/desenvolvedor-vinicius-cardoso.png"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          ref={magnetic.ref as React.RefObject<HTMLDivElement>}
          style={{
            x: magnetic.x,
            y: magnetic.y,
          }}
          onMouseMove={magnetic.handleMouseMove}
          onMouseLeave={magnetic.handleMouseLeave}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 100,
            delay: shouldReduceMotion ? 0 : 1,
          }}
          onClick={handleScrollDown}
          className="w-[50px] h-[50px] mt-8 flex justify-center items-center cursor-pointer group magnetic-element glow-effect gpu-accelerated relative z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <FaAngleDown
              size="18px"
              className="text-black-4 group-hover:text-blue-light transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
