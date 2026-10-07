import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Recibir los datos del frontend
    const data = await request.json();
    const { nombre, empresa, email, telefono } = data;

    // 2. Configurar la conexión SMTP usando tus credenciales del .env
    // Nota: Astro usa import.meta.env en lugar del clásico process.env
    const transporter = nodemailer.createTransport({
      host: import.meta.env.MAIL_HOST,
      port: Number(import.meta.env.MAIL_PORT),
      secure: true, // true porque usamos el puerto 465
      auth: {
        user: import.meta.env.MAIL_USERNAME,
        pass: import.meta.env.MAIL_PASSWORD,
      },
    });

    // 3. Estructurar el correo que te llegará
    const mailOptions = {
      from: import.meta.env.MAIL_USERNAME, 
      to: import.meta.env.MAIL_USERNAME, // Te lo envías a ti mismo
      subject: `Nueva solicitud Beta Lapsus - ${empresa}`,
      html: `
        <h2>Nuevo registro para el programa Beta</h2>
        <ul>
          <li><strong>Nombre:</strong> ${nombre}</li>
          <li><strong>Empresa:</strong> ${empresa}</li>
          <li><strong>Correo:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${telefono}</li>
        </ul>
      `,
    };


    // 4. Enviar el correo en segundo plano (QUITAMOS EL AWAIT)
    transporter.sendMail(mailOptions).catch(err => console.error("Error SMTP:", err));

    // 5. Responder al frontend inmediatamente (tardará milisegundos)
    return new Response(JSON.stringify({ message: "Solicitud recibida al instante" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(JSON.stringify({ message: "Hubo un error al enviar el correo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};