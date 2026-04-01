"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "proyecto-01",
    title: "Nombre del Proyecto",
    category: "Campaña · Redes Sociales",
    year: "2025",
  },
  {
    id: "proyecto-02",
    title: "Otro Proyecto",
    category: "Branding · Identidad",
    year: "2025",
  },
  {
    id: "proyecto-03",
    title: "Tercer Proyecto",
    category: "Contenido · Video",
    year: "2024",
  },
];

export default function Work() {
  return (
    <section className="min-h-screen px-8 pt-32 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm tracking-widest uppercase text-[#888] mb-16"
      >
        Proyectos universitarios · Trabajos personales
      </motion.h2>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/work/${project.id}`}
              className="group flex items-center justify-between py-8 border-b border-[#d0cfc9] hover:border-[#1a1a1a] transition-all duration-300"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs text-[#888] w-8">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight group-hover:text-[#c80000] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#888] mt-1">{project.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#888]">{project.year}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
