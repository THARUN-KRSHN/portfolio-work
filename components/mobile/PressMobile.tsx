'use client'

import { CldImage } from 'next-cloudinary'
import { pressImageBg } from '@/lib/cloudinary'

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

export default function PressMobile() {
    return (
        <section
            id="press"
            className="relative overflow-hidden border-t border-neutral-800 bg-black"
            style={{
                paddingBottom: 'calc(72px + 3rem)',
            }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 scale-125">
                    <CldImage
                        src={pressImageBg.publicId}
                        alt={pressImageBg.alt}
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20 blur-[90px] scale-110"
                    />
                </div>

                <div className="absolute inset-0 bg-black/80" />

                <div className="absolute inset-0 bg-red-500/5" />
            </div>

            <div className="relative z-10 px-6 py-14">
                {/* Heading */}
                <span className="mb-10 block font-ui text-xs uppercase tracking-[0.25em] text-white">
                    04 — Press & Features
                </span>

                {/* Marquee */}
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="marquee-track-mobile flex">
                        {[...publications, ...publications].map((pub, i) => (
                            <span
                                key={i}
                                className="font-display font-bold text-red-500"
                                style={{
                                    fontSize: 'clamp(2.5rem,11vw,4rem)',
                                    marginRight: '3rem',
                                }}
                            >
                                {pub}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <div className="mt-16">
                    <p className="font-display text-3xl font-bold leading-[1.3] text-white">
                        Every frame tells
                        a powerful story.
                    </p>

                    <p className="mt-6 font-ui text-xs uppercase tracking-[0.3em] text-red-500">
                        Creative Direction
                    </p>
                </div>
            </div>

            <style jsx>{`
                .marquee-track-mobile {
                    width: max-content;
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