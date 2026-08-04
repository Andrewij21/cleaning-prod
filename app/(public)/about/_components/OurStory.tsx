"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-cleaning.png"
              alt="Tim Kinclong"
              fill
              className="object-cover"
            />
            {/* Overlay gradient untuk memberikan tekstur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply" />
          </motion.div>

          {/* Right side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Story
            </h2>

            <div className="space-y-5 text-foreground/70 leading-relaxed text-lg">
              <p>
                <strong className="text-foreground">Kinclong</strong> lahir dari
                keyakinan bahwa setiap rumah layak mendapatkan kebersihan dan
                kenyamanan terbaik. Kami memahami bahwa waktu kamu sangat
                berharga, dan kesibukan sehari-hari sering membuat sulit menjaga
                kebersihan rumah.
              </p>

              <p>
                Dengan meningkatnya kebutuhan masyarakat kelas menengah di
                Indonesia, kami hadir untuk menyediakan layanan pembersihan
                berkualitas tinggi yang terjangkau dan fleksibel. Kami ingin
                setiap orang dapat menikmati lingkungan rumah yang bersih tanpa
                beban.
              </p>

              <p>
                Tim kami yang berpengalaman dan berdedikasi siap memberikan
                solusi kebersihan terbaik dengan teknologi terkini dan
                profesionalisme tinggi. Kepuasan pelanggan adalah prioritas
                utama kami.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
