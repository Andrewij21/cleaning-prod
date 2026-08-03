import { AboutHero } from '@/components/AboutHero'
import { AboutStats } from '@/components/AboutStats'
import { Timeline } from '@/components/Timeline'
import { OurStory } from '@/components/OurStory'
import { JoinUs } from '@/components/JoinUs'

export const metadata = {
  title: 'Tentang KliknClean - Jasa Kebersihan Terpercaya',
  description: 'Pelajari tentang KliknClean, layanan kebersihan profesional yang tersedia di 9+ kota Indonesia.',
}

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <AboutStats />
      <Timeline />
      <OurStory />
      <JoinUs />
    </main>
  )
}
