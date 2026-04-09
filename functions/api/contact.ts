// functions/api/contact.ts
export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    if (!name || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont obligatoires" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailBody = `
Nouvelle demande de devis - Riadh Pack

Nom complet : ${name}
Téléphone     : ${phone}
Email         : ${email}

Besoin / Message :
${message}

---
Envoyé depuis le site Riadh Pack
Date : ${new Date().toLocaleString('fr-DZ')}
    `.trim();

    const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        personalizations: [
          { to: [{ email: "commercial@riadhpack.com", name: "Riadh Pack Commercial" }] }
        ],
        from: {
          email: "no-reply@riadhpack.com",
          name: "Site Web Riadh Pack",
        },
        subject: `Demande de devis - ${name}`,
        content: [
          {
            type: "text/plain",
            value: emailBody,
          },
        ],
      }),
    });

    if (mailResponse.ok) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Erreur d'envoi" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Une erreur est survenue" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
