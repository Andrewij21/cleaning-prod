"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "General Cleaning",
    image: "/home-cleaning.png",
  },
  {
    id: 2,
    title: "Deep Cleaning",
    image: "/apartment-cleaning.png",
  },
  {
    id: 3,
    title: "Cuci Sofa",
    image: "/office-cleaning.png",
  },
  {
    id: 4,
    title: "Cuci Kasur",
    image: "/home-cleaning.png",
  },
  {
    id: 5,
    title: "Layanan AC",
    image: "/apartment-cleaning.png",
  },
  {
    id: 6,
    title: "Cuci Karpet",
    image: "/office-cleaning.png",
  },
];

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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl flex items-center justify-center gap-2">
            Layanan Kebersihan
            <motion.div className=" font-bold text-primary">
              KI<span className="text-foreground">N</span>CLONG
            </motion.div>
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Mulai dari bersih-bersihan ruangan, sofa, sampai bersihiin AC ada di
            kinclong.
          </p>
        </motion.div>

        {/* Services Grid - Diubah ke grid-cols-3 agar 6 item tampil seimbang (2 baris x 3 kolom) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-40 overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-[#1a2332]/20 to-transparent" />

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="px-4 py-3 flex items-center justify-end">
                  <span className="text-primary text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
