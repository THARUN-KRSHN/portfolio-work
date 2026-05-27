'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { CldImage } from 'next-cloudinary'
import { logoImage } from '@/lib/cloudinary'

const sections = [
    { id: 'hero', num: '00' },
    { id: 'gallery', num: '01' },
    { id: 'about', num: '02' },
    { id: 'stats', num: '03' },
    { id: 'press', num: '04' },
    { id: 'contact', num: '05' },
]

export default function NavDesktop() {
    const [menuOpen, setMenuOpen] =
        useState(false)

    const [active, setActive] =
        useState('hero')

    const [scrolled, setScrolled] =
        useState(false)

    useEffect(() => {
        const observers: IntersectionObserver[] =
            []

        sections.forEach(({ id }) => {
            const el =
                document.getElementById(id)

            if (!el) return

            const obs =
                new IntersectionObserver(
                    ([entry]) => {
                        if (
                            entry.isIntersecting
                        ) {
                            setActive(id)
                        }
                    },
                    {
                        threshold: 0.45,
                    }
                )

            obs.observe(el)
            observers.push(obs)
        })

        return () =>
            observers.forEach((o) =>
                o.disconnect()
            )
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                window.scrollY > 40
            )
        }

        window.addEventListener(
            'scroll',
            handleScroll
        )

        return () =>
            window.removeEventListener(
                'scroll',
                handleScroll
            )
    }, [])

    const scrollTo = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: 'smooth',
            })

        setMenuOpen(false)
    }

    return (
        <>
            {/* NAV */}
            <header
                className={clsx(
                    `
                    fixed
                    left-1/2
                    -translate-x-1/2
                    z-[100]
                    transition-all
                    duration-700
                    ease-in-out
                `,
                    scrolled
                        ? 'w-[42vw] top-[calc(100vh-6rem)]'
                        : 'w-[62vw] top-6'
                )}
            >
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        rounded-full
                        border
                        border-white/10
                        bg-black/85
                        backdrop-blur-xl
                        px-8
                        py-5
                        shadow-[0_10px_40px_rgba(255,0,0,0.12)]
                    "
                >
                    {/* LOGO */}
                    <button
                        onClick={() =>
                            scrollTo('hero')
                        }
                        className="
                            group
                            flex
                            items-center
                            gap-4
                        "
                    >
                        <div
                            className="
                                relative
                                h-11
                                w-11
                                overflow-hidden
                                rounded-full
                                border
                                border-red-500/30
                            "
                        >
                            <CldImage
                                src={
                                    logoImage.publicId
                                }
                                alt={
                                    logoImage.alt
                                }
                                fill
                                sizes="44px"
                                className="object-cover"
                            />
                        </div>

                        <span
                            className="
                                font-display
                                text-lg
                                font-bold
                                tracking-[0.35em]
                                text-white
                                transition-colors
                                duration-300
                                group-hover:text-red-500
                            "
                        >
                            ASHIK K F
                        </span>
                    </button>

                    {/* RIGHT */}
                    <div className="flex items-center gap-8">
                        {/* STATUS */}
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                font-ui
                                text-[11px]
                                uppercase
                                tracking-[0.3em]
                                text-white/70
                            "
                        >
                            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

                            <span>
                                Available For
                                Bookings
                            </span>
                        </div>

                        {/* MENU */}
                        <button
                            onClick={() =>
                                setMenuOpen(
                                    true
                                )
                            }
                            className="
                                group
                                flex
                                flex-col
                                gap-1.5
                            "
                            aria-label="Open menu"
                        >
                            <span
                                className="
                                    h-px
                                    w-8
                                    bg-white
                                    transition-all
                                    duration-300
                                    group-hover:bg-red-500
                                    group-hover:w-6
                                "
                            />

                            <span
                                className="
                                    h-px
                                    w-5
                                    bg-white
                                    transition-all
                                    duration-300
                                    group-hover:bg-red-500
                                    group-hover:w-8
                                "
                            />

                            <span
                                className="
                                    h-px
                                    w-8
                                    bg-white
                                    transition-all
                                    duration-300
                                    group-hover:bg-red-500
                                    group-hover:w-6
                                "
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* LEFT NAV */}
            <nav
                className="
                    fixed
                    left-8
                    top-1/2
                    z-40
                    flex
                    -translate-y-1/2
                    flex-col
                    gap-6
                "
            >
                {sections.map(
                    ({ id, num }) => (
                        <button
                            key={id}
                            onClick={() =>
                                scrollTo(id)
                            }
                            className={clsx(
                                `
                                text-xs
                                font-ui
                                tracking-[0.3em]
                                transition-all
                                duration-300
                            `,
                                active === id
                                    ? 'text-red-500'
                                    : 'text-white/20 hover:text-white'
                            )}
                        >
                            {num}
                        </button>
                    )
                )}
            </nav>

            {/* FULLSCREEN MENU */}
            {/* FULLSCREEN MENU */}
            {menuOpen && (
                <div
                    className="
            fixed
            inset-0
            z-[200]
            bg-black
            text-white
        "
                >
                    {/* BG GLOW */}
                    <div
                        className="
                absolute
                inset-0
                pointer-events-none
                bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_70%)]
            "
                    />

                    {/* CLOSE */}
                    <button
                        onClick={() =>
                            setMenuOpen(false)
                        }
                        aria-label="Close menu"
                        className="
                absolute
                z-[300]
                right-10
                top-8
                text-6xl
                leading-none
                text-white/40
                transition-all
                duration-300
                hover:text-red-500
                hover:rotate-90
            "
                    >
                        ×
                    </button>

                    {/* LINKS */}
                    <div
                        className="
                relative
                z-10
                flex
                h-full
                flex-col
                justify-center
                px-24
            "
                    >
                        <nav className="flex flex-col gap-6">
                            {sections.map(
                                ({ id, num }) => (
                                    <button
                                        key={id}
                                        onClick={() =>
                                            scrollTo(id)
                                        }
                                        className="
                                group
                                flex
                                items-center
                                gap-8
                                text-left
                            "
                                    >
                                        <span
                                            className="
                                    font-ui
                                    text-sm
                                    tracking-[0.3em]
                                    text-red-500
                                "
                                        >
                                            {num}
                                        </span>

                                        <span
                                            className="
                                    font-display
                                    text-7xl
                                    font-bold
                                    capitalize
                                    text-white
                                    transition-all
                                    duration-300
                                    group-hover:translate-x-3
                                    group-hover:text-red-500
                                "
                                        >
                                            {id}
                                        </span>
                                    </button>
                                )
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}