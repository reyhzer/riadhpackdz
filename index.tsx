import { Resend } from "resend";

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    // ✅ CONTACT API ROUTE
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();

        const resend = new Resend(env.RESEND_API_KEY);

        await resend.emails.send({
          from: "Contact <onboarding@resend.dev>",
          to: ["commercial@riadhpack.com"],
          subject: `New message from ${body.name}`,
          html: `
            <h2>New Contact Form Message</h2>
            <p><b>Name:</b> ${body.name}</p>
            <p><b>Email:</b> ${body.email}</p>
            <p><b>Phone:</b> ${body.phone}</p>
            <p><b>Message:</b><br/>${body.message}</p>
          `,
        });

        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" },
        });

      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return new Response("Not found", { status: 404 });
  },
};