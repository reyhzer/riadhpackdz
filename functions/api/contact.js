export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    // ✅ EMAIL TO YOU
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_h4ZwWKCq_NXktUctqz7xU8MpXaHFLh8G3',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    });

    // ✅ AUTO REPLY
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_7LAqXp7E_5PASxQTdc1d1nCCdwT6ZNYJ5',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}