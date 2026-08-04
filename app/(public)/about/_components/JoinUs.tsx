"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function JoinUs() {
  return (
    <section className="px-12">
      <div className="py-20 bg-primary rounded-[2.5rem] mx-4 my-16 md:mx-8 lg:mx-auto  w-full shadow-lg">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left side - CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Gabung Menjadi Bagian Kinclong
              </h2>

              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-lg">
                Bergabunglah menjadi bagian dari Kinclong dan wujudkan layanan
                kebersihan terbaik di Indonesia!
              </p>

              {/* Tombol dibuat responsif ke bawah (kolom) di layar kecil */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-3.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all text-center"
                >
                  Bergabung Jadi Partner
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/80 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all text-center"
                >
                  Daftar Sebagai Helper
                </motion.button>
              </div>
            </motion.div>

            {/* Right side - Team Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <Image
                src="/hero-cleaning.png"
                alt="Tim Kinclong"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
