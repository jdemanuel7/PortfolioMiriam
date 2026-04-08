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
      { src: "/moon-mate/grafica.png", alt: "Gráfica publicitaria Naturalmente Activo" },
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
    video: "https://www.youtube.com/watch?v=J75hGjB8P_w",
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
  "andalucia": {
    title: "Andalucía",
    category: "Activación de marca · Estrategia",
    year: "2025",
    client: "Proyecto universitario",
    concept: "Impulso a crecer",
    dossier: null,
    description:
      "Activación de marca para Banco Sabadell con el objetivo de reforzar su presencia territorial en Andalucía y eliminar la percepción de banco arraigado al norte y levante español.",
    details:
      "La estrategia gira en torno al concepto 'Impulso a crecer' y el mensaje 'De aquí, me siento' — posicionando a Sabadell como un banco que acompaña a empresas, profesionales y proyectos andaluces con la convicción de que cuando Andalucía crece, todos crecemos con ella.",
    tags: ["Activación de marca", "Estrategia territorial", "Campaña", "Copywriting"],
    images: [
      { src: "/andalucia/resolucion.jpg", alt: "Resolución final campaña Sabadell" },
      { src: "/andalucia/slogan1.png", alt: "De aquí, me siento — Sabadell Andalucía" },
      { src: "/andalucia/slogan2.png", alt: "Slogan campaña Sabadell" },
      { src: "/andalucia/presentacion.jpg", alt: "Presentación propuesta Sabadell" },
      { src: "/andalucia/oficinas.jpg", alt: "Oficinas Sabadell Andalucía" },
      { src: "/andalucia/inspiracion.jpg", alt: "Inspiración campaña" },
    ],
  },
  "goiko": {
    title: "San Goiko",
    category: "Campaña publicitaria · Estrategia",
    year: "2025",
    client: "Proyecto universitario",
    concept: "Sin reglas pero con mucho sabor",
    dossier: null,
    description:
      "Campaña publicitaria para Goiko en torno a San Valentín. La estrategia rompe con la tradición del día de los enamorados como fecha exclusiva para parejas, apostando por celebrar el amor propio y el disfrute personal en todas sus formas: solo, con amigos o en pareja.",
    details:
      "El proyecto incluye estudio de competencia frente a marcas como TGB, McDonald's y Burger King, copy adaptado localmente a Cádiz, piezas gráficas para redes sociales, un vídeo de campaña y un anuncio en Spotify con canción propia. El concepto 'El amor auténtico empieza contigo mismo' actúa como hilo conductor de todas las piezas.",
    tags: ["Estrategia creativa", "Gráfica publicitaria", "Vídeo", "Spotify", "Análisis de competencia"],
    images: [
      { src: "/goiko/goiko_img-000.jpg", alt: "San Goiko portada" },
      { src: "/goiko/goiko_img-001.jpg", alt: "San Goiko pieza 1" },
      { src: "/goiko/goiko_img-002.jpg", alt: "San Goiko pieza 2" },
      { src: "/goiko/goiko_img-003.jpg", alt: "San Goiko pieza 3" },
      { src: "/goiko/goiko_img-004.jpg", alt: "San Goiko pieza 4", wide: true },
    ],
  },
};

export default function ProjectPage({ params }) {
  const { id } = use(params);
  const project = projects[id];

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-40 pb-20" style={{ paddingLeft: "clamp(2rem, 6vw, 6rem)", paddingRight: "clamp(2rem, 6vw, 6rem)" }}>
      {/* Back */}
      <div className="mb-12 pt-8">
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
        className="mb-16"
      >
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
        className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#d0cfc9] pt-12 mb-16"
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
          {project.video && (
            <div>
              <p className="text-sm tracking-widest uppercase text-[#888] mb-3">Vídeo</p>
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase text-[#c80000] hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-2"
              >
                Ver en YouTube ↗
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Galería de imágenes */}
      {project.images.length > 1 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={img.wide ? "md:col-span-3" : ""}
              >
                <img src={img.src} alt={img.alt} className="w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
