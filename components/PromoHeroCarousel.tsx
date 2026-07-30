'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export function PromoHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      partner: 'Otoklix',
      title: 'Berkendara Aman, Servis Gak Jadi Beban!',
      discount: 'Diskon service sampai 50% dari Otoklix',
      services: ['Ganti Oli', 'Tune Up', 'Spooring', 'Service Rem'],
      code: 'KNCXOTOKLIX',
      image: '/promo-1.png',
    },
    {
      id: 2,
      partner: 'BCA',
      title: 'Hanya untuk Pemegang Kartu Kredit BCA',
      discount: 'Dapatkan Diskon 20%',
      services: ['General Cleaning', 'Sofa Cleaning', 'Carpet Cleaning', 'AC Service'],
      code: 'KNCBCA26',
      image: '/promo-2.png',
    },
    {
      id: 3,
      partner: 'Spark Sports',
      title: 'Diskon s.d 750RB untuk Member',
      discount: 'Khusus untuk Kelas Sparks Sports Academy',
      services: ['Free Cleaning', 'Fast Service', 'Premium Quality', 'Guaranteed'],
      code: 'KNCXSPARKS',
      image: '/promo-3.png',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="container px-4">
        <div className="relative">
          {/* Carousel */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-72 md:h-96 rounded-3xl overflow-hidden"
          >
            {/* Background gradient - Teal to Orange */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-40 -z-10" />

            {/* Mock background image overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 -z-10" />

            <div className="h-full flex items-center justify-between px-8 md:px-16 py-8">
              {/* Left content */}
              <div className="flex-1 text-white z-10 max-w-xl">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm md:text-base font-semibold mb-2 opacity-90">
                    Partnership with
                  </p>
                  <p className="text-2xl md:text-3xl font-bold mb-4">
                    {slides[currentSlide].partner}
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {slides[currentSlide].title}
                  </h2>

                  <p className="text-lg md:text-xl font-semibold mb-6">
                    {slides[currentSlide].discount}
                  </p>

                  {/* Services */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {slides[currentSlide].services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="text-sm md:text-base">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Promo code */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-8 py-3 font-bold text-white"
                  >
                    Kode promo: {slides[currentSlide].code}
                  </motion.button>
                </motion.div>
              </div>

              {/* Right side - decorative */}
              <div className="hidden md:flex flex-1 justify-end items-center">
                <div className="text-white opacity-20 text-6xl">
                  {slides[currentSlide].partner}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/80 hover:bg-secondary text-white rounded-full p-3 transition-all"
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/80 hover:bg-secondary text-white rounded-full p-3 transition-all"
          >
            →
          </motion.button>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'bg-secondary w-8'
                    : 'bg-muted w-3 hover:bg-muted/70'
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
