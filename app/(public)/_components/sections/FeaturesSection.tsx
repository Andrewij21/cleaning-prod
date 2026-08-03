"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Tersebar Luas di Indonesia",
    description:
      "Kini kami hadir melayani wilayah Jakarta, Tangerang, Depok, Bekasi, Bogor, dan kota-kota besar lainnya.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Pilih Helper Favoritmu",
    description:
      "Dengan berlangganan layanan Prepaid, kamu bebas memilih helper favorit untuk setiap jadwal kebersihanmu.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "Privasi Terjamin Aman!",
    description:
      "Seluruh komunikasi dilakukan langsung melalui aplikasi. Data privasi kamu aman, terpercaya, dan bebas penipuan!",
    bgColor: "bg-[#20C997]",
    textColor: "text-white",
  },
  {
    title: "Bebas Pilih Metode Pembayaran",
    description:
      "Tersedia berbagai pilihan pembayaran yang memudahkanmu, mulai dari transfer bank, kartu kredit, hingga dompet digital.",
    bgColor: "bg-[#1a2332]",
    textColor: "text-white",
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Kenapa Harus Kinclong?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`${feature.bgColor} ${feature.textColor} rounded-xl p-8 transition-all hover:shadow-xl cursor-pointer min-h-[200px] flex flex-col justify-between`}
              >
                <div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
