"use client";

import { motion } from "framer-motion";
import CardCompanies from "../CardCompanies";
import Container from "../Container";
import Title from "../Title";

export default function Companies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.8,
      },
    },
  };

  return (
    <Container style="flex flex-col gap-6 mb-[200px] max-sm:mb-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
      >
        <Title titleText="Empresas" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-20"
      >
        <motion.div
          variants={titleVariants}
          className="resize-about-text w-full text-center font-bold text-white-light"
        >
          Empresa que
          <span className="italic text-400"> confiaram </span>
          em meu serviço
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.div variants={itemVariants}>
            <CardCompanies textCard="Solvis" imageSrc="solvis" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardCompanies textCard="BNE" imageSrc="bne" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardCompanies textCard="Harpia Tech" imageSrc="harpia" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardCompanies textCard="360 ERP" imageSrc="360" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardCompanies textCard="Tex4" imageSrc="tex4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
