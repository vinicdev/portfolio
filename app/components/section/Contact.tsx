"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import Title from "../Title";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <Container style="mb-[200px] max-sm:mb-40" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        <motion.div variants={itemVariants}>
          <Title titleText="Contato" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="flex-1 w-full">
            <h3 className="resize-about-text font-bold text-white-light mb-6">
              Vamos trabalhar
              <span className="italic text-400"> juntos?</span>
            </h3>
            <p className="resize-text text-gray-7 mb-8">
              Estou sempre aberto a novos projetos e oportunidades. Entre em
              contato através do formulário ou pelas redes sociais.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="w-[50px] h-[50px] bg-400 rounded-full flex items-center justify-center text-white-light hover:bg-blue-light transition-colors duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="w-[50px] h-[50px] bg-400 rounded-full flex items-center justify-center text-white-light hover:bg-blue-light transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:contato@exemplo.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="w-[50px] h-[50px] bg-400 rounded-full flex items-center justify-center text-white-light hover:bg-blue-light transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex-1 w-full flex flex-col gap-6"
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="name" className="text-gray-6 text-sm font-medium">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black-light border border-600 rounded-lg text-white-light focus:outline-none focus:border-blue-light transition-colors duration-300"
                placeholder="Seu nome"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor="email"
                className="text-gray-6 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black-light border border-600 rounded-lg text-white-light focus:outline-none focus:border-blue-light transition-colors duration-300"
                placeholder="seu@email.com"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor="message"
                className="text-gray-6 text-sm font-medium"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black-light border border-600 rounded-lg text-white-light focus:outline-none focus:border-blue-light transition-colors duration-300 resize-none"
                placeholder="Sua mensagem..."
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="w-full px-6 py-3 bg-gradient-1 text-white-light font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </Container>
  );
}
