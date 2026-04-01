"use client";

import { motion } from "framer-motion";

const contactLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
];

export default function Contact() {
  return (
    <section className="min-h-screen px-8 pt-32 pb-20 flex flex-col">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm tracking-widest uppercase text-[#888] mb-16"
      >
        Contacto
      </motion.p>

      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-none tracking-tighter mb-12 text-[#1a1a1a]"
        >
          HABLEMOS
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
            DE TU
          </span>
          <br />
          PROYECTO
        </motion.h1>

        <motion.a
          href="mailto:tu@email.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-3xl font-serif italic text-[#c80000] hover:text-[#1a1a1a] transition-colors duration-300 mb-16 inline-block"
        >
          tu@email.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-[#d0cfc9] pt-10 flex gap-10"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
