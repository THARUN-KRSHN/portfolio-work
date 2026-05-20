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

            {/* Moving Marquee */}
            <div className="relative overflow-hidden w-full">
                <div className="marquee-track">
                    {[...publications, ...publications].map(
                        (pub, i) => (
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
                        )
                    )}
                </div>
            </div>

            {/* Quote */}
            <div className="px-24 mt-24 max-w-5xl">
                <p className="font-display text-5xl font-bold leading-relaxed text-white">
                    "A presence that
                    commands the frame —
                    effortless, magnetic,
                    unmistakable."
                </p>

                <p className="font-ui text-sm tracking-[0.3em] uppercase text-red-500 mt-8">
                    — Vogue Italia, 2024
                </p>
            </div>

            {/* Marquee Animation */}
            <style jsx>{`
                .marquee-track {
                    display: flex;
                    width: max-content;
                    white-space: nowrap;
                    animation: marqueeDesktop 28s linear infinite;
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }

                @keyframes marqueeDesktop {
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