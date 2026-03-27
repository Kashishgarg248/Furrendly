import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // ✅ Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    // ✅ Send email to your team inbox
    const data = await resend.emails.send({
      from: 'Furrendly <noreply@furrendly.com>', // 🔥 MUST be your verified domain
      to: ['team@furrendly.com'], // 👈 your team inbox
      replyTo: email, // 🔥 reply goes to user
      subject: `🐾 New Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📩 New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>

          <hr />

          <p style="font-size: 12px; color: gray;">
            Reply directly to this email to respond to the user.
          </p>
        </div>
      `,
    })

    console.log('EMAIL SENT:', data)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('EMAIL ERROR:', error)

    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}