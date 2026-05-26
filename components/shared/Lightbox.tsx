'use client'
import { useEffect, useCallback, useState } from 'react'
import { CldImage } from 'next-cloudinary'
import { type GalleryImage } from '@/lib/cloudinary'

interface Props {
    images: GalleryImage[]
    initialIndex: number
    onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
    const [localIdx, setLocalIdx] = useState(initialIndex)

    const prev = useCallback(() => setLocalIdx((i: number) => Math.max(0, i - 1)), [])
    const next = useCallback(() => setLocalIdx((i: number) => Math.min(images.length - 1, i + 1)), [images.length])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose, prev, next])

    const image = images[localIdx]

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            className="fixed inset-0 z-[200] bg-bg-primary/95 flex items-center justify-center"
        >
            {/* Close */}
            <button
                onClick={onClose}
                aria-label="Close lightbox"
                className="absolute top-6 right-6 text-text-muted hover:text-text-primary text-3xl z-10"
            >
                ×
            </button>

            {/* Prev */}
            <button
                onClick={prev}
                disabled={localIdx === 0}
                aria-label="Previous image"
                className="absolute left-6 text-text-muted hover:text-text-primary text-3xl disabled:opacity-20 z-10"
            >
                ←
            </button>

            {/* Image */}
            <div className="relative w-full max-w-3xl mx-24" style={{ aspectRatio: '2/3' }}>
                <CldImage
                    src={image.publicId}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 900px"
                    priority
                />
            </div>

            {/* Next */}
            <button
                onClick={next}
                disabled={localIdx === images.length - 1}
                aria-label="Next image"
                className="absolute right-6 text-text-muted hover:text-text-primary text-3xl disabled:opacity-20 z-10"
            >
                →
            </button>

            {/* Caption */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="font-display text-xl font-bold text-text-primary">{image.title}</p>
                <p className="font-ui text-sm text-text-muted mt-1">{image.caption} · {image.year}</p>
                <p className="font-ui text-xs text-text-muted mt-3">
                    {String(localIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </p>
            </div>
        </div>
    )
}