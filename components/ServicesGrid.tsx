'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Home Cleaning',
    description: 'Complete home cleaning including bedrooms, living areas, and bathrooms.',
    image: '/home-cleaning.png',
    price: 'From $49',
  },
  {
    id: 2,
    title: 'Office Cleaning',
    description: 'Professional office space cleaning to maintain a healthy work environment.',
    image: '/office-cleaning.png',
    price: 'From $79',
  },
  {
    id: 3,
    title: 'Apartment Cleaning',
    description: 'Tailored cleaning solutions for apartment living spaces.',
    image: '/apartment-cleaning.png',
    price: 'From $59',
  },
]

export function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

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
            Our Services
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Choose from our range of professional cleaning services
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{service.description}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-all hover:shadow-md"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
