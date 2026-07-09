const STYLE = String.raw`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap');
:root{--beige:#f4efe4;--beige2:#efe8da;--ink:#1c1811;--ink2:#2c2720;--muted:#8b8272;--gold1:#e6cf7d;--gold2:#b58c2c;--line:rgba(44,39,32,.14);}
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{background:var(--beige);color:var(--ink2);font-family:Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  .serif{font-family:'Cormorant Garamond',Georgia,serif}
  img{display:block}
  .ribbon{background:var(--ink);color:var(--beige);text-align:center;font:600 11px/1 Manrope;letter-spacing:.16em;text-transform:uppercase;padding:8px}
  header.top{position:sticky;top:0;z-index:30;display:flex;align-items:center;justify-content:space-between;padding:18px 40px;background:rgba(244,239,228,.9);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
  .brand{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:23px;letter-spacing:.34em;color:var(--ink)}
  nav.mid{display:flex;gap:26px}
  nav.mid a{font:600 11px/1 Manrope;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-decoration:none}
  nav.mid a:hover{color:var(--ink)}
  .icons{display:flex;gap:10px}
  .icons span{width:42px;height:42px;border:1px solid var(--line);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--ink);font-size:15px}
  /* HERO */
  .hero{position:relative;min-height:88vh;display:flex;align-items:flex-end;overflow:hidden;background:var(--beige)}
  .hero-img{position:absolute;inset:0}
  .hero-img img{width:100%;height:100%;object-fit:cover;filter:brightness(1.05) contrast(1.13) saturate(1.36)}
  .hero-scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,16,12,.05) 0%,rgba(20,16,12,.10) 42%,rgba(20,16,12,.46) 100%)}
  .hero-c{position:relative;z-index:2;padding:0 40px 48px;width:100%}
  .eyebrow{font:700 13px/1 Manrope;letter-spacing:.28em;text-transform:uppercase;color:#3d3629;margin-bottom:20px}
  h1.h1{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:clamp(44px,6.2vw,92px);line-height:.97;color:var(--ink);max-width:13ch;letter-spacing:-.01em}
  .cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:30px}
  .cta a{display:inline-flex;align-items:center;padding:15px 26px;border-radius:100px;font:600 15px/1 Manrope;text-decoration:none}
  .cta .call{background:linear-gradient(135deg,var(--gold1),var(--gold2));color:#241a08}
  .cta .tg{background:var(--ink2);color:var(--beige)}
  .cta .cian{background:rgba(255,255,255,.6);border:1px solid rgba(44,39,32,.3);color:var(--ink2);backdrop-filter:blur(4px)}
  .specs{display:flex;justify-content:space-between;gap:24px;margin-top:36px;flex-wrap:wrap}
  .specs .lbl{font:700 12px/1 Manrope;letter-spacing:.22em;text-transform:uppercase;color:#4a4235;margin-bottom:8px}
  .specs .big{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:38px;color:var(--ink)}
  .specs .adr{font:600 19px/1.25 Manrope;color:var(--ink)}
  /* PQ eyebrow band */
  .pq{padding:70px 40px 6px;text-align:center;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:30px;letter-spacing:.02em;color:#4a4235}
  .pq small{display:block;font:700 12px/1 Manrope;font-style:normal;letter-spacing:.24em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
  /* content sections */
  .sec{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:center;padding:36px 40px 96px;max-width:1280px;margin:0 auto}
  .sec.rev{grid-template-columns:1.05fr 1fr}
  .sec.rev .txt{order:2}
  .kick{font:700 12px/1 Manrope;letter-spacing:.22em;text-transform:uppercase;color:var(--gold2);margin-bottom:18px}
  .sec h2{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:clamp(36px,4.4vw,62px);line-height:1.02;color:var(--ink);margin-bottom:22px}
  .sec p{font:400 17px/1.7 Manrope;color:#4a4235;max-width:46ch}
  .stats{display:flex;flex-wrap:wrap;gap:38px;margin-top:30px}
  .stats .n{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:40px;color:var(--ink)}
  .stats .s{font:600 11px/1 Manrope;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-top:5px}
  .tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
  .tags span{border:1px solid var(--line);border-radius:100px;padding:9px 16px;font:600 12px/1 Manrope;letter-spacing:.06em;color:#4a4235;background:var(--beige2)}
  .ph{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:4px;filter:saturate(1.12) contrast(1.04)}
  /* gallery */
  .gal-wrap{padding:36px 40px 90px;max-width:1320px;margin:0 auto}
  .gal{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
  .gal img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:4px;filter:saturate(1.12) contrast(1.04)}
  .gal img.tall{grid-row:span 2;aspect-ratio:auto;height:100%}
  /* contact */
  .contact{background:var(--ink);color:var(--beige);padding:96px 40px}
  .contact .in{max-width:1000px;margin:0 auto;text-align:center}
  .contact .kick{color:var(--gold1)}
  .contact h2{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:clamp(40px,5vw,72px);color:#fff;line-height:1.02;margin-bottom:10px}
  .contact .price{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:clamp(38px,4.6vw,60px);color:var(--gold1);margin-bottom:22px}
  .contact p{font:400 17px/1.7 Manrope;color:#d9cfbe;max-width:52ch;margin:0 auto 34px}
  .contact .cta{justify-content:center}
  .contact .cta .cian{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.35);color:#fff}
  .agent{margin-top:40px;padding-top:26px;border-top:1px solid rgba(255,255,255,.16);font:600 13px/1.6 Manrope;letter-spacing:.14em;text-transform:uppercase;color:#c9bfae}
  footer{background:var(--ink);color:#8f8676;text-align:center;padding:26px;font:500 12px/1.6 Manrope;letter-spacing:.1em;border-top:1px solid rgba(255,255,255,.08)}
  @media(max-width:860px){nav.mid{display:none}.sec,.sec.rev{grid-template-columns:1fr}.sec.rev .txt{order:0}.gal{grid-template-columns:repeat(2,1fr)}.gal img.tall{grid-row:auto;height:auto;aspect-ratio:1/1}}`;

const MARKUP = String.raw`<header class="top">
    <div class="brand">ДИПЛОМАТ</div>
    <nav class="mid">
      <a href="#hero">00 Начало</a>
      <a href="#about">01 Философия</a>
      <a href="#materials">02 Материалы</a>
      <a href="#interiors">03 Интерьеры</a>
      <a href="#gallery">04 Галерея</a>
      <a href="#plan">05 Планировка</a>
      <a href="#contact">06 Контакт</a>
    </nav>
  </header>

  <section class="hero" id="hero">
    <div class="hero-img"><img src="https://klend.fit/photos/p1.jpg" alt="Интерьер квартиры"></div>
    <div class="hero-scrim"></div>
    <div class="hero-c">
      <div class="eyebrow">ЖК «Дипломат» — Санкт-Петербург</div>
      <h1 class="h1 serif">Элегантная квартира в клубном доме бизнес-класса</h1>
      <div class="cta">
        <a class="call" href="tel:+79219669188">Позвонить · +7 921 966-91-88</a>
        <a class="tg" href="https://t.me/kklend_bot?start=show">Запись на показ в Telegram</a>
        <a class="cian" href="https://spb.cian.ru/sale/flat/331122274/">Объявление на ЦИАН</a>
      </div>
      <div class="specs">
        <div><div class="lbl">Евро-трёхкомнатная</div><div class="big serif">111,5 м²</div></div>
        <div style="text-align:right"><div class="lbl">Адрес</div><div class="adr">Исполкомская ул., 17 · 6 этаж</div></div>
      </div>
    </div>
  </section>

  <div class="pq"><small>Стиль · Комфорт · Локация</small></div>
  <section class="sec" id="about">
    <div class="txt">
      <div class="kick">Глава 01 — Философия</div>
      <h2 class="serif">Построен, чтобы в нём жить</h2>
      <p>Клубный дом бизнес-класса в историческом центре: всего 176 квартир, закрытая охраняемая территория, консьерж, подземный паркинг. В десяти минутах — Невский проспект, рядом Синопская набережная, Овсянниковский и Таврический сады.</p>
      <div class="stats">
        <div><div class="n serif">2018</div><div class="s">Построен</div></div>
        <div><div class="n serif">176</div><div class="s">Квартир</div></div>
        <div><div class="n serif">6/9</div><div class="s">Этаж</div></div>
        <div><div class="n serif">3,05м</div><div class="s">Потолки</div></div>
      </div>
    </div>
    <img class="ph" src="https://klend.fit/photos/p2.jpg" alt="Дом">
  </section>

  <div class="pq"><small>История · Центр · Невский</small>В десяти минутах от всего</div>
  <section class="sec rev" id="materials">
    <div class="txt">
      <div class="kick">Глава 02 — Материалы</div>
      <h2 class="serif">Материалы без компромиссов</h2>
      <p>Светлый дизайнерский ремонт вне времени и элегантная мебель. Дерево-алюминиевые стеклопакеты и панорамные окна, толстые стены и отличная шумоизоляция, многоступенчатая очистка воды, индивидуальный тепловой пункт.</p>
      <div class="tags"><span>Дерево-алюминий</span><span>Панорамные окна</span><span>Bosch · Electrolux</span><span>Mitsubishi Electric</span><span>Очистка воды</span></div>
    </div>
    <img class="ph" src="https://klend.fit/photos/p3.jpg" alt="Материалы">
  </section>

  <section class="sec" id="interiors">
    <div class="txt">
      <div class="kick">Глава 03 — Интерьеры</div>
      <h2 class="serif">Пространство определяет дом</h2>
      <p>Двусторонняя планировка: просторная кухня-гостиная 40 м² с двумя панорамами окон, две спальни в тихий открытый двор с видом на город. Очень много света — окна выходят на две стороны.</p>
      <div class="stats">
        <div><div class="n serif">40м²</div><div class="s">Кухня-гостиная</div></div>
        <div><div class="n serif">2</div><div class="s">Спальни</div></div>
        <div><div class="n serif">44,1м²</div><div class="s">Жилая</div></div>
      </div>
    </div>
    <img class="ph" src="https://klend.fit/photos/p4.jpg" alt="Интерьеры">
  </section>

  <div class="pq"><small>Объём · Воздух · Свет</small>Город как часть интерьера</div>
  <section class="sec rev">
    <div class="txt">
      <div class="kick">Глава 04 — Вид</div>
      <h2 class="serif">Высокий видовой этаж</h2>
      <p>Окна раскрывают исторические крыши Петербурга, а спальни смотрят в тихий зелёный двор. Свет и горизонт здесь — часть отделки.</p>
    </div>
    <img class="ph" src="https://klend.fit/photos/p5.jpg" alt="Вид">
  </section>

  <div class="pq" id="gallery"><small>12 кадров · Исполкомская, 17</small>Галерея</div>
  <div class="gal-wrap">
    <div class="gal">
      <img src="https://klend.fit/photos/p1.jpg" alt="">
      <img src="https://klend.fit/photos/p2.jpg" alt="">
      <img src="https://klend.fit/photos/p3.jpg" alt="">
      <img src="https://klend.fit/photos/p4.jpg" alt="">
      <img src="https://klend.fit/photos/p5.jpg" alt="">
      <img src="https://klend.fit/photos/p6.jpg" alt="">
      <img src="https://klend.fit/photos/p7.jpg" alt="">
      <img src="https://klend.fit/photos/p8.jpg" alt="">
      <img src="https://klend.fit/photos/p9.jpg" alt="">
      <img src="https://klend.fit/photos/p10.jpg" alt="">
      <img src="https://klend.fit/photos/p11.jpg" alt="">
      <img src="https://klend.fit/photos/p12.jpg" alt="">
    </div>
  </div>

  <div class="pq" id="plan"><small>Актуальная планировка · Исполкомская, 17</small>Планировка</div>
  <div class="gal-wrap" style="max-width:960px">
    <img src="/floorplan_real.jpg" alt="Планировка квартиры — ЖК Дипломат, 112 м²" style="width:100%;border-radius:6px;background:#fff;padding:18px;border:1px solid var(--line)">
    <div class="stats" style="justify-content:center;margin-top:30px;gap:44px">
      <div style="text-align:center"><div class="n serif">6/10</div><div class="s">Этаж</div></div>
      <div style="text-align:center"><div class="n serif">112 м²</div><div class="s">Общая площадь</div></div>
      <div style="text-align:center"><div class="n serif">2</div><div class="s">Санузла</div></div>
      <div style="text-align:center"><div class="n serif">3,05м</div><div class="s">Потолки</div></div>
    </div>
    <p style="text-align:center;margin:18px auto 0;font:400 15px/1.7 Manrope;color:#4a4235;max-width:56ch">Овсянниковский сад рядом · м. Пл. Александра Невского — 700 м · м. Пл. Восстания — 1300 м</p>
  </div>

  <section class="contact" id="contact">
    <div class="in">
      <div class="kick">Свободная продажа · Полная цена в договоре</div>
      <h2 class="serif">Заезжай и живи</h2>
      <div class="price serif">58 500 000 ₽</div>
      <p>Один взрослый собственник, без обременений. Квартира продаётся с мебелью и техникой. Приглашаем на просмотр.</p>
      <div class="cta">
        <a class="call" href="tel:+79219669188">Позвонить · +7 921 966-91-88</a>
        <a class="tg" href="https://t.me/kklend_bot?start=show">Запись на закрытый показ</a>
        <a class="cian" href="https://spb.cian.ru/sale/flat/331122274/">Объявление на ЦИАН</a>
      </div>
      <div class="agent">Олеся Фивейская · Риелтор · Мир Квартир Элит</div>
    </div>
  </section>

  <footer>ЖК «Дипломат» · Исполкомская ул., 17 · Санкт-Петербург © 2026</footer>`;

export default function DiplomatForma() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
    </>
  );
}
