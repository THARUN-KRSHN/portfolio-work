'use client'
import { useMediaQuery } from '@/lib/useMediaQuery'

// Desktop
import NavDesktop from '@/components/desktop/NavDesktop'
import HeroDesktop from '@/components/desktop/HeroDesktop'
import GalleryDesktop from '@/components/desktop/GalleryDesktop'
import AboutDesktop from '@/components/desktop/AboutDesktop'
import StatsDesktop from '@/components/desktop/StatsDesktop'
import PressDesktop from '@/components/desktop/PressDesktop'
import ContactDesktop from '@/components/desktop/ContactDesktop'

// Mobile
import NavMobile from '@/components/mobile/NavMobile'
import HeroMobile from '@/components/mobile/HeroMobile'
import GalleryMobile from '@/components/mobile/GalleryMobile'
import AboutMobile from '@/components/mobile/AboutMobile'
import StatsMobile from '@/components/mobile/StatsMobile'
import PressMobile from '@/components/mobile/PressMobile'
import ContactMobile from '@/components/mobile/ContactMobile'

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 767px)')

  if (isMobile) {
    return (
      <main id="main-content">
        <NavMobile />
        <HeroMobile />
        <GalleryMobile />
        <AboutMobile />
        <StatsMobile />
        <PressMobile />
        <ContactMobile />
      </main>
    )
  }

  return (
    <main id="main-content">
      <NavDesktop />
      <HeroDesktop />
      <GalleryDesktop />
      <AboutDesktop />
      <StatsDesktop />
      <PressDesktop />
      <ContactDesktop />
    </main>
  )
}