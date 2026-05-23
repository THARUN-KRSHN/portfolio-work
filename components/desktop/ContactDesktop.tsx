'use client'

import { useState } from 'react'
import { CldImage } from 'next-cloudinary'
import ContactForm from '@/components/shared/ContactForm'
import { contactImage } from '@/lib/cloudinary'

const socials = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/ashik.kf/',
        note: 'Behind the scenes and daily life.',
        image:
            'WhatsApp_Image_2026-05-11_at_10.09.57_PM_miafp6',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/',
        note: 'Professional enquiries welcome.',
        image:
            'WhatsApp_Image_2026-05-11_at_10.10.11_PM_t135v5',
    },
    {
        label: 'Agency',
        href: '#',
        note: 'Direct booking through representation.',
        image:
            'WhatsApp_Image_2026-05-11_at_10.10.12_PM_inrwlz',
    },
]

export default function ContactDesktop() {
    const [hoveredImage, setHoveredImage] =
        useState<string | null>(null)

    return (
        <section
            id="contact"
            className="relative bg-black border-t border-neutral-800 overflow-hidden"
        >
            {/* Floating Hover Image */}
            <div
                className={`
                    fixed top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    pointer-events-none z-50
                    transition-all duration-500
                    ${hoveredImage
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }
                `}
            >
                {hoveredImage && (
                    <div className="relative w-[320px] h-[420px] overflow-hidden  border border-red-500/30 ">
                        <CldImage
                            src={hoveredImage}
                            alt="Preview"
                            fill
                            className="object-cover"
                            sizes="320px"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                )}
            </div>

            {/* HEADER */}
            <div className="px-24 pt-24 pb-16 border-b border-neutral-800">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white block mb-4">
                    05 — Contact
                </span>

                <h2
                    className="font-display font-bold text-white leading-none"
                    style={{
                        fontSize:
                            'clamp(4rem, 7vw, 7rem)',
                    }}
                >
                    {"Let's Work"}

                    <br />

                    <span className="text-red-500">
                        Together.
                    </span>
                </h2>
            </div>

            {/* SPLIT LAYOUT */}
            <div className="grid grid-cols-2 min-h-screen">
                {/* LEFT IMAGE */}
                <div className="relative overflow-hidden border-r border-neutral-800">
                    <CldImage
                        src={
                            contactImage.publicId
                        }
                        alt={
                            contactImage.alt
                        }
                        fill
                        priority
                        className="object-cover"
                        sizes="50vw"
                    />

                    {/* overlays */}
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    {/* vertical lines */}
                    <div className="absolute inset-0 flex justify-between px-24 opacity-20">
                        <div className="w-px bg-white h-full" />
                        <div className="w-px bg-white h-full" />
                        <div className="w-px bg-white h-full" />
                    </div>

                    {/* side number */}
                </div>

                {/* RIGHT FORM */}
                <div className="flex items-center justify-center px-20 py-24">
                    <div className="w-full max-w-xl">
                        <p className="font-ui text-neutral-300 text-xl leading-relaxed mb-16">
                            For bookings,
                            collaborations,
                            and press
                            enquiries —
                            fill out the form
                            below and we
                            will respond
                            within 48 hours.
                        </p>

                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="px-24 py-16 border-t border-neutral-800">
                <h3 className="font-ui text-xs tracking-[0.25em] uppercase text-white mb-8">
                    Or Reach Out Directly
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
                                onMouseEnter={() =>
                                    setHoveredImage(
                                        social.image
                                    )
                                }
                                onMouseLeave={() =>
                                    setHoveredImage(
                                        null
                                    )
                                }
                                className="group flex items-center justify-between py-8 transition-all duration-300"
                            >
                                <span className="font-display text-5xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                    {
                                        social.label
                                    }
                                </span>

                                <span className="font-ui text-base text-neutral-500 group-hover:text-red-400 transition-colors duration-300">
                                    {
                                        social.note
                                    }
                                </span>

                                <span className="text-white group-hover:text-red-500 transition-colors duration-300 text-3xl">
                                    ↗
                                </span>
                            </a>
                        )
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="px-24 py-8 border-t border-neutral-800 flex justify-between items-center">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-neutral-500">
                    Ashik © 2026
                </span>

                <span className="font-ui text-xs text-neutral-500">
                    Available worldwide
                    for bookings
                </span>
            </div>
        </section>
    )
}