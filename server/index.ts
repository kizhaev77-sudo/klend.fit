import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "2mb" }));

  app.post("/api/lead", async (req, res) => {
    try {
      const d = req.body || {};

      const lines = [
        "🆕 *Новая заявка с klend.fit*",
        "",
        d.businessType ? `*Бизнес:* ${d.businessType}` : "",
        d.businessDesc ? `*Описание:* ${d.businessDesc}` : "",
        d.goal ? `*Цель сайта:* ${d.goal}` : "",
        d.audience ? `*Аудитория:* ${d.audience}` : "",
        d.style ? `*Стиль:* ${d.style}` : "",
        d.references ? `*Референсы:* ${d.references}` : "",
        d.deadline ? `*Сроки:* ${d.deadline}` : "",
        d.budget ? `*Бюджет:* ${d.budget}` : "",
        d.extras ? `*Доп. пожелания:* ${d.extras}` : "",
        "",
        d.name ? `*Имя:* ${d.name}` : "",
        d.contact ? `*Контакт:* ${d.contact}` : "",
      ].filter(Boolean);

      const text = lines.join("\n");

      if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error("Telegram env vars not configured");
        return res.status(500).json({ ok: false, error: "not_configured" });
      }

      const tgResp = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!tgResp.ok) {
        const errBody = await tgResp.text();
        console.error("Telegram API error:", errBody);
        return res.status(502).json({ ok: false, error: "telegram_error" });
      }

      res.json({ ok: true });
    } catch (err) {
      console.error("Lead submit error:", err);
      res.status(500).json({ ok: false, error: "server_error" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
