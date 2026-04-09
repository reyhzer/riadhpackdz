// functions/api/contact.js
export async function onRequestPost({ request }) {
  try {
   const data = await request.json();

const name = data.name?.trim() || '';
const phone = data.phone?.trim() || '';
const email = data.email?.trim() || '';
const message = data.message?.trim() || '';

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
