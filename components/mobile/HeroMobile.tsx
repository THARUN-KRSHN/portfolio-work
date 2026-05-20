'use client'

import { CldImage } from 'next-cloudinary'
import { heroImage } from '@/lib/cloudinary'

export default function HeroMobile() {
    const scrollToGallery = () => {
        document
            .getElementById('gallery')
            ?.scrollIntoView({
                behavior: 'smooth',
            })
    }

    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden"
            style={{ height: '100svh' }}
            onClick={scrollToGallery}
        >
            {/* Image */}
            <CldImage
                src={heroImage.publicId}
                alt={heroImage.alt}
                fill
                priority
                className="object-cover object-center grayscale"
                sizes="100vw"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-white/10" />

            {/* Top labels */}


            {/* Name */}
            <div className="absolute bottom-24 left-0 right-0 px-6 z-20">
                <h1
                    className="font-display font-bold leading-[0.9]"
                    style={{
                        fontSize:
                            'clamp(3.5rem, 18vw, 6.5rem)',
                        color: '#FFFFFF',
                    }}
                >
                    ASHIK
                    <br />

                    <span
                        style={{
                            color: '#F5F5F5',
                        }}
                    >
                        K F
                    </span>
                </h1>

                <p
                    className="mt-4 font-ui text-xs tracking-[0.22em] uppercase"
                    style={{
                        color: 'rgba(255,255,255,0.72)',
                    }}
                >
                    Editorial · Runway · Commercial
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                <span
                    className="font-ui text-[9px] tracking-[0.22em] uppercase"
                    style={{
                        color: 'rgba(255,255,255,0.65)',
                    }}
                >
                    Tap to explore
                </span>

                <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent" />
            </div>
        </section>
    )
}