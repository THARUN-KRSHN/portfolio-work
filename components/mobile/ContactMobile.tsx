'use client'

import ContactForm from '@/components/shared/ContactForm'

const socials = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/',
    },
    {
        label: 'Agency',
        href: '#',
    },
]

export default function ContactMobile() {
    return (
        <section
            id="contact"
            className="bg-black border-t border-neutral-800"
            style={{
                paddingBottom:
                    'calc(72px + 2rem)',
            }}
        >
            <div className="px-6 pt-14 pb-10">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white block mb-4">
                    05 — Contact
                </span>

                <h2
                    className="font-display font-bold text-white leading-none mb-4"
                    style={{
                        fontSize:
                            'clamp(3rem, 12vw, 5rem)',
                    }}
                >
                    {"Let's Work"}

                    <br />

                    <span className="text-red-500">
                        Together.
                    </span>
                </h2>

                <p className="font-ui text-sm text-neutral-400 leading-relaxed">
                    Fill out the form
                    below and we will
                    respond within 48
                    hours.
                </p>
            </div>

            <div className="px-6 pb-12 border-b border-neutral-800">
                <ContactForm />
            </div>

            <div className="px-6 py-10 border-b border-neutral-800">
                <h3 className="font-ui text-xs tracking-[0.25em] uppercase text-white mb-5">
                    Follow
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
                                className="group flex items-center justify-between py-5"
                            >
                                <span className="font-display text-3xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                    {
                                        social.label
                                    }
                                </span>

                                <span className="text-white text-xl group-hover:text-red-500 transition-colors duration-300">
                                    ↗
                                </span>
                            </a>
                        )
                    )}
                </div>
            </div>

            <div className="px-6 py-6 text-center">
                <p className="font-ui text-xs text-neutral-500 tracking-[0.2em] uppercase">
                    Ashik © 2026 ·
                    Available worldwide
                </p>
            </div>
        </section>
    )
}