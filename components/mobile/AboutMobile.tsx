'use client'

import { CldImage } from 'next-cloudinary'
import { aboutImage } from '@/lib/cloudinary'

export default function AboutMobile() {
    return (
        <section
            id="about"
            className="bg-black"
            style={{
                paddingBottom: '72px',
            }}
        >
            {/* Image */}
            <div
                className="relative w-full"
                style={{
                    height: '70svh',
                }}
            >
                <CldImage
                    src={
                        aboutImage.publicId
                    }
                    alt={aboutImage.alt}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="px-6 py-10">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-neutral-500 block mb-4">
                    02 — About
                </span>

                <h2
                    className="font-display font-bold leading-none mb-8"
                    style={{
                        fontSize:
                            'clamp(3rem, 12vw, 5rem)',
                    }}
                >
                    <span className="block text-white">
                        Ashik K F
                    </span>
                </h2>

                <p className="font-ui text-lg leading-relaxed text-neutral-300 mb-6">
                    Ashik K F is a
                    professional model
                    working across editorial,
                    runway, and commercial
                    projects.
                </p>

                <p className="font-ui text-sm leading-relaxed text-neutral-500">
                    Available worldwide for
                    bookings and
                    collaborations.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-neutral-800">
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
                    ].map(
                        ({
                            label,
                            value,
                        }) => (
                            <div key={label}>
                                <p className="font-ui text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
                                    {label}
                                </p>

                                <p className="font-display text-2xl font-bold text-red-500">
                                    {value}
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}