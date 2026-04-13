import { Resend } from 'resend';

export async function onRequestPost(context)
  const resend = new Resend('re_7LAqXp7E_5PASxQTdc1d1nCCdwT6ZNYJ5');

  try {
    const data = await context.request.json();

    // ✅ EMAIL TO YOU
    await resend.emails.send({
      from: 'Riadh Pack <commercial@riadhpack.com>',
      to: ['commercial@riadhpack.com'],
      subject: 'Nouvelle demande de devis - Riadh Pack',
      html: `
        <h2>Nouvelle demande de devis</h2>

        <p><b>Nom:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Téléphone:</b> ${data.phone}</p>
        <p><b>Produit:</b> ${data.product}</p>
        <p><b>Quantité:</b> ${data.quantity}</p>
        <p><b>Personnalisation:</b> ${data.custom}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    // ✅ AUTO REPLY TO CLIENT
    await resend.emails.send({
      from: 'Riadh Pack <commercial@riadhpack.com>',
      to: [data.email],
      subject: 'Votre demande a été reçue - Riadh Pack',
      html: `
        <h2>Merci pour votre demande</h2>

        <p>Bonjour ${data.name},</p>

        <p>
          Nous avons bien reçu votre demande de devis.
          Notre équipe vous répondra sous 24h.
        </p>

        <p><b>Résumé :</b></p>
        <ul>
          <li>Produit: ${data.product}</li>
          <li>Quantité: ${data.quantity}</li>
        </ul>

        <br/>

        <p>Cordialement,<br/>RIADH PACK</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
