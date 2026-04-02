"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { id: "moon-mate", title: "Moon Mate", category: "Estrategia · Fotografía · Gráfica publicitaria", year: "2025", color: "#f0e44a" },
  { id: "proyecto-02", title: "Otro Proyecto", category: "Branding · Identidad", year: "2025", color: "#d5dde8" },
  { id: "proyecto-03", title: "Tercer Proyecto", category: "Contenido · Video", year: "2024", color: "#d5e8d8" },
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/work/${project.id}`} className="group block">
            {/* Imagen */}
            <div className="relative overflow-hidden aspect-[4/5] mb-4" style={{ backgroundColor: project.color }}>
              {/* Overlay al hover */}
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/30 transition-all duration-500" />
              {/* Número */}
              <span className="absolute top-4 left-4 text-xs text-[#c80000] font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Flecha al hover */}
              <span className="absolute bottom-4 right-4 text-[#c80000] text-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">→</span>
            </div>

            {/* Info */}
            <h3 className="text-lg font-black tracking-tight text-[#1a1a1a] group-hover:text-[#c80000] transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-[#888]">{project.category}</p>
              <p className="text-sm text-[#888]">{project.year}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
