'use client'

const stats = [
    { number: '8+', label: 'Years Experience', note: 'In the industry.' },
    { number: '120+', label: 'Campaigns', note: 'Completed.' },
    { number: '40+', label: 'Publications', note: 'Featured in.' },
    { number: '∞', label: 'Dedication', note: 'Always.' },
]

export default function StatsMobile() {
    return (
        <section id="stats" className="bg-bg-primary px-6 py-16" style={{ paddingBottom: 'calc(72px + 4rem)' }}>
            <span className="font-ui text-xs tracking-widest uppercase text-text-muted block mb-10">
                By the Numbers
            </span>
            <div className="grid grid-cols-2 gap-0">
                {stats.map(({ number, label, note }, i) => (
                    <div
                        key={label}
                        className="py-8 pr-6"
                        style={{
                            borderBottom: '1px solid var(--border)',
                            borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                            paddingLeft: i % 2 === 1 ? '1.5rem' : '0',
                        }}
                    >
                        <p className="font-display font-bold text-text-primary leading-none mb-3"
                            style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)' }}>
                            {number}
                        </p>
                        <p className="font-ui text-sm font-medium text-text-primary">{label}</p>
                        <p className="font-ui text-xs text-text-muted mt-1">{note}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}