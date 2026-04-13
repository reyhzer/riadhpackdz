export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    // Basic validation
    if (!data.name || !data.email || !data.product || !data.quantity) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields (name, email, product, quantity)' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = context.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in Cloudflare environment variables');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Main email to you (commercial@riadhpack.com)
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Riadh Pack <commercial@riadhpack.com>',
        to: ['commercial@riadhpack.com'],
        subject: 'Nouvelle demande de devis - Riadh Pack',
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><b>Nom / Entreprise:</b> ${data.name}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Téléphone:</b> ${data.phone || 'Non fourni'}</p>
          <p><b>Produit:</b> ${data.product}</p>
          <p><b>Quantité:</b> ${data.quantity}</p>
          <p><b>Personnalisation:</b> ${data.custom || 'Aucune'}</p>
          <p><b>Message:</b> ${data.message || 'Aucun message supplémentaire'}</p>
          <hr>
          <p><small>Envoyé via le formulaire du site web</small></p>
        `,
      }),
    });

    // Auto-reply to the customer
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Riadh Pack <commercial@riadhpack.com>',
        to: [data.email],
        subject: 'Votre demande de devis a été reçue - Riadh Pack',
        html: `
          <h2>Merci ${data.name} !</h2>
          <p>Nous avons bien reçu votre demande de devis.</p>
          <p>Notre équipe commerciale vous répondra dans les plus brefs délais (sous 24h maximum).</p>
          
          <h3>Résumé de votre demande :</h3>
          <ul>
            <li><b>Produit :</b> ${data.product}</li>
            <li><b>Quantité :</b> ${data.quantity}</li>
            ${data.custom ? `<li><b>Personnalisation :</b> ${data.custom}</li>` : ''}
          </ul>

          <p>En attendant notre réponse, n'hésitez pas à nous contacter sur WhatsApp.</p>
          <br/>
          <p>Cordialement,<br/><strong>L'équipe RIADH PACK</strong></p>
        `,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Emails sent successfully' }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}