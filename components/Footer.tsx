'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">✨ CleanSwift</h3>
            <p className="mt-2 text-sm text-foreground/60">
              Making homes spotlessly clean, one booking at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Home Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Apartment Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/60">
              <li>Email: hello@cleanswift.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Support
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
          className="mt-12 border-t border-border pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-foreground/60">
            © 2024 CleanSwift. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
