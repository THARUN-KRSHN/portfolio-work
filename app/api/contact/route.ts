import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const record = rateLimit.get(ip)

    if (!record || now > record.resetAt) {
        rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
        return true
    }

    if (record.count >= 3) return false

    record.count++
    return true
}

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

        // Rate limit check
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            )
        }

        const body = await request.json()

        // Server-side validation
        const result = contactSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid form data', details: result.error.flatten() },
                { status: 400 }
            )
        }

        const { name, email, enquiryType, message, honeypot } = result.data

        // Honeypot check — silent reject
        if (honeypot && honeypot.length > 0) {
            return NextResponse.json({ success: true }) // fool bots
        }

        const contactEmail = process.env.CONTACT_EMAIL!

        // Send notification to client
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: contactEmail,
            replyTo: email,
            subject: `[${enquiryType}] New enquiry from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px;">
          <h2 style="color: #C41E1E; margin-bottom: 24px;">New Portfolio Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; font-size: 13px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Enquiry Type</td>
              <td style="padding: 8px 0;">${enquiryType}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <p style="color: #666; font-size: 13px; margin-bottom: 8px;">Message</p>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
        })

        // Send auto-reply to enquirer
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: email,
            subject: 'We received your message',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px;">
          <h2 style="color: #C41E1E;">Thank you, ${name}.</h2>
          <p style="color: #444; line-height: 1.7;">
            Your message has been received. We'll get back to you within 48 hours.
          </p>
          <p style="color: #999; font-size: 13px; margin-top: 32px;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `,
        })

        return NextResponse.json({ success: true }, { status: 200 })

    } catch (error) {
        console.error('Contact API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}