'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const promos = [
  {
    id: 1,
    title: 'Hanya untuk Pemegang Kartu Kredit BCA',
    subtitle: 'Diskon 20%',
    description: 'Diskon untuk layanan KliknClean',
    promo_code: 'KNCBCA26',
    period: '26 Januari - 31 Desember 2026',
    bg: 'bg-gradient-to-br from-[#1e88e5] to-[#1565c0]',
  },
  {
    id: 2,
    title: 'Berkendara Aman, Servis Gak Jadi Beban!',
    subtitle: 'Diskon hingga 50%',
    description: 'Diskon service sampai 50% dari Otoklix',
    promo_code: 'KNCXOTOKLIX',
    benefits: ['Ganti Oli', 'Tune Up', 'Spooring', 'Service Rem'],
    bg: 'bg-gradient-to-br from-secondary to-orange-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Promos() {
  return (
    <section className="bg-background py-20">
      <div className="container px-4">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Promo Special Untuk kamu
            </h2>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-full border-2 border-foreground px-6 py-2 text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Lihat Selengkapnya →
          </motion.button>
        </div>

        {/* Promos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {promos.map((promo, index) => (
            <motion.div key={promo.id} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`${promo.bg} rounded-2xl p-8 text-white overflow-hidden relative shadow-lg hover:shadow-2xl transition-all`}
              >
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-2xl font-bold">{promo.title}</h3>
                  <p className="mb-6 text-sm opacity-90">{promo.description}</p>

                  {/* Discount badge */}
                  {promo.subtitle && (
                    <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 backdrop-blur">
                      <p className="text-lg font-bold">{promo.subtitle}</p>
                    </div>
                  )}

                  {/* Benefits or Period */}
                  {promo.benefits ? (
                    <div className="mb-6 grid grid-cols-2 gap-2">
                      {promo.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <span className="text-lg">✓</span>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mb-6 text-xs opacity-75">{promo.period}</p>
                  )}

                  {/* Promo Code */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block rounded-lg bg-white/10 px-4 py-2 backdrop-blur"
                  >
                    <p className="text-xs opacity-75">Kode promo:</p>
                    <p className="font-mono font-bold text-lg">{promo.promo_code}</p>
                  </motion.div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
