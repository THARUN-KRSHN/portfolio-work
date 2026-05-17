'use client'

const publications = [
    'Vogue', 'Harper\'s Bazaar', 'GQ', 'Elle', 'Vanity Fair', 'Esquire', 'i-D', 'Dazed',
]

export default function PressMobile() {
    return (
        <section id="press" className="bg-bg-surface border-t border-border px-6 py-14"
            style={{ paddingBottom: 'calc(72px + 3.5rem)' }}>
            <span className="font-ui text-xs tracking-widest uppercase text-text-muted block mb-8">
                Press & Features
            </span>
            <div className="flex flex-col gap-4">
                {publications.map(pub => (
                    <p key={pub}
                        className="font-display font-bold text-text-muted border-b border-border pb-4"
                        style={{ fontSize: 'clamp(1.5rem, 8vw, 2.5rem)' }}>
                        {pub}
                    </p>
                ))}
            </div>
            <blockquote className="mt-10">
                <p className="font-display text-lg font-bold text-text-primary leading-relaxed">
                    "A presence that commands the frame — effortless, magnetic, unmistakable."
                </p>
                <footer className="font-ui text-xs text-text-muted mt-3 tracking-widest uppercase">
                    — Vogue Italia, 2024
                </footer>
            </blockquote>
        </section>
    )
}