"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import Container from "../Container";
import IconTech from "../IconTech";
import SmallLink from "../SmallLink";

export default function Tech() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.08,
          delayChildren: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.6,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const textVariants = useMemo(
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

  return (
    <Container style="mb-[200px] flex-wrap flex flex-row justify-between items-center gap-6 max-sm:mb-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        variants={textVariants}
        className="resize-about-text max-w-[660px] font-bold text-white-light gpu-accelerated animation-container"
      >
        Trabalho com
        <span className="italic text-white-dark"> técnologias de ponta</span>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="flex flex-col gap-6 animation-container"
      >
        <motion.div
          variants={containerVariants}
          className="flex items-center flex-wrap gap-2"
        >
          <motion.div variants={itemVariants}>
            <IconTech pathIcon="icon-flutter" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IconTech pathIcon="icon-react" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IconTech pathIcon="icon-nextjs" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IconTech pathIcon="icon-typescript" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IconTech pathIcon="icon-angular" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IconTech pathIcon="icon-dotnet" />
          </motion.div>
        </motion.div>

        <motion.div variants={textVariants} className="flex flex-col gap-2">
          <span className="text-gray-6">
            Atualmente algumas das principais técnologias utilizadas nos meu
            dia-dia, mas sempre estou aberto a novas tecnologias.
          </span>
          <SmallLink textSmall="Contact me" linkSmall="#contact" />
        </motion.div>
      </motion.div>
    </Container>
  );
}
