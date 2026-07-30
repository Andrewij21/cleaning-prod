import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FeaturesSection } from '@/components/FeaturesSection'
import { HowToOrder } from '@/components/HowToOrder'
import { Partners } from '@/components/Partners'
import { FAQ } from '@/components/FAQ'
import { Promos } from '@/components/Promos'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <ServicesGrid />
        <FeaturesSection />
        <HowToOrder />
        <Partners />
        <FAQ />
        <Promos />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
