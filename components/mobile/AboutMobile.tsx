'use client'
import { CldImage } from 'next-cloudinary'

export default function AboutMobile() {
    return (
        <section id="about" className="bg-bg-light" style={{ paddingBottom: '72px' }}>
            {/* Full-width portrait */}
            <div className="relative w-full" style={{ height: '70svh' }}>
                <CldImage
                    src="portfolio/about/portrait"
                    alt="[Model Name] — portrait"
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                />
            </div>

            {/* Text */}
            <div className="px-6 py-10" style={{ color: '#0A0A0A' }}>
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted block mb-4">
                    About
                </span>
                <h2 className="font-display font-bold leading-tight mb-6"
                    style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: '#0A0A0A' }}>
                    The Face<br />
                    <span style={{ color: 'var(--accent-red)' }}>Behind</span><br />
                    the Frame.
                </h2>
                <p className="font-ui text-base leading-relaxed mb-4" style={{ color: '#444' }}>
                    [Model Name] is a professional model based in [City], represented by [Agency Name].
                </p>
                <p className="font-ui text-sm leading-relaxed" style={{ color: '#666' }}>
                    Featured in [Publication] and campaign work for [Brand]. Available worldwide.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t" style={{ borderColor: '#DDD' }}>
                    {[
                        { label: 'Height', value: '6\'1"' },
                        { label: 'Eyes', value: 'Brown' },
                        { label: 'Hair', value: 'Dark' },
                        { label: 'Based', value: 'London' },
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <p className="font-ui text-xs tracking-widest uppercase text-text-muted mb-1">{label}</p>
                            <p className="font-display text-2xl font-bold" style={{ color: '#0A0A0A' }}>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}