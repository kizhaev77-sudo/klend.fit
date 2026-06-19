/*
 * ЛЕНДИНГ «Дипломат» — продающая страница
 * Фото: реальные снимки из объявления ЦИАН
 * Текст: авторский, психология покупки премиальной недвижимости
 */

import { useEffect, useRef, useState } from "react";
import {
  Phone, CheckCircle2, Car, MapPin, Star,
  ChevronDown, X, ArrowRight, User, ChevronLeft, ChevronRight
} from "lucide-react";

// ── Реальные фото из объявления ЦИАН ──────────────────────────────────────
const PHOTOS = [
  { src: "/photos/p1.jpg", label: "Гостиная — свет, воздух, пространство" },
  { src: "/photos/p2.jpg", label: "Кухня — классика и функциональность" },
  { src: "/photos/p3.jpg", label: "Обеденная зона" },
  { src: "/photos/p5.jpg", label: "Интерьер — детали и качество" },
  { src: "/photos/p6.jpg", label: "Спальня — приватность и покой" },
  { src: "/photos/p12.jpg", label: "Ванная комната" },
  { src: "/photos/p11.jpg", label: "Вторая спальня" },
  { src: "/photos/p7.jpg", label: "Балкон — вид на двор" },
  { src: "/photos/p4.jpg", label: "Вид из окна на Петербург" },
  { src: "/photos/p8.jpg", label: "Фасад ЖК «Дипломат»" },
  { src: "/photos/p9.jpg", label: "Парадный вход" },
  { src: "/photos/p10.jpg", label: "Территория комплекса" },
];

const HERO_IMG    = PHOTOS[0].src;
const AGENT_NAME  = "Олеся Фивейская";
const AGENCY      = "Мир Квартир Элит";
const PHONE       = "+7 (921) 966-91-88";

const PHONE_RAW   = "79219669188";


// ── Анимация появления ────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FACTS = [
  { n: "111,5", u: "м²", l: "Общая площадь" },
  { n: "40",    u: "м²", l: "Кухня-гостиная" },
  { n: "6 / 9", u: "",   l: "Этаж / Этажей" },
  { n: "176",   u: "",   l: "Квартир в доме" },
];

const CHECKS = [
  "Двусторонняя планировка — окна на улицу и в тихий двор",
  "Дизайнерский ремонт, элегантная мебель — заезжайте сразу",
  "Техника BOSCH, Electrolux, кондиционеры Mitsubishi Electric",
  "Дерево-алюминиевые стеклопакеты, толстые стены — полная тишина",
  "Многоступенчатая очистка воды",
  "Закрытая охраняемая территория, консьерж 24/7",
  "Подземный паркинг, интеллигентное соседство",
  "Один собственник, без обременений, полная цена в договоре",
];

export default function Home() {
  const [modal, setModal]     = useState(false);
  const [form, setForm]       = useState({ name: "", phone: "" });
  const [sent, setSent]       = useState(false);
  const [active, setActive]   = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const r1 = useFadeUp(), r2 = useFadeUp(), r3 = useFadeUp(), r4 = useFadeUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setModal(false); setSent(false); setForm({ name: "", phone: "" }); }, 2500);
  };

  const prevPhoto = () => setActive(p => (p - 1 + PHOTOS.length) % PHOTOS.length);
  const nextPhoto = () => setActive(p => (p + 1) % PHOTOS.length);

  const lbPrev = () => setLightbox(p => p !== null ? (p - 1 + PHOTOS.length) % PHOTOS.length : null);
  const lbNext = () => setLightbox(p => p !== null ? (p + 1) % PHOTOS.length : null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: "var(--navy)", background: "var(--cream)" }}>

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover", backgroundPosition: "center top",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(26,35,50,0.3) 0%, rgba(26,35,50,0.5) 40%, rgba(26,35,50,0.9) 100%)",
        }} />

        {/* Шапка с агентом */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.1rem 1.5rem",
          background: "rgba(26,35,50,0.4)", backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(184,146,58,0.15)", border: "1px solid rgba(184,146,58,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <User size={15} style={{ color: "var(--gold)" }} />
            </div>
            <div>
              <div style={{ color: "#fff", fontSize: "0.8125rem", fontWeight: 600, lineHeight: 1.2 }}>
                {AGENT_NAME}
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.625rem", letterSpacing: "0.1em" }}>
                {AGENCY} · Суперагент ★ 5.0
              </div>
            </div>
          </div>
          <a href={`tel:${PHONE_RAW}`} style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            background: "var(--gold)", color: "#fff",
            padding: "0.5rem 1.25rem", textDecoration: "none",
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
            transition: "background 180ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#c9a24a")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
            <Phone size={13} />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Позвонить</span>
          </a>
        </div>

        {/* Основной контент hero */}
        <div style={{
          position: "relative", zIndex: 2, flex: 1,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "2rem 1.5rem 3rem",
          maxWidth: 1100, margin: "0 auto", width: "100%",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(184,146,58,0.15)", border: "1px solid rgba(184,146,58,0.35)",
            padding: "0.3rem 0.875rem", marginBottom: "1.25rem", width: "fit-content",
          }}>
            <MapPin size={10} style={{ color: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Исполкомская ул., 17 · Центральный район · Санкт-Петербург
            </span>
          </div>

          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 300, lineHeight: 1.0, color: "#fff",
            marginBottom: "0.75rem", letterSpacing: "-0.01em",
          }}>
            ЖК <em style={{ color: "#d4aa5a", fontStyle: "italic" }}>«Дипломат»</em>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            lineHeight: 1.7, marginBottom: "0.75rem", maxWidth: 540,
          }}>
            Квартира для тех, кто выбирает <strong style={{ color: "rgba(255,255,255,0.9)" }}>абсолютный комфорт и стиль</strong> вместо демонстративной роскоши.
            Евро-трёхкомнатная, 111,5 м², 6 этаж, дизайнерский ремонт, с мебелью.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem", marginTop: "0.5rem" }}>
            <div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2 }}>Стоимость</div>
              <div style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#d4aa5a", fontWeight: 300, lineHeight: 1,
              }}>58 500 000 ₽</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginLeft: "auto" }}>
              <a href={`tel:${PHONE_RAW}`} style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--gold)", color: "#fff",
                padding: "0.875rem 1.75rem", textDecoration: "none",
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "background 180ms",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#c9a24a")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
                <Phone size={13} /> Позвонить
              </a>
              <button onClick={() => setModal(true)} style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(255,255,255,0.35)", color: "#fff",
                padding: "0.875rem 1.75rem", cursor: "pointer",
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "border-color 180ms, background 180ms",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.background = "rgba(184,146,58,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.background = "transparent"; }}>
                Записаться на просмотр <ArrowRight size={13} />
              </button>
              <a href="#floorplan" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)",
                padding: "0.875rem 1.5rem", textDecoration: "none",
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "border-color 180ms, color 180ms",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}>
                Планировка
              </a>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
          zIndex: 2, color: "rgba(212,170,90,0.5)", animation: "bounce 2s infinite",
        }}>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ═══ ФАКТЫ ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(184,146,58,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div ref={r1} className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {FACTS.map((f, i) => (
              <div key={i} style={{
                padding: "2rem 1rem", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(184,146,58,0.08)" : "none",
                transition: "background 200ms",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,146,58,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <div style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 300, color: "var(--gold)", lineHeight: 1,
                }}>
                  {f.n}<span style={{ fontSize: "0.5em", marginLeft: 2 }}>{f.u}</span>
                </div>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "var(--stone)", marginTop: "0.5rem" }}>
                  {f.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ТЕКСТ + ГАЛЕРЕЯ ════════════════════════════════════════════════ */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div ref={r2} className="fade-up" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start",
          }}>

            {/* Текст */}
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                Об объекте
              </div>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 300, color: "var(--navy)", lineHeight: 1.2, marginBottom: "1.5rem",
              }}>
                Готово к жизни.<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Заезжайте сразу.</em>
              </h2>

              <p style={{ color: "var(--stone)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Пространство построено на эстетике <strong style={{ color: "var(--navy)" }}>концептуального минимализма</strong> и
                сдержанного аристократизма: светлый интерьер вне времени, много воздуха, панорамные окна
                и продуманная двусторонняя планировка.
              </p>
              <p style={{ color: "var(--stone)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                Центр квартиры — просторная кухня-гостиная около <strong style={{ color: "var(--navy)" }}>40 м²</strong> с городскими видами.
                Приватная зона с двумя спальнями обращена в тихий открытый двор — редкое для центра Петербурга
                ощущение покоя и защищённости.
              </p>

              <div style={{ height: 1, background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.25, marginBottom: "1.5rem" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
                {CHECKS.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <CheckCircle2 size={14} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: "var(--stone)", fontSize: "0.875rem", lineHeight: 1.6 }}>{c}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => setModal(true)} style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--gold)", color: "#fff", border: "none", cursor: "pointer",
                padding: "0.875rem 1.75rem",
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "background 180ms",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#c9a24a")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
                Записаться на просмотр <ArrowRight size={13} />
              </button>
            </div>

            {/* Галерея */}
            <div>
              {/* Главное фото */}
              <div style={{ position: "relative", overflow: "hidden", cursor: "zoom-in" }}
                onClick={() => setLightbox(active)}>
                <img src={PHOTOS[active].src} alt={PHOTOS[active].label}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block",
                    transition: "transform 400ms cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "1.25rem 1rem 0.875rem",
                  background: "linear-gradient(to top, rgba(26,35,50,0.7) 0%, transparent 100%)",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                }}>
                  <span style={{ color: "#fff", fontSize: "0.8125rem",
                    fontFamily: "Cormorant Garamond, serif" }}>
                    {PHOTOS[active].label}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem" }}>
                    {active + 1} / {PHOTOS.length}
                  </span>
                </div>
                {/* Стрелки */}
                {[{ dir: "prev", icon: <ChevronLeft size={18} />, fn: prevPhoto, pos: "left: 0.75rem" },
                  { dir: "next", icon: <ChevronRight size={18} />, fn: nextPhoto, pos: "right: 0.75rem" }
                ].map(btn => (
                  <button key={btn.dir} onClick={e => { e.stopPropagation(); btn.fn(); }} style={{
                    position: "absolute", top: "50%", transform: "translateY(-50%)",
                    [btn.dir === "prev" ? "left" : "right"]: "0.75rem",
                    background: "rgba(26,35,50,0.55)", border: "none", color: "#fff",
                    width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", backdropFilter: "blur(4px)", transition: "background 180ms",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,146,58,0.7)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(26,35,50,0.55)")}>
                    {btn.icon}
                  </button>
                ))}
              </div>

              {/* Миниатюры */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "0.375rem", marginTop: "0.5rem",
              }}>
                {PHOTOS.slice(0, 12).map((p, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    padding: 0, border: `2px solid ${active === i ? "var(--gold)" : "transparent"}`,
                    cursor: "pointer", overflow: "hidden", transition: "border-color 180ms",
                  }}>
                    <img src={p.src} alt={p.label}
                      style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block",
                        opacity: active === i ? 1 : 0.6, transition: "opacity 180ms" }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ПРИВИЛЕГИИ ═════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div ref={r3} className="fade-up" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem",
          }}>
            {/* Парковка */}
            <div style={{
              padding: "2rem", position: "relative", overflow: "hidden",
              background: "rgba(184,146,58,0.04)", border: "1px solid rgba(184,146,58,0.25)",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }} />
              <Car size={22} style={{ color: "var(--gold)", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem",
                color: "var(--gold)", fontWeight: 500, marginBottom: "0.75rem", lineHeight: 1.3 }}>
                Бесплатная парковка<br />в Центральном районе
              </h3>
              <p style={{ color: "var(--stone)", fontSize: "0.875rem", lineHeight: 1.8 }}>
                Жители ЖК «Дипломат» имеют <strong style={{ color: "var(--navy)" }}>преимущественное право
                на бесплатную парковку</strong> в Центральном районе
                Санкт-Петербурга. Для центра города — это не удобство, а другой уровень свободы.
              </p>
            </div>

            {/* Локация */}
            <div style={{ padding: "2rem", border: "1px solid rgba(184,146,58,0.12)" }}>
              <MapPin size={22} style={{ color: "var(--gold)", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem",
                color: "var(--navy)", fontWeight: 500, marginBottom: "1rem", lineHeight: 1.3 }}>
                Исторический центр
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  ["10 мин", "Невский проспект"],
                  ["5 мин",  "Синопская набережная"],
                  ["7 мин",  "Таврический сад"],
                  ["рядом",  "Невская Ратуша"],
                  ["рядом",  "Лучшие гимназии и рестораны"],
                ].map(([d, p]) => (
                  <div key={p} style={{ display: "flex", justifyContent: "space-between",
                    alignItems: "center", paddingBottom: "0.5rem",
                    borderBottom: "1px solid rgba(184,146,58,0.07)" }}>
                    <span style={{ color: "var(--stone)", fontSize: "0.8125rem" }}>{p}</span>
                    <span style={{ color: "var(--gold)", fontSize: "0.75rem", fontWeight: 700 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ПЛАНИРОВКА ═══════════════════════════════════════════════════ */}
      <section id="floorplan" style={{ background: "var(--cream)", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Пространство</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--navy)", margin: 0 }}>Планировка квартиры</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.75rem" }}>Евро-трёхкомнатная · 111,5 м² · Двусторонняя ориентация</p>
          </div>
          <div style={{ background: "#fff", borderRadius: 4, padding: "1.5rem", boxShadow: "0 4px 32px rgba(0,0,0,0.06)", border: "1px solid rgba(184,146,58,0.12)" }}>
            <img
              src="/floorplan_real.jpg"
              alt="Актуальная планировка квартиры ЖК Дипломат"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: 2 }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
            {[
              { name: "Кухня-гостиная", area: "39,6 м²" },
              { name: "Спальня 1", area: "21,8 м²" },
              { name: "Спальня 2", area: "22,3 м²" },
              { name: "Холл", area: "15,6 м²" },
              { name: "Санузел 1 + 2", area: "7,8 + 2,1 м²" },
              { name: "Гардероб + лоджия", area: "2,8 + 5,0 м²" },
            ].map(room => (
              <div key={room.name} style={{ textAlign: "center", padding: "1rem", background: "#fff", border: "1px solid rgba(184,146,58,0.15)", borderRadius: 2 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--gold)", fontWeight: 600 }}>{room.area}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{room.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ФИНАЛЬНЫЙ CTA ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--navy)", padding: "4.5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div ref={r4} className="fade-up" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center",
          }}>
            {/* Агент */}
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(184,146,58,0.6)", marginBottom: "1.25rem" }}>
                Ваш агент
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "rgba(184,146,58,0.1)", border: "1px solid rgba(184,146,58,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <User size={22} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem",
                    color: "#fff", fontWeight: 400, lineHeight: 1.2 }}>
                    {AGENT_NAME}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "0.25rem" }}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={10} fill="#b8923a" style={{ color: "var(--gold)" }} />
                    ))}
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", marginLeft: 2 }}>
                      5.0 · {AGENCY}
                    </span>
                  </div>
                </div>
              </div>
              {[{ num: PHONE, raw: PHONE_RAW }].map(({ num, raw }) => (
                <a key={raw} href={`tel:${raw}`} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  textDecoration: "none", marginBottom: "0.5rem",
                }}>
                  <div style={{
                    width: 42, height: 42, flexShrink: 0,
                    border: "1px solid rgba(184,146,58,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 180ms",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,146,58,0.15)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                    <Phone size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem",
                    color: "var(--gold)", fontWeight: 300, letterSpacing: "0.02em" }}>
                    {num}
                  </span>
                </a>
              ))}
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", lineHeight: 1.7 }}>
                Звоните — с удовольствием отвечу на все вопросы<br />
                и приглашу вас на просмотр.
              </p>
            </div>

            {/* Форма */}
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,146,58,0.18)",
              padding: "2rem", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }} />
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <CheckCircle2 size={32} style={{ color: "var(--gold)", margin: "0 auto 1rem" }} />
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem",
                    color: "#fff", marginBottom: "0.5rem" }}>Заявка принята</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
                    {AGENT_NAME} свяжется с вами в ближайшее время
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem",
                    color: "#fff", marginBottom: "1.25rem" }}>
                    Записаться на просмотр
                  </div>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {[
                      { k: "name",  l: "Ваше имя",  t: "text", p: "Иван Иванов" },
                      { k: "phone", l: "Телефон",   t: "tel",  p: "+7 (___) ___-__-__" },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ display: "block", fontSize: "0.6rem", fontWeight: 700,
                          letterSpacing: "0.18em", textTransform: "uppercase",
                          color: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }}>{f.l}</label>
                        <input type={f.t} placeholder={f.p} required={f.k === "phone"}
                          value={form[f.k as keyof typeof form]}
                          onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                          style={{
                            width: "100%", padding: "0.65rem 0.875rem",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(184,146,58,0.2)",
                            color: "#fff", fontSize: "0.875rem",
                            fontFamily: "Nunito Sans, sans-serif",
                            outline: "none", boxSizing: "border-box",
                            transition: "border-color 180ms",
                          }}
                          onFocus={e => (e.currentTarget.style.borderColor = "var(--gold)")}
                          onBlur={e => (e.currentTarget.style.borderColor = "rgba(184,146,58,0.2)")} />
                      </div>
                    ))}
                    <button type="submit" style={{
                      width: "100%", padding: "0.875rem",
                      background: "var(--gold)", color: "#fff", border: "none",
                      fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", cursor: "pointer",
                      transition: "background 180ms", marginTop: "0.25rem",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#c9a24a")}
                      onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
                      Отправить заявку
                    </button>
                  </form>
                  <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: "0.75rem", fontStyle: "italic" }}>
                    Гарантируем полную конфиденциальность ваших данных.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--navy)", borderTop: "1px solid rgba(184,146,58,0.08)",
        padding: "1.25rem 1.5rem", display: "flex", justifyContent: "center",
      }}>
        <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.7rem", textAlign: "center" }}>
          ЖК «Дипломат» · Исполкомская ул., 17 · Санкт-Петербург · Объявление носит информационный характер
        </p>
      </footer>

      {/* ═══ ЛАЙТБОКС ═══════════════════════════════════════════════════════ */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "rgba(10,15,25,0.95)", backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "2rem",
        }}>
          <button onClick={e => { e.stopPropagation(); lbPrev(); }} style={{
            position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 180ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,146,58,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
            <ChevronLeft size={22} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: "85vw", maxHeight: "85vh" }}>
            <img src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].label}
              style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain", display: "block" }} />
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem", textAlign: "center",
              marginTop: "0.875rem", fontFamily: "Cormorant Garamond, serif" }}>
              {PHOTOS[lightbox].label} · {lightbox + 1} / {PHOTOS.length}
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); lbNext(); }} style={{
            position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 180ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,146,58,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
            <ChevronRight size={22} />
          </button>
          <button onClick={() => setLightbox(null)} style={{
            position: "absolute", top: "1.25rem", right: "1.25rem",
            background: "rgba(255,255,255,0.08)", border: "none", color: "#fff",
            width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 180ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,146,58,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
            <X size={16} />
          </button>
        </div>
      )}

      {/* ═══ МОДАЛЬНАЯ ФОРМА ════════════════════════════════════════════════ */}
      {modal && (
        <div onClick={e => e.target === e.currentTarget && setModal(false)} style={{
          position: "fixed", inset: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
          background: "rgba(26,35,50,0.75)", backdropFilter: "blur(8px)",
        }}>
          <div style={{
            width: "100%", maxWidth: 400, background: "#fff",
            border: "1px solid rgba(184,146,58,0.2)", padding: "2rem", position: "relative",
            animation: "modalIn 240ms cubic-bezier(0.23,1,0.32,1) both",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, var(--gold), transparent)",
            }} />
            <button onClick={() => setModal(false)} style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "none", border: "none", cursor: "pointer",
              color: "var(--stone)", transition: "color 180ms",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--stone)")}>
              <X size={16} />
            </button>
            {sent ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <CheckCircle2 size={28} style={{ color: "var(--gold)", margin: "0 auto 0.75rem" }} />
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem",
                  color: "var(--navy)", marginBottom: "0.4rem" }}>Заявка принята</div>
                <div style={{ color: "var(--stone)", fontSize: "0.875rem" }}>
                  {AGENT_NAME} свяжется с вами
                </div>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem",
                  color: "var(--navy)", marginBottom: "1.25rem" }}>
                  Записаться на просмотр
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    { k: "name",  l: "Имя",     t: "text", p: "Иван Иванов" },
                    { k: "phone", l: "Телефон", t: "tel",  p: "+7 (___) ___-__-__" },
                  ].map(f => (
                    <div key={f.k}>
                      <label style={{ display: "block", fontSize: "0.6rem", fontWeight: 700,
                        letterSpacing: "0.18em", textTransform: "uppercase",
                        color: "var(--stone)", marginBottom: "0.35rem" }}>{f.l}</label>
                      <input type={f.t} placeholder={f.p} required={f.k === "phone"}
                        value={form[f.k as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                        style={{
                          width: "100%", padding: "0.65rem 0.875rem",
                          background: "var(--cream)", border: "1px solid rgba(184,146,58,0.2)",
                          color: "var(--navy)", fontSize: "0.875rem",
                          fontFamily: "Nunito Sans, sans-serif",
                          outline: "none", boxSizing: "border-box", transition: "border-color 180ms",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "var(--gold)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(184,146,58,0.2)")} />
                    </div>
                  ))}
                  <button type="submit" style={{
                    padding: "0.875rem", background: "var(--gold)", color: "#fff",
                    border: "none", cursor: "pointer",
                    fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", transition: "background 180ms",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#c9a24a")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
                    Отправить
                  </button>
                </form>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: "0.75rem", fontStyle: "italic" }}>
                  Гарантируем полную конфиденциальность ваших данных.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity:0; transform: scale(0.96) translateY(8px); }
          to   { opacity:1; transform: scale(1) translateY(0); }
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 700px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="repeat(4,1fr)"] {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
