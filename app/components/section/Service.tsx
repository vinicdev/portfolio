"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import CardService from "../CardService";
import Title from "../Title";

export default function Service() {
  const shouldReduceMotion = useReducedMotion();

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
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
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
    }),
    [shouldReduceMotion]
  );

  return (
    <>
      <section className="relative w-full min-h-[558px] h-auto my-52 max-sm:my-62 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100,
          }}
          className="absolute bottom-0 left-0 w-full h-[80%] z-0 bg-black-normal gpu-accelerated"
        ></motion.div>

        <div className="flex flex-col items-center gap-12 mb-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="relative z-10 h-full gap-12 flex flex-col items-start px-4 max-w-[1440px] w-full animation-container"
          >
            <motion.div variants={itemVariants}>
              <Title titleText="Serviços" />
            </motion.div>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center items-end gap-12 w-full"
            >
              <motion.div variants={itemVariants}>
                <CardService
                  title="Desenvolvimento Front-end"
                  text="Criação de interfaces modernas e responsivas com as tecnologias mais recentes."
                  height="300"
                >
                  <div
                    style={{ backgroundImage: "url(./free_pen.svg)" }}
                    className="w-[60px] h-[60px] bg-no-repeat"
                  />
                </CardService>
              </motion.div>

              <motion.div variants={itemVariants}>
                <CardService
                  title="UI/UX Design"
                  text="Design de interfaces intuitivas que combinam estética e funcionalidade."
                  height="350"
                >
                  <div
                    style={{ backgroundImage: "url(./computer.svg)" }}
                    className="w-[60px] h-[60px] bg-no-repeat"
                  />
                </CardService>
              </motion.div>

              <motion.div variants={itemVariants}>
                <CardService
                  title="Consultoria Técnica"
                  text="Consultoria em tecnologias front-end e melhores práticas de desenvolvimento."
                  height="300"
                >
                  <div
                    style={{ backgroundImage: "url(./world-search.svg)" }}
                    className="w-[60px] h-[60px] bg-no-repeat"
                  />
                </CardService>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
