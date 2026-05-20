'use client'

import { CldImage } from 'next-cloudinary'
import { aboutImage } from '@/lib/cloudinary'

export default function AboutMobile() {
    return (
        <section
            id="about"
            className="bg-bg-light"
            style={{ paddingBottom: '72px' }}
        >
            {/* Portrait */}
            <div
                className="relative w-full"
                style={{ height: '70svh' }}
            >
                <CldImage
                    src={aboutImage.publicId}
                    alt={aboutImage.alt}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                />
            </div>

            {/* Text */}
            <div
                className="px-6 py-10"
                style={{ color: '#0A0A0A' }}
            >
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted block mb-4">
                    About
                </span>

                <h2
                    className="font-display font-bold leading-tight mb-6"
                    style={{
                        fontSize:
                            'clamp(2.5rem, 10vw, 4rem)',
                        color: '#0A0A0A',
                    }}
                >
                    The Face
                    <br />

                    <span
                        style={{
                            color: 'var(--accent-red)',
                        }}
                    >
                        Behind
                    </span>

                    <br />
                    the Frame.
                </h2>

                <p
                    className="font-ui text-base leading-relaxed mb-4"
                    style={{ color: '#444' }}
                >
                    Ashik Krishna is a professional
                    model working across editorial,
                    runway, and commercial projects.
                </p>

                <p
                    className="font-ui text-sm leading-relaxed"
                    style={{ color: '#666' }}
                >
                    Available worldwide for bookings
                    and collaborations.
                </p>

                {/* Stats */}
                <div
                    className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t"
                    style={{ borderColor: '#DDD' }}
                >
                    {[
                        {
                            label: 'Height',
                            value: `6'1"`,
                        },
                        {
                            label: 'Eyes',
                            value: 'Brown',
                        },
                        {
                            label: 'Hair',
                            value: 'Dark',
                        },
                        {
                            label: 'Based',
                            value: 'India',
                        },
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <p className="font-ui text-xs tracking-widest uppercase text-text-muted mb-1">
                                {label}
                            </p>

                            <p
                                className="font-display text-2xl font-bold"
                                style={{
                                    color: '#0A0A0A',
                                }}
                            >
                                {value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}