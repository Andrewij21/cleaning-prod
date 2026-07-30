'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-48 h-48 rounded-full bg-accent/10 -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/10 -z-10"
      />

      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Jasa Cleaning Service Terbaik Se-Indonesia
              </h1>
              <p className="text-lg text-foreground/70">
                Bersama KlikNClean bersih-bersih rumah hingga furniture hanya dengan satu <span className="text-primary font-semibold">Klik!</span>
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-[#2A3F5F] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              >
                Pesan Sekarang
              </motion.button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div variants={itemVariants} className="grid grid-cols-5 gap-4 pt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl">🛡️</span>
                </div>
                <p className="text-xs text-foreground/60 text-center font-medium">Terpercaya</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary text-xl">⚙️</span>
                </div>
                <p className="text-xs text-foreground/60 text-center font-medium">Berkualitas</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">✋</span>
                </div>
                <p className="text-xs text-foreground/60 text-center font-medium">Cepat</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl">📅</span>
                </div>
                <p className="text-xs text-foreground/60 text-center font-medium">Fleksibel</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary text-xl">👔</span>
                </div>
                <p className="text-xs text-foreground/60 text-center font-medium">Professional</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-[500px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/hero-cleaning.png"
                alt="Professional cleaning service"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Decorative striped accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32">
              <div className="w-full h-full bg-gradient-to-tr from-primary to-accent opacity-20 rounded-lg transform rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
