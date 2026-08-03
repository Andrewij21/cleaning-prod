'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function JoinUs() {
  return (
    <section className="py-20 bg-primary rounded-3xl mx-4 my-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Gabung Menjadi Bagian KliknClean
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Bergabunglah menjadi bagian dari KliknClean dan wujudkan layanan kebersihan terbaik di Indonesia!
            </p>

            <div className="flex gap-4 flex-wrap pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Bergabung Jadi Partner
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Daftar Sebagai Helper
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Team Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-80 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-cleaning.png"
              alt="KliknClean Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
