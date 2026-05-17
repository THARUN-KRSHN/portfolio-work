'use client'
import { useEffect, useRef } from 'react'
import { CldImage } from 'next-cloudinary'
import { desktopOnly, gsap, ScrollTrigger } from '@/lib/animations'

export default function AboutDesktop() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!textRef.current) return
            gsap.fromTo(
                textRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
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
            {/* Portrait — left 50% */}
            <div className="relative w-1/2 h-full">
                <CldImage
                    src="portfolio/about/portrait"
                    alt="[Model Name] — portrait"
                    fill
                    className="object-cover object-top"
                    sizes="50vw"
                />
            </div>

            {/* Text — right 50% */}
            <div
                ref={textRef}
                className="w-1/2 flex flex-col justify-center px-20"
                style={{ color: '#0A0A0A' }}
            >
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted mb-6">
                    02 — About
                </span>
                <h2 className="font-display font-bold leading-tight mb-8"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#0A0A0A' }}>
                    The Face<br />
                    <span style={{ color: 'var(--accent-red)' }}>Behind</span><br />
                    the Frame.
                </h2>
                <p className="font-ui text-base leading-relaxed mb-6" style={{ color: '#444', maxWidth: '420px' }}>
                    [Model Name] is a professional model based in [City], represented by [Agency Name].
                    With [X] years of experience across editorial, runway, and commercial work,
                    [he/she/they] brings a distinctive presence to every project.
                </p>
                <p className="font-ui text-base leading-relaxed mb-10" style={{ color: '#666', maxWidth: '420px' }}>
                    Featured in [Publication], [Publication], and campaign work for [Brand].
                    Available worldwide for bookings.
                </p>
                <div className="flex gap-8">
                    {[
                        { label: 'Height', value: '6\'1"' },
                        { label: 'Eyes', value: 'Brown' },
                        { label: 'Hair', value: 'Dark' },
                        { label: 'Based', value: 'London' },
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <p className="font-ui text-xs tracking-widest uppercase text-text-muted mb-1">{label}</p>
                            <p className="font-display text-xl font-bold" style={{ color: '#0A0A0A' }}>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}