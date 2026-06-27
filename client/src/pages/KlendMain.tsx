/**
 * KLEND.SPACE — Главная страница агентства
 * Design: Quiet Luxury / Editorial Dark
 * Philosophy: Тёмный фон, золотые акценты, элегантная типографика
 * Color: #0a0a0a (bg), #d4aa5a (gold), #f5f0e8 (cream text), #1a1a1a (card bg)
 * Typography: Cormorant Garamond (serif, headlines) + Inter (sans, body)
 * Layout: Full-bleed hero, asymmetric portfolio grid, step-by-step intake form
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Phone, ChevronDown, CheckCircle2,
  Upload, X, ChevronLeft, ChevronRight, Send, Loader2, Mail
} from "lucide-react";

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  bg: "#0a0a0a",
  surface: "#111111",
  card: "#161616",
  border: "rgba(212,170,90,0.18)",
  gold: "#d4aa5a",
  goldLight: "rgba(212,170,90,0.12)",
  cream: "#f5f0e8",
  muted: "#888",
  white: "#ffffff",
};

// ── Portfolio works ───────────────────────────────────────────────────────────
const WORKS = [
  {
    id: "diplomat",
    label: "Недвижимость",
    title: "ЖК «Дипломат»",
    city: "Санкт-Петербург",
    desc: "Лендинг для элитной квартиры. Тёмный аристократичный стиль, акцент на эксклюзивность и атмосферу.",
    tags: ["Элитная недвижимость", "Тёмный стиль", "Форма заявки"],
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'680'%20height%3D'440'%20viewBox%3D'0%200%20680%20440'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%230d0d0d'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%231a1712'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D'680'%20height%3D'440'%20fill%3D'url(%23g)'%2F%3E%3Cg%20stroke%3D'%23d4aa5a'%20stroke-opacity%3D'0.06'%20stroke-width%3D'1'%3E%3Cline%20x1%3D'60'%20y1%3D'0'%20x2%3D'60'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'120'%20y1%3D'0'%20x2%3D'120'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'180'%20y1%3D'0'%20x2%3D'180'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'240'%20y1%3D'0'%20x2%3D'240'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'300'%20y1%3D'0'%20x2%3D'300'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'360'%20y1%3D'0'%20x2%3D'360'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'420'%20y1%3D'0'%20x2%3D'420'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'480'%20y1%3D'0'%20x2%3D'480'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'540'%20y1%3D'0'%20x2%3D'540'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'600'%20y1%3D'0'%20x2%3D'600'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'660'%20y1%3D'0'%20x2%3D'660'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'60'%20x2%3D'680'%20y2%3D'60'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'120'%20x2%3D'680'%20y2%3D'120'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'180'%20x2%3D'680'%20y2%3D'180'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'240'%20x2%3D'680'%20y2%3D'240'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'300'%20x2%3D'680'%20y2%3D'300'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'360'%20x2%3D'680'%20y2%3D'360'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'420'%20x2%3D'680'%20y2%3D'420'%2F%3E%3C%2Fg%3E%3Cellipse%20cx%3D'500'%20cy%3D'210'%20rx%3D'280'%20ry%3D'210'%20fill%3D'%23d4aa5a'%20fill-opacity%3D'0.06'%2F%3E%3Crect%20x%3D'48'%20y%3D'44'%20width%3D'150'%20height%3D'30'%20rx%3D'2'%20fill%3D'none'%20stroke%3D'%23d4aa5a'%20stroke-opacity%3D'0.5'%2F%3E%3Ctext%20x%3D'62'%20y%3D'64'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'13'%20letter-spacing%3D'2.5'%20fill%3D'%23d4aa5a'%3E%D0%9D%D0%95%D0%94%D0%92%D0%98%D0%96%D0%98%D0%9C%D0%9E%D0%A1%D0%A2%D0%AC%3C%2Ftext%3E%3Ctext%20x%3D'48'%20y%3D'250'%20font-family%3D'Georgia%2C%26%2339%3BTimes%20New%20Roman%26%2339%3B%2Cserif'%20font-size%3D'50'%20fill%3D'%23f5f0e8'%3E%D0%96%D0%9A%20%C2%AB%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%3C%2Ftext%3E%3Cline%20x1%3D'48'%20y1%3D'285'%20x2%3D'130'%20y2%3D'285'%20stroke%3D'%23d4aa5a'%20stroke-width%3D'1.5'%2F%3E%3Ctext%20x%3D'48'%20y%3D'402'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'14'%20letter-spacing%3D'3'%20fill%3D'%239a9a9a'%3Eklend.fit%3C%2Ftext%3E%3C%2Fsvg%3E",
    href: "/diplomat",
  },
  {
    id: "diplomat-forma",
    label: "Премиум-лендинг",
    title: "Дипломат · Forma",
    city: "Санкт-Петербург",
    desc: "Лендинг элитной квартиры в стиле «тихий люкс»: тёмная эстетика, крупный сериф, фоновая музыка и сторителлинг по мере прокрутки.",
    tags: ["Тихий люкс", "Тёмный стиль", "Музыка"],
    img: "https://klend.fit/photos/p3.jpg",
    href: "/diplomat-forma",
  },
  {
    id: "len-vanil",
    label: "Кондитерская",
    title: "Лён и Ваниль",
    city: "Санкт-Петербург",
    desc: "Лендинг для авторской кондитерской. Тёплая кремовая эстетика, меню с ценами, форма заказа.",
    tags: ["Авторские десерты", "Тёплый стиль", "Меню + заказ"],
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'680'%20height%3D'440'%20viewBox%3D'0%200%20680%20440'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%231a1410'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%232c2118'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D'680'%20height%3D'440'%20fill%3D'url(%23g)'%2F%3E%3Cg%20stroke%3D'%23e0b87a'%20stroke-opacity%3D'0.06'%20stroke-width%3D'1'%3E%3Cline%20x1%3D'60'%20y1%3D'0'%20x2%3D'60'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'120'%20y1%3D'0'%20x2%3D'120'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'180'%20y1%3D'0'%20x2%3D'180'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'240'%20y1%3D'0'%20x2%3D'240'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'300'%20y1%3D'0'%20x2%3D'300'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'360'%20y1%3D'0'%20x2%3D'360'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'420'%20y1%3D'0'%20x2%3D'420'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'480'%20y1%3D'0'%20x2%3D'480'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'540'%20y1%3D'0'%20x2%3D'540'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'600'%20y1%3D'0'%20x2%3D'600'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'660'%20y1%3D'0'%20x2%3D'660'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'60'%20x2%3D'680'%20y2%3D'60'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'120'%20x2%3D'680'%20y2%3D'120'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'180'%20x2%3D'680'%20y2%3D'180'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'240'%20x2%3D'680'%20y2%3D'240'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'300'%20x2%3D'680'%20y2%3D'300'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'360'%20x2%3D'680'%20y2%3D'360'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'420'%20x2%3D'680'%20y2%3D'420'%2F%3E%3C%2Fg%3E%3Cellipse%20cx%3D'500'%20cy%3D'210'%20rx%3D'280'%20ry%3D'210'%20fill%3D'%23e0b87a'%20fill-opacity%3D'0.06'%2F%3E%3Crect%20x%3D'48'%20y%3D'44'%20width%3D'150'%20height%3D'30'%20rx%3D'2'%20fill%3D'none'%20stroke%3D'%23e0b87a'%20stroke-opacity%3D'0.5'%2F%3E%3Ctext%20x%3D'62'%20y%3D'64'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'13'%20letter-spacing%3D'2.5'%20fill%3D'%23e0b87a'%3E%D0%9A%D0%9E%D0%9D%D0%94%D0%98%D0%A2%D0%95%D0%A0%D0%A1%D0%9A%D0%90%D0%AF%3C%2Ftext%3E%3Ctext%20x%3D'48'%20y%3D'250'%20font-family%3D'Georgia%2C%26%2339%3BTimes%20New%20Roman%26%2339%3B%2Cserif'%20font-size%3D'50'%20fill%3D'%23f6ece0'%3E%D0%9B%D1%91%D0%BD%20%D0%B8%20%D0%92%D0%B0%D0%BD%D0%B8%D0%BB%D1%8C%3C%2Ftext%3E%3Cline%20x1%3D'48'%20y1%3D'285'%20x2%3D'130'%20y2%3D'285'%20stroke%3D'%23e0b87a'%20stroke-width%3D'1.5'%2F%3E%3Ctext%20x%3D'48'%20y%3D'402'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'14'%20letter-spacing%3D'3'%20fill%3D'%239a9a9a'%3Eklend.fit%3C%2Ftext%3E%3C%2Fsvg%3E",
    href: "/len-vanil",
  },
  {
    id: "barber",
    label: "Барбершоп",
    title: "Безумный Барбер",
    city: "Санкт-Петербург",
    desc: "Лендинг для барбершопа. Тёмный индустриальный стиль, прайс-лист, форма записи.",
    tags: ["Барбершоп", "Тёмный индастриал", "Запись онлайн"],
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'680'%20height%3D'440'%20viewBox%3D'0%200%20680%20440'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%230c0c0e'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%2317181c'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D'680'%20height%3D'440'%20fill%3D'url(%23g)'%2F%3E%3Cg%20stroke%3D'%23bda773'%20stroke-opacity%3D'0.06'%20stroke-width%3D'1'%3E%3Cline%20x1%3D'60'%20y1%3D'0'%20x2%3D'60'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'120'%20y1%3D'0'%20x2%3D'120'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'180'%20y1%3D'0'%20x2%3D'180'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'240'%20y1%3D'0'%20x2%3D'240'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'300'%20y1%3D'0'%20x2%3D'300'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'360'%20y1%3D'0'%20x2%3D'360'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'420'%20y1%3D'0'%20x2%3D'420'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'480'%20y1%3D'0'%20x2%3D'480'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'540'%20y1%3D'0'%20x2%3D'540'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'600'%20y1%3D'0'%20x2%3D'600'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'660'%20y1%3D'0'%20x2%3D'660'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'60'%20x2%3D'680'%20y2%3D'60'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'120'%20x2%3D'680'%20y2%3D'120'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'180'%20x2%3D'680'%20y2%3D'180'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'240'%20x2%3D'680'%20y2%3D'240'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'300'%20x2%3D'680'%20y2%3D'300'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'360'%20x2%3D'680'%20y2%3D'360'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'420'%20x2%3D'680'%20y2%3D'420'%2F%3E%3C%2Fg%3E%3Cellipse%20cx%3D'500'%20cy%3D'210'%20rx%3D'280'%20ry%3D'210'%20fill%3D'%23bda773'%20fill-opacity%3D'0.06'%2F%3E%3Crect%20x%3D'48'%20y%3D'44'%20width%3D'150'%20height%3D'30'%20rx%3D'2'%20fill%3D'none'%20stroke%3D'%23bda773'%20stroke-opacity%3D'0.5'%2F%3E%3Ctext%20x%3D'62'%20y%3D'64'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'13'%20letter-spacing%3D'2.5'%20fill%3D'%23bda773'%3E%D0%91%D0%90%D0%A0%D0%91%D0%95%D0%A0%D0%A8%D0%9E%D0%9F%3C%2Ftext%3E%3Ctext%20x%3D'48'%20y%3D'250'%20font-family%3D'Georgia%2C%26%2339%3BTimes%20New%20Roman%26%2339%3B%2Cserif'%20font-size%3D'50'%20fill%3D'%23eaeaea'%3E%D0%91%D0%B5%D0%B7%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%3C%2Ftext%3E%3Cline%20x1%3D'48'%20y1%3D'285'%20x2%3D'130'%20y2%3D'285'%20stroke%3D'%23bda773'%20stroke-width%3D'1.5'%2F%3E%3Ctext%20x%3D'48'%20y%3D'402'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'14'%20letter-spacing%3D'3'%20fill%3D'%239a9a9a'%3Eklend.fit%3C%2Ftext%3E%3C%2Fsvg%3E",
    href: "/barber",
  },
  {
    id: "coffee",
    label: "Кофейня",
    title: "Кофе и Культура",
    city: "Саратов",
    desc: "Лендинг для specialty-кофейни и галереи. Тёплая атмосферная подача, история бренда и процесса, меню.",
    tags: ["Specialty coffee", "Атмосферный стиль", "Кофейня-галерея"],
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'680'%20height%3D'440'%20viewBox%3D'0%200%20680%20440'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%2317110a'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%232a1d10'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D'680'%20height%3D'440'%20fill%3D'url(%23g)'%2F%3E%3Cg%20stroke%3D'%23c79a5a'%20stroke-opacity%3D'0.06'%20stroke-width%3D'1'%3E%3Cline%20x1%3D'60'%20y1%3D'0'%20x2%3D'60'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'120'%20y1%3D'0'%20x2%3D'120'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'180'%20y1%3D'0'%20x2%3D'180'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'240'%20y1%3D'0'%20x2%3D'240'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'300'%20y1%3D'0'%20x2%3D'300'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'360'%20y1%3D'0'%20x2%3D'360'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'420'%20y1%3D'0'%20x2%3D'420'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'480'%20y1%3D'0'%20x2%3D'480'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'540'%20y1%3D'0'%20x2%3D'540'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'600'%20y1%3D'0'%20x2%3D'600'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'660'%20y1%3D'0'%20x2%3D'660'%20y2%3D'440'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'60'%20x2%3D'680'%20y2%3D'60'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'120'%20x2%3D'680'%20y2%3D'120'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'180'%20x2%3D'680'%20y2%3D'180'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'240'%20x2%3D'680'%20y2%3D'240'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'300'%20x2%3D'680'%20y2%3D'300'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'360'%20x2%3D'680'%20y2%3D'360'%2F%3E%3Cline%20x1%3D'0'%20y1%3D'420'%20x2%3D'680'%20y2%3D'420'%2F%3E%3C%2Fg%3E%3Cellipse%20cx%3D'500'%20cy%3D'210'%20rx%3D'280'%20ry%3D'210'%20fill%3D'%23c79a5a'%20fill-opacity%3D'0.07'%2F%3E%3Crect%20x%3D'48'%20y%3D'44'%20width%3D'118'%20height%3D'30'%20rx%3D'2'%20fill%3D'none'%20stroke%3D'%23c79a5a'%20stroke-opacity%3D'0.5'%2F%3E%3Ctext%20x%3D'62'%20y%3D'64'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'13'%20letter-spacing%3D'2.5'%20fill%3D'%23c79a5a'%3E%D0%9A%D0%9E%D0%A4%D0%95%D0%99%D0%9D%D0%AF%3C%2Ftext%3E%3Ctext%20x%3D'48'%20y%3D'250'%20font-family%3D'Georgia%2Cserif'%20font-size%3D'50'%20fill%3D'%23f3e9d8'%3E%D0%9A%D0%BE%D1%84%D0%B5%20%D0%B8%20%D0%9A%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B0%3C%2Ftext%3E%3Cline%20x1%3D'48'%20y1%3D'285'%20x2%3D'130'%20y2%3D'285'%20stroke%3D'%23c79a5a'%20stroke-width%3D'1.5'%2F%3E%3Ctext%20x%3D'48'%20y%3D'402'%20font-family%3D'Inter%2CArial%2Csans-serif'%20font-size%3D'14'%20letter-spacing%3D'3'%20fill%3D'%239a8b73'%3Eklend.fit%3C%2Ftext%3E%3C%2Fsvg%3E",
    href: "/coffee/",
    external: true,
  },
];

// ── Fade-up animation hook ────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("kl-visible"); obs.unobserve(el); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Multi-step intake form ────────────────────────────────────────────────────
type FormData = {
  businessType: string;
  businessDesc: string;
  goal: string;
  audience: string;
  style: string;
  references: string;
  deadline: string;
  budget: string;
  extras: string;
  name: string;
  contact: string;
  files: File[];
};

const INITIAL: FormData = {
  businessType: "", businessDesc: "", goal: "", audience: "",
  style: "", references: "", deadline: "", budget: "",
  extras: "", name: "", contact: "", files: [],
};

const STEPS = [
  {
    id: "businessType",
    title: "Какой у вас бизнес?",
    subtitle: "Выберите нишу или напишите свою",
    type: "chips",
    options: ["Недвижимость", "Ресторан / кафе", "Красота / уход", "Медицина", "Образование", "Услуги для бизнеса", "Интернет-магазин", "Другое"],
  },
  {
    id: "businessDesc",
    title: "Расскажите о вашем бизнесе",
    subtitle: "Что продаёте, чем отличаетесь от конкурентов?",
    type: "textarea",
    placeholder: "Например: Авторская кондитерская в СПб, делаем моти и картошечку с живыми цветами. Работаем 2 года, 500+ довольных клиентов...",
  },
  {
    id: "goal",
    title: "Какова цель сайта?",
    subtitle: "Что должен делать посетитель?",
    type: "chips",
    options: ["Оставить заявку / позвонить", "Записаться онлайн", "Купить товар", "Узнать о компании", "Скачать материал", "Другое"],
  },
  {
    id: "audience",
    title: "Кто ваша аудитория?",
    subtitle: "Опишите типичного клиента",
    type: "textarea",
    placeholder: "Например: Женщины 25–40 лет, Петербург, ищут подарок или хотят побаловать себя. Ценят красоту, натуральность и уют...",
  },
  {
    id: "style",
    title: "Какой стиль вам близок?",
    subtitle: "Выберите близкое направление",
    type: "chips",
    options: ["Минимализм / чистота", "Тёмный / премиум", "Тёплый / уютный", "Яркий / энергичный", "Классика / элегантность", "Современный / технологичный"],
  },
  {
    id: "references",
    title: "Есть референсы или примеры?",
    subtitle: "Ссылки на сайты, которые вам нравятся (необязательно)",
    type: "textarea",
    placeholder: "https://example.com — нравится структура\nhttps://another.com — нравится цветовая гамма\n\nИли просто опишите словами...",
  },
  {
    id: "files",
    title: "Загрузите материалы",
    subtitle: "Логотип, фото, брендбук — всё, что есть (необязательно)",
    type: "upload",
  },
  {
    id: "deadline",
    title: "Когда нужен сайт?",
    subtitle: "Ориентировочные сроки",
    type: "chips",
    options: ["Как можно скорее (до 1 недели)", "В течение 2 недель", "В течение месяца", "Не горит, сделайте хорошо"],
  },
  {
    id: "budget",
    title: "Какой бюджет?",
    subtitle: "Поможет сразу предложить подходящее решение",
    type: "chips",
    options: ["30 000 – 50 000 ₽", "50 000 – 100 000 ₽", "100 000 – 200 000 ₽", "Обсудим индивидуально"],
  },
  {
    id: "extras",
    title: "Что ещё важно?",
    subtitle: "Любые пожелания, вопросы или особенности проекта",
    type: "textarea",
    placeholder: "Например: нужна интеграция с CRM, хочу чтобы заявки приходили в Telegram, есть корпоративный стиль...",
  },
  {
    id: "contact",
    title: "Как с вами связаться?",
    subtitle: "Имя и телефон или Telegram",
    type: "contact",
  },
];

function IntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [sending, setSending] = useState(false);
  const [customChip, setCustomChip] = useState("");

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  // Прогресс: 0% на первом шаге → 100% на последнем
  const progress = (step / (STEPS.length - 1)) * 100;

  function setValue(field: keyof FormData, val: string | string[] | File[]) {
    setData(prev => ({ ...prev, [field]: val }));
  }

  function toggleChip(field: keyof FormData, val: string) {
    const cur = (data[field] as string) || "";
    if (cur === val) setValue(field, "");
    else setValue(field, val);
  }

  function canAdvance() {
    const val = data[current.id as keyof FormData];
    if (current.id === "files" || current.id === "references" || current.id === "extras") return true;
    if (current.id === "contact") return !!(data.name && data.contact);
    if (Array.isArray(val)) return val.length > 0;
    return !!(val as string)?.trim();
  }

  function goNext() { if (canAdvance() && !isLast) setStep(s => s + 1); }
  function goBack() { if (step > 0) setStep(s => s - 1); }

  async function handleSubmit() {
    setSending(true);
    setSubmitError(false);
    try {
      window.open("https://t.me/kklend_bot?start=site", "_blank");
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
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.goldLight, border: `1px solid ${C.gold}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <CheckCircle2 size={28} color={C.gold} />
        </div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(24px,4vw,36px)", color: C.cream, marginBottom: 12 }}>
          Заявка получена
        </h3>
        <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 420, margin: "0 auto" }}>
          Спасибо! Мы свяжемся с вами в течение часа.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); if (isLast) handleSubmit(); else goNext(); }}
      style={{ maxWidth: 640, margin: "0 auto" }}
      aria-label="Форма заявки на сайт"
    >
      {/* Progress bar */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ color: C.muted, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
            Шаг {step + 1} из {STEPS.length}
          </span>
          <span style={{ color: C.gold, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div
          style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div style={{ height: "100%", width: `${progress}%`, background: C.gold, transition: "width 0.4s cubic-bezier(0.23,1,0.32,1)", borderRadius: 2 }} />
        </div>
      </div>

      {/* Question */}
      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(22px,3.5vw,32px)", color: C.cream, marginBottom: 8, lineHeight: 1.2 }}>
          {current.title}
        </h3>
        <p style={{ color: C.muted, fontSize: 15, fontFamily: "Inter, sans-serif" }}>{current.subtitle}</p>
      </div>

      {/* Input area */}
      {current.type === "chips" && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
          {current.options!.map(opt => {
            const active = data[current.id as keyof FormData] === opt;
            return (
              <button key={opt} type="button" onClick={() => toggleChip(current.id as keyof FormData, opt)}
                className="kl-chip"
                aria-pressed={active}
                style={{ padding: "10px 18px", borderRadius: 3, border: `1px solid ${active ? C.gold : "rgba(255,255,255,0.12)"}`, background: active ? C.goldLight : "transparent", color: active ? C.gold : C.muted, fontFamily: "Inter, sans-serif", fontSize: 14, cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.02em" }}>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {current.type === "textarea" && (
        <textarea value={data[current.id as keyof FormData] as string}
          onChange={e => setValue(current.id as keyof FormData, e.target.value)}
          placeholder={current.placeholder}
          rows={5}
          className="kl-field"
          aria-label={current.title}
          style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: 4, padding: "16px", color: C.cream, fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.6, resize: "vertical", outline: "none", marginBottom: 32, boxSizing: "border-box" }}
        />
      )}

      {current.type === "upload" && (
        <div style={{ marginBottom: 32 }}>
          <label style={{ display: "block", border: `2px dashed ${C.border}`, borderRadius: 4, padding: "40px 20px", textAlign: "center", cursor: "pointer", transition: "border-color 0.2s" }}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); const files = Array.from(e.dataTransfer.files); setValue("files", [...data.files, ...files]); }}>
            <input type="file" multiple style={{ display: "none" }}
              onChange={e => { const files = Array.from(e.target.files || []); setValue("files", [...data.files, ...files]); }} />
            <Upload size={28} color={C.muted} style={{ marginBottom: 12 }} />
            <p style={{ color: C.muted, fontFamily: "Inter, sans-serif", fontSize: 14, marginBottom: 4 }}>Перетащите файлы сюда или нажмите</p>
            <p style={{ color: "rgba(136,136,136,0.6)", fontFamily: "Inter, sans-serif", fontSize: 12 }}>PNG, JPG, PDF, AI, SVG — до 20 МБ каждый</p>
          </label>
          {data.files.length > 0 && (
            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {data.files.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, background: C.card, border: `1px solid ${C.border}`, borderRadius: 3, padding: "6px 10px" }}>
                  <span style={{ color: C.cream, fontFamily: "Inter, sans-serif", fontSize: 13 }}>{f.name}</span>
                  <button type="button" onClick={() => setValue("files", data.files.filter((_, j) => j !== i))}
                    aria-label={`Удалить файл ${f.name}`}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
                    <X size={14} color={C.muted} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {current.type === "contact" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
          <input value={data.name} onChange={e => setValue("name", e.target.value)}
            placeholder="Ваше имя"
            className="kl-field"
            aria-label="Ваше имя"
            autoComplete="name"
            style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 4, padding: "14px 16px", color: C.cream, fontFamily: "Inter, sans-serif", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
          <input value={data.contact} onChange={e => setValue("contact", e.target.value)}
            placeholder="+7 (___) ___-__-__ или @username"
            className="kl-field"
            aria-label="Телефон или Telegram"
            autoComplete="tel"
            style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 4, padding: "14px 16px", color: C.cream, fontFamily: "Inter, sans-serif", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
        </div>
      )}

      {/* Navigation */}
      {submitError && (
        <div role="alert" style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(220,80,80,0.1)", border: "1px solid rgba(220,80,80,0.3)", borderRadius: 4, color: "#e08080", fontFamily: "Inter, sans-serif", fontSize: 13 }}>
          Не удалось отправить заявку. Попробуйте ещё раз чуть позже.
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        {step > 0 && (
          <button type="button" onClick={goBack}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "transparent", border: `1px solid rgba(255,255,255,0.12)`, borderRadius: 3, padding: "13px 20px", color: C.muted, fontFamily: "Inter, sans-serif", fontSize: 14, cursor: "pointer", letterSpacing: "0.06em" }}>
            <ChevronLeft size={16} /> НАЗАД
          </button>
        )}

        {!isLast ? (
          <button type="submit" disabled={!canAdvance()}
            style={{ display: "flex", alignItems: "center", gap: 8, background: canAdvance() ? C.gold : "rgba(212,170,90,0.2)", color: canAdvance() ? "#000" : C.muted, border: "none", borderRadius: 3, padding: "14px 28px", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, cursor: canAdvance() ? "pointer" : "not-allowed", letterSpacing: "0.08em", transition: "all 0.2s" }}>
            ДАЛЕЕ <ArrowRight size={16} />
          </button>
        ) : (
          <button type="submit" disabled={!canAdvance() || sending}
            style={{ display: "flex", alignItems: "center", gap: 8, background: canAdvance() ? C.gold : "rgba(212,170,90,0.2)", color: canAdvance() ? "#000" : C.muted, border: "none", borderRadius: 3, padding: "14px 28px", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, cursor: canAdvance() ? "pointer" : "not-allowed", letterSpacing: "0.08em", transition: "all 0.2s" }}>
            {sending ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> ОТПРАВКА...</> : <><Send size={16} /> ОТПРАВИТЬ ЗАЯВКУ</>}
          </button>
        )}

        {(current.type === "upload" || current.id === "references" || current.id === "extras") && !isLast && (
          <button type="button" onClick={goNext}
            style={{ background: "transparent", border: "none", color: C.muted, fontFamily: "Inter, sans-serif", fontSize: 13, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }}>
            пропустить
          </button>
        )}
      </div>
    </form>
  );
}

// ── Email (click to copy, no mailto popup) ────────────────────────────────────
function EmailCopy({ color, fontSize, iconSize }: { color: string; fontSize: number; iconSize: number }) {
  const [copied, setCopied] = useState(false);
  const email = "info@klend.fit";
  function copy() {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(email).then(done).catch(done);
    else done();
  }
  return (
    <button onClick={copy} className="kl-nav-link" title="Нажмите, чтобы скопировать"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, color, fontFamily: "Inter, sans-serif", fontSize, letterSpacing: "0.01em", transition: "color 0.2s" }}>
      <Mail size={iconSize} color={C.gold} /> {copied ? "Скопировано ✓" : email}
    </button>
  );
}

// ── Кот-гид: плавающий маскот, комментирует разделы ───────────────────────────
const CAT_LINES: Record<string, string> = {
  top: "Мяу! Я Кленд-кот 🐾 Листай вниз — покажу, на что мы способны.",
  works: "Это наши лендинги. Каждый вылизан до блеска — прямо как моя шёрстка.",
  services: "Услуги? Бери лендинг под ключ — и не мяукай про вёрстку, всё сделаем.",
  process: "Всего четыре шага до сайта. Я бы и в три уложился, но я кот — мне лень.",
  form: "Дошёл до заявки? Не тяни кота за хвост — заполняй, я прослежу 🐾",
};

function CatGuide() {
  const [msg, setMsg] = useState(CAT_LINES.top);
  const [open, setOpen] = useState(true);
  const [talking, setTalking] = useState(false);
  const msgRef = useRef(CAT_LINES.top);
  msgRef.current = msg;

  function speak() {
    try {
      const synth = (window as any).speechSynthesis;
      if (!synth) return;
      synth.cancel();
      const clean = msgRef.current.replace(/[^\p{L}\p{N}\s.,!?:—-]/gu, "").trim();
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = "ru-RU";
      const ru = synth.getVoices().find((v: SpeechSynthesisVoice) => (v.lang || "").toLowerCase().startsWith("ru"));
      if (ru) u.voice = ru;
      u.rate = 1; u.pitch = 1.1;
      u.onstart = () => setTalking(true);
      u.onend = () => setTalking(false);
      synth.speak(u);
    } catch (e) { /* TTS недоступен — просто молчим */ }
  }

  useEffect(() => {
    const ids = Object.keys(CAT_LINES);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && CAT_LINES[e.target.id]) setMsg(CAT_LINES[e.target.id]);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  if (!open) return null;

  return (
    <div style={{ position: "fixed", right: "clamp(12px,3vw,28px)", bottom: "clamp(12px,3vw,28px)", zIndex: 80, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, maxWidth: "min(300px, 78vw)", pointerEvents: "none" }}>
      <div key={msg} className="kl-cat-bubble" style={{ pointerEvents: "auto", position: "relative", background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "11px 14px", color: C.cream, fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.5, boxShadow: "0 12px 32px rgba(0,0,0,0.45)" }}>
        {msg}
        <div style={{ marginTop: 6, fontSize: 11, color: C.muted }}>🔊 нажми на кота — заговорит</div>
        <button onClick={() => setOpen(false)} aria-label="Закрыть кота"
          style={{ position: "absolute", top: -9, right: -9, width: 22, height: 22, borderRadius: "50%", background: C.card, border: `1px solid ${C.border}`, color: C.muted, cursor: "pointer", fontSize: 13, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>×</button>
      </div>
      <img src="/cat.png" alt="Кленд-кот" className={"kl-cat-svg" + (talking ? " kl-cat-talking" : "")} width={96}
        onClick={speak} title="Нажми — кот заговорит"
        style={{ height: "auto", display: "block", pointerEvents: "auto" }} />
    </div>
  );
}

// ── Ссылка на работу: внешний лендинг (новая вкладка) или внутренний роут ──────
function WorkLink({ href, external, style, children }: { href: string; external?: boolean; style: React.CSSProperties; children: React.ReactNode }) {
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" style={style}>{children}</a>;
  return <Link href={href} style={style}>{children}</Link>;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function KlendMain() {
  const heroRef = useFadeUp();
  const worksRef = useFadeUp();
  const servicesRef = useFadeUp();
  const processRef = useFadeUp();
  const formRef = useFadeUp();

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        /* Заголовки секций не прячутся под фиксированным меню при переходе по якорям */
        section[id] { scroll-margin-top: 84px; }
        .kl-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1); }
        .kl-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .kl-work-card:hover .kl-work-img { transform: scale(1.04); }
        .kl-work-card:hover .kl-work-overlay { opacity: 1; }
        .kl-work-card:hover { border-color: rgba(212,170,90,0.4) !important; }
        .kl-nav-link:hover { color: #d4aa5a !important; }
        .kl-cta:hover { background: #c49a48 !important; }
        .kl-cta-outline:hover { border-color: rgba(212,170,90,0.6) !important; color: #d4aa5a !important; }
        /* Чипы: ховер + видимый фокус */
        .kl-chip:hover { border-color: rgba(212,170,90,0.5) !important; color: #d4aa5a !important; }
        /* Видимый фокус для доступности (клавиатура) */
        .kl-field:focus { border-color: #d4aa5a !important; box-shadow: 0 0 0 3px rgba(212,170,90,0.15); }
        .kl-chip:focus-visible, .kl-cta:focus-visible, .kl-cta-outline:focus-visible,
        .kl-nav-link:focus-visible, button:focus-visible, a:focus-visible {
          outline: 2px solid #d4aa5a; outline-offset: 2px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .kl-dot { width:6px; height:6px; border-radius:50%; background:#d4aa5a; animation: pulse 2s ease-in-out infinite; }
        /* Уважение к системной настройке «уменьшить движение» */
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .kl-fade { transition: none; opacity: 1; transform: none; }
          .kl-dot, [style*="pulse"] { animation: none !important; }
        }
        /* Мобильная навигация: прячем тесные ссылки, оставляем логотип + CTA */
        @media (max-width: 720px) {
          .kl-nav-links { display: none !important; }
        }
        /* Кот-гид */
        @keyframes kl-blink { 0%,92%,100%{transform:scaleY(1)} 96%{transform:scaleY(0.08)} }
        @keyframes kl-tail { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-12deg)} }
        @keyframes kl-cat-bob { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-6px) rotate(2deg)} }
        @keyframes kl-cat-talk { 0%,100%{transform:translateY(0) rotate(0deg)} 25%{transform:translateY(-4px) rotate(-4deg)} 75%{transform:translateY(-4px) rotate(4deg)} }
        @keyframes kl-cat-in { from{opacity:0; transform:translateY(10px) scale(0.96)} to{opacity:1; transform:none} }
        .kl-cat-eyes { animation: kl-blink 4.5s infinite; transform-origin: 60px 58px; }
        .kl-cat-tail { transform-origin: 88px 96px; animation: kl-tail 3.2s ease-in-out infinite; }
        .kl-cat-svg { animation: kl-cat-bob 2.8s ease-in-out infinite; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.45)); cursor: pointer; transition: transform 0.2s; }
        .kl-cat-svg:hover { transform: scale(1.06); }
        .kl-cat-talking { animation: kl-cat-talk 0.45s ease-in-out infinite !important; }
        .kl-cat-bubble { animation: kl-cat-in 0.35s cubic-bezier(0.23,1,0.32,1); }
        @media (prefers-reduced-motion: reduce) {
          .kl-cat-eyes, .kl-cat-tail, .kl-cat-svg, .kl-cat-bubble { animation: none !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}`, padding: "0 clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="#top" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 500, color: C.cream, letterSpacing: "0.04em", textDecoration: "none" }}>
            klend<span style={{ color: C.gold }}>.fit</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(14px,3vw,32px)" }}>
            <div className="kl-nav-links" style={{ display: "flex", alignItems: "center", gap: "clamp(16px,3vw,40px)" }}>
              {[["#works", "РАБОТЫ"], ["#services", "УСЛУГИ"], ["#process", "ПРОЦЕСС"], ["#form", "ЗАЯВКА"]].map(([href, label]) => (
                <a key={href} href={href} className="kl-nav-link"
                  style={{ color: C.muted, fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.1em", textDecoration: "none", transition: "color 0.2s" }}>
                  {label}
                </a>
              ))}
            </div>
            <a href="#form" className="kl-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, background: C.gold, color: "#000", padding: "9px 18px", borderRadius: 3, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textDecoration: "none", transition: "background 0.2s", whiteSpace: "nowrap" }}>
              ОСТАВИТЬ ЗАЯВКУ
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="top" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(20px,5vw,80px) 80px", position: "relative", overflow: "hidden" }}>
        {/* Background grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,170,90,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,170,90,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(212,170,90,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div ref={heroRef} className="kl-fade" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${C.border}`, borderRadius: 2, padding: "6px 14px", marginBottom: 32 }}>
            <div className="kl-dot" />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: C.muted }}>СТУДИЯ ВЕБ-ДИЗАЙНА · ЛЕНДИНГИ И САЙТЫ</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(52px,8vw,110px)", fontWeight: 400, lineHeight: 0.95, marginBottom: 32, letterSpacing: "-0.02em" }}>
            Сайты,<br />
            <em style={{ color: C.gold, fontStyle: "italic" }}>которые</em><br />
            продают.
          </h1>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.muted, maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
            Создаём элегантные лендинги и сайты для бизнеса, который ценит качество. Каждый проект — точное попадание в аудиторию.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#form" className="kl-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.gold, color: "#000", padding: "16px 32px", borderRadius: 3, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textDecoration: "none", transition: "background 0.2s" }}>
              ОСТАВИТЬ ЗАЯВКУ <ArrowRight size={16} />
            </a>
            <a href="#works" className="kl-cta-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid rgba(255,255,255,0.15)`, color: C.muted, padding: "15px 28px", borderRadius: 3, fontFamily: "Inter, sans-serif", fontSize: 13, letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.2s" }}>
              СМОТРЕТЬ РАБОТЫ
            </a>
          </div>

          <div style={{ marginTop: 64, display: "flex", alignItems: "center", gap: "clamp(24px,4vw,48px)", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.1em", marginBottom: 6 }}>СОЗДАНИЕ ЛЕНДИНГА</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 30, color: C.muted, textDecoration: "line-through", textDecorationColor: C.gold, textDecorationThickness: "2px" }}>от 30 000 ₽</span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(44px,7vw,78px)", fontWeight: 500, color: C.gold, lineHeight: 0.9, letterSpacing: "0.01em" }}>БЕСПЛАТНО</span>
              </div>
            </div>
            <div style={{ width: 1, height: 56, background: C.border }} />
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: C.cream }}>3–7 дней</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.08em", marginTop: 2 }}>СРОК РАЗРАБОТКИ</div>
            </div>
          </div>
        </div>

        <a href="#works" aria-label="Листать к работам" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: C.muted, textDecoration: "none" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.12em" }}>ЛИСТАТЬ</span>
          <ChevronDown size={18} style={{ animation: "pulse 2s ease-in-out infinite" }} />
        </a>
      </section>

      {/* ── WORKS ── */}
      <section id="works" style={{ padding: "100px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={worksRef} className="kl-fade">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: C.gold, marginBottom: 12 }}>НАША РАБОТА</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.1 }}>
                  Примеры <em style={{ color: C.gold, fontStyle: "italic" }}>лендингов.</em>
                </h2>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: 24 }}>
              {WORKS.map((w, i) => (
                <div key={w.id} className="kl-work-card"
                  style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 4, overflow: "hidden", transition: "border-color 0.3s", animationDelay: `${i * 0.1}s` }}>
                  {/* Image */}
                  <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                    <img src={w.img} alt={`Превью лендинга: ${w.title}`} className="kl-work-img"
                      loading="lazy" decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)" }} />
                    <div className="kl-work-overlay"
                      style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.6)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}>
                      <WorkLink href={w.href} external={w.external}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.gold, color: "#000", padding: "12px 24px", borderRadius: 3, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textDecoration: "none" }}>
                        ОТКРЫТЬ САЙТ <ArrowRight size={14} />
                      </WorkLink>
                    </div>
                    <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(10,10,10,0.8)", border: `1px solid ${C.border}`, borderRadius: 2, padding: "4px 10px", fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.1em", color: C.gold }}>
                      {w.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontWeight: 500, color: C.cream, marginBottom: 4 }}>
                      {w.title}
                    </h3>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.06em", marginBottom: 12 }}>
                      {w.city}
                    </div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.6, marginBottom: 16 }}>
                      {w.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {w.tags.map(t => (
                        <span key={t} style={{ background: C.goldLight, border: `1px solid ${C.border}`, borderRadius: 2, padding: "3px 8px", fontFamily: "Inter, sans-serif", fontSize: 11, color: C.gold, letterSpacing: "0.04em" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <WorkLink href={w.href} external={w.external}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, color: C.gold, fontFamily: "Inter, sans-serif", fontSize: 13, letterSpacing: "0.06em", textDecoration: "none" }}>
                      ОТКРЫТЬ САЙТ <ArrowRight size={14} />
                    </WorkLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px clamp(20px,5vw,80px)", background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={servicesRef} className="kl-fade">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: C.gold, marginBottom: 12 }}>УСЛУГИ</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 64 }}>
              Что мы <em style={{ color: C.gold, fontStyle: "italic" }}>делаем.</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: 1, background: C.border }}>
              {[
                { n: "01", title: "Лендинг под ключ", desc: "Одностраничный продающий сайт: стратегия, дизайн, тексты, вёрстка." },
                { n: "02", title: "Сайт-визитка", desc: "Многостраничный сайт для бизнеса, агента или личного бренда." },
                { n: "03", title: "Редизайн", desc: "Обновляем устаревший сайт: новый дизайн, современная вёрстка." },
                { n: "04", title: "Дизайн-система", desc: "Единый визуальный язык бренда для всех носителей." },
              ].map(s => (
                <div key={s.n} style={{ background: C.surface, padding: "40px 32px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 48, color: C.border, lineHeight: 1, marginBottom: 20 }}>{s.n}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, color: C.cream, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, padding: "24px 32px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: C.muted }}>
                Создание лендинга под ключ — <span style={{ textDecoration: "line-through", textDecorationColor: C.gold }}>от 30 000 ₽</span> <strong style={{ color: C.gold, fontSize: 18, letterSpacing: "0.02em" }}>бесплатно.</strong> Дизайн, тексты и вёрстка — за наш счёт.
              </p>
              <a href="#form" className="kl-cta"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.gold, color: "#000", padding: "13px 24px", borderRadius: 3, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textDecoration: "none", transition: "background 0.2s", whiteSpace: "nowrap" }}>
                ОБСУДИТЬ ПРОЕКТ <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "100px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={processRef} className="kl-fade">
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: C.gold, marginBottom: 12 }}>КАК МЫ РАБОТАЕМ</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 64 }}>
              Четыре шага <em style={{ color: C.gold, fontStyle: "italic" }}>до результата.</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))", gap: 32 }}>
              {[
                { n: "1", title: "Бриф и стратегия", desc: "Изучаем бизнес, аудиторию и конкурентов. Формируем позиционирование." },
                { n: "2", title: "Дизайн-концепция", desc: "Создаём уникальный визуальный образ: палитра, типографика, ключевые экраны." },
                { n: "3", title: "Вёрстка и разработка", desc: "Чистый код, адаптив под все устройства, подключение аналитики." },
                { n: "4", title: "Запуск и поддержка", desc: "Публикуем сайт, передаём доступы, сопровождаем при необходимости." },
              ].map((p, i) => (
                <div key={p.n} style={{ position: "relative" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, color: C.gold }}>{p.n}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, color: C.cream, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTAKE FORM ── */}
      <section id="form" style={{ padding: "100px clamp(20px,5vw,80px)", background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={formRef} className="kl-fade">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
              {/* Left: info */}
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: C.gold, marginBottom: 12 }}>ЗАЯВКА</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px,4vw,56px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}>
                  Расскажите о <em style={{ color: C.gold, fontStyle: "italic" }}>вашем проекте.</em>
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 40 }}>
                  Ответьте на несколько вопросов — это поможет нам понять задачу и подготовить точное предложение ещё до первого звонка.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: "✓", text: "Бесплатная консультация" },
                    { icon: "✓", text: "Ответим в течение часа" },
                    { icon: "✓", text: "Договор и гарантии" },
                    { icon: "✓", text: "Конфиденциальность данных" },
                  ].map(item => (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.goldLight, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: C.gold, fontSize: 12 }}>{item.icon}</span>
                      </div>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.muted }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}` }}>
                  <div style={{ marginBottom: 8 }}>
                    <EmailCopy color={C.cream} fontSize={15} iconSize={15} />
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.muted }}>Отвечаем ежедневно с 9:00 до 21:00</p>
                </div>
              </div>

              {/* Right: form */}
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 4, padding: "clamp(24px,4vw,48px)" }}>
                <IntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px clamp(20px,5vw,80px)", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, color: C.muted }}>
          klend<span style={{ color: C.gold }}>.fit</span>
        </div>
        <EmailCopy color={C.muted} fontSize={14} iconSize={14} />
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(136,136,136,0.5)", letterSpacing: "0.04em" }}>
          Студия веб-дизайна · Лендинги и сайты
        </div>
      </footer>
    </div>
  );
}
