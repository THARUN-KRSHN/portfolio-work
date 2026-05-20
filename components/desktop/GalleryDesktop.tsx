'use client'

import {
    useEffect,
    useRef,
    useState,
} from 'react'

import { CldImage } from 'next-cloudinary'

import {
    desktopOnly,
    gsap,
    ScrollTrigger,
} from '@/lib/animations'

import {
    galleryImages,
    type Category,
} from '@/lib/cloudinary'

import Lightbox from '@/components/shared/Lightbox'
import clsx from 'clsx'

const categories: Category[] = [
    'All',
    'Editorial',
    'Runway',
    'Commercial',
]

export default function GalleryDesktop() {
    const sectionRef =
        useRef<HTMLDivElement>(null)

    const trackRef =
        useRef<HTMLDivElement>(null)

    const [activeCategory, setActiveCategory] =
        useState<Category>('All')

    const [lightboxIndex, setLightboxIndex] =
        useState<number | null>(null)

    const filtered =
        activeCategory === 'All'
            ? galleryImages
            : galleryImages.filter(
                (img) =>
                    img.category ===
                    activeCategory
            )

    useEffect(() => {
        desktopOnly(() => {
            if (
                !sectionRef.current ||
                !trackRef.current
            )
                return

            ScrollTrigger.getAll().forEach(
                (t) => t.kill()
            )

            const track = trackRef.current

            const totalWidth =
                track.scrollWidth -
                window.innerWidth

            gsap.to(track, {
                x: -totalWidth,
                ease: 'none',

                scrollTrigger: {
                    trigger:
                        sectionRef.current,
                    start: 'top top',
                    end: () =>
                        `+=${totalWidth}`,
                    scrub: 1.5,
                    pin: true,
                    anticipatePin: 1,
                },
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(
                (t) => t.kill()
            )
        }
    }, [filtered.length])

    return (
        <>
            <section
                id="gallery"
                ref={sectionRef}
                className="relative h-screen overflow-hidden bg-black"
            >
                {/* Category Filter */}
                <div className="absolute top-8 left-24 z-20 flex gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() =>
                                setActiveCategory(
                                    cat
                                )
                            }
                            className={clsx(
                                'font-ui text-xs tracking-[0.25em] uppercase pb-2 transition-all duration-300',

                                activeCategory ===
                                    cat
                                    ? 'text-red-500 border-b border-red-500'
                                    : 'text-white hover:text-red-500'
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Section Label */}
                <div className="absolute top-8 right-10 z-20">
                    <p className="font-ui text-xs tracking-[0.25em] uppercase text-white hover:text-red-500 transition-colors duration-300">
                        01 — Portfolio
                    </p>
                </div>

                {/* Gallery */}
                <div
                    ref={trackRef}
                    className="flex h-full items-center gap-8 pl-24 pr-24"
                    style={{
                        width: 'max-content',
                    }}
                >
                    {filtered.map(
                        (image, index) => (
                            <button
                                key={image.id}
                                onClick={() =>
                                    setLightboxIndex(
                                        index
                                    )
                                }
                                className="group relative overflow-hidden flex-shrink-0 cursor-pointer"
                                style={{
                                    width:
                                        '420px',
                                    height:
                                        '85vh',
                                }}
                            >
                                <CldImage
                                    src={
                                        image.publicId
                                    }
                                    alt={
                                        image.alt
                                    }
                                    fill
                                    sizes="420px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                                    <p className="font-display text-3xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
                                        {
                                            image.title
                                        }
                                    </p>

                                    <p className="mt-2 font-ui text-sm text-neutral-300 transition-colors duration-300 group-hover:text-red-400">
                                        {
                                            image.photographer
                                        }{' '}
                                        ·{' '}
                                        {
                                            image.year
                                        }
                                    </p>

                                    <span className="mt-4 inline-block font-ui text-xs tracking-[0.25em] uppercase text-white transition-colors duration-300 group-hover:text-red-500">
                                        {
                                            image.category
                                        }
                                    </span>
                                </div>
                            </button>
                        )
                    )}
                </div>

                {/* Counter */}
                <div className="absolute bottom-8 right-10 z-20">
                    <p className="font-ui text-xs tracking-[0.25em] uppercase text-white hover:text-red-500 transition-colors duration-300">
                        {String(
                            filtered.length
                        ).padStart(2, '0')}{' '}
                        Images
                    </p>
                </div>
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    images={filtered}
                    initialIndex={
                        lightboxIndex
                    }
                    onClose={() =>
                        setLightboxIndex(
                            null
                        )
                    }
                />
            )}
        </>
    )
}