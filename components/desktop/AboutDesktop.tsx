'use client'

import { useEffect, useRef } from 'react'
import { CldImage } from 'next-cloudinary'
import {
    desktopOnly,
    gsap,
} from '@/lib/animations'

import { aboutImage } from '@/lib/cloudinary'

export default function AboutDesktop() {
    const sectionRef =
        useRef<HTMLDivElement>(null)

    const textRef =
        useRef<HTMLDivElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!textRef.current) return

            gsap.fromTo(
                textRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                    },
                }
            )
        })
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="flex h-screen bg-bg-light overflow-hidden"
        >
            {/* Portrait */}
            <div className="relative w-1/2 h-full">
                <CldImage
                    src={aboutImage.publicId}
                    alt={aboutImage.alt}
                    fill
                    className="object-cover object-top"
                    sizes="50vw"
                />
            </div>

            {/* Text */}
            <div
                ref={textRef}
                className="w-1/2 flex flex-col justify-center px-20"
                style={{ color: '#0A0A0A' }}
            >
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted mb-6">
                    02 — About
                </span>

                <h2
                    className="font-display font-bold leading-tight mb-8"
                    style={{
                        fontSize:
                            'clamp(2.5rem, 5vw, 5rem)',
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
                    className="font-ui text-base leading-relaxed mb-6"
                    style={{
                        color: '#444',
                        maxWidth: '420px',
                    }}
                >
                    Ashik Krishna is a professional
                    model working across editorial,
                    runway, and commercial projects.
                </p>

                <p
                    className="font-ui text-base leading-relaxed mb-10"
                    style={{
                        color: '#666',
                        maxWidth: '420px',
                    }}
                >
                    Available worldwide for
                    campaigns, collaborations, and
                    fashion bookings.
                </p>

                <div className="flex gap-8">
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
                                className="font-display text-xl font-bold"
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