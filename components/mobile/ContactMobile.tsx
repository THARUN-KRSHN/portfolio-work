'use client'

import ContactForm from '@/components/shared/ContactForm'

const socials = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/ashik.kf/',
    },
    {
        label: 'LinkedIn',
        href: 'linkedin.com/in/ashik-k-f-26037532b',
    },
    {
        label: 'Agency',
        href: 'https://www.instagram.com/magictailsfashion/',
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

            {/* FORM */}
            <div className="px-6 pb-12 border-b border-neutral-800">
                <div
                    className="
                    [&_input]:bg-transparent
                    [&_input]:border-0
                    [&_input]:border-b
                    [&_input]:border-red-500
                    [&_input]:text-white
                    [&_input]:placeholder:text-neutral-500
                    [&_input]:focus:ring-0
                    [&_input]:focus:border-red-500
                    [&_input]:outline-none
                    [&_input]:pb-4

                    [&_textarea]:bg-transparent
                    [&_textarea]:border-0
                    [&_textarea]:border-b
                    [&_textarea]:border-red-500
                    [&_textarea]:text-white
                    [&_textarea]:placeholder:text-neutral-500
                    [&_textarea]:focus:ring-0
                    [&_textarea]:focus:border-red-500
                    [&_textarea]:outline-none

                    [&_select]:bg-black
                    [&_select]:text-white
                    [&_select]:border-0
                    [&_select]:border-b
                    [&_select]:border-red-500
                    [&_select]:focus:ring-0
                    [&_select]:focus:border-red-500
                    [&_select]:outline-none
                    [&_option]:bg-black
                    [&_option]:text-white

                    [&_label]:text-white
                    [&_.error]:hidden
                "
                >
                    <ContactForm />
                </div>
            </div>

            {/* SOCIALS */}
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

            {/* FOOTER */}
            <div className="px-6 py-6 text-center">
                <p className="font-ui text-xs text-neutral-500 tracking-[0.2em] uppercase">
                    Ashik © 2026 ·
                    Available worldwide
                </p>
            </div>
        </section>
    )
}