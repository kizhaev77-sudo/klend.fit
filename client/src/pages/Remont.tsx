/**
 * REMONT — Лендинг для бригады по ремонту квартир
 * Design: Plaster & Brick / Worksite Precision
 * Philosophy: Тёплый штукатурный фон, кирпично-красный акцент, "разметочная" типографика
 * Color: #f2ede6 (bg, plaster), #2b2a28 (charcoal), #c7401e (brick), #8a8378 (warm grey), #ffffff (card)
 * Typography: Oswald (display, condensed/signage) + Inter (body)
 * Signature: "measuring tape" tick-mark rules as section dividers
 */

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Phone, ChevronDown, CheckCircle2, Send, Loader2,
  Ruler, Hammer, PaintBucket, Wrench, ShieldCheck, Clock, Star,
} from "lucide-react";

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  bg: "#f2ede6",
  charcoal: "#2b2a28",
  brick: "#c7401e",
  brickDark: "#a83416",
  grey: "#8a8378",
  greyLight: "#e3dcd2",
  white: "#ffffff",
  line: "#d8d0c4",
};

// ── Fade-up animation hook ────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("rm-visible"); obs.unobserve(el); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Tick-mark ruler divider ───────────────────────────────────────────────────
function TapeDivider({ color = C.line }: { color?: string }) {
  return (
    <svg width="100%" height="20" viewBox="0 0 1200 20" preserveAspectRatio="none" style={{ display: "block" }}>
      <line x1="0" y1="10" x2="1200" y2="10" stroke={color} strokeWidth="1" />
      {Array.from({ length: 61 }).map((_, i) => {
        const x = i * 20;
        const major = i % 5 === 0;
        return <line key={i} x1={x} y1={major ? 2 : 6} x2={x} y2={major ? 18 : 14} stroke={color} strokeWidth="1" />;
      })}
    </svg>
  );
}

// ── Portfolio projects ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    area: "62 м²", rooms: "2-комн.", type: "Капитальный ремонт",
    desc: "Полная замена коммуникаций, стяжка, перепланировка кухни-гостиной.",
    days: "38 дней",
    img: "/photos/p3.jpg",
  },
  {
    area: "34 м²", rooms: "Студия", type: "Ремонт под ключ",
    desc: "Современный минимализм, скрытая система хранения, тёплый пол.",
    days: "21 день",
    img: "/photos/p5.jpg",
  },
  {
    area: "85 м²", rooms: "3-комн.", type: "Реконструкция",
    desc: "Объединение санузлов, замена окон, дизайнерское освещение.",
    days: "52 дня",
    img: "/photos/p7.jpg",
  },
  {
    area: "45 м²", rooms: "1-комн.", type: "Косметический ремонт",
    desc: "Покраска, новое напольное покрытие, обновление сантехники.",
    days: "14 дней",
    img: "/photos/p9.jpg",
  },
];

// ── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: Ruler, title: "Замер и смета", desc: "Бесплатный выезд, точный расчёт материалов и сроков — без скрытых доплат." },
  { icon: Wrench, title: "Черновые работы", desc: "Демонтаж, электрика, сантехника, стяжка, штукатурка — всё по СНиП." },
  { icon: PaintBucket, title: "Отделка", desc: "Покраска, обои, плитка, напольные покрытия, потолки любой сложности." },
  { icon: Hammer, title: "Под ключ", desc: "От пустых стен до заезда: мебель, технику и финальную уборку берём на себя." },
];

// ── Process steps ────────────────────────────────────────────────────────────
const STEPS_PROCESS = [
  { title: "Замер на объекте", desc: "Приезжаем бесплатно, осматриваем помещение, фиксируем все размеры." },
  { title: "Смета и договор", desc: "Фиксируем цену и сроки в договоре — без \"внезапных\" допработ." },
  { title: "Демонтаж и черновые работы", desc: "Электрика, сантехника, стяжка, штукатурка — с фотоотчётом каждого этапа." },
  { title: "Отделка и финиш", desc: "Чистовая отделка, установка сантехники, уборка строительного мусора." },
  { title: "Сдача объекта", desc: "Совместный осмотр, устранение замечаний, гарантия на работы — 3 года." },
];

// ── Multi-step intake form ────────────────────────────────────────────────────
type FormData = {
  apartmentType: string;
  area: string;
  renovationType: string;
  rooms: string;
  timing: string;
  name: string;
  contact: string;
};

const INITIAL: FormData = {
  apartmentType: "", area: "", renovationType: "", rooms: "", timing: "", name: "", contact: "",
};

const STEPS = [
  {
    id: "apartmentType",
    title: "Какой тип помещения?",
    subtitle: "Выберите подходящий вариант",
    type: "chips",
    options: ["Квартира в новостройке", "Вторичное жильё", "Студия", "Дом / коттедж", "Коммерческое помещение"],
  },
  {
    id: "area",
    title: "Какая площадь?",
    subtitle: "Примерная площадь в м²",
    type: "chips",
    options: ["до 30 м²", "30–50 м²", "50–80 м²", "80–120 м²", "более 120 м²"],
  },
  {
    id: "renovationType",
    title: "Какой ремонт нужен?",
    subtitle: "Выберите тип работ",
    type: "chips",
    options: ["Косметический", "Капитальный", "Реконструкция / перепланировка", "Чистовая отделка от застройщика", "Не знаю, нужна консультация"],
  },
  {
    id: "rooms",
    title: "Сколько комнат?",
    subtitle: "Количество комнат в помещении",
    type: "chips",
    options: ["Студия", "1 комната", "2 комнаты", "3 комнаты", "4 и более"],
  },
  {
    id: "timing",
    title: "Когда планируете начать?",
    subtitle: "Ориентировочные сроки старта",
    type: "chips",
    options: ["Уже сейчас", "В течение месяца", "В течение 2-3 месяцев", "Пока изучаю варианты"],
  },
  {
    id: "contact",
    title: "Как с вами связаться?",
    subtitle: "Имя и телефон — пришлём смету в течение дня",
    type: "contact",
  },
];

function IntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [sending, setSending] = useState(false);

  const current = STEPS[step];
  const progress = ((step) / STEPS.length) * 100;

  function setValue(field: keyof FormData, val: string) {
    setData(prev => ({ ...prev, [field]: val }));
  }

  function toggleChip(field: keyof FormData, val: string) {
    const cur = data[field] || "";
    setValue(field, cur === val ? "" : val);
  }

  function canAdvance() {
    const val = data[current.id as keyof FormData];
    if (current.id === "contact") return !!(data.name && data.contact);
    return !!val?.trim();
  }

  async function handleSubmit() {
    setSending(true);
    try {
      const resp = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Лендинг «Ремонт под ключ»",
          businessType: "Ремонт квартир",
          businessDesc: `${data.apartmentType}, ${data.area}, ${data.rooms}`,
          goal: data.renovationType,
          deadline: data.timing,
          name: data.name,
          contact: data.contact,
        }),
      });
      if (!resp.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (e) {
      console.error("Lead submit failed:", e);
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(199,64,30,0.1)", border: `1px solid ${C.brick}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <CheckCircle2 size={28} color={C.brick} />
        </div>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(24px,4vw,34px)", color: C.charcoal, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.02em" }}>
          Заявка принята
        </h3>
        <p style={{ color: C.grey, fontSize: 16, lineHeight: 1.6, maxWidth: 420, margin: "0 auto", fontFamily: "Inter, sans-serif" }}>
          Перезвоним в течение дня и согласуем удобное время для бесплатного замера.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Progress bar */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ color: C.grey, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
            Шаг {step + 1} из {STEPS.length}
          </span>
          <span style={{ color: C.brick, fontSize: 13, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div style={{ height: 3, background: C.greyLight, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: C.brick, transition: "width 0.4s cubic-bezier(0.23,1,0.32,1)" }} />
        </div>
      </div>

      {/* Question */}
      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(22px,3.5vw,30px)", color: C.charcoal, marginBottom: 8, lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.01em" }}>
          {current.title}
        </h3>
        <p style={{ color: C.grey, fontSize: 15, fontFamily: "Inter, sans-serif" }}>{current.subtitle}</p>
      </div>

      {/* Input area */}
      {current.type === "chips" && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
          {current.options!.map(opt => {
            const active = data[current.id as keyof FormData] === opt;
            return (
              <button key={opt} onClick={() => toggleChip(current.id as keyof FormData, opt)}
                style={{ padding: "12px 20px", border: `2px solid ${active ? C.brick : C.line}`, background: active ? "rgba(199,64,30,0.06)" : C.white, color: active ? C.brick : C.charcoal, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.15s" }}>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {current.type === "contact" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
          <input value={data.name} onChange={e => setValue("name", e.target.value)}
            placeholder="Ваше имя"
            style={{ background: C.white, border: `2px solid ${C.line}`, padding: "14px 16px", color: C.charcoal, fontFamily: "Inter, sans-serif", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
          <input value={data.contact} onChange={e => setValue("contact", e.target.value)}
            placeholder="+7 (___) ___-__-__"
            style={{ background: C.white, border: `2px solid ${C.line}`, padding: "14px 16px", color: C.charcoal, fontFamily: "Inter, sans-serif", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
        </div>
      )}

      {submitError && (
        <div style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(199,64,30,0.06)", border: `1px solid ${C.brick}`, color: C.brickDark, fontFamily: "Inter, sans-serif", fontSize: 13 }}>
          Не удалось отправить заявку. Попробуйте ещё раз или позвоните напрямую.
        </div>
      )}

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {step > 0 && (
          <button onClick={() => setStep(s => s - 1)}
            style={{ background: "transparent", border: `2px solid ${C.line}`, padding: "13px 20px", color: C.grey, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Назад
          </button>
        )}

        {step < STEPS.length - 1 ? (
          <button onClick={() => setStep(s => s + 1)} disabled={!canAdvance()}
            style={{ display: "flex", alignItems: "center", gap: 8, background: canAdvance() ? C.brick : C.greyLight, color: canAdvance() ? "#fff" : C.grey, border: "none", padding: "14px 28px", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, cursor: canAdvance() ? "pointer" : "not-allowed", textTransform: "uppercase", letterSpacing: "0.04em", transition: "all 0.15s" }}>
            Далее <ArrowRight size={16} />
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={!canAdvance() || sending}
            style={{ display: "flex", alignItems: "center", gap: 8, background: canAdvance() ? C.brick : C.greyLight, color: canAdvance() ? "#fff" : C.grey, border: "none", padding: "14px 28px", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, cursor: canAdvance() ? "pointer" : "not-allowed", textTransform: "uppercase", letterSpacing: "0.04em", transition: "all 0.15s" }}>
            {sending ? <><Loader2 size={16} style={{ animation: "rm-spin 1s linear infinite" }} /> Отправка...</> : <><Send size={16} /> Получить смету</>}
          </button>
        )}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Remont() {
  const heroRef = useFadeUp();
  const projectsRef = useFadeUp();
  const servicesRef = useFadeUp();
  const processRef = useFadeUp();
  const formRef = useFadeUp();

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.charcoal }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .rm-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1); }
        .rm-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .rm-nav-link:hover { color: #c7401e !important; }
        .rm-cta:hover { background: #a83416 !important; }
        .rm-project:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(43,42,40,0.12); }
        @keyframes rm-spin { to { transform: rotate(360deg); } }
        @keyframes rm-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(242,237,230,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.line}`, padding: "0 clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: C.charcoal, letterSpacing: "0.02em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 }}>
            <Ruler size={20} color={C.brick} />
            РемонтПро
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px,3vw,40px)" }}>
            {[["#projects", "РАБОТЫ"], ["#services", "УСЛУГИ"], ["#process", "ЭТАПЫ"], ["#form", "СМЕТА"]].map(([href, label]) => (
              <a key={href} href={href} className="rm-nav-link"
                style={{ color: C.grey, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textDecoration: "none", transition: "color 0.2s" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(20px,5vw,80px) 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, ${C.line} 39px, ${C.line} 40px)`, opacity: 0.4, pointerEvents: "none" }} />

        <div ref={heroRef} className="rm-fade" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `2px solid ${C.brick}`, padding: "6px 14px", marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, background: C.brick, animation: "rm-pulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: C.brick, textTransform: "uppercase" }}>Ремонт квартир под ключ · Санкт-Петербург</span>
          </div>

          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(48px,8vw,100px)", fontWeight: 700, lineHeight: 1, marginBottom: 32, letterSpacing: "0.01em", textTransform: "uppercase" }}>
            Ремонт<br />
            <span style={{ color: C.brick }}>точно</span> в срок.
          </h1>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.grey, maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
            Берём объект под ключ: от черновых работ до финальной уборки. Фиксируем смету в договоре — никаких доплат за "непредвиденные" работы.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#form" className="rm-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.brick, color: "#fff", padding: "16px 32px", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", transition: "background 0.2s", textTransform: "uppercase" }}>
              Получить смету <ArrowRight size={16} />
            </a>
            <a href="#projects"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `2px solid ${C.charcoal}`, color: C.charcoal, padding: "14px 28px", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase" }}>
              Смотреть объекты
            </a>
          </div>

          <div style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 40, fontWeight: 700, color: C.charcoal }}>3 года</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grey, letterSpacing: "0.06em", marginTop: 2, textTransform: "uppercase" }}>Гарантия на работы</div>
            </div>
            <div style={{ width: 1, height: 40, background: C.line }} />
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 40, fontWeight: 700, color: C.charcoal }}>Фикс. цена</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grey, letterSpacing: "0.06em", marginTop: 2, textTransform: "uppercase" }}>По договору</div>
            </div>
            <div style={{ width: 1, height: 40, background: C.line }} />
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 40, fontWeight: 700, color: C.charcoal }}>Бесплатно</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grey, letterSpacing: "0.06em", marginTop: 2, textTransform: "uppercase" }}>Выезд и замер</div>
            </div>
          </div>
          </div>

          {/* Hero photo */}
          <div style={{ position: "relative", height: 560 }}>
            <img
              src="/photos/p1.jpg"
              alt="Современный интерьер после ремонта"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 24, background: C.brick, color: "#fff", padding: "12px 20px", fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              После ремонта
            </div>
          </div>
        </div>

        <a href="#projects" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: C.grey, textDecoration: "none" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>Листать</span>
          <ChevronDown size={18} style={{ animation: "rm-pulse 2s ease-in-out infinite" }} />
        </a>
      </section>

      <TapeDivider />

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "100px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={projectsRef} className="rm-fade">
            <div style={{ marginBottom: 64 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: C.brick, marginBottom: 12, textTransform: "uppercase" }}>Выполненные объекты</div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, lineHeight: 1.1, textTransform: "uppercase" }}>
                Последние <span style={{ color: C.brick }}>проекты.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {PROJECTS.map((p, i) => (
                <div key={i} className="rm-project" style={{ background: C.white, border: `1px solid ${C.line}`, overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}>
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <img src={p.img} alt={p.type}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, background: C.brick, color: "#fff", padding: "4px 10px", fontSize: 11, fontWeight: 600, fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {p.type}
                    </div>
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${C.greyLight}` }}>
                      <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 28, fontWeight: 700, color: C.charcoal }}>{p.area}</span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grey, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.rooms}</span>
                    </div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontSize: 12, color: C.charcoal }}>
                      <Clock size={14} color={C.brick} /> Срок: {p.days}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TapeDivider />

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px clamp(20px,5vw,80px)", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={servicesRef} className="rm-fade">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: C.brick, marginBottom: 12, textTransform: "uppercase" }}>Что мы делаем</div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 64, textTransform: "uppercase" }}>
              Полный <span style={{ color: C.brick }}>цикл работ.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 1, background: C.line }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{ background: C.white, padding: "40px 32px" }}>
                  <div style={{ width: 52, height: 52, border: `2px solid ${C.brick}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <s.icon size={24} color={C.brick} />
                  </div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, color: C.charcoal, marginBottom: 12, textTransform: "uppercase" }}>{s.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TapeDivider color={C.greyLight} />

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "100px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={processRef} className="rm-fade">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: C.brick, marginBottom: 12, textTransform: "uppercase" }}>Как мы работаем</div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 64, textTransform: "uppercase" }}>
              Пять этапов <span style={{ color: C.brick }}>до сдачи.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {STEPS_PROCESS.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 24, padding: "28px 0", borderBottom: i < STEPS_PROCESS.length - 1 ? `1px solid ${C.line}` : "none", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 56, height: 56, border: `2px solid ${C.charcoal}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: C.charcoal }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, color: C.charcoal, marginBottom: 6, textTransform: "uppercase" }}>{p.title}</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.6, maxWidth: 600 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TapeDivider />

      {/* ── INTAKE FORM ── */}
      <section id="form" style={{ padding: "100px clamp(20px,5vw,80px)", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={formRef} className="rm-fade">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
              {/* Left: info */}
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: C.brick, marginBottom: 12, textTransform: "uppercase" }}>Бесплатная смета</div>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px,4vw,52px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
                  Расскажите <span style={{ color: C.brick }}>о вашем объекте.</span>
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: C.grey, lineHeight: 1.7, marginBottom: 40 }}>
                  Ответьте на несколько вопросов — рассчитаем предварительную стоимость и согласуем дату бесплатного замера.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: ShieldCheck, text: "Договор с фиксированной ценой" },
                    { icon: Clock, text: "Бесплатный выезд и замер" },
                    { icon: Star, text: "Гарантия на работы 3 года" },
                    { icon: CheckCircle2, text: "Фотоотчёт на каждом этапе" },
                  ].map(item => (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 28, height: 28, border: `2px solid ${C.brick}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <item.icon size={14} color={C.brick} />
                      </div>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.charcoal }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div style={{ background: C.bg, border: `1px solid ${C.line}`, padding: "clamp(24px,4vw,48px)" }}>
                <IntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px clamp(20px,5vw,80px)", borderTop: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: C.charcoal, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 }}>
          <Ruler size={16} color={C.brick} /> РемонтПро
        </div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grey, letterSpacing: "0.04em" }}>
          Ремонт квартир и помещений под ключ · Санкт-Петербург
        </div>
      </footer>
    </div>
  );
}
