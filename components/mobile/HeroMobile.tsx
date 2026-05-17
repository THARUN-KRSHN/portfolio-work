'use client'
import { CldImage } from 'next-cloudinary'

export default function HeroMobile() {
    const scrollToGallery = () => {
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden"
            style={{ height: '100svh' }}
            onClick={scrollToGallery}
        >
            <CldImage
                src="portfolio/hero/hero-main"
                alt="[Model Name] — hero portrait"
                fill
                priority
                className="object-cover object-top"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />

            {/* Name pinned to bottom */}
            <div className="absolute bottom-24 left-0 right-0 px-6">
                <h1 className="font-display font-bold text-text-primary leading-none"
                    style={{ fontSize: 'clamp(3rem, 16vw, 6rem)' }}>
                    [MODEL<br />
                    <span style={{ color: 'var(--accent-red)' }}>NAME]</span>
                </h1>
                <p className="font-ui text-text-muted text-xs tracking-widest uppercase mt-3">
                    Editorial · Runway · Commercial
                </p>
            </div>

            {/* Tap hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                <span className="font-ui text-[10px] text-text-muted tracking-widest uppercase">Tap to explore</span>
                <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
            </div>
        </section>
    )
}