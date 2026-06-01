import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: "Falta configurar RESEND_API_KEY" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Cambia esto por tu dominio verificado en Resend
      to: ['rafa_h@hotmail.com'],
      subject: `Nuevo contacto de Mundo Equino: ${name}`,
      html: `
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Celular:</strong> ${phone || 'No proporcionado'}</p>
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
}
