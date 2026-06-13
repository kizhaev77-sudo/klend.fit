/**
 * /api/lead — приём заявки с формы klend.space и отправка в Telegram-бот.
 *
 * КУДА ПОЛОЖИТЬ:
 *   Vercel:  положите этот файл как  /api/lead.js  в корне проекта.
 *   Netlify: см. блок NETLIFY внизу.
 *
 * БЕЗОПАСНОСТЬ:
 *   Токен бота НЕ хранится в коде — берётся из переменной окружения
 *   TELEGRAM_BOT_TOKEN. Так он не попадёт в публичный исходник сайта.
 *
 * Переменные окружения (задать в панели хостинга):
 *   TELEGRAM_BOT_TOKEN  — токен от @BotFather
 *   TELEGRAM_CHAT_ID    — ваш numeric chat_id (куда слать заявки)
 */

const FIELD_LABELS = {
  businessType: "Бизнес / ниша",
  businessDesc: "Описание бизнеса",
  goal: "Цель сайта",
  audience: "Аудитория",
  style: "Стиль",
  references: "Референсы",
  deadline: "Сроки",
  budget: "Бюджет",
  extras: "Доп. пожелания",
  name: "Имя",
  contact: "Контакт",
};

function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildMessage(data) {
  const lines = ["<b>🟡 Новая заявка с klend.space</b>", ""];
  for (const key of Object.keys(FIELD_LABELS)) {
    const val = data[key];
    if (val && String(val).trim()) {
      lines.push(`<b>${FIELD_LABELS[key]}:</b> ${escapeHtml(val)}`);
    }
  }
  lines.push("", `<i>${new Date().toLocaleString("ru-RU")}</i>`);
  return lines.join("\n");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, error: "Telegram env vars not configured" });
  }

  let data = req.body;
  if (typeof data === "string") {
    try { data = JSON.parse(data); } catch { data = {}; }
  }
  if (!data || typeof data !== "object") {
    return res.status(400).json({ ok: false, error: "Bad payload" });
  }

  try {
    const tgResp = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: buildMessage(data),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    const tgJson = await tgResp.json().catch(() => ({}));
    if (!tgResp.ok || tgJson.ok === false) {
      console.error("Telegram error:", tgJson);
      return res.status(502).json({ ok: false, error: "Telegram rejected the message" });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Lead handler failed:", e);
    return res.status(500).json({ ok: false, error: "Send failed" });
  }
}

/*
 * NETLIFY-вариант: создайте файл  netlify/functions/lead.js :
 *
 *   exports.handler = async (event) => {
 *     if (event.httpMethod !== "POST")
 *       return { statusCode: 405, body: "Method not allowed" };
 *     const data = JSON.parse(event.body || "{}");
 *     const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
 *     const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
 *     // ... тот же buildMessage + fetch к api.telegram.org ...
 *     return { statusCode: 200, body: JSON.stringify({ ok: true }) };
 *   };
 *
 * и в netlify.toml добавьте редирект:
 *   [[redirects]]
 *   from = "/api/lead"
 *   to = "/.netlify/functions/lead"
 *   status = 200
 */
