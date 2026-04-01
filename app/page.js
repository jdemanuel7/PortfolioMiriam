"use client";

import { motion } from "framer-motion";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-24 pb-12">
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
            Publicista
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(2.5rem,10vw,9rem)] font-black leading-none tracking-tighter mb-8 text-[#1a1a1a]"
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
      <section id="sobre-mi" className="min-h-screen px-6 md:px-12 py-24 border-t border-[#d0cfc9]">
        <p className="text-sm tracking-widest uppercase text-[#888] mb-16">Sobre mí</p>

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
              className="w-full aspect-[3/4] object-cover object-top grayscale"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-black leading-none tracking-tighter text-[#1a1a1a]">
              MIRIAM
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1a1a" }}>MUÑOZ</span>
              <br />
              FERNÁNDEZ
            </h2>

            <p className="text-[#444] leading-relaxed font-serif italic text-base md:text-lg">
              Graduada en Publicidad y Relaciones Públicas por la Universidad de Sevilla.
              Apasionada por la comunicación creativa, el diseño y las estrategias que conectan marcas con personas.
            </p>

            <p className="text-[#444] leading-relaxed text-sm md:text-base">
              Con formación en creatividad publicitaria, dirección de arte, redacción y estrategia,
              busco mi primera experiencia profesional donde aportar ideas frescas y seguir creciendo.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-sm text-[#888]">
              <span>🌐 Castellano nativo · Inglés B1 (Cambridge) · Francés básico</span>
              <span>📷 Formación en fotografía — Estudios Lechuga, Úbeda</span>
            </div>

            <div className="pt-4 relative group/cv inline-block">
              <a
                href="/cv-miriam-munoz.pdf"
                download
                className="text-sm tracking-widest uppercase text-[#c80000] hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-2"
              >
                Descargar CV ↓
              </a>
              {/* Preview al hover */}
              <div className="absolute bottom-10 left-0 w-64 h-80 shadow-xl opacity-0 group-hover/cv:opacity-100 transition-opacity duration-300 pointer-events-none z-50 border border-[#d0cfc9]">
                <iframe
                  src="/cv-miriam-munoz.pdf"
                  className="w-full h-full"
                  title="Preview CV"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRABAJO */}
      <section id="trabajo" className="min-h-screen px-6 md:px-12 py-24 border-t border-[#d0cfc9]">
        <ProjectList />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="min-h-screen px-6 md:px-12 py-24 border-t border-[#d0cfc9] flex flex-col justify-between">
        {/* Centro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2rem,6vw,5.5rem)] font-black leading-none tracking-tighter text-[#1a1a1a]"
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
              Estoy buscando mi primera oportunidad profesional. Si crees que encajo en tu equipo, escríbeme.
            </p>
            <a href="mailto:miriaam.mnzz@gmail.com" className="text-xl md:text-2xl font-serif italic text-[#c80000] hover:text-[#1a1a1a] transition-colors duration-300 break-all">
              miriaam.mnzz@gmail.com
            </a>
            <a href="tel:+34634694879" className="text-base text-[#888] hover:text-[#1a1a1a] transition-colors duration-300">
              +34 634 694 879
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#d0cfc9] pt-8 flex gap-10">
          <a href="#" className="text-sm tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors duration-200">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" className="text-sm tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors duration-200">LinkedIn</a>
        </div>
      </section>
    </>
  );
}
