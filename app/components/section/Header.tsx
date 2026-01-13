"use client";

import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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

  const titleText = useMemo(() => "FRONT-END", []);
  const subtitleText = useMemo(() => "& UI DESIGN", []);

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

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.9,
          delay: shouldReduceMotion ? 0 : 0.2,
        }}
        className="mt-[12px] title-risize text-white-normal font-bold flex flex-col items-center gap-4 gpu-accelerated"
      >
        <motion.span
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50, filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: shouldReduceMotion ? 0 : 0.4,
          }}
          className="text-reveal"
        >
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-reveal-char inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.4 + index * 0.05,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50, filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: shouldReduceMotion ? 0 : 0.6,
          }}
          className="text-transparent text-stroke text-reveal"
        >
          {subtitleText.split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-reveal-char inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.6 + index * 0.05,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>

      <motion.div
        style={{ y: imageY, opacity: imageOpacity }}
        className="absolute cursor-pointer image-resize max-sm:relative max-sm:top-[-110px] max-sm:opacity-100 gpu-accelerated"
      >
        <motion.div
          whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="grayscale-image transform-3d"
        >
          <Image
            width={550}
            height={200}
            alt="Desenvolvedor front-end vinicius cardoso"
            src="/desenvolvedor-vinicius-cardoso.png"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={magnetic.ref}
        style={{ x: magnetic.x, y: magnetic.y }}
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
        className="w-[50px] h-[50px] absolute bottom-[85px] left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-pointer ml-[-25px] group magnetic-element glow-effect gpu-accelerated"
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
    </header>
  );
}
