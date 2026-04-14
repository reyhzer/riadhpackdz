import { createServerFn } from '@tanstack/react-start/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
})

export const contactServerFn = createServerFn({ method: 'POST' })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
      await resend.emails.send({
        from: 'Riadh Pack <noreply@riadhpack.com>',
        to: ['commercial@riadhpack.com'],     // ← CHANGE THIS !!!
        replyTo: data.email,
        subject: `New Contact from ${data.name}`,
        html: `
          <h2>New Contact Form</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      })

      return { success: true, message: "Message sent successfully!" }
    } catch (error) {
      console.error(error)
      throw new Error("Failed to send email")
    }
  })