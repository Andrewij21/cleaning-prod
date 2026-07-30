'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            ✨ CleanSwift
          </motion.div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg"
        >
          Book Now
        </motion.button>
      </div>
    </motion.header>
  )
}
