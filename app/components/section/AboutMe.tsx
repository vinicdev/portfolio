"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import Container from "../Container";
import SmallLink from "../SmallLink";
import Title from "../Title";

export default function AboutMe() {
  const shouldReduceMotion = useReducedMotion();
  const titleText = useMemo(() => "Lorem Ipsum has been the industry's", []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.1,
          delayChildren: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.8,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const itemVariantsRight = useMemo(
    () => ({
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.8,
        },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <Container style="flex justify-between items-center gap-4 flex-wrap min-h-[500px] h-auto  max-md:justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="flex justify-between items-center gap-4 flex-wrap w-full max-md:justify-center animation-container"
      >
        <motion.div variants={itemVariants} className="animation-container">
          <Title titleText="Sobre mim" />
          <motion.div
            className="resize-about-text max-w-[660px] font-bold text-white-light mt-4 text-reveal gpu-accelerated"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-reveal-char inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      delay: shouldReduceMotion ? 0 : index * 0.03,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6">
            <SmallLink textSmall="Contact me" linkSmall="#contact" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariantsRight}
          className="w-[45%] max-w-[577px] max-[1390px]:max-w-full max-[1390px]:w-full"
        >
          <p className="resize-text text-gray-7 w-full">
            Lorem Ipsum has been the industry s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
}
