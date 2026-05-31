import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware para parsear JSON
  app.use(express.json());

  // API para contacto via Resend
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "Falta configurar RESEND_API_KEY" });
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Resend test domain
        to: ['rafa_h@hotmail.com'],
        subject: `Nuevo contacto de Mundo Equino: ${name}`,
        html: `
          <p><strong>De:</strong> ${name} (${email})</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
