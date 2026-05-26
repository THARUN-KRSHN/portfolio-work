'use client'

import {
    useState,
    useCallback,
    useEffect,
} from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import { CldImage } from 'next-cloudinary'

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

export default function GalleryMobile() {
    const [activeCategory, setActiveCategory] =
        useState<Category>('All')

    const [activeIndex, setActiveIndex] =
        useState(0)

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

    const [emblaRef, emblaApi] =
        useEmblaCarousel({
            loop: true,
        })

    const [
        lightboxRef,
        lightboxApi,
    ] = useEmblaCarousel({
        loop: true,
    })

    const onSelect = useCallback(() => {
        if (!emblaApi) return

        setActiveIndex(
            emblaApi.selectedScrollSnap()
        )
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    useEffect(() => {
        if (
            lightboxApi &&
            lightboxIndex !== null
        ) {
            lightboxApi.scrollTo(
                lightboxIndex
            )
        }
    }, [lightboxApi, lightboxIndex])

    return (
        <>
            <section
                id="gallery"
                className="relative bg-black pb-[72px]"
            >
                {/* TABS */}
                <div className="flex overflow-x-auto no-scrollbar border-b border-neutral-800">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() =>
                                setActiveCategory(
                                    cat
                                )
                            }
                            className={clsx(
                                'flex-shrink-0 px-5 py-4 font-ui text-xs tracking-[0.25em] uppercase border-b-2 transition-colors duration-300',

                                activeCategory ===
                                    cat
                                    ? 'text-red-500 border-red-500'
                                    : 'text-white border-transparent'
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* CAROUSEL */}
                <div
                    className="overflow-hidden"
                    ref={emblaRef}
                >
                    <div className="flex">
                        {filtered.map(
                            (image, i) => (
                                <button
                                    key={image.id}
                                    onClick={() =>
                                        setLightboxIndex(
                                            i
                                        )
                                    }
                                    className="relative w-full flex-shrink-0 overflow-hidden"
                                    style={{
                                        height:
                                            '75svh',
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
                                        priority={
                                            i === 0
                                        }
                                        className="object-cover"
                                        sizes="100vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="rounded-2xl border border-red-500/20 bg-black/60 backdrop-blur-md p-4">
                                            <p className="font-display text-2xl text-red-500 font-bold">
                                                {
                                                    image.title
                                                }
                                            </p>

                                            <p className="mt-1 text-white text-sm">
                                                {
                                                    image.caption
                                                }{' '}
                                                ·{' '}
                                                {
                                                    image.year
                                                }
                                            </p>

                                            <span className="mt-2 inline-block text-xs tracking-[0.25em] uppercase text-red-400">
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
                </div>
            </section>

            {/* MOBILE LIGHTBOX */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] overflow-hidden"
                    onClick={() =>
                        setLightboxIndex(
                            null
                        )
                    }
                >
                    {/* BG */}
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

                    {/* SWIPE VIEW */}
                    <div
                        ref={lightboxRef}
                        className="overflow-hidden h-full relative z-10"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <div className="flex h-full">
                            {filtered.map(
                                (image) => (
                                    <div
                                        key={
                                            image.id
                                        }
                                        className="min-w-full h-full flex items-center justify-center px-6"
                                    >
                                        <div className="w-full rounded-[28px] overflow-hidden border border-red-500/20 bg-black">
                                            {/* IMAGE */}
                                            <div className="relative h-[62svh]">
                                                <CldImage
                                                    src={
                                                        image.publicId
                                                    }
                                                    alt={
                                                        image.alt
                                                    }
                                                    fill
                                                    className="object-cover"
                                                    sizes="100vw"
                                                />
                                            </div>

                                            {/* INFO */}
                                            <div className="bg-black px-5 py-5 border-t border-red-500/20">
                                                <p className="font-display text-3xl text-red-500 font-bold">
                                                    {
                                                        image.title
                                                    }
                                                </p>

                                                <p className="mt-2 text-white text-sm">
                                                    {
                                                        image.caption
                                                    }{' '}
                                                    ·{' '}
                                                    {
                                                        image.year
                                                    }
                                                </p>

                                                <span className="mt-3 inline-block text-xs tracking-[0.25em] uppercase text-red-400">
                                                    {
                                                        image.category
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* CLOSE */}
                        <button
                            onClick={() =>
                                setLightboxIndex(
                                    null
                                )
                            }
                            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-black/70 border border-red-500/30 text-white"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}