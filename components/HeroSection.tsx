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
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />

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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base font-semibold text-accent"
              >
                Welcome to CleanSwift
              </motion.p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Your Home, Sparkling Clean
              </h1>
              <p className="text-lg text-foreground/70">
                Professional cleaning services delivered to your doorstep. Book in minutes, relax while we handle the rest.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl"
              >
                Book Cleaning Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary/5"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-foreground/60">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">4.9★</p>
                <p className="text-sm text-foreground/60">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-foreground/60">Available</p>
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
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-white shadow-xl p-4 border border-border dark:bg-card"
            >
              <p className="font-semibold text-foreground">✓ Verified Pros</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
              className="absolute top-10 -right-6 rounded-xl bg-white shadow-xl p-4 border border-border dark:bg-card"
            >
              <p className="font-semibold text-accent">100% Guaranteed</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
