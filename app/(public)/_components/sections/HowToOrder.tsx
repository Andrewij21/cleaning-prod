"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Pilih Layanan",
    description: "Pilih layanan sesuai dengan kebutuhanmu.",
  },
  {
    number: 2,
    title: "Lengkapi Detail Pesanan",
    description:
      "Isi data diri, tentukan durasi atau item yang ingin dibersihkan, serta jadwalkan pengerjaan.",
  },
  {
    number: 3,
    title: "Lakukan Pembayaran",
    description:
      "Pilih metode pembayaran yang tersedia dan selesaikan transaksi.",
  },
  {
    number: 4,
    title: "Helper Kinclong Siap Membantu!",
    description:
      "Setelah pesanan terkonfirmasi, Helper akan datang sesuai jadwal yang telah ditentukan!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HowToOrder() {
  return (
    <section className="bg-primary py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Brand name di-update menjadi Kinclong */}
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Cara Memesan Layanan di Kinclong
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Ukuran mockup diperbesar agar lebih proporsional */}
            <div className="relative h-[500px] w-[240px] md:h-[550px] md:w-[260px]">
              <Image
                src="/hero-cleaning.png" // Ganti dengan gambar mockup aplikasi sungguhan jika ada
                alt="Kinclong App Mockup"
                fill
                className="object-cover rounded-[2.5rem] border-8 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right side - Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10" // Jarak antar item sedikit dilebarkan
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="flex gap-6"
              >
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
