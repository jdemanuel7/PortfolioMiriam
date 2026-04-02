"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "moon-mate": {
    title: "Moon Mate",
    category: "Estrategia · Fotografía · Gráfica publicitaria",
    year: "2025",
    client: "Proyecto universitario",
    concept: "Naturalmente Activo",
    dossier: "/moon-mate/dossier-moon-mate.pdf",
    description:
      "Dossier de comunicación para Moon Mate, una bebida energética de infusión de mate. El proyecto redefine el concepto tradicional de bebida energética, alejándose de los códigos agresivos del sector para posicionarla como una alternativa natural, equilibrada y consciente.",
    details:
      "El concepto creativo 'Naturalmente Activo' conecta el origen natural del mate con un estilo de vida activo pero tranquilo, asociado a deportes soft como el tenis, el yoga o el pilates. La estética visual apuesta por composiciones limpias, colores vivos y luminosos, y una comunicación cercana e inspiradora.",
    tags: ["Estrategia de comunicación", "Fotografía de producto", "Gráfica publicitaria", "Análisis de competencia"],
    images: [
      { src: "/moon-mate/grafica.png", alt: "Gráfica publicitaria Naturalmente Activo", wide: true },
      { src: "/moon-mate/lifestyle-zapatillas.png", alt: "Fotografía de producto lifestyle" },
      { src: "/moon-mate/lifestyle-manos.png", alt: "Fotografía lifestyle tenis" },
      { src: "/moon-mate/producto-latas.png", alt: "Fotografía producto latas" },
      { src: "/moon-mate/tenis-verde.png", alt: "Fotografía producto tenis verde" },
      { src: "/moon-mate/30.png", alt: "Fotografía producto" },
    ],
  },
  "goyito-arehucas": {
    title: "Goyito Arehucas",
    category: "Contenido digital · Redes Sociales · Música",
    year: "2025",
    client: "Proyecto universitario",
    concept: "El ron que viaja a la península",
    dossier: null,
    description:
      "Estrategia de contenido digital para acercar Ron Arehucas —marca canaria con más de 140 años de historia— al público de la península. El proyecto gira en torno a Goyito, una mascota animada con personalidad propia que actúa como hilo conductor de toda la campaña.",
    details:
      "La estrategia se desplegó en múltiples plataformas: contenido corto en TikTok e Instagram para conectar con un público joven, y música original distribuida en YouTube y SoundCloud para reforzar la identidad de marca de forma diferencial y memorable.",
    tags: ["Estrategia digital", "Contenido TikTok/Instagram", "Producción musical", "Creación de mascota"],
    images: [
      { src: "/goyito/1.jpg", alt: "Goyito Arehucas en el avión" },
      { src: "/goyito/498637210_17847226287473892_4242844946409637209_n.jpg", alt: "Goyito Arehucas en la calle" },
      { src: "/goyito/502023723_17848560579473892_8471269710333555806_n.jpg", alt: "Goyito Arehucas" },
    ],
  },
  "proyecto-03": {
    title: "Tercer Proyecto",
    category: "Contenido · Video",
    year: "2024",
    client: "Proyecto personal",
    concept: "",
    description: "Descripción del proyecto.",
    details: "",
    tags: ["Video", "Producción", "Contenido"],
    images: [],
  },
};

export default function ProjectPage({ params }) {
  const { id } = use(params);
  const project = projects[id];

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back */}
      <div className="px-6 md:px-12 mb-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Link href="/#trabajo" className="text-sm tracking-widest uppercase text-[#888] hover:text-[#c80000] transition-colors duration-200">
            ← Volver
          </Link>
        </motion.div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="px-6 md:px-12 mb-16"
      >
        <p className="text-sm tracking-widest uppercase text-[#888] mb-4">
          {project.category} · {project.year}
        </p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tighter text-[#1a1a1a]">
          {project.title}
        </h1>
        {project.concept && (
          <p className="text-[clamp(1.2rem,3vw,2rem)] font-serif italic text-[#c80000] mt-4">
            "{project.concept}"
          </p>
        )}
      </motion.div>

      {/* Descripción + detalles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#d0cfc9] pt-12 mb-16"
      >
        <div className="md:col-span-2 space-y-4">
          <p className="text-[#444] leading-relaxed text-lg font-serif italic">{project.description}</p>
          {project.details && <p className="text-[#444] leading-relaxed">{project.details}</p>}
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
                <span key={tag} className="text-xs tracking-widest uppercase border border-[#d0cfc9] px-3 py-1 text-[#444]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.dossier && (
            <div>
              <p className="text-sm tracking-widest uppercase text-[#888] mb-3">Dossier</p>
              <a
                href={project.dossier}
                download
                className="text-sm tracking-widest uppercase text-[#c80000] hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-2"
              >
                Descargar PDF ↓
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Galería de imágenes */}
      {project.images.length > 1 && (
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
