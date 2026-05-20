'use client'

import {
    useState,
    useCallback,
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

    const [showMeta, setShowMeta] =
        useState(false)

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
            loop: false,
        })

    const onSelect = useCallback(() => {
        if (!emblaApi) return

        setActiveIndex(
            emblaApi.selectedScrollSnap()
        )

        setShowMeta(false)
    }, [emblaApi])

    if (emblaApi)
        emblaApi.on('select', onSelect)

    const changeCategory = (
        cat: Category
    ) => {
        setActiveCategory(cat)
        setActiveIndex(0)
        setShowMeta(false)

        if (emblaApi)
            emblaApi.scrollTo(0)
    }

    return (
        <section
            id="gallery"
            className="relative bg-black"
            style={{
                paddingBottom: '72px',
            }}
        >
            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-neutral-800">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() =>
                            changeCategory(cat)
                        }
                        className={clsx(
                            'flex-shrink-0 px-5 py-4 font-ui text-xs tracking-[0.25em] uppercase border-b-2 transition-colors duration-300',

                            activeCategory ===
                                cat
                                ? 'text-red-500 border-red-500'
                                : 'text-white border-transparent hover:text-red-500'
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <div
                className="overflow-hidden"
                ref={emblaRef}
            >
                <div className="flex">
                    {filtered.map(
                        (image, i) => (
                            <div
                                key={image.id}
                                className="relative w-full flex-shrink-0"
                                style={{
                                    height:
                                        '75svh',
                                }}
                                onClick={() =>
                                    setShowMeta(
                                        (
                                            v
                                        ) =>
                                            !v
                                    )
                                }
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

                                <div
                                    className={clsx(
                                        'absolute bottom-0 left-0 right-0 bg-black/90 p-5 transition-transform duration-300',

                                        showMeta
                                            ? 'translate-y-0'
                                            : 'translate-y-full'
                                    )}
                                >
                                    <p className="font-display text-2xl font-bold text-white">
                                        {
                                            image.title
                                        }
                                    </p>

                                    <p className="mt-2 font-ui text-sm text-neutral-300">
                                        {
                                            image.photographer
                                        }{' '}
                                        ·{' '}
                                        {
                                            image.year
                                        }
                                    </p>

                                    <span className="mt-3 block font-ui text-xs tracking-[0.25em] uppercase text-red-500">
                                        {
                                            image.category
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 py-4">
                {filtered.map((_, i) => (
                    <button
                        key={i}
                        onClick={() =>
                            emblaApi?.scrollTo(i)
                        }
                        className={clsx(
                            'h-1.5 rounded-full transition-all duration-300',

                            i === activeIndex
                                ? 'bg-red-500 w-5'
                                : 'bg-neutral-700 w-1.5'
                        )}
                    />
                ))}
            </div>

            {/* Counter */}
            <p className="pb-4 text-center font-ui text-xs tracking-[0.25em] uppercase text-white">
                {String(
                    activeIndex + 1
                ).padStart(2, '0')}{' '}
                /{' '}
                {String(
                    filtered.length
                ).padStart(2, '0')}
            </p>
        </section>
    )
}