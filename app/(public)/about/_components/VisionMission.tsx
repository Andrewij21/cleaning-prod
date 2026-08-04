"use client";

import { motion } from "framer-motion";

export function VisionMission() {
  const missionItems = [
    "Memberikan layanan kebersihan yang profesional, aman, dan berkualitas.",
    "Mengembangkan sumber daya manusia yang kompeten, berintegritas, dan berorientasi pada kepuasan pelanggan.",
    "Menggunakan teknologi, peralatan, dan bahan pembersih yang efektif serta ramah lingkungan.",
    "Menyediakan solusi perawatan properti yang lengkap bagi rumah tangga maupun dunia usaha.",
    "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan yang konsisten dan terpercaya.",
  ];

  return (
    <section className="bg-background py-20 mx-auto">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Card Visi */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-primary p-8 md:p-12 text-white shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              Visi Kami
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              "Menjadi perusahaan penyedia layanan kebersihan dan perawatan
              properti terpercaya di Indonesia yang menghadirkan standar
              pelayanan profesional, inovatif, dan berkelanjutan."
            </p>
          </motion.div>

          {/* Card Misi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-card border border-border p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground flex items-center gap-4">
              Misi Kami
            </h2>
            <ul className="space-y-4">
              {missionItems.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
