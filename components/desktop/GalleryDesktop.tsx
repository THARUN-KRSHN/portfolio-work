'use client'
import { useEffect, useRef, useState } from 'react'
import { CldImage } from 'next-cloudinary'
import { desktopOnly, gsap, ScrollTrigger } from '@/lib/animations'
import { galleryImages, type Category } from '@/lib/cloudinary'
import Lightbox from '@/components/shared/Lightbox'
import clsx from 'clsx'

const categories: Category[] = ['All', 'Editorial', 'Runway', 'Commercial']

export default function GalleryDesktop() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [activeCategory, setActiveCategory] = useState<Category>('All')
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const filtered = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)

    useEffect(() => {
        desktopOnly(() => {
            if (!sectionRef.current || !trackRef.current) return

            const track = trackRef.current
            const totalWidth = track.scrollWidth - window.innerWidth

            gsap.to(track, {
                x: -totalWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${totalWidth}`,
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                },
            })

            return () => ScrollTrigger.getAll().forEach(t => t.kill())
        })
    }, [filtered.length])

    return (
        <>
            <section
                id="gallery"
                ref={sectionRef}
                className="relative h-screen overflow-hidden bg-bg-primary"
            >
                {/* Category filter */}
                <div className="absolute top-8 left-24 z-20 flex gap-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={clsx(
                                'font-ui text-xs tracking-widest uppercase transition-colors duration-300 pb-1',
                                activeCategory === cat
                                    ? 'text-accent-red border-b border-accent-red'
                                    : 'text-text-muted hover:text-text-primary'
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Section label */}
                <div className="absolute top-8 right-8 z-20 font-ui text-xs text-text-muted tracking-widest uppercase">
                    01 — Portfolio
                </div>

                {/* Horizontal track */}
                <div
                    ref={trackRef}
                    className="flex h-full items-center gap-6 pl-24 pr-24"
                    style={{ width: 'max-content' }}
                >
                    {filtered.map((image, index) => (
                        <button
                            key={image.id}
                            onClick={() => setLightboxIndex(index)}
                            className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
                            style={{ width: '400px', height: '85vh' }}
                            aria-label={`View ${image.title}`}
                        >
                            <CldImage
                                src={image.publicId}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="400px"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="font-display text-2xl font-bold text-text-primary">{image.title}</p>
                                <p className="font-ui text-sm text-text-muted mt-1">{image.photographer} · {image.year}</p>
                                <span className="mt-3 text-xs font-ui tracking-widest uppercase text-accent-red">{image.category}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Image counter */}
                <div className="absolute bottom-8 right-8 z-20 font-ui text-xs text-text-muted tracking-widest">
                    {String(filtered.length).padStart(2, '0')} IMAGES
                </div>
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    images={filtered}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </>
    )
}