'use client'

import { motion } from 'framer-motion'

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
            <h3 className="text-lg font-bold text-accent">KlikNClean</h3>
            <p className="mt-4 text-sm opacity-80">
              Jasa kebersihan rumah terlengkap se-Indonesia
            </p>
          </div>

          {/* Lokasi */}
          <div>
            <h4 className="font-semibold">Lokasi Layanan</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              <li>Jakarta</li>
              <li>Tangerang</li>
              <li>Depok</li>
              <li>Bekasi</li>
              <li>Bogor</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">Hubungi Kami</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              <li>Email: support@kliknclean.com</li>
              <li>Phone: +62 (021) XXX-XXXX</li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Live Chat
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
            © 2024 KliknClean. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-70 transition-colors hover:text-accent">
              Privacy
            </a>
            <a href="#" className="opacity-70 transition-colors hover:text-accent">
              Terms
            </a>
            <a href="#" className="opacity-70 transition-colors hover:text-accent">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
