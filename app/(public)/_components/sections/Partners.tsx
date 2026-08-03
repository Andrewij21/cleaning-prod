"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "BCA", logo: null },
  { name: "Jago", logo: null },
  { name: "Mandiri", logo: null }, // Contoh partner tanpa logo (akan memunculkan fallback 'M')
  { name: "Blibli", logo: null },
  { name: "OneSmile", logo: null }, // Contoh partner tanpa logo (akan memunculkan fallback 'O')
];

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
            Partner Kinclong
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-3xl mx-auto">
            Kinclong percaya bahwa kolaborasi adalah kunci untuk layanan
            terbaik. Kami telah bekerja sama dengan lebih dari 30 partner, dan
            masih membuka pintu peluang untuk berkolaborasi.
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
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative h-12 w-28 md:h-16 md:w-32 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {partner.logo ? (
                /* Menampilkan gambar jika logo tersedia */
                <Image
                  src={partner.logo}
                  alt={`Logo Partner ${partner.name}`}
                  fill
                  className="object-contain"
                />
              ) : (
                /* Fallback UI: Kotak rounded dengan huruf pertama jika logo tidak ada */
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-foreground/5 border border-foreground/10">
                  <span className="text-2xl font-bold text-foreground/40 uppercase">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          ))}
          <div className="text-lg font-bold text-foreground/70">+30 more</div>
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
  );
}
