'use client'
import { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CldImage } from 'next-cloudinary'
import { galleryImages, type Category } from '@/lib/cloudinary'
import clsx from 'clsx'

const categories: Category[] = ['All', 'Editorial', 'Runway', 'Commercial']

export default function GalleryMobile() {
    const [activeCategory, setActiveCategory] = useState<Category>('All')
    const [activeIndex, setActiveIndex] = useState(0)
    const [showMeta, setShowMeta] = useState(false)

    const filtered = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setActiveIndex(emblaApi.selectedScrollSnap())
        setShowMeta(false)
    }, [emblaApi])

    if (emblaApi) emblaApi.on('select', onSelect)

    const changeCategory = (cat: Category) => {
        setActiveCategory(cat)
        setActiveIndex(0)
        setShowMeta(false)
        if (emblaApi) emblaApi.scrollTo(0)
    }

    return (
        <section id="gallery" className="relative bg-bg-primary" style={{ paddingBottom: '72px' }}>
            {/* Category tabs */}
            <div className="flex gap-0 overflow-x-auto no-scrollbar border-b border-border">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => changeCategory(cat)}
                        className={clsx(
                            'flex-shrink-0 px-5 py-4 font-ui text-xs tracking-widest uppercase',
                            'transition-colors duration-200 border-b-2',
                            activeCategory === cat
                                ? 'text-accent-red border-accent-red'
                                : 'text-text-muted border-transparent'
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {filtered.map((image, i) => (
                        <div
                            key={image.id}
                            className="relative flex-shrink-0 w-full"
                            style={{ height: '75svh' }}
                            onClick={() => setShowMeta(v => !v)}
                        >
                            <CldImage
                                src={image.publicId}
                                alt={image.alt}
                                fill
                                priority={i === 0}
                                className="object-cover"
                                sizes="100vw"
                            />
                            {/* Metadata drawer */}
                            <div className={clsx(
                                'absolute bottom-0 left-0 right-0 bg-bg-primary/90 p-5 transition-transform duration-300',
                                showMeta ? 'translate-y-0' : 'translate-y-full'
                            )}>
                                <p className="font-display text-xl font-bold text-text-primary">{image.title}</p>
                                <p className="font-ui text-sm text-text-muted mt-1">{image.photographer} · {image.year}</p>
                                <span className="font-ui text-xs text-accent-red tracking-widest uppercase mt-2 block">
                                    {image.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot pagination */}
            <div className="flex justify-center gap-2 py-4">
                {filtered.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={clsx(
                            'w-1.5 h-1.5 rounded-full transition-all duration-300',
                            i === activeIndex ? 'bg-accent-red w-4' : 'bg-border'
                        )}
                    />
                ))}
            </div>

            {/* Counter */}
            <p className="text-center font-ui text-xs text-text-muted pb-4">
                {String(activeIndex + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
            </p>
        </section>
    )
}