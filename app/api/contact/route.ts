import { NextResponse } from "next/server"
import { Resend } from "resend"

// 🔥 Put your API key in .env
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    const data = await resend.emails.send({
      from: "Furrendly <onboarding@resend.dev>", // ⚠️ change later to your domain
      to: ["team@furrendly.com"], // ✅ YOUR EMAIL
      subject: subject,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false })
  }
}