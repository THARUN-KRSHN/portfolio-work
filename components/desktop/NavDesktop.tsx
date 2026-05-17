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
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('hero')

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        sections.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id) },
                { threshold: 0.4 }
            )
            obs.observe(el)
            observers.push(obs)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [])

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <>
            {/* Top bar */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
                <div className="font-display text-xl font-bold tracking-widest text-text-primary">
                    [MODEL NAME]
                </div>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 text-xs font-ui tracking-widest uppercase text-text-muted">
                        <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                        Available for Bookings
                    </span>
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        className="flex flex-col gap-1.5 p-2"
                    >
                        <span className="block w-6 h-px bg-text-primary" />
                        <span className="block w-4 h-px bg-text-primary" />
                        <span className="block w-6 h-px bg-text-primary" />
                    </button>
                </div>
            </header>

            {/* Left sidebar */}
            <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
                {sections.map(({ id, num }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        aria-label={`Navigate to ${id}`}
                        className={clsx(
                            'text-xs font-ui tracking-widest transition-colors duration-300',
                            active === id ? 'text-accent-red' : 'text-text-muted hover:text-text-primary'
                        )}
                    >
                        {num}
                    </button>
                ))}
            </nav>

            {/* Full screen menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-[100] bg-bg-primary flex flex-col justify-center px-24">
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-8 right-8 text-text-muted hover:text-text-primary text-3xl"
                    >
                        ×
                    </button>
                    <nav className="flex flex-col gap-4">
                        {sections.map(({ id, label, num }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className="group flex items-baseline gap-6 text-left"
                            >
                                <span className="text-sm text-accent-red font-ui">{num}</span>
                                <span className="font-display text-7xl font-bold text-text-primary group-hover:text-accent-red transition-colors duration-300 leading-none">
                                    {label}
                                </span>
                            </button>
                        ))}
                    </nav>
                    <div className="absolute bottom-8 left-24 text-xs text-text-muted font-ui tracking-widest uppercase">
                        Portfolio · 2026
                    </div>
                </div>
            )}
        </>
    )
}