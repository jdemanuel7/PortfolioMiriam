"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Estrategia", items: ["Publicidad", "Branding", "Planificación de medios", "Investigación"] },
  { category: "Creativo", items: ["Dirección creativa", "Copywriting", "Conceptualización", "Storytelling"] },
  { category: "Digital", items: ["Redes sociales", "Contenido audiovisual", "Campañas digitales", "SEO/SEM"] },
];

export default function About() {
  return (
    <section className="min-h-screen px-8 pt-32 pb-20 max-w-6xl">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm tracking-widest uppercase text-[#888] mb-16"
      >
        Sobre mí
      </motion.p>

      {/* Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter mb-8 text-[#1a1a1a]">
            EGRESADO
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
              LISTO
            </span>
            <br />
            2025
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="text-[#444] leading-relaxed mb-6 font-serif italic text-lg">
            Soy publicista recién egresado, apasionado por la comunicación creativa y el mundo digital.
            Durante la carrera desarrollé proyectos reales que me enseñaron a pensar estratégicamente
            y ejecutar con criterio.
          </p>
          <p className="text-[#444] leading-relaxed">
            Busco mi primera experiencia profesional donde pueda aportar ideas frescas,
            aprender rápido y crecer junto a un equipo que crea en el poder de la comunicación.
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-[#d0cfc9] pt-16"
      >
        <p className="text-sm tracking-widest uppercase text-[#888] mb-12">Habilidades</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <h3 className="text-xs tracking-widest uppercase text-[#c80000] mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[#444] text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
