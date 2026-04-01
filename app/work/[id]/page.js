"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "proyecto-01": {
    title: "Nombre del Proyecto",
    category: "Campaña · Redes Sociales",
    year: "2025",
    client: "Proyecto universitario",
    description:
      "Descripción del proyecto. Contá el brief que recibiste, cómo lo resolviste y qué aprendiste en el proceso.",
    tags: ["Estrategia", "Contenido", "Redes Sociales"],
  },
  "proyecto-02": {
    title: "Otro Proyecto",
    category: "Branding · Identidad",
    year: "2025",
    client: "Proyecto universitario",
    description:
      "Descripción del proyecto. Contá el brief que recibiste, cómo lo resolviste y qué aprendiste en el proceso.",
    tags: ["Branding", "Identidad", "Diseño"],
  },
  "proyecto-03": {
    title: "Tercer Proyecto",
    category: "Contenido · Video",
    year: "2024",
    client: "Proyecto personal",
    description:
      "Descripción del proyecto. Contá el brief que recibiste, cómo lo resolviste y qué aprendiste en el proceso.",
    tags: ["Video", "Producción", "Contenido"],
  },
};

export default function ProjectPage({ params }) {
  const { id } = use(params);
  const project = projects[id];

  if (!project) notFound();

  return (
    <section className="min-h-screen px-8 pt-32 pb-20 max-w-5xl">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-16"
      >
        <Link
          href="/work"
          className="text-sm tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors duration-200"
        >
          ← Volver
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16"
      >
        <p className="text-sm tracking-widest uppercase text-[#888] mb-4">
          {project.category} · {project.year}
        </p>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-none tracking-tighter text-[#1a1a1a]">
          {project.title}
        </h1>
      </motion.div>

      {/* Image placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full aspect-video bg-[#e8e7e2] border border-[#d0cfc9] mb-16 flex items-center justify-center"
      >
        <p className="text-[#888] text-sm tracking-widest uppercase">Imagen del proyecto</p>
      </motion.div>

      {/* Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#d0cfc9] pt-12"
      >
        <div className="md:col-span-2">
          <p className="text-sm tracking-widest uppercase text-[#888] mb-4">Sobre el proyecto</p>
          <p className="text-[#444] leading-relaxed text-lg font-serif italic">{project.description}</p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm tracking-widest uppercase text-[#888] mb-2">Tipo</p>
            <p className="text-[#1a1a1a]">{project.client}</p>
          </div>
          <div>
            <p className="text-sm tracking-widest uppercase text-[#888] mb-2">Año</p>
            <p className="text-[#1a1a1a]">{project.year}</p>
          </div>
          <div>
            <p className="text-sm tracking-widest uppercase text-[#888] mb-3">Disciplinas</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-widest uppercase border border-[#d0cfc9] px-3 py-1 text-[#444]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
