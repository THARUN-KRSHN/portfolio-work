'use client'
import { useEffect, useRef } from 'react'
import { CldImage } from 'next-cloudinary'
import { desktopOnly, gsap } from '@/lib/animations'

export default function HeroDesktop() {
    const heroRef = useRef<HTMLDivElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!nameRef.current || !subRef.current) return
            gsap.fromTo(nameRef.current,
                { opacity: 0, y: 80 },
                { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.3 }
            )
            gsap.fromTo(subRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
            )
        })
    }, [])

    // Mouse parallax
    useEffect(() => {
        const el = heroRef.current
        if (!el) return
        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 1024) return
            const x = (e.clientX / window.innerWidth - 0.5) * 20
            const y = (e.clientY / window.innerHeight - 0.5) * 10
            const img = el.querySelector('.hero-img') as HTMLElement
            if (img) {
                img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
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
                    src="portfolio/hero/hero-main"
                    alt="[Model Name] — hero portrait"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-24 pb-20">
                <h1
                    ref={nameRef}
                    className="font-display font-bold leading-none opacity-0"
                    style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', color: 'var(--text-primary)' }}
                >
                    [MODEL<br />
                    <span style={{ color: 'var(--accent-red)' }}>NAME]</span>
                </h1>
                <p
                    ref={subRef}
                    className="mt-4 font-ui text-text-muted tracking-widest uppercase text-sm opacity-0"
                >
                    Editorial · Runway · Commercial
                </p>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
                <span className="font-ui text-xs text-text-muted tracking-widest uppercase"
                    style={{ writingMode: 'vertical-rl' }}>
                    Scroll
                </span>
                <div className="w-px h-16 bg-gradient-to-b from-text-muted to-transparent" />
            </div>
        </section>
    )
}