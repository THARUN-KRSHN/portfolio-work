'use client'



const publications = [
    'Creative Direction',
    'Visual Stories',
    'Modern Editorial',
    'Luxury Fashion',
    'Runway Motion',
    'Minimal Aesthetic',
    'Studio Culture',
    'Bold Expression',
]

export default function PressDesktop() {
    return (
        <section
            id="press"
            className="relative min-h-screen overflow-hidden border-t border-neutral-800 bg-black py-28"
        >
            {/* Background */}

            {/* Content */}
            <div className="relative z-10">
                {/* Heading */}
                <div className="mb-16 px-24">
                    <span className="font-ui text-xs uppercase tracking-[0.25em] text-white">
                        04 — Press & Features
                    </span>
                </div>

                {/* Marquee */}
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="marquee-track flex">
                        {[...publications, ...publications].map((pub, i) => (
                            <span
                                key={i}
                                className="font-display font-bold text-red-500"
                                style={{
                                    fontSize: 'clamp(3rem,6vw,6rem)',
                                    marginRight: '5rem',
                                }}
                            >
                                {pub}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <div className="mt-24 max-w-5xl px-24">
                    <p className="font-display text-5xl font-bold leading-[1.15] text-white">
                        Style is confidence,
                        movement and presence.
                    </p>

                    <p className="mt-8 font-ui text-sm uppercase tracking-[0.3em] text-red-500">
                        Portfolio Statement
                    </p>
                </div>
            </div>

            <style jsx>{`
                .marquee-track {
                    width: max-content;
                    animation: marqueeDesktop 28s linear infinite;
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