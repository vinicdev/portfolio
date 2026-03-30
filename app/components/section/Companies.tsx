"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import CardCompanies from "../CardCompanies";
import Container from "../Container";
import Title from "../Title";

export default function Companies() {
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
    [shouldReduceMotion],
  );

  const titleVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.8,
        },
      } as const,
    }),
    [shouldReduceMotion],
  );

  return (
    <Container style="flex flex-col gap-6 mb-[200px] max-sm:mb-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        variants={titleVariants}
        className="animation-container"
      >
        <Title titleText="Empresas" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="flex flex-col gap-20 animation-container"
      >
        <motion.div
          variants={titleVariants}
          className="resize-about-text w-full text-center font-bold text-white-light gpu-accelerated"
        >
          Empresa que
          <span className="italic text-400"> confiaram </span>
          em meu serviço
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <CardCompanies textCard="Solvis" imageSrc="solvis" />
          <CardCompanies textCard="BNE" imageSrc="bne" />
          <CardCompanies textCard="Harpia Tech" imageSrc="harpia" />
          <CardCompanies textCard="360 ERP" imageSrc="360" />
        </div>
      </motion.div>
    </Container>
  );
}
