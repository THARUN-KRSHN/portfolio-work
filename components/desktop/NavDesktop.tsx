'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'

const sections = [
    { id: 'hero', label: 'Home', num: '00' },
    { id: 'gallery', label: 'Portfolio', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'stats', label: 'Credentials', num: '03' },
    { id: 'contact', label: 'Contact', num: '04' },
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
            const el = document.getElementById(id)

            if (!el) return

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting)
                        setActive(id)
                },
                { threshold: 0.4 }
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
            setScrolled(window.scrollY > 40)
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
            {/* Top Header */}
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 transition-all duration-500',
                    scrolled
                        ? 'bg-white/80 backdrop-blur-md'
                        : 'bg-transparent'
                )}
            >
                {/* Brand */}
                <div className="font-display text-2xl font-bold tracking-[0.25em] text-black">
                    ASHIK K F
                </div>

                {/* Right side */}
                <div className="flex items-center gap-8">
                    <span className="flex items-center gap-2 text-[11px] font-ui tracking-[0.25em] uppercase text-black/70">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Available For Bookings
                    </span>

                    {/* Menu Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        className="flex flex-col gap-1.5 p-2 group"
                    >
                        <span className="block w-7 h-px bg-black transition-all duration-300 group-hover:w-5" />

                        <span className="block w-5 h-px bg-black transition-all duration-300 group-hover:w-7" />

                        <span className="block w-7 h-px bg-black transition-all duration-300 group-hover:w-5" />
                    </button>
                </div>
            </header>

            {/* Left Side Navigation */}
            <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
                {sections.map(({ id, num }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        aria-label={`Navigate to ${id}`}
                        className={clsx(
                            'text-xs font-ui tracking-[0.25em] transition-all duration-300',
                            active === id
                                ? 'text-red-500'
                                : 'text-black/40 hover:text-black'
                        )}
                    >
                        {num}
                    </button>
                ))}
            </nav>

            {/* Fullscreen Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-[100] bg-white flex flex-col justify-center px-24">
                    {/* Close */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-8 right-10 text-black/50 hover:text-black text-5xl transition-colors"
                    >
                        ×
                    </button>

                    {/* Links */}
                    <nav className="flex flex-col gap-5">
                        {sections.map(
                            ({ id, label, num }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className="group flex items-baseline gap-8 text-left"
                                >
                                    <span className="text-sm text-red-500 font-ui tracking-widest">
                                        {num}
                                    </span>

                                    <span className="font-display text-7xl font-bold text-black group-hover:text-red-500 transition-colors duration-300 leading-none">
                                        {label}
                                    </span>
                                </button>
                            )
                        )}
                    </nav>

                    {/* Footer */}
                    <div className="absolute bottom-10 left-24 text-xs text-black/40 font-ui tracking-[0.25em] uppercase">
                        Portfolio · 2026
                    </div>
                </div>
            )}
        </>
    )
}