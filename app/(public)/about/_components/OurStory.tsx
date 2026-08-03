'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function OurStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-cleaning.png"
              alt="KliknClean Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </motion.div>

          {/* Right side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Story</h2>

            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                KliknClean lahir dari keyakinan bahwa setiap rumah layak mendapatkan kebersihan dan kenyamanan terbaik. Kami memahami bahwa waktu kamu sangat berharga, dan kesibukan sehari-hari sering membuat sulit menjaga kebersihan rumah.
              </p>

              <p>
                Dengan meningkatnya konsumen kelas menengah di Indonesia, kami hadir untuk menyediakan layanan pembersihan berkualitas tinggi yang terjangkau dan fleksibel, sehingga setiap orang dapat menikmatkan lingkungan rumah bersih tanpa beban.
              </p>

              <p>
                Tim kami yang berpengalaman dan berdedikasi siap memberikan solusi kebersihan terbaik dengan teknologi terkini dan profesionalisme tinggi. Kepuasan pelanggan adalah prioritas utama kami.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
