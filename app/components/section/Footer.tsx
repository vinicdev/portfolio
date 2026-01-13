"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
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
  };

  return (
    <footer className="w-full border-t border-600 bg-black-normal">
      <div className="max-w-[1440px] w-full mx-auto px-20 max-md:px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 100,
            }}
            className="text-gray-6 text-sm"
          >
            © {currentYear} Vinicius Cardoso. Todos os direitos reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 100,
              delay: 0.2,
            }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-[40px] h-[40px] bg-black-light rounded-full flex items-center justify-center text-gray-6 hover:text-blue-light transition-colors duration-300"
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
              className="w-[40px] h-[40px] bg-black-light rounded-full flex items-center justify-center text-gray-6 hover:text-blue-light transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:contato@exemplo.com"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-[40px] h-[40px] bg-black-light rounded-full flex items-center justify-center text-gray-6 hover:text-blue-light transition-colors duration-300"
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

