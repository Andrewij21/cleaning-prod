'use client'

import { motion } from 'framer-motion'

export function Partners() {
  return (
    <section className="bg-background py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            KliknClean Partner
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            KliknClean percaya bahwa kolaborasi adalah kunci untuk layanan terbaik. KliknClean telah bekerja sama dengan lebih dari 30 partner, dan kami masih membuka peluang untuk berkolaborasi.
          </p>
        </motion.div>

        {/* Partner logos grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <div className="text-sm font-semibold text-foreground/70">BCA</div>
          <div className="text-sm font-semibold text-foreground/70">Jago</div>
          <div className="text-sm font-semibold text-foreground/70">Blibli</div>
          <div className="text-sm font-semibold text-foreground/70">KOMPAS.id</div>
          <div className="text-sm font-semibold text-foreground/70">OneSmile</div>
          <div className="text-lg font-bold text-foreground">+30 more</div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-foreground px-8 py-3 font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Lihat Selengkapnya
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-foreground px-8 py-3 font-semibold text-background transition-all hover:shadow-lg"
          >
            Bergabung Jadi Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
