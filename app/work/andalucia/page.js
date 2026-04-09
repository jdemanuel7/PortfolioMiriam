"use client";

import Link from "next/link";
import s from "./page.module.css";

export default function AndaluciaPage() {
  return (
    <div className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <p className={s.heroTag}>04 · Proyecto universitario · 2026</p>
          <h1 className={s.heroH1}>Marca<br /><em>Andalucía</em></h1>
          <div className={s.heroMeta}>
            <div className={s.heroMetaItem}>
              <label>Cliente</label>
              <span>Banco Sabadell</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Agencia</label>
              <span>Don Quijote Agencia</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Tipo</label>
              <span>Activación de marca · Estrategia</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className={s.section}>
        <div className={s.conceptoGrid}>
          <div className={s.conceptoText}>
            <div className={s.agenciaBadge}>
              <span>Agencia</span>
              <strong>Don Quijote Agencia × Banco Sabadell</strong>
            </div>
            <span className={s.label}>El problema de partida</span>
            <h2 className={s.h2}>Un banco que no se <em>sentía</em> de aquí</h2>
            <p className={s.p}>Banco Sabadell opera en un mercado bancario altamente concentrado, con una debilidad territorial clara en Andalucía y la zona centro-sur de España. La percepción de la marca estaba arraigada al norte y Levante, lo que generaba distancia emocional con el público andaluz.</p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>El objetivo era eliminar esa brecha cultural y geográfica. No solo estar presente en Andalucía, sino <strong>sentirse de aquí.</strong> Generar un posicionamiento a largo plazo basado en pertenencia y comunidad.</p>
          </div>
          <div className={s.conceptoVisual}>
            <img src="/andalucia/presentacion.jpg" alt="Presentación Sabadell Andalucía" loading="lazy" />
            <div className={s.conceptoOverlay}>
              "Cuando fue a Sevilla, perdió su silla" — el punto de partida creativo que dio vida a <strong>"De aquí, me siento."</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SLOGAN */}
      <section className={s.sloganSection}>
        <div className={s.sloganInner}>
          <span className={s.label}>El concepto creativo</span>
          <div className={s.sloganGrid}>
            <div className={s.sloganItem}>
              <img src="/andalucia/slogan1.png" alt="De aquí, me siento - pieza 1" loading="lazy" />
            </div>
            <div className={s.sloganItem}>
              <img src="/andalucia/slogan2.png" alt="De aquí, me siento - pieza 2" loading="lazy" />
            </div>
          </div>
          <div className={s.sloganCaption}>
            <h3 className={s.sloganH3}>"De aquí, <em>me siento.</em>"</h3>
            <p className={s.sloganP}>El claim nace del refrán "quien fue a Sevilla, perdió su silla" — resignificado. La silla andaluza, pintada de azul Sabadell sobre fondos en blanco y negro de espacios icónicos de Andalucía, se convierte en el símbolo visual de la campaña. Un objeto cotidiano que conecta con la identidad local de forma auténtica y no impostada.</p>
          </div>
        </div>
      </section>

      {/* ESTRATEGIA */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>La estrategia</span>
          <h2 className={s.h2}>Objetivo, target <em>e insight</em></h2>
          <div className={s.estrategiaGrid}>
            <div className={s.ecol}>
              <p className={s.ecolNum}>Objetivo</p>
              <h3>Integración y posicionamiento</h3>
              <p>Eliminar la brecha cultural y geográfica. Borrar la percepción de banco del norte y Levante. Generar posicionamiento a largo plazo en el mercado andaluz.</p>
            </div>
            <div className={s.ecol}>
              <p className={s.ecolNum}>Target</p>
              <h3>Adultos andaluces exigentes</h3>
              <p>Geográficamente: Andalucía. Demográficamente: adultos de 25–55 años, trabajadores, emprendedores y con familias. Psicográficamente: exigentes, proactivos, inquietos y con criterio.</p>
            </div>
            <div className={s.ecol}>
              <p className={s.ecolNum}>Insight</p>
              <h3>"Impulso a crecer"</h3>
              <p>El consumidor andaluz busca un banco comprometido que ofrezca soluciones eficaces y que comparta sus valores. No quiere un banco que venga de fuera — quiere uno que sienta que es de aquí.</p>
            </div>
          </div>
          <div className={s.targetStrip}>
            {[
              { label: "Geográfica", val: "Andalucía", sub: "Zona centro-sur" },
              { label: "Demográfica", val: "25–55 años", sub: "Trabajadores y emprendedores" },
              { label: "Psicográfica", val: "Exigentes", sub: "Proactivos, con criterio" },
              { label: "Comportamental", val: "Comprometidos", sub: "Buscan soluciones eficaces" },
            ].map(({ label, val, sub }) => (
              <div key={label} className={s.tstripItem}>
                <p className={s.tstripLabel}>{label}</p>
                <p className={s.tstripVal}>{val}</p>
                <p className={s.tstripSub}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT DESTACADO */}
      <section className={s.insightSection}>
        <div className={s.insightInner}>
          <div>
            <span className={s.insightLabel}>El claim</span>
            <p className={s.insightQuote}>"De aquí, <em>me siento.</em>"</p>
          </div>
          <div>
            <p className={s.insightDesc}>En Sabadell nos sentimos parte de Andalucía. Acompañamos a sus empresas, a sus profesionales y a sus proyectos con la convicción de que cuando Andalucía crece, todos crecemos con ella.</p>
            <p className={s.insightDesc} style={{ marginTop: "1rem" }}>La inspiración creativa viene de campañas reales de Sabadell — "Acompañarte" y "Poder elegir es tu poder" — adaptadas al contexto territorial andaluz con un lenguaje más cercano, arraigado y visual.</p>
          </div>
        </div>
      </section>

      {/* MIX DE MEDIOS */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>Mix de medios</span>
          <h2 className={s.h2}>Visibilidad, interés, <em>conexión</em></h2>
          <p className={s.p}>La campaña persigue cuatro objetivos de comunicación a través de un mix de medios que combina presencia digital con impacto físico en el territorio andaluz.</p>
          <div className={s.mixGrid}>
            {[
              { icon: "📱", title: "Instagram Reels", desc: "Contenido audiovisual orgánico y pagado. Fase de resolución con formato Reel + Stories para maximizar alcance entre el target joven." },
              { icon: "🏙️", title: "MUPIs y marquesinas", desc: "Presencia constante en el entorno urbano de Andalucía. La silla azul en espacios icónicos crea reconocimiento y arraigo territorial." },
              { icon: "🏦", title: "Oficinas y lonas", desc: "Vinilos en fachadas y escaparates de las oficinas Sabadell en Andalucía. La pieza gráfica como elemento de identidad local." },
              { icon: "🎯", title: "Recuerdo de marca", desc: "Conexión emocional duradera. El objetivo final no es vender, sino pertenecer. Que el público andaluz sienta a Sabadell como un banco propio." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={s.mixItem}>
                <div className={s.mixIcon}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMING */}
      <section className={s.timingSection}>
        <div className={s.timingInner}>
          <span className={s.label}>Plan de acción</span>
          <h2 className={s.timingH2}>Resolución <em>septiembre</em></h2>
          <p className={s.timingP}>La campaña se concentra en septiembre, con preparación desde finales de agosto para el montaje de oficinas y piezas exteriores.</p>
          <div className={s.fases}>
            {[
              {
                num: "Preparación",
                name: "Montaje previo",
                date: "31 agosto",
                items: ["Vinilos en oficinas", "Instalación de lonas", "Preparación de assets digitales"],
              },
              {
                num: "Resolución",
                name: "Campaña activa",
                date: "1–30 septiembre",
                items: ["Instagram Reels + Stories", "MUPIs y marquesinas en Andalucía", "Activación en oficinas"],
              },
              {
                num: "Objetivo",
                name: "Posicionamiento",
                date: "Largo plazo",
                items: ["Recuerdo de marca en Andalucía", "Conexión emocional con el territorio", "Incremento de presencia local"],
              },
            ].map(({ num, name, date, items }) => (
              <div key={num} className={s.fase}>
                <p className={s.faseNum}>{num}</p>
                <p className={s.faseName}>{name}</p>
                <p className={s.faseDate}>{date}</p>
                <ul className={s.faseItems}>
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className={s.section}>
        <div className={s.galeria}>
          {[
            { src: "/andalucia/oficinas.jpg", alt: "Oficinas y lonas Sabadell", wide: true },
            { src: "/andalucia/inspiracion.jpg", alt: "Inspiración creativa" },
            { src: "/andalucia/slogan1.png", alt: "De aquí, me siento - pieza 1" },
            { src: "/andalucia/slogan2.png", alt: "De aquí, me siento - pieza 2" },
            { src: "/andalucia/resolucion.jpg", alt: "Resolución final", wide: true },
          ].map((img) => (
            <div key={img.src} className={`${s.gItem}${img.wide ? " " + s.wide : ""}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ROL */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <div className={s.rolSplit}>
            <div>
              <span className={s.label}>Mi rol en el proyecto</span>
              <h2 className={s.h2}>Estrategia, concepto <em>y copy</em></h2>
              <p className={s.p}>Proyecto desarrollado en equipo bajo la marca Don Quijote Agencia. Mi contribución se centró en el desarrollo del concepto creativo, la estrategia de campaña y el copy del claim, así como en la planificación del mix de medios.</p>
              <div className={s.pills}>
                {["Concepto creativo", "Estrategia de campaña", "Redacción de copy", "Planificación de medios", "Activación de marca"].map(pill => (
                  <span key={pill} className={s.pill}>{pill}</span>
                ))}
              </div>
            </div>
            <div>
              <img src="/andalucia/presentacion.jpg" alt="Presentación Don Quijote Agencia" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT NAV */}
      <div className={s.projectNav}>
        <Link href="/work/goiko" className={s.pnItem}>
          <p className={s.pnDir}>← Anterior</p>
          <p className={s.pnTitle}>San Goiko</p>
        </Link>
        <Link href="/#trabajo" className={s.pnItem}>
          <p className={s.pnDir}>Todos los proyectos</p>
          <p className={s.pnTitle}>Ver portfolio</p>
        </Link>
      </div>

    </div>
  );
}
