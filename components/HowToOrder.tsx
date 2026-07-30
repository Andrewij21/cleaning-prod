'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: 1,
    title: 'Pilih Layanan',
    description: 'Pilih layanan sesuai dengan kebutuhanmu',
  },
  {
    number: 2,
    title: 'Lengkapi Detail Pesanan',
    description: 'Isi data diri, tentukan durasi atau item yang ingin dibersihkan, serta jadwalkan pengerjaan.',
  },
  {
    number: 3,
    title: 'Lakukan Pembayaran',
    description: 'Pilih metode pembayaran yang tersedia dan selesaikan transaksi.',
  },
  {
    number: 4,
    title: 'Helper KliknClean Siap Membantu!',
    description: 'Setelah pesanan terkonfirmasi, Helper akan datang sesuai jadwal yang telah ditentukan!',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function HowToOrder() {
  return (
    <section className="bg-primary py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Cara Memesan Layanan di KliknClean:
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative h-96 w-48">
              <Image
                src="/hero-cleaning.png"
                alt="KliknClean App"
                fill
                className="object-cover rounded-3xl border-8 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right side - Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="flex gap-6">
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/90">{step.description}</p>
                </div>

                {/* Arrow indicators */}
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="ml-auto flex items-center text-white/60"
                  >
                    <span className="text-3xl">↓</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
