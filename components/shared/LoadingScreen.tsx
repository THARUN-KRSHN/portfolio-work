'use client'

import {
    useEffect,
    useRef,
    useState,
} from 'react'

import { gsap } from '@/lib/animations'
import { useMediaQuery } from '@/lib/useMediaQuery'

export default function LoadingScreen() {
    const [loading, setLoading] =
        useState(true)

    const wrapperRef =
        useRef<HTMLDivElement>(null)

    const leftRef =
        useRef<HTMLDivElement>(null)

    const rightRef =
        useRef<HTMLDivElement>(null)

    const topRef =
        useRef<HTMLDivElement>(null)

    const bottomRef =
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

        /* DESKTOP */
        if (!isMobile) {
            tl.to(leftRef.current, {
                x: '-100%',
                duration: 1.4,
                ease: 'power4.inOut',
            }).to(
                rightRef.current,
                {
                    x: '100%',
                    duration: 1.4,
                    ease: 'power4.inOut',
                },
                0
            )
        }

        /* MOBILE */
        else {
            tl.to(topRef.current, {
                y: '-100%',
                duration: 1.3,
                ease: 'power4.inOut',
            }).to(
                bottomRef.current,
                {
                    y: '100%',
                    duration: 1.3,
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
            "
        >
            {/* ========================= */}
            {/* DESKTOP */}
            {/* ========================= */}

            {!isMobile && (
                <>
                    {/* LEFT PANEL */}
                    <div
                        ref={leftRef}
                        className="
                            absolute
                            top-0
                            left-0
                            w-1/2
                            h-full
                            bg-[#ff0000]
                            flex
                            items-center
                            justify-end
                            overflow-hidden
                        "
                    >
                        <div className="pr-2 flex flex-col items-end">
                            <h1
                                className="
                                    uppercase
                                    text-white
                                    leading-[0.9]
                                    whitespace-nowrap
                                "
                                style={{
                                    fontFamily:
                                        '"Lucidity Condensed", sans-serif',

                                    fontSize:
                                        '119px',

                                    letterSpacing:
                                        '0.2em',

                                    fontWeight:
                                        700,
                                }}
                            >
                                AS
                            </h1>

                            <p
                                className="
                                    uppercase
                                    text-black
                                    leading-none
                                    mt-4
                                    whitespace-nowrap
                                "
                                style={{
                                    fontFamily:
                                        '"Lucidity Condensed", sans-serif',

                                    fontSize:
                                        '38.7px',

                                    letterSpacing:
                                        '0.472em',

                                    fontWeight:
                                        700,
                                }}
                            >
                                PORT
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div
                        ref={rightRef}
                        className="
                            absolute
                            top-0
                            right-0
                            w-1/2
                            h-full
                            bg-[#ff0000]
                            flex
                            items-center
                            justify-start
                            overflow-hidden
                        "
                    >
                        <div className="pl-2 flex flex-col items-start">
                            <h1
                                className="
                                    uppercase
                                    text-white
                                    leading-[0.9]
                                    whitespace-nowrap
                                "
                                style={{
                                    fontFamily:
                                        '"Lucidity Condensed", sans-serif',

                                    fontSize:
                                        '119px',

                                    letterSpacing:
                                        '0.2em',

                                    fontWeight:
                                        700,
                                }}
                            >
                                HIK
                            </h1>

                            <p
                                className="
                                    uppercase
                                    text-black
                                    leading-none
                                    mt-4
                                    whitespace-nowrap
                                "
                                style={{
                                    fontFamily:
                                        '"Lucidity Condensed", sans-serif',

                                    fontSize:
                                        '38.7px',

                                    letterSpacing:
                                        '0.472em',

                                    fontWeight:
                                        700,
                                }}
                            >
                                FOLIO
                            </p>
                        </div>
                    </div>
                </>
            )}

            {/* ========================= */}
            {/* MOBILE */}
            {/* ========================= */}

            {isMobile && (
                <>
                    {/* TOP */}
                    <div
                        ref={topRef}
                        className="
                            absolute
                            top-0
                            left-0
                            w-full
                            h-1/2
                            bg-[#ff0000]
                            flex
                            items-end
                            justify-center
                            overflow-hidden
                        "
                    >
                        <div className="pb-3 text-center">
                            <h1
                                className="
                                    uppercase
                                    text-white
                                    leading-none
                                    whitespace-nowrap
                                "
                                style={{
                                    fontFamily:
                                        '"Lucidity Condensed", sans-serif',

                                    fontSize:
                                        '58px',

                                    letterSpacing:
                                        '0.18em',

                                    fontWeight:
                                        700,
                                }}
                            >
                                ASHIK
                            </h1>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div
                        ref={bottomRef}
                        className="
                            absolute
                            bottom-0
                            left-0
                            w-full
                            h-1/2
                            bg-[#ff0000]
                            flex
                            items-start
                            justify-center
                            overflow-hidden
                        "
                    >
                        <div className="pt-3 text-center">
                            <p
                                className="
                                    uppercase
                                    text-black
                                    whitespace-nowrap
                                    leading-none
                                "
                                style={{
                                    fontFamily:
                                        '"Lucidity Condensed", sans-serif',

                                    fontSize:
                                        '18px',

                                    letterSpacing:
                                        '0.472em',

                                    fontWeight:
                                        700,
                                }}
                            >
                                PORTFOLIO
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}