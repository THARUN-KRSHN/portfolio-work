'use client'

import {
    useEffect,
    useRef,
    useState,
} from 'react'

import { gsap } from '@/lib/animations'
import { useMediaQuery } from '@/lib/useMediaQuery'
import { CldImage } from 'next-cloudinary'
import { logoImage } from '@/lib/cloudinary'

export default function LoadingScreen() {
    const [loading, setLoading] =
        useState(true)

    const wrapperRef =
        useRef<HTMLDivElement>(null)

    const leftPanelRef =
        useRef<HTMLDivElement>(null)

    const rightPanelRef =
        useRef<HTMLDivElement>(null)

    const topPanelRef =
        useRef<HTMLDivElement>(null)

    const bottomPanelRef =
        useRef<HTMLDivElement>(null)

    const isMobile =
        useMediaQuery(
            '(max-width: 767px)'
        )

    useEffect(() => {
        if (!wrapperRef.current)
            return

        document.body.style.overflow =
            'hidden'

        const tl = gsap.timeline({
            delay: 3,
        })

        /* DESKTOP SPLIT */
        if (!isMobile) {
            tl.to(
                leftPanelRef.current,
                {
                    x: '-100%',
                    duration: 1.5,
                    ease: 'power4.inOut',
                }
            ).to(
                rightPanelRef.current,
                {
                    x: '100%',
                    duration: 1.5,
                    ease: 'power4.inOut',
                },
                0
            )
        }

        /* MOBILE SPLIT */
        else {
            tl.to(
                topPanelRef.current,
                {
                    y: '-100%',
                    duration: 1.4,
                    ease: 'power4.inOut',
                }
            ).to(
                bottomPanelRef.current,
                {
                    y: '100%',
                    duration: 1.4,
                    ease: 'power4.inOut',
                },
                0
            )
        }

        tl.set(wrapperRef.current, {
            display: 'none',
            onComplete: () => {
                setLoading(false)

                document.body.style.overflow =
                    'auto'
            },
        })
    }, [isMobile])

    if (!loading) return null

    return (
        <div
            ref={wrapperRef}
            className="
                fixed
                inset-0
                z-[99999]
                overflow-hidden
                bg-black
            "
        >
            {/* ========================= */}
            {/* DESKTOP */}
            {/* ========================= */}

            {!isMobile && (
                <>
                    {/* LEFT HALF */}
                    <div
                        ref={leftPanelRef}
                        className="
                            absolute
                            left-0
                            top-0
                            h-full
                            w-1/2
                            bg-black
                            overflow-hidden
                        "
                    >
                        {/* GRID */}
                        <div className="absolute inset-0 flex justify-between">
                            {Array.from({
                                length: 6,
                            }).map(
                                (_, i) => (
                                    <div
                                        key={
                                            i
                                        }
                                        className="
                                            h-full
                                            w-px
                                            bg-red-900/30
                                        "
                                    />
                                )
                            )}
                        </div>
                    </div>

                    {/* RIGHT HALF */}
                    <div
                        ref={rightPanelRef}
                        className="
                            absolute
                            right-0
                            top-0
                            h-full
                            w-1/2
                            bg-black
                            overflow-hidden
                        "
                    >
                        {/* GRID */}
                        <div className="absolute inset-0 flex justify-between">
                            {Array.from({
                                length: 6,
                            }).map(
                                (_, i) => (
                                    <div
                                        key={
                                            i
                                        }
                                        className="
                                            h-full
                                            w-px
                                            bg-red-900/30
                                        "
                                    />
                                )
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* ========================= */}
            {/* MOBILE */}
            {/* ========================= */}

            {isMobile && (
                <>
                    {/* TOP HALF */}
                    <div
                        ref={topPanelRef}
                        className="
                            absolute
                            left-0
                            top-0
                            h-1/2
                            w-full
                            bg-black
                            overflow-hidden
                        "
                    >
                        {/* GRID */}
                        <div className="absolute inset-0 flex justify-between">
                            {Array.from({
                                length: 6,
                            }).map(
                                (_, i) => (
                                    <div
                                        key={
                                            i
                                        }
                                        className="
                                            h-full
                                            w-px
                                            bg-red-900/30
                                        "
                                    />
                                )
                            )}
                        </div>
                    </div>

                    {/* BOTTOM HALF */}
                    <div
                        ref={bottomPanelRef}
                        className="
                            absolute
                            bottom-0
                            left-0
                            h-1/2
                            w-full
                            bg-black
                            overflow-hidden
                        "
                    >
                        {/* GRID */}
                        <div className="absolute inset-0 flex justify-between">
                            {Array.from({
                                length: 6,
                            }).map(
                                (_, i) => (
                                    <div
                                        key={
                                            i
                                        }
                                        className="
                                            h-full
                                            w-px
                                            bg-red-900/30
                                        "
                                    />
                                )
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* ========================= */}
            {/* CENTER LOGO */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    z-30
                    -translate-x-1/2
                    -translate-y-1/2
                "
            >
                <CldImage
                    src={logoImage.publicId}
                    alt={logoImage.alt}
                    width={220}
                    height={220}
                    priority
                    className="
                        object-contain
                        select-none
                    "
                />
            </div>
        </div>
    )
}