'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Quick Booking',
    description: 'Book a cleaning service in just 2 minutes. No hassle, no complications.',
  },
  {
    icon: '🔐',
    title: 'Verified Cleaners',
    description: 'All our professionals are background-checked and fully trained.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'No hidden fees. You know exactly what you are paying for.',
  },
  {
    icon: '⭐',
    title: 'Quality Guaranteed',
    description: 'If you are not satisfied, we will return and reclean for free.',
  },
  {
    icon: '📱',
    title: 'Real-time Tracking',
    description: 'Track your cleaner in real-time and get live updates.',
  },
  {
    icon: '🛡️',
    title: 'Insurance Coverage',
    description: 'Every service is covered by our comprehensive insurance policy.',
  },
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose CleanSwift?
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            We have everything you need for a spotless home
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
