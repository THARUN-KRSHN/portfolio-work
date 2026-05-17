'use client'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

const tabs = [
    { id: 'hero', label: 'Home', icon: '⌂' },
    { id: 'gallery', label: 'Portfolio', icon: '◫' },
    { id: 'about', label: 'About', icon: '◉' },
    { id: 'stats', label: 'Info', icon: '◈' },
    { id: 'contact', label: 'Contact', icon: '◎' },
]

export default function NavMobile() {
    const [active, setActive] = useState('hero')

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        tabs.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id) },
                { threshold: 0.5 }
            )
            obs.observe(el)
            observers.push(obs)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [])

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 bg-bg-surface border-t border-border"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            <div className="flex justify-around items-center h-[72px]">
                {tabs.map(({ id, label, icon }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        aria-label={`Navigate to ${label}`}
                        className={clsx(
                            'flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center',
                            'transition-colors duration-200',
                            active === id ? 'text-accent-red' : 'text-text-muted'
                        )}
                    >
                        <span className="text-lg leading-none">{icon}</span>
                        <span className="font-ui text-[10px] tracking-wider uppercase">{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    )
}