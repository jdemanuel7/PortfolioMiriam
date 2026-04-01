"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const projects = [
  { id: "proyecto-01", title: "Nombre del Proyecto", category: "Campaña · Redes Sociales", year: "2025", color: "#e8e0d5" },
  { id: "proyecto-02", title: "Otro Proyecto", category: "Branding · Identidad", year: "2025", color: "#d5dde8" },
  { id: "proyecto-03", title: "Tercer Proyecto", category: "Contenido · Video", year: "2024", color: "#d5e8d8" },
];

export default function ProjectList() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
      {/* Lista */}
      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/work/${project.id}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between py-8 border-b border-[#d0cfc9] hover:border-[#1a1a1a] transition-all duration-300"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs text-[#c80000] w-8">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight group-hover:text-[#c80000] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#888] mt-1">{project.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#888]">{project.year}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg text-[#c80000]">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Preview */}
      <div className="hidden md:flex items-center justify-center sticky top-32 h-[400px] pl-16">
        <AnimatePresence mode="wait">
          {hovered && (() => {
            const project = projects.find(p => p.id === hovered);
            return (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <p className="text-xs tracking-widest uppercase text-[#888]">Imagen del proyecto</p>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}
