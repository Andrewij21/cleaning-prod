"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background pt-24 pb-16">
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 left-10 w-40 h-40 rounded-full bg-accent/10 -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
        className="absolute -bottom-20 right-20 w-64 h-64 rounded-full bg-secondary/5 -z-10"
      />

      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Judul Utama dengan nama brand baru */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Kinclong Hadir Membantu Segala Kebutuhan Bersih-Bersih Kamu
          </h1>

          {/* Tagline dari klien ditambahkan di sini */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground/80 font-medium mb-10"
          >
            Kinclong – Bersihnya Terasa, Nyamannya Menyeluruh.
          </motion.p>

          {/* Garis Gradasi */}
          <div className="w-full max-w-lg">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
