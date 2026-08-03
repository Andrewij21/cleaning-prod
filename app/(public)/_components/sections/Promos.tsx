"use client";

import { motion } from "framer-motion";

const promos = [
  {
    id: 1,
    title: "Eksklusif Pengguna Kartu Kredit BCA",
    subtitle: "Diskon 20%",
    description:
      "Nikmati potongan harga untuk semua layanan kebersihan Kinclong.",
    promo_code: "KNCBCA26",
    period: "Berlaku s/d 31 Desember 2026",
    bg: "bg-gradient-to-br from-[#1e88e5] to-[#0d47a1]", // Sedikit dipertajam agar kontras teks putih lebih baik
  },
  {
    id: 2,
    title: "Promo Spesial Kolaborasi Otoklix",
    subtitle: "Diskon Servis s/d 50%",
    description:
      "Berkendara aman, servis gak jadi beban! Nikmati diskon khusus dari partner kami.",
    promo_code: "KNCXOTOKLIX",
    benefits: ["Ganti Oli", "Tune Up", "Spooring", "Service Rem"],
    bg: "bg-gradient-to-br from-secondary to-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Promos() {
  return (
    <section className="bg-background py-20">
      <div className="container px-4">
        {/* Header - Diperbaiki agar responsif di HP (flex-col pada layar kecil) */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Promo Spesial Untuk Kamu
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Jangan lewatkan penawaran menarik dari Kinclong dan partner kami.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="whitespace-nowrap rounded-full border-2 border-foreground px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Lihat Selengkapnya →
          </motion.button>
        </div>

        {/* Promos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {promos.map((promo) => (
            <motion.div
              key={promo.id}
              variants={itemVariants}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className={`${promo.bg} flex h-full flex-col justify-between rounded-2xl p-8 text-white shadow-lg transition-all hover:shadow-xl relative overflow-hidden`}
              >
                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="mb-3 text-2xl font-bold leading-tight">
                    {promo.title}
                  </h3>
                  <p className="mb-6 text-sm opacity-90 leading-relaxed max-w-sm">
                    {promo.description}
                  </p>

                  {/* Discount badge */}
                  {promo.subtitle && (
                    <div className="mb-6 inline-block rounded-full bg-white/20 px-5 py-2 backdrop-blur-md border border-white/10">
                      <p className="text-lg font-bold tracking-wide">
                        {promo.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Benefits or Period */}
                  {promo.benefits ? (
                    <div className="mb-8 grid grid-cols-2 gap-y-3 gap-x-4">
                      {promo.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                            <span className="text-xs font-bold text-white">
                              ✓
                            </span>
                          </div>
                          <span className="text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-8 flex items-center gap-2">
                      <span className="text-xl">📅</span>
                      <p className="text-sm font-medium opacity-90">
                        {promo.period}
                      </p>
                    </div>
                  )}
                </div>

                {/* Promo Code - Diperbaiki UI-nya ala Kupon */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 mt-auto cursor-pointer rounded-xl border-2 border-dashed border-white/40 bg-white/10 px-5 py-3 backdrop-blur-sm transition-colors hover:bg-white/20 inline-flex flex-col w-max"
                >
                  <p className="text-xs font-medium opacity-80 mb-1">
                    Gunakan Kode Promo:
                  </p>
                  <p className="font-mono text-xl font-bold tracking-wider">
                    {promo.promo_code}
                  </p>
                </motion.div>

                {/* Background decorations */}
                <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -top-16 -left-16 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
