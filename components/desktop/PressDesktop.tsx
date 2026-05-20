'use client'

const publications = [
    'Vogue',
    "Harper's Bazaar",
    'GQ',
    'Elle',
    'Vanity Fair',
    'Esquire',
    'i-D',
    'Dazed',
]

export default function PressDesktop() {
    return (
        <section
            id="press"
            className="py-24 bg-black border-t border-neutral-800 overflow-hidden"
        >
            <div className="px-24 mb-16">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white hover:text-red-500 transition-colors duration-300">
                    04 — Press & Features
                </span>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[
                        ...publications,
                        ...publications,
                    ].map((pub, i) => (
                        <span
                            key={i}
                            className="font-display font-bold text-red-500 hover:text-white transition-colors duration-300"
                            style={{
                                fontSize:
                                    'clamp(3rem, 6vw, 6rem)',
                                marginRight:
                                    '5rem',
                            }}
                        >
                            {pub}
                        </span>
                    ))}
                </div>
            </div>

            {/* Quote */}
            <div className="px-24 mt-20 max-w-4xl">
                <p className="font-display text-4xl font-bold leading-relaxed text-white">
                    "A presence that
                    commands the frame —
                    effortless, magnetic,
                    unmistakable."
                </p>

                <p className="font-ui text-sm tracking-[0.25em] uppercase text-red-500 mt-6">
                    — Vogue Italia, 2024
                </p>
            </div>
        </section>
    )
}