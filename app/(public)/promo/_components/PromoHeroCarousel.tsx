"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function PromoHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      partner: "Otoklix",
      title: "Berkendara Aman, Servis Gak Jadi Beban!",
      discount: "Diskon service sampai 50%",
      services: ["Ganti Oli", "Tune Up", "Spooring", "Service Rem"],
      code: "KNCXOTOKLIX",
      image: "/promo-1.png", // Pastikan gambar ini ada di folder public
      bg: "from-[#ff7b00] to-secondary", // Warna spesifik slide
    },
    {
      id: 2,
      partner: "BCA",
      title: "Eksklusif Pengguna Kartu Kredit BCA",
      discount: "Dapatkan Diskon 20%",
      services: [
        "General Cleaning",
        "Sofa Cleaning",
        "Carpet Cleaning",
        "AC Service",
      ],
      code: "KNCBCA26",
      image: "/promo-2.png",
      bg: "from-[#1e88e5] to-[#0d47a1]",
    },
    {
      id: 3,
      partner: "Spark Sports",
      title: "Diskon s.d 750RB untuk Member",
      discount: "Khusus Kelas Sparks Sports Academy",
      services: [
        "Free Cleaning",
        "Fast Service",
        "Premium Quality",
        "Guaranteed",
      ],
      code: "KNCXSPARKS",
      image: "/promo-3.png",
      bg: "from-primary to-accent",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay efek: Geser otomatis setiap 5 detik jika tidak sedang di-hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  return (
    <section className="relative py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* AnimatePresence wajib ada agar exit animation berfungsi */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className={`relative min-h-[500px] md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br ${slides[currentSlide].bg}`}
            >
              {/* Pattern / Overlay Background */}
              <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10 mix-blend-overlay" />

              <div className="flex flex-col md:flex-row h-full">
                {/* Left content (Text) */}
                <div className="flex-1 flex flex-col justify-center px-8 py-12 md:px-16 md:py-8 z-10 text-white w-full md:w-3/5">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
                      <p className="text-sm font-semibold tracking-wide">
                        Partnership with{" "}
                        <span className="font-bold">
                          {slides[currentSlide].partner}
                        </span>
                      </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                      {slides[currentSlide].title}
                    </h2>

                    <p className="text-lg md:text-xl font-medium mb-8 text-white/90">
                      {slides[currentSlide].discount}
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-lg">
                      {slides[currentSlide].services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              ✓
                            </span>
                          </div>
                          <span className="text-sm font-medium opacity-90">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Promo Code Coupon Style */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex flex-col w-max rounded-xl border-2 border-dashed border-white/40 bg-white/10 px-6 py-3 backdrop-blur-sm cursor-copy"
                      onClick={() =>
                        navigator.clipboard.writeText(slides[currentSlide].code)
                      }
                      title="Klik untuk menyalin"
                    >
                      <p className="text-xs font-medium opacity-80 mb-1">
                        Kode Promo:
                      </p>
                      <p className="font-mono text-xl font-bold tracking-wider">
                        {slides[currentSlide].code}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right side (Image for Desktop) */}
                <div className="hidden md:block w-2/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 z-0" />
                  {/* <Image
                    src={slides[currentSlide].image}
                    alt={`Promo ${slides[currentSlide].partner}`}
                    fill
                    className="object-cover object-center"
                    priority
                  /> */}
                  {/* Gradient mask untuk membuat gambar memudar di sisi kiri agar menyatu dengan background */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--tw-gradient-from)] to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Muncul saat di-hover pada desktop, selalu muncul di HP) */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:-mx-6 pointer-events-none z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md shadow-lg border border-border transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md shadow-lg border border-border transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              →
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-primary w-10"
                    : "bg-primary/20 w-2.5 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
