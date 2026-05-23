'use client'

import { useEffect, useRef } from 'react'
import { CldImage } from 'next-cloudinary'
import { desktopOnly, gsap } from '@/lib/animations'
import { heroImage } from '@/lib/cloudinary'

export default function HeroDesktop() {
    const heroRef = useRef<HTMLDivElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!nameRef.current || !subRef.current) return

            gsap.fromTo(
                nameRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    ease: 'power3.out',
                    delay: 0.3,
                }
            )

            gsap.fromTo(
                subRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.8,
                }
            )
        })
    }, [])

    useEffect(() => {
        const el = heroRef.current
        if (!el) return

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 1024) return

            const x =
                (e.clientX / window.innerWidth - 0.5) * 20

            const y =
                (e.clientY / window.innerHeight - 0.5) * 10

            const img = el.querySelector(
                '.hero-img'
            ) as HTMLElement

            if (img) {
                img.style.transform = `translate(${x}px, ${y}px) scale(1.04)`
            }
        }

        window.addEventListener(
            'mousemove',
            handleMouseMove
        )

        return () =>
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            )
    }, [])

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative h-screen w-full overflow-hidden flex items-end"
        >
            {/* Background image */}
            <div className="hero-img absolute inset-0 transition-transform duration-700 ease-out scale-105">
                <CldImage
                    src={heroImage.publicId}
                    alt={heroImage.alt}
                    fill
                    priority
                    className="object-cover object-center grayscale"
                    sizes="100vw"
                />

                {/* Better overlay */}
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-white/10" />
            </div>

            {/* Top labels */}

            {/* Main content */}
            <div className="relative z-10 w-full px-24 pb-20">
                <h1
                    ref={nameRef}
                    className="font-display font-bold leading-[0.9] opacity-0"
                    style={{
                        fontSize: 'clamp(4rem, 11vw, 10rem)',
                        color: '#F5F5F5',
                    }}
                >
                    ASHIK K F
                    <br />
                </h1>

                <p
                    ref={subRef}
                    className="mt-5 font-ui tracking-[0.25em] uppercase text-sm opacity-0"
                    style={{
                        color: 'rgba(255,255,255,0.75)',
                    }}
                >
                    Editorial · Runway · Commercial
                </p>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-3">
                <span
                    className="font-ui text-[10px] tracking-[0.25em] uppercase"
                    style={{
                        writingMode: 'vertical-rl',
                        color: 'rgba(255,255,255,0.7)',
                    }}
                >
                    Scroll
                </span>

                <div className="w-px h-16 bg-gradient-to-b from-white/70 to-transparent" />
            </div>
        </section>
    )
}