'use client'

import ContactForm from '@/components/shared/ContactForm'

const socials = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/',
        note: 'Behind the scenes and daily life.',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/',
        note: 'Professional enquiries welcome.',
    },
    {
        label: 'Agency',
        href: '#',
        note: 'Direct booking through representation.',
    },
]

export default function ContactDesktop() {
    return (
        <section
            id="contact"
            className="bg-bg-primary border-t border-border"
        >
            <div className="px-24 pt-24 pb-16 border-b border-border">
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted block mb-4">
                    05 — Contact
                </span>

                <h2
                    className="font-display font-bold text-text-primary leading-none"
                    style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
                >
                    {"Let's Work"}
                    <br />

                    <span style={{ color: 'var(--accent-red)' }}>
                        Together.
                    </span>
                </h2>
            </div>

            <div className="max-w-2xl mx-auto px-8 py-20">
                <p className="font-ui text-sm text-text-muted mb-12 leading-relaxed">
                    For bookings, collaborations, and press enquiries —
                    fill out the form below and we will respond within
                    48 hours.
                </p>

                <ContactForm />
            </div>

            <div className="px-24 py-16 border-t border-border">
                <h3 className="font-ui text-xs tracking-widest uppercase text-text-muted mb-8">
                    Or Reach Out Directly
                </h3>

                <div className="flex flex-col divide-y divide-border">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between py-6 hover:pl-2 transition-all duration-300"
                        >
                            <span className="font-display text-3xl font-bold text-text-primary group-hover:text-accent-red transition-colors duration-300">
                                {social.label}
                            </span>

                            <span className="font-ui text-sm text-text-muted">
                                {social.note}
                            </span>

                            <span className="text-text-muted group-hover:text-accent-red transition-colors">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="px-24 py-8 border-t border-border flex justify-between items-center">
                <span className="font-ui text-xs text-text-muted tracking-widest uppercase">
                    Ashik © 2026
                </span>

                <span className="font-ui text-xs text-text-muted">
                    Available for bookings worldwide
                </span>
            </div>
        </section>
    )
}