import type { Metadata } from 'next'
import { Cormorant_Garant, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garant({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '[Model Name] — Portfolio',
  description: 'Official modelling portfolio of [Model Name]. Available for editorial, runway, and commercial bookings.',
  openGraph: {
    title: '[Model Name] — Portfolio',
    description: 'Official modelling portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}