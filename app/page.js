"use client";

import { motion } from "framer-motion";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="min-h-screen flex flex-col justify-between pt-24 pb-12" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between pt-2"
        >
          <p className="font-serif italic text-[#888] text-sm">Miriam Muñoz Fernández</p>
          <p className="hidden md:block text-xs tracking-widest uppercase text-[#888]">
            Publicidad y Relaciones Públicas · Universidad de Sevilla
          </p>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-widest uppercase text-[#c80000] mb-6"
          >
            Creativa · Estrategia · Fotografía
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(2.8rem,11vw,9rem)] font-black leading-[0.95] tracking-tighter mb-6 md:mb-8 text-[#1a1a1a]"
          >
            LISTA PARA
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
              EMPEZAR
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-[#888] max-w-lg leading-relaxed"
          >
            Graduada en Publicidad y Relaciones Públicas con vocación creativa, visión estratégica y disponibilidad inmediata.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-end justify-between mt-12"
        >
          <div className="flex-1" />

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 flex-1"
          >
            <span className="text-xs tracking-widest uppercase text-[#888]">Scroll</span>
            <span className="text-lg text-[#c80000]">↓</span>
          </motion.div>

          <div className="flex-1" />
        </motion.div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="min-h-screen py-16 md:py-24 border-t border-[#d0cfc9]" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <img
              src="/miriam.jpg"
              alt="Miriam Muñoz"
              className="w-full max-h-[50vh] md:max-h-none md:aspect-[3/4] object-cover object-top grayscale"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-black leading-tight md:leading-none tracking-tighter text-[#1a1a1a]">
              MIRIAM
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1a1a" }}>MUÑOZ</span>
              <br />
              FERNÁNDEZ
            </h2>

            <p className="text-[#444] leading-relaxed font-serif italic text-base md:text-lg">
              Graduada en Publicidad y Relaciones Públicas por la Universidad de Sevilla.
              Creativa con base en estrategia: me interesa la idea, el concepto y cómo conecta con las personas.
            </p>

            <p className="text-[#444] leading-relaxed text-sm md:text-base">
              Formación en creatividad publicitaria, dirección de arte, redacción y fotografía.
              Busco mi primera experiencia en una agencia donde seguir creciendo.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {["Castellano nativo", "Inglés B1 · Cambridge", "Francés básico"].map(tag => (
                <span key={tag} className="text-xs tracking-wide border border-[#d0cfc9] px-3 py-1 text-[#444]">{tag}</span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/cv-miriam-munoz-2025.pdf"
                download
                className="inline-block text-sm tracking-widest uppercase bg-[#c80000] text-[#f5f4f0] px-6 py-3 hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                Descargar CV ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRABAJO */}
      <section id="trabajo" className="min-h-screen py-16 md:py-24 border-t border-[#d0cfc9]" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
        <ProjectList />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="min-h-screen pt-24 md:pt-32 pb-16 border-t border-[#d0cfc9] flex flex-col justify-between" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
        {/* Centro */}
        <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 items-start md:items-end w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2rem,6vw,5.5rem)] font-black leading-tight md:leading-none tracking-tighter text-[#1a1a1a]"
          >
            ¿TIENES UN
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1a1a" }}>HUECO</span>
            <br />
            PARA MÍ?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[#888] leading-relaxed font-serif italic text-base md:text-lg">
              Busco agencia donde crecer. Si trabajas en publicidad, estrategia o comunicación, me interesa.
            </p>
            <a href="mailto:miriaam.mnzz@gmail.com" className="text-xl md:text-2xl font-serif italic text-[#c80000] hover:text-[#1a1a1a] transition-colors duration-300 break-all">
              miriaam.mnzz@gmail.com
            </a>
            <a href="tel:+34634694879" className="text-base text-[#888] hover:text-[#1a1a1a] transition-colors duration-300">
              +34 634 694 879
            </a>
            <div className="flex gap-6 pt-2">
              <a href="https://www.instagram.com/miriaam.mnzz/" target="_blank" className="text-sm text-[#888] hover:text-[#c80000] transition-colors duration-200">Instagram</a>
              <a href="https://www.linkedin.com/in/miriam-mu%C3%B1oz-fern%C3%A1ndez-a26bb7315/" target="_blank" className="text-sm text-[#888] hover:text-[#c80000] transition-colors duration-200">LinkedIn</a>
            </div>
          </motion.div>
        </div>
        </div>

        <div className="border-t border-[#d0cfc9] pt-6 flex items-center justify-between text-xs tracking-widest uppercase text-[#888]">
          <span>Miriam Muñoz Fernández</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

      </section>
    </>
  );
}
