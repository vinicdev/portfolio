"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import IconTech from "../IconTech";
import SmallLink from "../SmallLink";

export default function Tech() {
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
    hidden: { opacity: 0, scale: 0.5 },
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
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
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
  };

  return (
    <Container style="mb-[200px] flex-wrap flex flex-row justify-between items-center gap-6 max-sm:mb-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="resize-about-text max-w-[660px] font-bold text-white-light"
      >
        Trabalho com
        <span className="italic text-white-dark"> técnologias de ponta</span>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-6"
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
