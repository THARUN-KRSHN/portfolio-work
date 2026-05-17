'use client'
import ContactForm from '@/components/shared/ContactForm'

const socials = [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Agency', href: '#' },
]

export default function ContactMobile() {
    return (
        <section
            id="contact"
            className="bg-bg-primary border-t border-border"
            style={{ paddingBottom: 'calc(72px + 2rem)' }}
        >

            {/* Header */}
            <div className="px-6 pt-14 pb-10">
                <span className="font-ui text-xs tracking-widest uppercase text-text-muted block mb-4">
                    Contact
                </span>
                <h2
                    className="font-display font-bold text-text-primary leading-none mb-3"
                    style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)' }}
                >
                    Let's Work<br />
                    <span style={{ color: 'var(--accent-red)' }}>Together.</span>
                </h2>
                <p className="font-ui text-sm text-text-muted leading-relaxed">
                    Fill out the form below and we'll respond within 48 hours.
                </p>
            </div>

            {/* Form */}
            <div className="px-6 pb-12 border-b border-border">
                <ContactForm />
            </div>

            {/* Socials */}
            <div className="px-6 py-10 border-b border-border">
                <h3 className="font-ui text-xs tracking-widest uppercase text-text-muted mb-4">
                    Follow
                </h3>
                <div className="flex flex-col divide-y divide-border">
                    {socials.map(({ label, href }) => (

                        key = { label }
              href = { href }
              target = "_blank"
              rel = "noopener noreferrer"
              className = "flex justify-between items-center py-5 font-display text-2xl font-bold
                text - text - primary hover:text-accent-red transition-colors duration-300"
            >
                    {label}
                    <span className="text-text-muted text-xl">↗</span>
                </a>
          ))}
            </div>
        </div>

      {/* Footer */ }
    <div className="px-6 py-6 text-center">
        <p className="font-ui text-xs text-text-muted">
            [Model Name] · © 2026 · Available worldwide
        </p>
    </div>

    </section >
  )
}