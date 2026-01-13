"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import SmallLink from "../SmallLink";
import Title from "../Title";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
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
    <Container style="flex justify-between items-center gap-4 flex-wrap min-h-[500px] h-auto  max-md:justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex justify-between items-center gap-4 flex-wrap w-full max-md:justify-center"
      >
        <motion.div variants={itemVariants}>
          <Title titleText="Sobre mim" />
          <div className="resize-about-text max-w-[660px] font-bold text-white-light mt-4">
            Lorem Ipsum has been the industry's
          </div>
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
