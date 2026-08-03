'use client'

import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: '2017',
    title: 'KliknClean Launch',
    description: 'Hadir dengan 7 layanan di Jakarta, Depok, Bekasi, Kota Tangerang dan Tangerang Selatan.',
    position: 'left',
  },
  {
    year: '2019',
    title: 'Expansion Phase',
    description: 'KliknClean terus berkembang. Hadir dengan 8 layanan di 7 kota.',
    position: 'right',
  },
  {
    year: '2020',
    title: 'Growth & Innovation',
    description: 'KliknClean memiliki 10 layanan di 10 kota. KliknClean juga membuka layanan B2B.',
    position: 'left',
  },
  {
    year: '2024',
    title: 'New Era',
    description: 'KliknClean semakin berkomitmen memberikan layanan terbaik. KliknClean Release Revamp Mobile Apps.',
    position: 'right',
  },
]

export function Timeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16"
        >
          Perjalanan KliknClean
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary" />

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${event.position === 'left' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full md:w-1/2 ${event.position === 'right' ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                    <div className="text-4xl font-bold text-primary mb-2">{event.year}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-foreground/70">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
