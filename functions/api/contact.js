// functions/api/contact.js
export async function onRequestPost({ request }) {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    if (!name || !phone || !email || !message) {
      return new Response(JSON.stringify({ error: "Tous les champs sont obligatoires" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const emailBody = `
Nouvelle demande de devis - Riadh Pack

Nom complet : ${name}
Téléphone : ${phone}
Email : ${email}

Message :
${message}
    `.trim();

    const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "commercial@riadhpack.com" }] }],
        from: { email: "no-reply@riadhpack.com", name: "Riadh Pack Website" },
        subject: `Demande de devis - ${name}`,
        content: [{ type: "text/plain", value: emailBody }]
      })
    });

    return new Response(JSON.stringify({ success: res.ok }), {
      status: res.ok ? 200 : 500,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500
    });
  }
}
