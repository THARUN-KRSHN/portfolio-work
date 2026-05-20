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

export default function PressMobile() {
    return (
        <section
            id="press"
            className="bg-black border-t border-neutral-800 overflow-hidden"
            style={{
                paddingBottom:
                    'calc(72px + 3rem)',
            }}
        >
            <div className="px-6 py-14">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white block mb-8">
                    04 — Press & Features
                </span>

                {/* Marquee */}
                <div className="overflow-hidden mb-12">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {[
                            ...publications,
                            ...publications,
                        ].map((pub, i) => (
                            <span
                                key={i}
                                className="font-display font-bold text-red-500"
                                style={{
                                    fontSize:
                                        'clamp(2rem, 10vw, 4rem)',
                                    marginRight:
                                        '3rem',
                                }}
                            >
                                {pub}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <blockquote>
                    <p className="font-display text-2xl font-bold leading-relaxed text-white">
                        "A presence that
                        commands the frame —
                        effortless,
                        magnetic,
                        unmistakable."
                    </p>

                    <footer className="font-ui text-xs tracking-[0.25em] uppercase text-red-500 mt-5">
                        — Vogue Italia,
                        2024
                    </footer>
                </blockquote>
            </div>
        </section>
    )
}