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
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white block mb-10">
                    04 — Press & Features
                </span>

                {/* Moving Marquee */}
                <div className="relative overflow-hidden">
                    <div className="marquee-track-mobile">
                        {[
                            ...publications,
                            ...publications,
                        ].map((pub, i) => (
                            <span
                                key={i}
                                className="font-display font-bold text-red-500"
                                style={{
                                    fontSize:
                                        'clamp(2.5rem, 11vw, 4rem)',
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
                <blockquote className="mt-16">
                    <p className="font-display text-3xl font-bold leading-relaxed text-white">
                        "A presence that
                        commands the frame —
                        effortless,
                        magnetic,
                        unmistakable."
                    </p>

                    <footer className="font-ui text-xs tracking-[0.3em] uppercase text-red-500 mt-6">
                        — Vogue Italia,
                        2024
                    </footer>
                </blockquote>
            </div>

            {/* Animation */}
            <style jsx>{`
                .marquee-track-mobile {
                    display: flex;
                    width: max-content;
                    white-space: nowrap;
                    animation: marqueeMobile 18s linear infinite;
                }

                @keyframes marqueeMobile {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    )
}