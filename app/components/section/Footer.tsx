"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const iconVariants = useMemo(
    () => ({
      hover: {
        scale: shouldReduceMotion ? 1.1 : 1.2,
        rotate: shouldReduceMotion ? 0 : 5,
        transition: {
          type: "spring",
          damping: 18,
          stiffness: 400,
        },
      },
      tap: {
        scale: 0.9,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 500,
        },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <footer className="w-full border-t border-600 bg-black-normal">
      <div className="max-w-[1440px] w-full mx-auto px-20 max-md:px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 100,
            }}
            className="text-gray-6 text-sm gpu-accelerated"
          >
            © {currentYear} Vinicius Cardoso. Todos os direitos reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 100,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="flex gap-4 animation-container"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-[40px] h-[40px] bg-black-light rounded-full flex items-center justify-center text-gray-6 hover:text-blue-light transition-colors duration-300 glow-effect gpu-accelerated"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-[40px] h-[40px] bg-black-light rounded-full flex items-center justify-center text-gray-6 hover:text-blue-light transition-colors duration-300 glow-effect gpu-accelerated"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:contato@exemplo.com"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-[40px] h-[40px] bg-black-light rounded-full flex items-center justify-center text-gray-6 hover:text-blue-light transition-colors duration-300 glow-effect gpu-accelerated"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

