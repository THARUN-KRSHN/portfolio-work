'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import clsx from 'clsx'

const inputClass = `
  w-full bg-transparent border-b border-border text-text-primary font-ui text-sm
  py-3 placeholder:text-text-muted focus:outline-none focus:border-accent-red
  transition-colors duration-300
`

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setLoading(true)
        setServerError('')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                setSubmitted(true)
            } else if (res.status === 429) {
                setServerError('Too many requests. Please try again later.')
            } else {
                setServerError('Something went wrong. Please try again.')
            }
        } catch {
            setServerError('Network error. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="py-16 text-center">
                <p className="font-display text-4xl font-bold text-text-primary mb-4">Thank you.</p>
                <p className="font-ui text-text-muted text-sm">We'll be in touch within 48 hours.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
            {/* Honeypot — hidden from humans */}
            <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} aria-hidden="true" />

            <div>
                <input
                    {...register('name')}
                    placeholder="Your Name"
                    className={inputClass}
                    aria-label="Your name"
                />
                {errors.name && <p className="text-accent-red text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <input
                    {...register('email')}
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                    aria-label="Email address"
                />
                {errors.email && <p className="text-accent-red text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <select
                    {...register('enquiryType')}
                    className={clsx(inputClass, 'cursor-pointer')}
                    aria-label="Enquiry type"
                    defaultValue=""
                >
                    <option value="" disabled>Enquiry Type</option>
                    <option value="Booking">Booking</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Press">Press</option>
                    <option value="Other">Other</option>
                </select>
                {errors.enquiryType && <p className="text-accent-red text-xs mt-1">{errors.enquiryType.message}</p>}
            </div>

            <div>
                <textarea
                    {...register('message')}
                    placeholder="Your Message"
                    rows={5}
                    className={clsx(inputClass, 'resize-none')}
                    aria-label="Your message"
                />
                {errors.message && <p className="text-accent-red text-xs mt-1">{errors.message.message}</p>}
            </div>

            {serverError && (
                <p className="text-accent-red text-sm">{serverError}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-4 bg-accent-red text-white font-ui text-sm tracking-widest uppercase
          hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}