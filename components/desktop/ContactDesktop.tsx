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
            className="bg-black border-t border-neutral-800"
        >
            <div className="px-24 pt-24 pb-16 border-b border-neutral-800">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white block mb-4">
                    05 — Contact
                </span>

                <h2
                    className="font-display font-bold text-white leading-none"
                    style={{
                        fontSize:
                            'clamp(4rem, 7vw, 7rem)',
                    }}
                >
                    {"Let's Work"}

                    <br />

                    <span className="text-red-500">
                        Together.
                    </span>
                </h2>
            </div>

            <div className="max-w-2xl mx-auto px-8 py-20">
                <p className="font-ui text-neutral-400 mb-12 leading-relaxed">
                    For bookings,
                    collaborations, and
                    press enquiries — fill
                    out the form below and
                    we will respond within
                    48 hours.
                </p>

                <ContactForm />
            </div>

            <div className="px-24 py-16 border-t border-neutral-800">
                <h3 className="font-ui text-xs tracking-[0.25em] uppercase text-white mb-8">
                    Or Reach Out Directly
                </h3>

                <div className="flex flex-col divide-y divide-neutral-800">
                    {socials.map(
                        (social) => (
                            <a
                                key={
                                    social.label
                                }
                                href={
                                    social.href
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between py-6 transition-all duration-300"
                            >
                                <span className="font-display text-4xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                    {
                                        social.label
                                    }
                                </span>

                                <span className="font-ui text-sm text-neutral-500 group-hover:text-red-400 transition-colors duration-300">
                                    {
                                        social.note
                                    }
                                </span>

                                <span className="text-white group-hover:text-red-500 transition-colors duration-300 text-2xl">
                                    ↗
                                </span>
                            </a>
                        )
                    )}
                </div>
            </div>

            <div className="px-24 py-8 border-t border-neutral-800 flex justify-between items-center">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-neutral-500">
                    Ashik © 2026
                </span>

                <span className="font-ui text-xs text-neutral-500">
                    Available worldwide
                    for bookings
                </span>
            </div>
        </section>
    )
}