'use client'

import {
    useEffect,
    useRef,
} from 'react'

import { CldImage } from 'next-cloudinary'

import {
    desktopOnly,
    gsap,
} from '@/lib/animations'

import { aboutImage } from '@/lib/cloudinary'

export default function AboutDesktop() {
    const sectionRef =
        useRef<HTMLDivElement>(null)

    const titleRef =
        useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!titleRef.current) return

            gsap.fromTo(
                titleRef.current.children,
                {
                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: 'power3.out',

                    scrollTrigger: {
                        trigger:
                            sectionRef.current,
                        start: 'top 65%',
                    },
                }
            )
        })
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="flex min-h-screen bg-black overflow-hidden"
        >
            {/* Image */}
            <div className="relative w-1/2 h-screen">
                <CldImage
                    src={
                        aboutImage.publicId
                    }
                    alt={aboutImage.alt}
                    fill
                    className="object-cover object-top"
                    sizes="50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/70" />
            </div>

            {/* Content */}
            <div className="w-1/2 flex flex-col justify-center px-20">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                    02 — About
                </span>

                <h2
                    ref={titleRef}
                    className="font-display font-bold leading-none mb-10"
                    style={{
                        fontSize:
                            'clamp(3rem, 5vw, 6rem)',
                    }}
                >
                    <span className="block text-white">
                        Ashik K F
                    </span>
                </h2>

                <div className="space-y-8">
                    <p className="font-ui text-2xl leading-relaxed text-neutral-300 max-w-xl">
                        Ashik K F is a
                        professional model
                        working across
                        editorial, runway, and
                        commercial projects.
                    </p>

                    <p className="font-ui text-lg leading-relaxed text-neutral-500 max-w-lg">
                        Available worldwide
                        for campaigns,
                        collaborations, and
                        fashion bookings.
                    </p>
                </div>

                {/* Stats */}
                <div className="flex gap-10 mt-14">
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