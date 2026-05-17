import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0A0A0A',
                'bg-surface': '#161616',
                'bg-light': '#F7F4EF',
                'accent-red': '#C41E1E',
                'text-primary': '#F0ECE6',
                'text-muted': '#6B6B6B',
                border: '#2A2A2A',
            },
            fontFamily: {
                display: ['var(--font-cormorant)', 'serif'],
                ui: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config