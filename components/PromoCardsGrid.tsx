'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export function PromoCardsGrid() {
  const [selectedService, setSelectedService] = useState('Semua Layanan')
  const [selectedLocation, setSelectedLocation] = useState('Semua Lokasi')
  const [selectedCampaign, setSelectedCampaign] = useState('Semua Campaign')
  const [currentPage, setCurrentPage] = useState(1)

  const promos = [
    {
      id: 1,
      image: '/promo-card-1.png',
      title: 'POINTASTIC PAYDAY! : Bonus 100% KlikPoin Setiap Transaksi (up to 7.000 KlikPoin)',
      startDate: '27 Juli 2026',
      endDate: '31 Juli 2026',
      service: 'General Cleaning',
      location: 'Jakarta',
      campaign: 'Pointastic',
    },
    {
      id: 2,
      image: '/promo-card-2.png',
      title: 'Promo Khusus Nasabah BCA Solitaire & BCA Prioritas : Diskon Rp 100.000 untuk Hydro Cleaning & Wet Vacuum',
      startDate: '01 Juli 2026',
      endDate: '30 Juni 2027',
      service: 'Hydro Cleaning',
      location: 'Tangerang',
      campaign: 'BCA Partnership',
    },
    {
      id: 3,
      image: '/promo-card-3.png',
      title: 'Promo Khusus Nasabah BCA Solitaire & BCA Prioritas : Diskon Rp 50.000 untuk Pengguna Baru',
      startDate: '01 Juli 2026',
      endDate: '30 Juni 2027',
      service: 'Deep Cleaning',
      location: 'Depok',
      campaign: 'BCA Partnership',
    },
    {
      id: 4,
      image: '/promo-card-1.png',
      title: 'Diskon s.d 750RB Kelas Sparks Sports Academy & Sparks Swim',
      startDate: '09 Juli 2026',
      endDate: '31 Desember 2026',
      service: 'Home Service',
      location: 'Bekasi',
      campaign: 'Sparks Sports',
    },
    {
      id: 5,
      image: '/promo-card-2.png',
      title: 'Gratis Semua Kelas di Seluruh Lokasi RockStar Academy',
      startDate: '15 Juli 2026',
      endDate: '30 September 2026',
      service: 'General Cleaning',
      location: 'Bogor',
      campaign: 'RockStar',
    },
    {
      id: 6,
      image: '/promo-card-3.png',
      title: 'Ciptakan Memori, Temani Si Kecil Bereksploras di Gatari Edudays',
      startDate: '20 Juli 2026',
      endDate: '31 Agustus 2026',
      service: 'AC Service',
      location: 'Jakarta',
      campaign: 'Gatari',
    },
  ]

  const services = ['Semua Layanan', 'General Cleaning', 'Hydro Cleaning', 'Deep Cleaning', 'AC Service', 'Home Service']
  const locations = ['Semua Lokasi', 'Jakarta', 'Tangerang', 'Depok', 'Bekasi', 'Bogor']
  const campaigns = ['Semua Campaign', 'Pointastic', 'BCA Partnership', 'Sparks Sports', 'RockStar', 'Gatari']

  const filteredPromos = promos.filter(
    (promo) =>
      (selectedService === 'Semua Layanan' || promo.service === selectedService) &&
      (selectedLocation === 'Semua Lokasi' || promo.location === selectedLocation) &&
      (selectedCampaign === 'Semua Campaign' || promo.campaign === selectedCampaign)
  )

  const itemsPerPage = 3
  const totalPages = Math.ceil(filteredPromos.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const displayedPromos = filteredPromos.slice(startIdx, startIdx + itemsPerPage)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
        >
          Lihat Semua Promo Terbaik
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Layanan
            </label>
            <select
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Lokasi
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Campaign
            </label>
            <select
              value={selectedCampaign}
              onChange={(e) => {
                setSelectedCampaign(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {campaigns.map((campaign) => (
                <option key={campaign} value={campaign}>
                  {campaign}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Promo Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 mb-12"
        >
          {displayedPromos.map((promo) => (
            <motion.div key={promo.id} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-3">
                    {promo.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-6">
                    <span>📅</span>
                    <span>
                      {promo.startDate} - {promo.endDate}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full rounded-lg bg-foreground/10 py-3 font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    Lihat Detail
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-10 w-10 rounded-full border border-border text-foreground disabled:opacity-50"
          >
            ←
          </motion.button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <motion.button
              key={idx + 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(idx + 1)}
              className={`h-10 w-10 rounded-full font-semibold transition-all ${
                currentPage === idx + 1
                  ? 'bg-secondary text-white'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              {idx + 1}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="h-10 w-10 rounded-full border border-border text-foreground disabled:opacity-50"
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  )
}
