"use client";

import { useEffect } from "react";
import Link from "next/link";
import s from "./page.module.css";

export default function GoyitoPage() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <p className={s.heroTag}>02 · Proyecto universitario · 2025</p>
          <h1 className={s.heroH1}>
            Goyito<br /><em>Arehucas</em>
          </h1>
          <div className={s.heroMeta}>
            <div className={s.heroMetaItem}>
              <label>Disciplinas</label>
              <span>Contenido digital · Redes · Música</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Concepto</label>
              <span>"El lado canario de la vida"</span>
            </div>
            <div className={s.heroMetaItem}>
              <label>Instagram</label>
              <span>
                <a href="https://www.instagram.com/goyito_arehucas/" target="_blank" rel="noopener noreferrer">
                  @goyito_arehucas →
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={s.heroVisual}>
          <img src="/goyito/1.jpg" alt="Goyito Arehucas mascota" />
          <div className={s.heroNum}>02</div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className={s.section}>
        <div className={s.conceptoGrid}>
          <div className={s.conceptoText}>
            <span className={s.label}>El concepto</span>
            <h2 className={s.h2}>Un ron que <em>viaja</em></h2>
            <p className={s.p}>Ron Arehucas lleva más de 140 años en Canarias, pero apenas tenía presencia en el imaginario del público peninsular. El reto era claro: llevar el carácter canario a la península sin perder autenticidad.</p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>La solución fue <strong>Goyito</strong>: una mascota animada con personalidad propia que actúa como hilo conductor de toda la campaña. Simpático, desenfadado y genuinamente canario, Goyito no vende el ron, <strong>lo encarna.</strong></p>
            <p className={s.p} style={{ marginTop: "1.1rem" }}>La estrategia se desplegó en múltiples plataformas: contenido corto en TikTok e Instagram para público joven, y música original en YouTube y SoundCloud para construir identidad de marca de forma diferencial y memorable.</p>
          </div>
          <div className={s.conceptoVisual}>
            <img src="/goyito/498637210_17847226287473892_4242844946409637209_n.jpg" alt="Goyito Arehucas contenido" loading="lazy" />
            <div className={s.conceptoOverlay}>
              "El ron que viaja a la península" — llevar lo canario a todos lados <strong>sin perder ni una gota de autenticidad.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRATEGIA */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <span className={s.label}>La estrategia</span>
          <h2 className={s.h2}>Tres patas, <em>un personaje</em></h2>
          <div className={s.estrategiaGrid}>
            <div className={s.estrategiaCard}>
              <p className={s.ecardNum}>01</p>
              <div className={s.ecardIcon}>🎭</div>
              <h3>La mascota</h3>
              <p>Goyito como activo de marca permanente. Un personaje que trasciende la campaña y puede crecer con la marca, adaptarse a contextos y generar comunidad propia.</p>
            </div>
            <div className={s.estrategiaCard}>
              <p className={s.ecardNum}>02</p>
              <div className={s.ecardIcon}>📱</div>
              <h3>Contenido social</h3>
              <p>TikTok e Instagram como canales principales. Formato corto, tono desenfadado y estética coherente con el universo visual de Goyito para conectar con público joven.</p>
            </div>
            <div className={s.estrategiaCard}>
              <p className={s.ecardNum}>03</p>
              <div className={s.ecardIcon}>🎵</div>
              <h3>Música original</h3>
              <p>Una canción propia distribuida en YouTube y SoundCloud. La música como herramienta de branding: más memorable que cualquier eslogan y más compartible que cualquier post.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className={s.videoSection}>
        <div className={s.videoInner}>
          <span className={s.label}>La canción</span>
          <h2 className={s.videoH2}>"The Arehucas Way"</h2>
          <p className={s.videoP}>Música original compuesta para la campaña. Una canción que sintetiza el espíritu de Goyito y Ron Arehucas: el lado canario de la vida. Distribuida en YouTube y SoundCloud como pieza central de la estrategia de contenido.</p>
          <div className={s.videoWrap}>
            <iframe
              src="https://www.youtube.com/embed/J75hGjB8P_w"
              title="The Arehucas Way - El lado canario de la vida"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className={s.impactoSection}>
        <div className={s.impactoInner}>
          <span className={s.label}>Impacto real</span>
          <h2 className={s.impactoH2}>La marca respondió</h2>
          <p className={s.impactoP}>Un proyecto universitario que llegó a la cuenta oficial de Ron Arehucas. La marca comentó en el primer post de Goyito — validando el concepto antes incluso de que terminara el semestre.</p>

          <div className={s.impactoGrid}>
            <div style={{ maxWidth: 480, border: "1px solid rgba(255,255,255,0.12)", background: "#1a1a1a", overflow: "hidden" }}>
              <img
                src="/goyito/goyito-comentario.png"
                alt="Post de Goyito con comentario de Ron Arehucas"
                style={{ width: "100%", display: "block", height: "auto" }}
              />
            </div>

            <div className={s.brandCommentWrap}>
              <div className={s.brandComment}>
                <div className={s.brandCommentHeader}>
                  <span className={s.brandBadge}>Marca oficial</span>
                  <span className={s.brandHandle}>@arehucasron</span>
                </div>
                <blockquote>"Queremos conocer a <em>Goyito</em>"</blockquote>
              </div>

              <div>
                <p className={s.brandText}>Ron Arehucas, la marca real con más de 140 años de historia, comentó en el primer post de la cuenta. No fue una mención accidental: buscaron el perfil, vieron el contenido y decidieron interactuar.</p>
                <p className={s.brandText} style={{ marginTop: "1rem" }}>Para un proyecto universitario, que la marca que inspiró la campaña valide el concepto públicamente es el mejor indicador de que la estrategia funcionó.</p>
              </div>

              <div className={s.impactoStats}>
                <div className={s.stat}>
                  <span className={s.statNum}>+30</span>
                  <span className={s.statLabel}>Likes en primer post</span>
                </div>
                <div className={s.stat}>
                  <span className={s.statNum}>1</span>
                  <span className={s.statLabel}>Comentario marca oficial</span>
                </div>
                <div className={s.stat}>
                  <span className={s.statNum}>140+</span>
                  <span className={s.statLabel}>Años de historia Arehucas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section className={s.igSection}>
        <div className={s.igInner}>
          <div className={s.igHeader}>
            <div>
              <span className={s.label}>Redes sociales</span>
              <h2 className={s.h2}>@goyito_arehucas</h2>
              <p className={s.p}>Cuenta creada para la campaña, con contenido adaptado al universo de Goyito y diseñado para conectar con el público peninsular.</p>
            </div>
            <a className={s.igLink} href="https://www.instagram.com/goyito_arehucas/" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Ver en Instagram →
            </a>
          </div>
          <div className={s.igGrid}>
            {[
              { src: "/goyito/1.jpg", alt: "Goyito post 1" },
              { src: "/goyito/498637210_17847226287473892_4242844946409637209_n.jpg", alt: "Goyito post 2" },
              { src: "/goyito/502023723_17848560579473892_8471269710333555806_n.jpg", alt: "Goyito post 3" },
            ].map((img) => (
              <div key={img.src} className={s.igItem}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className={s.igCta}>
            <p>La cuenta está activa con contenido original. Visítala para ver el feed completo, stories y el resto de piezas de la campaña.</p>
            <a href="https://www.instagram.com/goyito_arehucas/" target="_blank" rel="noopener noreferrer">Ver cuenta completa →</a>
          </div>
        </div>
      </section>

      {/* ROL */}
      <section className={s.section}>
        <div className={s.sectionInner}>
          <div className={s.mascotaSplit}>
            <div>
              <span className={s.label}>Mi rol en el proyecto</span>
              <h2 className={s.h2}>Concepto, <em>estrategia</em> y contenido</h2>
              <p className={s.p}>Proyecto desarrollado en equipo. Mi contribución se centró en el desarrollo del concepto de la mascota, la estrategia de contenido digital y la producción de las piezas para redes sociales.</p>
              <div className={s.pills}>
                {["Creación de mascota", "Estrategia digital", "Contenido TikTok/Instagram", "Producción musical", "Dirección creativa"].map(pill => (
                  <span key={pill} className={s.pill}>{pill}</span>
                ))}
              </div>
            </div>
            <div className={s.mascotaImg}>
              <img src="/goyito/502023723_17848560579473892_8471269710333555806_n.jpg" alt="Goyito Arehucas contenido" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT NAV */}
      <div className={s.projectNav}>
        <Link href="/work/moon-mate" className={s.pnItem}>
          <p className={s.pnDir}>← Anterior</p>
          <p className={s.pnTitle}>Moon Mate</p>
        </Link>
        <Link href="/work/goiko" className={s.pnItem}>
          <p className={s.pnDir}>Siguiente →</p>
          <p className={s.pnTitle}>San Goiko</p>
        </Link>
      </div>

    </div>
  );
}
