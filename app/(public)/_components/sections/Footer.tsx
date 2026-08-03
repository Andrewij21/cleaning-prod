"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            {/* Nama brand di-update */}
            <h3 className="text-2xl font-bold text-accent">Kinclong</h3>
            <p className="mt-4 text-sm opacity-80 leading-relaxed">
              Jasa kebersihan rumah terlengkap se-Indonesia. Bersihnya terasa,
              nyamannya menyeluruh.
            </p>
          </div>

          {/* Lokasi */}
          <div>
            <h4 className="font-semibold text-lg">Lokasi Layanan</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-70">
              <li>Jakarta</li>
              <li>Tangerang</li>
              <li>Depok</li>
              <li>Bekasi</li>
              <li>Bogor</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg">Perusahaan</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-70">
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-accent hover:opacity-100"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-accent hover:opacity-100"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-accent hover:opacity-100"
                >
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg">Hubungi Kami</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-70">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@kinclong.com"
                  className="transition-all hover:text-accent hover:opacity-100"
                >
                  support@kinclong.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+62210000000"
                  className="transition-all hover:text-accent hover:opacity-100"
                >
                  +62 (021) XXX-XXXX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-accent hover:opacity-100 font-medium"
                >
                  Live Chat →
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm opacity-70">
            {/* Tahun dan brand di-update */}© 2026 Kinclong. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="opacity-70 transition-all hover:text-accent hover:opacity-100"
            >
              Privacy
            </a>
            <a
              href="#"
              className="opacity-70 transition-all hover:text-accent hover:opacity-100"
            >
              Terms
            </a>
            <a
              href="#"
              className="opacity-70 transition-all hover:text-accent hover:opacity-100"
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
