import { Header } from '@/components/Header'
import { PromoHeroCarousel } from '@/components/PromoHeroCarousel'
import { PromoCardsGrid } from '@/components/PromoCardsGrid'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'

export default function PromoPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <PromoHeroCarousel />
        <PromoCardsGrid />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
