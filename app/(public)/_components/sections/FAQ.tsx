"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Apa itu Kinclong?",
    answer:
      "Kinclong adalah platform penyedia layanan jasa kebersihan profesional dan terpercaya untuk rumah, apartemen, hingga kantor Anda.",
  },
  {
    id: 2,
    question:
      "Jenis bangunan apa saja yang dapat menggunakan layanan General Cleaning?",
    answer:
      "Layanan General Cleaning kami dapat digunakan untuk rumah tinggal, apartemen, kantor, ruko, dan berbagai jenis bangunan komersial lainnya.",
  },
  {
    id: 3,
    question: "Apakah jadwal yang sudah dipesan dapat diubah?",
    answer:
      "Ya, Anda dapat mengubah jadwal pesanan melalui aplikasi Kinclong dengan memberikan pemberitahuan minimal 24 jam sebelum jadwal pengerjaan berlangsung.",
  },
  {
    id: 4,
    question: "Apakah ada garansi untuk layanan AC Cleaning?",
    answer:
      "Ya, semua layanan AC Cleaning kami dilengkapi dengan garansi kepuasan pelanggan. Jika tidak puas, kami akan melakukan pembersihan ulang tanpa biaya tambahan.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

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
          {/* Judul disesuaikan menjadi Kinclong */}
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Paling Sering Ditanyakan di Kinclong
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <motion.div
                className="rounded-lg border border-border bg-card overflow-hidden"
                initial={false}
              >
                <motion.button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {/* SVG diganti ke standar Chevron Down agar lebih cocok untuk Accordion */}
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openId === faq.id ? "auto" : 0,
                    opacity: openId === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-border text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
