'use client'
import { useEffect, useRef } from 'react'
import { desktopOnly, gsap } from '@/lib/animations'

const stats = [
    { number: '8+', label: 'Years Experience', note: 'In the industry.' },
    { number: '120+', label: 'Campaigns Completed', note: 'Turning vision into reality.' },
    { number: '40+', label: 'Publications Featured', note: 'Editorial excellence.' },
    { number: '∞', label: 'Dedication', note: 'Always showing up.' },
]

export default function StatsDesktop() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!cardsRef.current) return
            gsap.fromTo(
                cardsRef.current.children,
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
                }
            )
        })
    }, [])

    return (
        <section id="stats" ref={sectionRef} className="py-32 px-24 bg-bg-primary">
            <div className="mb-16">
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted">
                    03 — By the Numbers
                </span>
            </div>
            <div ref={cardsRef} className="grid grid-cols-4 gap-0 border-t border-border">
                {stats.map(({ number, label, note }) => (
                    <div
                        key={label}
                        className="border-r border-border last:border-r-0 pt-10 pr-8"
                    >
                        <p className="font-display font-bold text-text-primary leading-none mb-6"
                            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
                            {number}
                        </p>
                        <p className="font-ui font-medium text-text-primary text-sm mb-2">{label}</p>
                        <p className="font-ui text-text-muted text-xs">{note}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}