'use client'

const publications = [
    'Vogue', 'Harper\'s Bazaar', 'GQ', 'Elle', 'Vanity Fair', 'Esquire', 'i-D', 'Dazed',
]

export default function PressDesktop() {
    return (
        <section id="press" className="py-24 bg-bg-surface border-t border-border overflow-hidden">
            <div className="px-24 mb-12">
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted">
                    04 — Press & Features
                </span>
            </div>

            {/* Marquee */}
            <div className="relative flex overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...publications, ...publications].map((pub, i) => (
                        <span key={i} className="font-display font-bold text-text-muted hover:text-text-primary transition-colors duration-300 cursor-default"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginRight: '4rem' }}>
                            {pub}
                        </span>
                    ))}
                </div>
            </div>

            {/* Pull quote */}
            <div className="px-24 mt-16 max-w-3xl">
                <p className="font-display text-2xl font-bold text-text-primary leading-relaxed">
                    "A presence that commands the frame — effortless, magnetic, unmistakable."
                </p>
                <p className="font-ui text-sm text-text-muted mt-4 tracking-widest uppercase">
                    — Vogue Italia, 2024
                </p>
            </div>
        </section>
    )
}