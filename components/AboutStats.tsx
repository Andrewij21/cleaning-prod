'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AboutStats() {
  return (
    <section className="py-16 bg-primary/80">
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Stats */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-3">12+ Layanan</h2>
              <p className="text-white/90 leading-relaxed">
                KliknClean telah memiliki 13 layanan yang tersedia, mulai dari General Cleaning, Deep Cleaning, Layanan AC, Hydro Cleaning, Cuci kasur, Sofa & Karpet, Cuci Mobil, Setrika, Pest Control, Poles Marmer & Granit, Fogging Disinfektan, Treatment Kolam Renang, Steam Cleaning, Paket Layanan, dan Prepaid.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-3">9+ Kota</h2>
              <p className="text-white/90 leading-relaxed">
                Hadir memberikan solusi bagi kamu yang tinggal di area Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Surabaya dan Bali.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-3">30+ Partner</h2>
              <p className="text-white/90 leading-relaxed">
                KliknClean percaya bahwa kolaborasi adalah kunci untuk layanan terbaik, karena bekerja sama dengan mitra yang handal memungkinkan kami terus berkembang dan meningkatkan kualitas.
              </p>
            </motion.div>
          </div>

          {/* Right side - Illustration placeholder with service icons */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Center mascot circle */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center border-4 border-white">
                  <div className="text-6xl">👍</div>
                </div>
              </motion.div>

              {/* Orbiting service icons */}
              {[
                { icon: '🏠', angle: 0 },
                { icon: '🧹', angle: 45 },
                { icon: '💼', angle: 90 },
                { icon: '🧽', angle: 135 },
                { icon: '🚗', angle: 180 },
                { icon: '❄️', angle: 225 },
                { icon: '📱', angle: 270 },
                { icon: '⚡', angle: 315 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, linear: true }}
                  className="absolute w-full h-full"
                >
                  <div
                    className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${item.angle}deg) translateY(-120px) rotate(-${item.angle}deg)`,
                    }}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
