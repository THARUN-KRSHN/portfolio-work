'use client'

import {
    useEffect,
    useRef,
} from 'react'

import { gsap } from '@/lib/animations'

const stats = [
    {
        value: 8,
        suffix: '+',
        label: 'Years Experience',
        note: 'In the industry.',
    },
    {
        value: 120,
        suffix: '+',
        label: 'Campaigns',
        note: 'Completed.',
    },
    {
        value: 40,
        suffix: '+',
        label: 'Publications',
        note: 'Featured in.',
    },
    {
        value: 999,
        suffix: '∞',
        label: 'Dedication',
        note: 'Always.',
    },
]

export default function StatsMobile() {
    const statsRef =
        useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!statsRef.current) return

        const numbers =
            statsRef.current.querySelectorAll(
                '.mobile-counter'
            )

        numbers.forEach((num, i) => {
            if (i === 3) return

            const stat = stats[i]

            gsap.fromTo(
                num,
                { innerText: 0 },
                {
                    innerText: stat.value,
                    duration: 2,
                    snap: {
                        innerText: 1,
                    },

                    scrollTrigger: {
                        trigger:
                            statsRef.current,
                        start: 'top 80%',
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
    }, [])

    return (
        <section
            id="stats"
            className="bg-black px-6 py-16"
            style={{
                paddingBottom:
                    'calc(72px + 4rem)',
            }}
        >
            <span className="font-ui text-xs tracking-[0.25em] uppercase text-white block mb-10">
                03 — By the Numbers
            </span>

            <div
                ref={statsRef}
                className="grid grid-cols-2"
            >
                {stats.map(
                    ({
                        suffix,
                        label,
                        note,
                    }, i) => (
                        <div
                            key={label}
                            className="group py-8 pr-6"
                            style={{
                                borderBottom:
                                    '1px solid #262626',

                                borderRight:
                                    i % 2 === 0
                                        ? '1px solid #262626'
                                        : 'none',

                                paddingLeft:
                                    i % 2 === 1
                                        ? '1.5rem'
                                        : '0',
                            }}
                        >
                            <p
                                className="mobile-counter font-display font-bold leading-none mb-4 text-white group-hover:text-red-500 transition-colors duration-300"
                                style={{
                                    fontSize:
                                        'clamp(3rem, 12vw, 5rem)',
                                }}
                            >
                                {suffix ===
                                    '∞'
                                    ? '∞'
                                    : `0${suffix}`}
                            </p>

                            <p className="font-ui text-base text-white group-hover:text-red-500 transition-colors duration-300">
                                {label}
                            </p>

                            <p className="font-ui text-xs text-neutral-500 mt-2 group-hover:text-red-400 transition-colors duration-300">
                                {note}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}