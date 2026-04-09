"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./page.module.css";

const TABS = ["brief", "mercado", "target", "producto"];

export default function MoonMatePage() {
  const [activeTab, setActiveTab] = useState("brief");

  return (
    <div className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <p className={s.heroTag}>01 · Proyecto universitario · 2025</p>
          <h1 className={s.heroH1}>
            Moon<br /><em>Mate</em>
          </h1>
          <div className={s.heroMeta}>
            <div className={s.heroMetaItem}>
              <label>Disciplinas</label>
              <span>Estrategia · Fotografía · Gráfica</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Concepto</label>
              <span>"Naturalmente Activo"</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Dossier</label>
              <span>
                <a href="/moon-mate/dossier-moon-mate.pdf" download>Descargar PDF →</a>
              </span>
            </div>
          </div>
        </div>
        <div className={s.heroVisual}>
          <img src="/moon-mate/41.png" alt="Moon Mate portada" />
          <div className={s.heroNum}>01</div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className={s.section}>
        <div className={s.conceptoGrid}>
          <div className={s.conceptoText}>
            <span className={s.label}>El concepto</span>
            <h2 className={s.h2}>Energía sin <em>caos</em></h2>
            <p className={s.p}>El mercado de bebidas energéticas estaba dominado por productos con mensajes agresivos, exceso de azúcar y estimulantes artificiales. Moon Mate nació para romper ese molde: una bebida elaborada en Asturias con infusión de yerba mate, café verde y guaraná, con solo 40 mg de cafeína natural por lata.</p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>El reto era comunicar energía sin apelar al exceso. El concepto <strong>"Naturalmente Activo"</strong> conecta el origen natural del mate con un estilo de vida activo pero equilibrado: tenis, yoga, pilates. Sin bajones. Sin nerviosismo.</p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>Frente al café de especialidad y las energéticas industriales, Moon Mate propone un tercer camino: <strong>rendimiento consciente.</strong></p>
          </div>
          <div className={s.conceptoVisual}>
            <img src="/moon-mate/lifestyle-zapatillas.png" alt="Moon Mate lifestyle zapatillas" loading="lazy" />
            <div className={s.conceptoQuote}>
              "La claridad mental del mate en un formato nómada, <strong>diseñado para nutrir tu enfoque</strong> sin comprometer el planeta ni tu bienestar."
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>El proceso</span>
          <h2 className={s.h2}>Cómo llegamos <em>aquí</em></h2>

          <div className={s.tabNav}>
            {TABS.map(tab => (
              <button
                key={tab}
                className={`${s.tabBtn} ${activeTab === tab ? s.tabBtnActive : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "brief" && (
            <div className={s.tabPanel}>
              <div className={s.twoCol}>
                <div>
                  <p className={s.p}>Moon Mate surge en 2023 como evolución del refresco ecológico Moon Water, fundado por Nacho Alonso en Asturias. La marca nace con una visión internacional: distribuye en España y en otros mercados europeos dentro del creciente segmento de bebidas funcionales y saludables.</p>
                  <p className={s.p} style={{ marginTop: "1.1rem" }}>Su misión es demostrar que es posible obtener un impulso de rendimiento físico y mental sin recurrir a fórmulas artificiales. Cinco valores guían toda la comunicación: energía natural, bienestar y equilibrio, sostenibilidad, transparencia y estilo de vida consciente.</p>
                </div>
                <div>
                  <img src="/moon-mate/producto-latas.png" alt="Producto latas Moon Mate" loading="lazy" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "mercado" && (
            <div className={s.tabPanel}>
              <p className={s.p}>Moon Mate no compite en el mercado de refrescos tradicionales, sino en el segmento de bebidas funcionales premium y ecológicas. El mercado español está virando hacia productos "Clean Label" sin ingredientes sintéticos, con un consumidor cada vez más health-conscious.</p>
              <p className={s.p} style={{ marginTop: "1.1rem" }}>El producto se ubica en la intersección entre el Bio-Wellness y el High-Performance: bebidas de foco mental para el trabajo creativo y el deporte híbrido.</p>
              <table className={s.dataTable}>
                <thead>
                  <tr>
                    <th>Categoría</th><th>Marcas</th><th>Estrategia</th><th>Debilidad frente a Moon Mate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className={`${s.badge} ${s.badgeD}`}>Directa</span></td>
                    <td>Celsius / NOCCO</td>
                    <td>Enfoque extremo en el gimnasio y cafeína sintética. Estética agresiva.</td>
                    <td>Imagen "química" y poco natural. No apelan al bienestar emocional.</td>
                  </tr>
                  <tr>
                    <td><span className={`${s.badge} ${s.badgeI}`}>Indirecta</span></td>
                    <td>Red Bull / Monster</td>
                    <td>Patrocinio de deportes de riesgo y eventos masivos.</td>
                    <td>Percepción de producto poco saludable y exceso de azúcares.</td>
                  </tr>
                  <tr>
                    <td><span className={`${s.badge} ${s.badgeA}`}>Aspiracional</span></td>
                    <td>Update / Bloom</td>
                    <td>Estética clean, vinculada a celebridades. Lideran TikTok e Instagram.</td>
                    <td>Difícil acceso en el mercado español (importación).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "target" && (
            <div className={s.tabPanel}>
              <p className={s.p}>El target de Moon Mate no solo consume productos, consume valores. Su identidad está ligada a la coherencia entre lo que hace y lo que compra. Para la campaña, dividimos el target en dos nichos clave:</p>
              <div className={s.targetCards}>
                <div className={s.targetCard}>
                  <p className={s.tcNum}>Nicho 01</p>
                  <h3>Los pros creativos</h3>
                  <p className="perfil">Diseñadores, freelancers, arquitectos · 25–40 años</p>
                  <p>Buscan el combustible creativo que mantiene el enfoque sin el crash del café. La botella tiene que verse bien en su escritorio. El minimalismo es su lenguaje: si es bonito, es parte de su outfit.</p>
                </div>
                <div className={s.targetCard}>
                  <p className={s.tcNum}>Nicho 02</p>
                  <h3>Los entusiastas del wellness</h3>
                  <p className="perfil">Instructores de yoga, nutricionistas, amantes del autocuidado</p>
                  <p>El sustituto saludable a las bebidas energéticas tradicionales. Escépticos por naturaleza: leen las etiquetas de atrás hacia delante. La sostenibilidad no es un plus, es el estándar.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "producto" && (
            <div className={s.tabPanel}>
              <p className={s.p}>La propuesta única de venta se aleja de la "energía explosiva" para centrarse en la "energía inteligente". Para convencer al consumidor, era necesario marcar una línea clara frente a las energéticas industriales.</p>
              <table className={s.vsTable}>
                <thead>
                  <tr>
                    <th></th>
                    <th className={s.colMm}>Moon Mate</th>
                    <th className={s.colTr}>Energéticas tradicionales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fuente de energía</td>
                    <td className={s.tdGood}>Teína natural: energía lineal, constante y sin nerviosismo</td>
                    <td className={s.tdDim}>Cafeína sintética: picos seguidos de un crash brusco</td>
                  </tr>
                  <tr>
                    <td>Ingredientes</td>
                    <td className={s.tdGood}>Bio y veganos, índice glucémico controlado</td>
                    <td className={s.tdDim}>Taurina sintética, colorantes y exceso de sodio</td>
                  </tr>
                  <tr>
                    <td>Azúcar</td>
                    <td className={s.tdGood}>Bajo/nulo, endulzantes naturales</td>
                    <td className={s.tdDim}>Alto: picos de insulina que afectan la salud</td>
                  </tr>
                  <tr>
                    <td>Propósito</td>
                    <td className={s.tdGood}>Wellness y focus: rendimiento mental y físico equilibrado</td>
                    <td className={s.tdDim}>Performance extremo: adrenalina y ocio nocturno</td>
                  </tr>
                  <tr>
                    <td>Impacto</td>
                    <td className={s.tdGood}>Lata 100% reciclable, transparencia total</td>
                    <td className={s.tdDim}>Menor énfasis en trazabilidad de ingredientes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* GALERÍA */}
      <section className={s.section}>
        <div className={s.galeria}>
          <div className={`${s.gItem} ${s.wide}`}>
            <img src="/moon-mate/grafica.png" alt="Gráfica publicitaria Naturalmente Activo" loading="lazy" />
          </div>
          <div className={s.gItem}>
            <img src="/moon-mate/lifestyle-manos.png" alt="Fotografía lifestyle tenis" loading="lazy" />
          </div>
          <div className={s.gItem}>
            <img src="/moon-mate/tenis-verde.png" alt="Fotografía producto tenis verde" loading="lazy" />
          </div>
          <div className={s.gItem}>
            <img src="/moon-mate/lifestyle-zapatillas.png" alt="Fotografía lifestyle zapatillas" loading="lazy" />
          </div>
          <div className={`${s.gItem} ${s.wide}`}>
            <img src="/moon-mate/30.png" alt="Moon Mate fotografía producto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PRESUPUESTO */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>La producción</span>
          <h2 className={s.h2}>Presupuesto de <em>campaña</em></h2>
          <p className={s.p}>El proyecto incluyó la elaboración de un presupuesto de producción real, desglosando cada partida necesaria para ejecutar la campaña a nivel profesional.</p>
          <div className={s.presRows}>
            {[
              { label: "Equipo humano", pct: "27.7%", val: "18.000 €" },
              { label: "Derechos de propiedad", pct: "14.6%", val: "9.500 €" },
              { label: "Material y alquileres", pct: "18.5%", val: "12.000 €" },
              { label: "Post-producción", pct: "16.2%", val: "10.500 €" },
              { label: "Catering y dietas", pct: "3.8%", val: "2.500 €" },
              { label: "Seguros y permisos", pct: "4.6%", val: "3.000 €" },
              { label: "Imprevistos (15%)", pct: "14.6%", val: "9.500 €", muted: true },
            ].map(({ label, pct, val, muted }) => (
              <div key={label} className={s.presRow}>
                <span className={s.presRowLabel}>{label}</span>
                <div className={s.presBarBg}>
                  <div className={s.presBarFg} style={{ width: pct, opacity: muted ? 0.4 : 1 }} />
                </div>
                <span className={s.presRowVal}>{val}</span>
              </div>
            ))}
          </div>
          <div className={s.presTotal}>
            <span className={s.presTotalLabel}>Total campaña</span>
            <span className={s.presTotalVal}>65.000 €</span>
          </div>
        </div>
      </section>

      {/* ROL */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>Mi rol en el proyecto</span>
          <h2 className={s.h2}>Trabajo en equipo,<br /><em>contribución individual</em></h2>
          <p className={s.p}>Este proyecto fue desarrollado en equipo junto a Selena Becerro, Sofía Medina y Hamlet Ramírez. Mi contribución se centró en la estrategia de comunicación, la dirección de arte de las piezas fotográficas y la redacción del concepto creativo.</p>
          <div className={s.rolChips}>
            {["Estrategia de comunicación", "Dirección de arte", "Fotografía de producto", "Redacción del concepto", "Análisis de competencia"].map(chip => (
              <span key={chip} className={s.rolChip}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* NAV PROYECTOS */}
      <div className={s.projectNav}>
        <Link href="/#trabajo" className={s.pnItem}>
          <p className={s.pnDir}>← Todos los proyectos</p>
          <p className={s.pnTitle}>Volver al portfolio</p>
        </Link>
        <Link href="/work/goyito-arehucas" className={s.pnItem}>
          <p className={s.pnDir}>Siguiente →</p>
          <p className={s.pnTitle}>Goyito Arehucas</p>
        </Link>
      </div>

    </div>
  );
}
