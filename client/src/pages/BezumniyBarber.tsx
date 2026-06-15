/**
 * DEMO LANDING PAGE: Безумный Барбер
 * Design: Dark Industrial Barbershop
 * Philosophy: Raw, masculine, textured — dark wood, fire, graffiti walls
 * Color: Near-black (#0d0d0d), warm amber (#c8922a), off-white (#f0ece4)
 * Typography: Oswald (headers) + Inter (body)
 * Layout: Full-bleed hero, asymmetric sections, bold typography
 */

import { useState } from "react";

const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=2600&q=85&auto=format&fit=crop",
  fire: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=85&auto=format&fit=crop",
  chair: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1400&q=85&auto=format&fit=crop",
  interior1: "https://images.unsplash.com/photo-1759134198561-e2041049419c?w=1400&q=85&auto=format&fit=crop",
  interior2: "https://images.unsplash.com/photo-1667539916609-c706d5b7ed65?w=1400&q=85&auto=format&fit=crop",
  interior3: "https://images.unsplash.com/photo-1667539916756-9efa8343624f?w=1400&q=85&auto=format&fit=crop",
};

const SERVICES = [
  { name: "Стрижка мужская", price: "от 1 800 ₽" },
  { name: "Стрижка + борода", price: "от 2 600 ₽" },
  { name: "Детская стрижка (7–12 лет)", price: "1 600 ₽" },
  { name: "Оформление бороды", price: "от 1 200 ₽" },
  { name: "Тонирование головы", price: "1 600 ₽" },
  { name: "Тонирование бороды", price: "1 400 ₽" },
  { name: "Горячее бритьё", price: "от 1 500 ₽" },
  { name: "Камуфляж седины", price: "от 1 800 ₽" },
];

export default function BezumniyBarber() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0d0d0d] text-[#f0ece4] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PHOTOS.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />

        {/* Top nav */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c8922a] rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>BB</span>
            </div>
            <span className="text-white font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Безумный Барбер
            </span>
          </div>
          <a
            href="tel:+78129047306"
            className="hidden md:flex items-center gap-2 text-[#c8922a] hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +7 (812) 904-73-06
          </a>
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-4xl">
          <div className="inline-block bg-[#c8922a] text-black text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6">
            Барбершоп · Санкт-Петербург
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6 text-white"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.02em" }}
          >
            Безумный<br />
            <span className="text-[#c8922a]">Барбер</span>
          </h1>
          <p className="text-[#f0ece4]/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Мужские стрижки и уход за бородой. Атмосфера, в которой хочется остаться.
            Ежедневно с 10:00 до 22:00.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="bg-[#c8922a] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-[#e0a830] transition-colors duration-200"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Записаться
            </a>
            <a
              href="tel:+78129047306"
              className="border border-[#f0ece4]/30 text-[#f0ece4] font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-[#c8922a] hover:text-[#c8922a] transition-colors duration-200"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Позвонить
            </a>
          </div>
        </div>

        {/* Rating badge */}
        <div className="absolute bottom-8 right-6 md:right-12 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-[#c8922a]/30 px-4 py-3">
          <div>
            <div className="text-[#c8922a] font-black text-2xl leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>4.9</div>
            <div className="text-[#f0ece4]/50 text-xs tracking-wide">267 отзывов</div>
          </div>
          <div className="w-px h-8 bg-[#c8922a]/30 mx-1" />
          <div>
            <div className="text-[#f0ece4] text-xs font-semibold">Лучшее место</div>
            <div className="text-[#f0ece4]/50 text-xs">Яндекс 2026</div>
          </div>
        </div>
      </section>

      {/* ABOUT + FIRE PHOTO */}
      <section className="grid md:grid-cols-2 min-h-[500px]">
        <div className="relative overflow-hidden">
          <img
            src={PHOTOS.fire}
            alt="Мастер за работой"
            className="w-full h-full object-cover min-h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]/40" />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-[#111111]">
          <div className="w-12 h-0.5 bg-[#c8922a] mb-8" />
          <h2
            className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Мастерство,<br />
            <span className="text-[#c8922a]">которое видно</span>
          </h2>
          <p className="text-[#f0ece4]/60 text-base leading-relaxed mb-6">
            Барбершоп с характером — тёмное дерево, кожаные кресла, граффити на стенах.
            Мастера, которые знают своё дело. Атмосфера, в которой нет случайных людей.
          </p>
          <p className="text-[#f0ece4]/60 text-base leading-relaxed mb-8">
            Улица Коллонтай, 24к2 — Невский район. Метро «Проспект Большевиков» — 640 м.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "267", label: "отзывов" },
              { num: "4.9", label: "рейтинг" },
              { num: "10+", label: "лет опыта" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-black text-[#c8922a]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {stat.num}
                </div>
                <div className="text-[#f0ece4]/40 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="grid grid-cols-3 gap-1 bg-[#0d0d0d]">
        {[PHOTOS.chair, PHOTOS.interior1, PHOTOS.interior2].map((photo, i) => (
          <div key={i} className="relative overflow-hidden aspect-square">
            <img
              src={photo}
              alt={`Интерьер ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-12 h-0.5 bg-[#c8922a]" />
          <h2
            className="text-3xl md:text-4xl font-black uppercase text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Услуги и цены
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-0">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 px-4 border-b border-[#f0ece4]/10 hover:bg-[#f0ece4]/5 transition-colors duration-150 group"
            >
              <span className="text-[#f0ece4]/80 group-hover:text-[#f0ece4] transition-colors duration-150">
                {service.name}
              </span>
              <span
                className="text-[#c8922a] font-bold"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="bg-[#111111] px-6 md:px-12 py-20">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-12 h-0.5 bg-[#c8922a]" />
            <h2
              className="text-3xl md:text-4xl font-black uppercase text-white"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Записаться
            </h2>
          </div>

          {submitted ? (
            <div className="border border-[#c8922a]/40 bg-[#c8922a]/10 p-8 text-center">
              <div className="text-[#c8922a] text-4xl mb-4">✓</div>
              <p className="text-white font-semibold text-lg mb-2">Заявка принята</p>
              <p className="text-[#f0ece4]/60">Мы перезвоним в течение 15 минут</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-[#0d0d0d] border border-[#f0ece4]/20 text-[#f0ece4] placeholder-[#f0ece4]/30 px-5 py-4 focus:outline-none focus:border-[#c8922a] transition-colors duration-200"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full bg-[#0d0d0d] border border-[#f0ece4]/20 text-[#f0ece4] placeholder-[#f0ece4]/30 px-5 py-4 focus:outline-none focus:border-[#c8922a] transition-colors duration-200"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#0d0d0d] border border-[#f0ece4]/20 text-[#f0ece4] px-5 py-4 focus:outline-none focus:border-[#c8922a] transition-colors duration-200 appearance-none"
              >
                <option value="">Выберите услугу</option>
                {SERVICES.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-[#c8922a] text-black font-black uppercase tracking-widest text-sm py-5 hover:bg-[#e0a830] active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Отправить заявку
              </button>
              <p className="text-[#f0ece4]/30 text-xs text-center">
                Гарантируем полную конфиденциальность ваших данных.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#f0ece4]/10 px-6 md:px-12 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div
              className="text-white font-black uppercase tracking-widest text-lg mb-1"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Безумный Барбер
            </div>
            <div className="text-[#f0ece4]/40 text-sm">ул. Коллонтай, 24к2 · Ежедневно 10:00–22:00</div>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a href="tel:+78129047306" className="text-[#c8922a] hover:text-white transition-colors duration-200 font-semibold">
              +7 (812) 904-73-06
            </a>
            <div className="flex gap-4">
              <a href="https://t.me/BezumniyBarber" target="_blank" rel="noopener noreferrer" className="text-[#f0ece4]/40 hover:text-[#c8922a] transition-colors duration-200 text-sm">
                Telegram
              </a>
              <a href="https://vk.com/bezumniy_barber" target="_blank" rel="noopener noreferrer" className="text-[#f0ece4]/40 hover:text-[#c8922a] transition-colors duration-200 text-sm">
                ВКонтакте
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
