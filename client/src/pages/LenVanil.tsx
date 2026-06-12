/**
 * DESIGN PHILOSOPHY: Organic Warmth / Artisan Confectionery
 * ─────────────────────────────────────────────────────────
 * Design Movement: Cottagecore meets Modern Minimalism
 * Core Principles:
 *   1. Warmth through cream/vanilla/rose color palette
 *   2. Handcrafted feel via serif typography (Playfair Display) + thin decorative lines
 *   3. Generous whitespace — desserts deserve breathing room
 *   4. Asymmetric photo placement to feel curated, not templated
 * Color Philosophy: Ivory (#FBF7F0), Dusty Rose (#D4A5A5), Warm Taupe (#8B7355),
 *   Deep Chocolate (#3D2B1F), Sage (#9CAF88)
 * Layout Paradigm: Vertical editorial with offset image blocks
 * Signature Elements: Botanical dividers (thin SVG lines + leaf motif), soft box shadows
 * Typography: Playfair Display (headings) + Lato (body)
 * Animation: Gentle fade-up on scroll, no jarring motion
 */

import { useState } from "react";

const PHOTOS = {
  hero: "/manus-storage/photo1_46910907.jpg",       // box of colorful bonbons
  kartoshka: "/manus-storage/photo2_83041af2.jpg",  // kartoshka menu card
  mochi: "/manus-storage/photo3_1ee82d8d.jpg",      // mochi menu card
  bonbons: "/manus-storage/photo1_46910907.jpg",    // colorful bonbons box (hero photo, reused for about)
};

const MENU = [
  {
    name: "Картошечка",
    description: "Нежный бисквит, пропитанный какао, с кремом из сливочного масла и сгущёнки. Украшена живыми цветами.",
    prices: [
      { qty: "4 шт", price: "1 400 ₽" },
      { qty: "6 шт", price: "2 000 ₽" },
      { qty: "9 шт", price: "3 000 ₽" },
    ],
    photo: PHOTOS.kartoshka,
  },
  {
    name: "Моти",
    description: "Японские рисовые пирожные с нежной начинкой. Яркие, сочные, с неожиданными вкусами.",
    prices: [
      { qty: "4 шт", price: "1 000 ₽" },
      { qty: "6 шт", price: "1 400 ₽" },
      { qty: "8 шт", price: "1 800 ₽" },
      { qty: "9 шт", price: "2 000 ₽" },
    ],
    photo: PHOTOS.mochi,
  },
];

function BotanicalDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-[#D4A5A5]/40" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4A5A5]">
        <path d="M12 2C12 2 8 6 8 10C8 14 12 16 12 16C12 16 16 14 16 10C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M12 16V22" stroke="currentColor" strokeWidth="1"/>
        <path d="M9 19C9 19 10.5 17.5 12 17.5C13.5 17.5 15 19 15 19" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
      <div className="flex-1 h-px bg-[#D4A5A5]/40" />
    </div>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

export default function LenVanil() {
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#FBF7F0",
        color: "#3D2B1F",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 border-b border-[#D4A5A5]/30"
        style={{ backgroundColor: "#FBF7F0/95", backdropFilter: "blur(8px)", background: "rgba(251,247,240,0.95)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p
              className="text-xl tracking-widest uppercase"
              style={{ fontFamily: "'Playfair Display', serif", color: "#8B7355", letterSpacing: "0.15em" }}
            >
              Лён & Ваниль
            </p>
            <p className="text-xs text-[#D4A5A5] tracking-wider mt-0.5">десерты со вкусом уюта</p>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#8B7355]">
            <a href="#menu" className="hover:text-[#3D2B1F] transition-colors">Меню</a>
            <a href="#about" className="hover:text-[#3D2B1F] transition-colors">О нас</a>
            <a href="#order" className="hover:text-[#3D2B1F] transition-colors">Заказать</a>
          </nav>
          <a
            href="https://t.me/len_vanil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:opacity-80 active:scale-95"
            style={{ backgroundColor: "#D4A5A5", color: "#FBF7F0" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z"/>
            </svg>
            Telegram
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-sm tracking-widest uppercase text-[#D4A5A5] mb-4">Авторские десерты · Санкт-Петербург</p>
              <h1
                className="text-5xl md:text-6xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Десерты,<br />
                <em>созданные</em><br />
                с любовью
              </h1>
              <p className="text-[#8B7355] text-lg leading-relaxed mb-8">
                Каждый десерт — это маленькое произведение искусства. Натуральные ингредиенты, ручная работа и капелька волшебства в каждой коробочке.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#order"
                  className="px-8 py-3 rounded-full text-sm font-medium transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#3D2B1F", color: "#FBF7F0" }}
                >
                  Сделать заказ
                </a>
                <a
                  href="#menu"
                  className="px-8 py-3 rounded-full text-sm font-medium border transition-all hover:bg-[#D4A5A5]/10 active:scale-95"
                  style={{ borderColor: "#D4A5A5", color: "#8B7355" }}
                >
                  Смотреть меню
                </a>
              </div>
              {/* Social proof */}
              <div className="flex items-center gap-3 mt-8 text-sm text-[#8B7355]">
                <HeartIcon />
                <span>Ежедневно с 10:00 до 21:00</span>
                <span className="text-[#D4A5A5]">·</span>
                <span>@len_vanil</span>
              </div>
            </div>
            {/* Hero image */}
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: "#D4A5A5", opacity: 0.2 }}
              />
              <img
                src={PHOTOS.hero}
                alt="Авторские десерты Лён и Ваниль"
                className="relative w-full rounded-2xl object-cover shadow-xl"
                style={{ aspectRatio: "3/4", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      <BotanicalDivider />

      {/* ── FEATURES ── */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🌸", title: "Живые цветы", desc: "Украшаем каждый десерт свежими цветами" },
            { icon: "🍫", title: "Бельгийский шоколад", desc: "Только натуральный шоколад премиум-класса" },
            { icon: "📦", title: "Красивая упаковка", desc: "Каждая коробочка — готовый подарок" },
            { icon: "🚚", title: "Доставка по СПб", desc: "Привезём свежими прямо к вашему событию" },
          ].map((feat) => (
            <div
              key={feat.title}
              className="text-center p-5 rounded-2xl"
              style={{ backgroundColor: "#F5EDE0" }}
            >
              <div className="text-3xl mb-3">{feat.icon}</div>
              <p className="font-semibold text-sm mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{feat.title}</p>
              <p className="text-xs text-[#8B7355] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BotanicalDivider />

      {/* ── MENU ── */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-[#D4A5A5] mb-3">Наши десерты</p>
          <h2
            className="text-4xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Меню
          </h2>
        </div>

        <div className="space-y-16">
          {MENU.map((item, idx) => (
            <div
              key={item.name}
              className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ flexDirection: idx % 2 === 1 ? "row-reverse" : "row" }}
            >
              {/* Photo */}
              <div className={`relative ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl"
                  style={{ backgroundColor: idx % 2 === 0 ? "#D4A5A5" : "#9CAF88", opacity: 0.2 }}
                />
                <img
                  src={item.photo}
                  alt={item.name}
                  className="relative w-full rounded-2xl object-cover shadow-lg"
                  style={{ aspectRatio: "3/4", objectPosition: "top" }}
                />
              </div>
              {/* Info */}
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                >
                  {item.name}
                </h3>
                <p className="text-[#8B7355] leading-relaxed mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.prices.map((p) => (
                    <div
                      key={p.qty}
                      className="flex items-center justify-between px-5 py-3 rounded-xl"
                      style={{ backgroundColor: "#F5EDE0" }}
                    >
                      <span className="text-sm text-[#8B7355]">{p.qty}</span>
                      <span
                        className="font-semibold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#3D2B1F" }}
                      >
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#order"
                  className="inline-block mt-6 px-6 py-2.5 rounded-full text-sm transition-all hover:opacity-80 active:scale-95"
                  style={{ backgroundColor: "#D4A5A5", color: "#FBF7F0" }}
                >
                  Заказать {item.name.toLowerCase()}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BotanicalDivider />

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="absolute -top-3 -right-3 w-full h-full rounded-2xl"
              style={{ backgroundColor: "#9CAF88", opacity: 0.15 }}
            />
            <img
              src={PHOTOS.bonbons}
              alt="Шоколадные конфеты ручной работы"
              className="relative w-full rounded-2xl object-cover shadow-lg"
              style={{ aspectRatio: "3/4", objectPosition: "center" }}
            />
          </div>
          <div>
            <p className="text-sm tracking-widest uppercase text-[#D4A5A5] mb-4">Наша история</p>
            <h2
              className="text-4xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Десерты со вкусом уюта
            </h2>
            <p className="text-[#8B7355] leading-relaxed mb-4">
              «Лён и Ваниль» — это маленькая кондитерская мастерская в Санкт-Петербурге, где каждый десерт создаётся вручную с особой любовью и вниманием к деталям.
            </p>
            <p className="text-[#8B7355] leading-relaxed mb-4">
              Мы используем только натуральные ингредиенты: бельгийский шоколад, свежие сливки, живые цветы для украшения. Никаких консервантов и искусственных красителей.
            </p>
            <p className="text-[#8B7355] leading-relaxed mb-8">
              Идеально для подарка, праздника или просто чтобы побаловать себя в обычный день.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/len_vanil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all hover:opacity-80"
                style={{ backgroundColor: "#3D2B1F", color: "#FBF7F0" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z"/>
                </svg>
                Telegram-канал
              </a>
              <a
                href="https://vk.com/len.vanil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border transition-all hover:bg-[#D4A5A5]/10"
                style={{ borderColor: "#D4A5A5", color: "#8B7355" }}
              >
                ВКонтакте
              </a>
            </div>
          </div>
        </div>
      </section>

      <BotanicalDivider />

      {/* ── ORDER FORM ── */}
      <section id="order" className="max-w-5xl mx-auto px-6 py-8 pb-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm tracking-widest uppercase text-[#D4A5A5] mb-3">Оформить заказ</p>
            <h2
              className="text-4xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Сделайте заказ
            </h2>
            <p className="text-[#8B7355]">
              Оставьте заявку — мы свяжемся с вами в течение часа и обсудим детали
            </p>
          </div>

          {submitted ? (
            <div
              className="text-center p-10 rounded-2xl"
              style={{ backgroundColor: "#F5EDE0" }}
            >
              <div className="text-4xl mb-4">🌸</div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Заявка принята!
              </h3>
              <p className="text-[#8B7355]">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl space-y-5"
              style={{ backgroundColor: "#F5EDE0" }}
            >
              <div>
                <label className="block text-sm text-[#8B7355] mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  placeholder="Как вас зовут?"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#D4A5A5]/50"
                  style={{ backgroundColor: "#FBF7F0", border: "1px solid #D4A5A5", color: "#3D2B1F" }}
                />
              </div>
              <div>
                <label className="block text-sm text-[#8B7355] mb-2">Телефон или Telegram</label>
                <input
                  type="text"
                  required
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__ или @username"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#D4A5A5]/50"
                  style={{ backgroundColor: "#FBF7F0", border: "1px solid #D4A5A5", color: "#3D2B1F" }}
                />
              </div>
              <div>
                <label className="block text-sm text-[#8B7355] mb-2">Что хотите заказать?</label>
                <textarea
                  rows={3}
                  value={orderForm.comment}
                  onChange={(e) => setOrderForm({ ...orderForm, comment: e.target.value })}
                  placeholder="Например: Картошечка 6 шт + Моти 4 шт, нужно к 20 июня..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#D4A5A5]/50 resize-none"
                  style={{ backgroundColor: "#FBF7F0", border: "1px solid #D4A5A5", color: "#3D2B1F" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "#3D2B1F", color: "#FBF7F0" }}
              >
                Отправить заявку
              </button>
              <p className="text-center text-xs text-[#8B7355]">
                Или напишите напрямую:{" "}
                <a href="https://t.me/len_vanil" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3D2B1F]">
                  @len_vanil
                </a>{" "}
                · +7 (950) 005-66-65
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="border-t border-[#D4A5A5]/30 py-8"
        style={{ backgroundColor: "#F5EDE0" }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#8B7355]">
          <div>
            <p
              className="font-medium"
              style={{ fontFamily: "'Playfair Display', serif", color: "#3D2B1F" }}
            >
              Лён & Ваниль
            </p>
            <p className="text-xs mt-0.5">Авторские десерты · Санкт-Петербург</p>
          </div>
          <div className="text-center text-xs">
            <p>ЖК Смарт, Ленсоветовский, 19 к2 ст1</p>
            <p className="mt-1">Ежедневно с 10:00 до 21:00</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/len_vanil" target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">
              Telegram
            </a>
            <a href="https://vk.com/len.vanil" target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">
              ВКонтакте
            </a>
            <a href="tel:+79500056665" className="hover:text-[#3D2B1F] transition-colors">
              +7 (950) 005-66-65
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
