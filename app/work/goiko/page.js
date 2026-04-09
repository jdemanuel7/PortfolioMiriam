"use client";

import Link from "next/link";
import s from "./page.module.css";

export default function GoikoPage() {
  return (
    <div className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <p className={s.heroTag}>03 · Proyecto universitario · 2025</p>
          <h1 className={s.heroH1}>San<br /><em>Goiko</em></h1>
          <div className={s.heroMeta}>
            <div className={s.heroMetaItem}>
              <label>Disciplinas</label>
              <span>Campaña publicitaria · Estrategia</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Claim</label>
              <span>"Sin reglas, pero con mucho sabor"</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Localización</label>
              <span>Cádiz</span>
            </div>
          </div>
        </div>
        <div className={s.heroVisual}>
          <img src="/goiko/goiko_img-000.jpg" alt="San Goiko campaña" />
          <div className={s.heroNum}>03</div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className={s.section}>
        <div className={s.conceptoGrid}>
          <div className={s.conceptoText}>
            <span className={s.label}>El concepto</span>
            <h2 className={s.h2}>El amor empieza <em>contigo</em></h2>
            <p className={s.p}>San Valentín siempre ha sido un día exclusivo para parejas. Goiko lo rompe: si el amor auténtico empieza contigo mismo, ¿por qué celebrarlo solo en pareja?</p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>La campaña <strong>"San Goiko"</strong> redefine el día de los enamorados como una celebración del disfrute personal en todas sus formas — solo, con amigos o en pareja. Sin reglas. Con mucho sabor.</p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>El proyecto incluye estudio de competencia frente a TGB, McDonald's y Burger King, copy adaptado localmente a Cádiz, piezas gráficas para redes, vídeo de campaña y un anuncio en Spotify con canción propia.</p>
          </div>
          <div className={s.conceptoVisual}>
            <img src="/goiko/goiko_img-001.jpg" alt="San Goiko pieza" loading="lazy" />
            <div className={s.conceptoOverlay}>
              "El amor auténtico empieza contigo mismo" — el hilo conductor que une <strong>todas las piezas de la campaña.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CLAIM */}
      <section className={s.claimSection}>
        <div className={s.claimInner}>
          <div>
            <span className={s.claimLabel}>El claim</span>
            <p className={s.claimQuote}>"San Goiko: Sin reglas, pero con <em>mucho sabor</em>."</p>
          </div>
          <div>
            <p className={s.claimDesc}>Este claim actúa como eje de toda la campaña. Refuerza la identidad de Goiko como un lugar donde la comida y el bienestar personal son la prioridad, sin importar el contexto ni con quién vengas.</p>
            <p className={s.claimDesc} style={{ marginTop: "1rem" }}>El tono es desenfadado, directo y auténtico — coherente con la personalidad de la marca y con el público joven de Cádiz al que se dirige.</p>
          </div>
        </div>
      </section>

      {/* ESTRATEGIA */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>La estrategia</span>
          <h2 className={s.h2}>Tres pilares, <em>un mensaje</em></h2>
          <div className={s.pilaresGrid}>
            {[
              { num: "01", n: "1", title: "Romper con la tradición", desc: "Goiko celebra el amor propio y el disfrute personal en todas sus formas: solo, con amigos o en pareja. San Valentín no es solo para parejas." },
              { num: "02", n: "2", title: "El amor auténtico", desc: '"El amor auténtico empieza contigo mismo." Un mensaje que invita a celebrarse, disfrutar de momentos únicos y compartirlos con quien se prefiera.' },
              { num: "03", n: "3", title: "Sin reglas, con sabor", desc: '"San Goiko: Sin reglas, pero con mucho sabor." El claim que refuerza a Goiko como espacio donde el disfrute personal es siempre la prioridad.' },
            ].map(({ num, n, title, desc }) => (
              <div key={num} className={s.pilar}>
                <p className={s.pilarNum}>{num}</p>
                <div className={s.pilarCircle}>{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>El target</span>
          <h2 className={s.h2}>A quién nos <em>dirigimos</em></h2>
          <div className={s.targetGrid}>
            <div className={s.targetCol}>
              <p className={s.targetColNum}>01 · Geográfico</p>
              <h3>Variables geográficas</h3>
              <ul>
                <li>Suroccidental de la península</li>
                <li>Ciudad urbana y costera</li>
                <li>Clima mediterráneo marítimo</li>
                <li>Adaptado localmente a Cádiz</li>
              </ul>
            </div>
            <div className={s.targetCol}>
              <p className={s.targetColNum}>02 · Sociodemográfico</p>
              <h3>Variables sociodemográficas</h3>
              <ul>
                <li>Jóvenes, hombres y mujeres</li>
                <li>Clase social media y media-alta</li>
                <li>Estudiantes y trabajadores</li>
              </ul>
            </div>
            <div className={s.targetCol}>
              <p className={s.targetColNum}>03 · Psicográfico</p>
              <h3>Variables psicográficas</h3>
              <ul>
                <li>Buscan experiencias informales y diferentes</li>
                <li>Ambientes modernos, relajados y atractivos</li>
                <li>Aprecian autenticidad y disfrute personal</li>
                <li>Valoran variedad en el menú</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIOS */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>Técnicas de contratación</span>
          <h2 className={s.h2}>Digital y tradicional, <em>a partes iguales</em></h2>
          <p className={s.p}>El presupuesto se distribuye equitativamente entre medios digitales y tradicionales, equilibrando el alcance masivo con la personalización y la presencia física en la ciudad.</p>
          <div className={s.mediosGrid}>
            <div className={s.medioBlock}>
              <span className={`${s.medioTag} ${s.tagDigital}`}>Digital</span>
              <h3>Instagram · TikTok · Spotify</h3>
              <p>Segmentación precisa, innovación en formatos y comunicación no invasiva. Un anuncio en Spotify con canción propia como pieza diferencial.</p>
              <div className={s.medioPlatforms}>
                {["Instagram", "TikTok", "Spotify"].map(p => <span key={p} className={s.platformPill}>{p}</span>)}
              </div>
            </div>
            <div className={s.medioBlock}>
              <span className={`${s.medioTag} ${s.tagTradicional}`}>Tradicional</span>
              <h3>MUPIs · Carteles · Street marketing</h3>
              <p>Presencia constante en el entorno urbano de Cádiz. El street marketing permite interacción directa y refuerzo de la experiencia de marca en el punto de venta.</p>
              <div className={s.medioPlatforms}>
                {["MUPIs", "Carteles", "Street marketing"].map(p => <span key={p} className={s.platformPill}>{p}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={s.timelineSection}>
        <div className={s.timelineInner}>
          <span className={s.label}>Timing y producción</span>
          <h2 className={s.timelineH2}>Del briefing al <em>14 de febrero</em></h2>
          <p className={s.timelineP}>La campaña arranca el 13 de enero para maximizar el alcance durante el período previo a San Valentín, el momento de mayor atención del público objetivo.</p>
          <div className={s.timelineBar}>
            <div className={s.timelineDate}>
              <p className={s.tdateLabel}>Inicio campaña</p>
              <p className={s.tdateVal}>13 ENE</p>
              <p className={s.tdateSub}>Activación de medios</p>
            </div>
            <div className={s.timelineArrow}>
              <span className={s.timelineArrowLabel}>Período clave</span>
              <div className={s.timelineArrowLine} />
              <div className={s.timelineArrowTip} />
            </div>
            <div className={`${s.timelineDate} ${s.timelineEnd}`}>
              <p className={s.tdateLabel}>Fecha objetivo</p>
              <p className={s.tdateVal}>14 FEB</p>
              <p className={s.tdateSub}>San Valentín · Pico de impacto</p>
            </div>
          </div>
          <div className={s.presBlock}>
            <div>
              <p className={s.presLeftLabel}>Presupuesto total estimado</p>
              <p className={s.presLeftDetail}>50% medios digitales · 50% medios tradicionales</p>
            </div>
            <span className={s.presNum}>30.000 €</span>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className={s.section}>
        <div className={s.galeria}>
          {[
            { src: "/goiko/goiko_img-002.jpg", alt: "San Goiko pieza 2", wide: true },
            { src: "/goiko/goiko_img-003.jpg", alt: "San Goiko pieza 3" },
            { src: "/goiko/goiko_img-004.jpg", alt: "San Goiko pieza 4" },
            { src: "/goiko/goiko_img-000.jpg", alt: "San Goiko portada", wide: true },
            { src: "/goiko/goiko_img-001.jpg", alt: "San Goiko pieza 1" },
          ].map((img) => (
            <div key={img.src} className={`${s.gItem}${img.wide ? " " + s.wide : ""}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* MUPIS */}
      <section className={s.mupiSection}>
        <div className={s.mupiInner}>
          <span className={s.label}>Gráficas exteriores</span>
          <h2 className={s.h2}>San Goiko en <em>la calle</em></h2>
          <p className={s.p}>Mockups de las piezas gráficas en mupis urbanos. El mensaje "San Goiko" en exterior refuerza la presencia de marca en el entorno físico de Cádiz durante el período de campaña.</p>
          <div className={s.mupiGrid}>
            <div className={s.mupiItem}>
              <img src="/goiko/goiko-mupi-1.jpg" alt="San Goiko mupi 1" loading="lazy" onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }} />
            </div>
            <div className={s.mupiItem}>
              <img src="/goiko/goiko-mupi-2.jpg" alt="San Goiko mupi 2" loading="lazy" onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }} />
            </div>
          </div>
        </div>
      </section>

      {/* ROL */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <div className={s.rolSplit}>
            <div>
              <span className={s.label}>Mi rol en el proyecto</span>
              <h2 className={s.h2}>Estrategia, copy <em>y gráfica</em></h2>
              <p className={s.p}>Proyecto desarrollado en equipo. Mi contribución se centró en la estrategia creativa, el desarrollo del concepto y el copy adaptado localmente a Cádiz, así como en el diseño de las piezas gráficas para redes sociales.</p>
              <div className={s.pills}>
                {["Estrategia creativa", "Redacción de copy", "Gráfica publicitaria", "Análisis de competencia", "Planificación de medios"].map(pill => (
                  <span key={pill} className={s.pill}>{pill}</span>
                ))}
              </div>
            </div>
            <div>
              <img src="/goiko/goiko_img-004.jpg" alt="San Goiko pieza" style={{ width: "100%", display: "block" }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT NAV */}
      <div className={s.projectNav}>
        <Link href="/work/goyito-arehucas" className={s.pnItem}>
          <p className={s.pnDir}>← Anterior</p>
          <p className={s.pnTitle}>Goyito Arehucas</p>
        </Link>
        <Link href="/work/andalucia" className={s.pnItem}>
          <p className={s.pnDir}>Siguiente →</p>
          <p className={s.pnTitle}>Andalucía</p>
        </Link>
      </div>

    </div>
  );
}
