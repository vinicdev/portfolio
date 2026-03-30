<<<<<<< HEAD
"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";
import Container from "../Container";
import Title from "../Title";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const magneticButton = useMagnetic({
    distance: 15,
    stiffness: 400,
    damping: 25,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          damping: 25,
          stiffness: 120,
          mass: 0.8,
        },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <Container style="mb-[200px] max-sm:mb-40" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="flex flex-col gap-12 animation-container"
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
                href="https://github.com/vinicdev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: shouldReduceMotion ? 0 : 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="w-[50px] h-[50px] bg-400 rounded-full flex items-center justify-center text-white-light hover:bg-blue-light transition-colors duration-300 glow-effect gpu-accelerated"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vinicdev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: shouldReduceMotion ? 0 : 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="w-[50px] h-[50px] bg-400 rounded-full flex items-center justify-center text-white-light hover:bg-blue-light transition-colors duration-300 glow-effect gpu-accelerated"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:dev.viniciuscardoso@gmail.com"
                whileHover={{ scale: 1.1, rotate: shouldReduceMotion ? 0 : 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="w-[50px] h-[50px] bg-400 rounded-full flex items-center justify-center text-white-light hover:bg-blue-light transition-colors duration-300 glow-effect gpu-accelerated"
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
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-6 text-sm font-medium">
                Nome
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className="w-full px-4 py-3 bg-black-light border border-600 rounded-lg text-white-light focus:outline-none focus:border-blue-light transition-colors duration-300 glow-input gpu-accelerated"
                placeholder="Seu nome"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-gray-6 text-sm font-medium"
              >
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className="w-full px-4 py-3 bg-black-light border border-600 rounded-lg text-white-light focus:outline-none focus:border-blue-light transition-colors duration-300 glow-input gpu-accelerated"
                placeholder="seu@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-gray-6 text-sm font-medium"
              >
                Mensagem
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                whileFocus={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className="w-full px-4 py-3 bg-black-light border border-600 rounded-lg text-white-light focus:outline-none focus:border-blue-light transition-colors duration-300 resize-none glow-input gpu-accelerated"
                placeholder="Sua mensagem..."
              />
            </div>

            <motion.button
              ref={magneticButton.ref as React.RefObject<HTMLButtonElement>}
              style={{ x: magneticButton.x, y: magneticButton.y }}
              onMouseMove={magneticButton.handleMouseMove}
              onMouseLeave={magneticButton.handleMouseLeave}
              type="submit"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="w-full px-6 py-3 bg-gradient-1 text-white-light font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg glow-effect magnetic-element gpu-accelerated"
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </Container>
=======
import Container from "../Container";
import Title from "../Title";

const contactItems = [
  {
    label: "WhatsApp",
    value: "+55 (41) 99830-4073",
    link: "https://wa.me/5541998304073",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vinicdev",
    link: "https://www.linkedin.com/in/vinicdev/",
  },
  {
    label: "GitHub",
    value: "github.com/vinicdev",
    link: "https://github.com/vinicdev",
  },
  {
    label: "Email",
    value: "contato@viniciuscardoso.dev",
    link: "mailto:contato@viniciuscardoso.dev",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-black-normal py-16">
      <Container style="flex flex-col gap-8">
        <Title titleText="Contato" />

        <p className="max-w-2xl text-gray-7">
          Estou disponível para novos projetos e parcerias. Escolha uma forma de
          contato abaixo e vamos conversar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-5 bg-black-dark p-4 transition hover:border-blue-light hover:bg-[#0f172a]"
            >
              <div className="text-gray-7 text-xs uppercase tracking-wider">
                {item.label}
              </div>
              <div className="mt-2 text-white-light font-semibold">
                {item.value}
              </div>
            </a>
          ))}
        </div>

        <div>
          <a
            href="https://wa.me/5541998304073"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg border border-blue-light px-5 py-2 text-blue-light transition hover:bg-blue-light hover:text-black-dark"
          >
            Enviar mensagem pelo WhatsApp
          </a>
        </div>
      </Container>
    </section>
>>>>>>> 50ad618 (fix: finish my portfolio)
  );
}
