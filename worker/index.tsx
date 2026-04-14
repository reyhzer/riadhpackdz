export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    // CORS (important for production)
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }

    // Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders })
    }

    // API route
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const data = await request.json()

        console.log("Contact form:", data)

        return new Response(
          JSON.stringify({ success: true }),
          {
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        )
      } catch {
        return new Response(
          JSON.stringify({ success: false, error: "Invalid JSON" }),
          {
            status: 400,
            headers: corsHeaders,
          }
        )
      }
    }

    return new Response("Not found", { status: 404 })
  },
}