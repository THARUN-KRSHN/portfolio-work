'use client'

import {
    useEffect,
    useRef,
} from 'react'

import {
    desktopOnly,
    gsap,
} from '@/lib/animations'

const stats = [
    {
        value: 3,
        suffix: '+',
        label: 'Years Experience',
        note: 'In the industry.',
    },
    {
        value: 6,
        suffix: '+',
        label: 'Campaigns Completed',
        note: 'Turning vision into reality.',
    },
    {
        value: 1,
        suffix: '+',
        label: 'Publications Featured',
        note: 'Editorial excellence.',
    },
    {
        value: 999,
        suffix: '∞',
        label: 'Dedication',
        note: 'Always showing up.',
    },
]

export default function StatsDesktop() {
    const sectionRef =
        useRef<HTMLDivElement>(null)

    const cardsRef =
        useRef<HTMLDivElement>(null)

    useEffect(() => {
        desktopOnly(() => {
            if (!cardsRef.current) return

            gsap.fromTo(
                cardsRef.current.children,
                {
                    opacity: 0,
                    y: 60,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',

                    scrollTrigger: {
                        trigger:
                            sectionRef.current,
                        start: 'top 70%',
                    },
                }
            )

            const numbers =
                cardsRef.current.querySelectorAll(
                    '.counter'
                )

            numbers.forEach((num, i) => {
                if (i === 3) return

                const stat = stats[i]

                gsap.fromTo(
                    num,
                    { innerText: 0 },
                    {
                        innerText:
                            stat.value,
                        duration: 2,
                        ease: 'power2.out',
                        snap: {
                            innerText: 1,
                        },

                        scrollTrigger: {
                            trigger:
                                sectionRef.current,
                            start:
                                'top 70%',
                        },

                        onUpdate: function () {
                            num.innerHTML =
                                Math.floor(
                                    Number(
                                        num.innerHTML
                                    )
                                ) +
                                stat.suffix
                        },
                    }
                )
            })
        })
    }, [])

    return (
        <section
            id="stats"
            ref={sectionRef}
            className="py-32 px-24 bg-black"
        >
            <div className="mb-20">
                <span className="font-ui text-xs tracking-[0.25em] uppercase text-white hover:text-red-500 transition-colors duration-300">
                    03 — By the Numbers
                </span>
            </div>

            <div
                ref={cardsRef}
                className="grid grid-cols-4 border-t border-neutral-800"
            >
                {stats.map(
                    ({
                        suffix,
                        label,
                        note,
                    }) => (
                        <div
                            key={label}
                            className="group border-r border-neutral-800 last:border-r-0 pt-12 pr-10"
                        >
                            <p
                                className="counter font-display font-bold leading-none mb-8 text-white group-hover:text-red-500 transition-colors duration-300"
                                style={{
                                    fontSize:
                                        'clamp(4rem, 7vw, 7rem)',
                                }}
                            >
                                {suffix ===
                                    '∞'
                                    ? '∞'
                                    : `0${suffix}`}
                            </p>

                            <p className="font-ui text-lg text-white group-hover:text-red-500 transition-colors duration-300 mb-3">
                                {label}
                            </p>

                            <p className="font-ui text-sm text-neutral-500 group-hover:text-red-400 transition-colors duration-300">
                                {note}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}