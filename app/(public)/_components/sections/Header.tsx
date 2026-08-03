"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            KI<span className="text-foreground">N</span>CLONG
          </motion.div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Tentang Kami
          </Link>
          <Link
            href="/promo"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary/80"
          >
            Promo
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Layanan
          </Link>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border-2 border-foreground px-6 py-2 text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Download App
        </motion.button>
      </div>
    </motion.header>
  );
}
