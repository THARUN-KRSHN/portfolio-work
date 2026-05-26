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

    const prevImage = () => {
        if (
            lightboxIndex === null
        )
            return

        setLightboxIndex(
            lightboxIndex === 0
                ? filtered.length - 1
                : lightboxIndex - 1
        )
    }

    const nextImage = () => {
        if (
            lightboxIndex === null
        )
            return

        setLightboxIndex(
            lightboxIndex ===
                filtered.length - 1
                ? 0
                : lightboxIndex + 1
        )
    }

    return (
        <>
            <section
                id="gallery"
                ref={sectionRef}
                className="relative h-screen overflow-hidden bg-black"
            >
                {/* FILTER */}
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

                {/* LABEL */}
                <div className="absolute top-8 right-10 z-20">
                    <p className="font-ui text-xs tracking-[0.25em] uppercase text-white">
                        01 — Portfolio
                    </p>
                </div>

                {/* GALLERY */}
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
                                className="group relative overflow-hidden flex-shrink-0 cursor-pointer rounded-[28px]"
                                style={{
                                    width:
                                        '420px',
                                    height:
                                        '82vh',
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

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* CAPTION */}
                                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                                    <div className="bg-black/70 border border-red-500/30 rounded-2xl p-5 backdrop-blur-md">
                                        <p className="font-display text-3xl font-bold text-red-500">
                                            {
                                                image.title
                                            }
                                        </p>

                                        <p className="mt-2 font-ui text-sm text-white">
                                            {
                                                image.caption
                                            }{' '}
                                            ·{' '}
                                            {
                                                image.year
                                            }
                                        </p>

                                        <span className="mt-3 inline-block font-ui text-xs tracking-[0.25em] uppercase text-red-400">
                                            {
                                                image.category
                                            }
                                        </span>
                                    </div>
                                </div>
                            </button>
                        )
                    )}
                </div>
            </section>

            {/* LIGHTBOX */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] overflow-hidden"
                    onClick={() =>
                        setLightboxIndex(
                            null
                        )
                    }
                >
                    {/* BACKGROUND */}
                    <div className="absolute inset-0">
                        <CldImage
                            src={
                                filtered[
                                    lightboxIndex
                                ].publicId
                            }
                            alt={
                                filtered[
                                    lightboxIndex
                                ].alt
                            }
                            fill
                            className="object-cover blur-2xl scale-110 opacity-30"
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-black/80" />
                    </div>

                    {/* CENTER CARD */}
                    <div className="relative z-10 h-full flex items-center justify-center px-20">
                        <div
                            className="relative w-[520px] rounded-[34px] overflow-hidden bg-black border border-red-500/30 shadow-2xl"
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        >
                            {/* IMAGE */}
                            <div className="relative h-[620px]">
                                <CldImage
                                    src={
                                        filtered[
                                            lightboxIndex
                                        ]
                                            .publicId
                                    }
                                    alt={
                                        filtered[
                                            lightboxIndex
                                        ].alt
                                    }
                                    fill
                                    className="object-cover"
                                    sizes="520px"
                                />
                            </div>

                            {/* INFO */}
                            <div className="bg-black px-7 py-6 border-t border-red-500/20">
                                <p className="font-display text-4xl text-red-500 font-bold">
                                    {
                                        filtered[
                                            lightboxIndex
                                        ]
                                            .title
                                    }
                                </p>

                                <p className="mt-3 text-white text-sm leading-relaxed">
                                    {
                                        filtered[
                                            lightboxIndex
                                        ]
                                            .caption
                                    }{' '}
                                    ·{' '}
                                    {
                                        filtered[
                                            lightboxIndex
                                        ].year
                                    }
                                </p>

                                <span className="mt-4 inline-block text-xs tracking-[0.3em] uppercase text-red-400">
                                    {
                                        filtered[
                                            lightboxIndex
                                        ]
                                            .category
                                    }
                                </span>
                            </div>

                            {/* CLOSE */}
                            <button
                                onClick={() =>
                                    setLightboxIndex(
                                        null
                                    )
                                }
                                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/70 border border-red-500/30 text-white hover:bg-red-500 transition-all duration-300"
                            >
                                ✕
                            </button>
                        </div>

                        {/* NAV */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                prevImage()
                            }}
                            className="absolute left-14 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 border border-red-500/30 text-white text-2xl hover:bg-red-500 transition-all duration-300"
                        >
                            ←
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                nextImage()
                            }}
                            className="absolute right-14 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 border border-red-500/30 text-white text-2xl hover:bg-red-500 transition-all duration-300"
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}