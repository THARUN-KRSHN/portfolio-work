import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// Only run GSAP on desktop
export function desktopOnly(fn: () => void) {
    if (typeof window === 'undefined') return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', fn)
}

export function fadeInUp(element: Element | string, delay = 0) {
    return gsap.fromTo(
        element,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, delay, ease: 'power3.out' }
    )
}

export function revealText(element: Element | string, delay = 0) {
    return gsap.fromTo(
        element,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, delay, ease: 'power3.out' }
    )
}

export { gsap, ScrollTrigger }