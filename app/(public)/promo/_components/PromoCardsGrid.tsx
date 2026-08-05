"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function PromoCardsGrid() {
  const [selectedService, setSelectedService] = useState("Semua Layanan");
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi");
  const [selectedCampaign, setSelectedCampaign] = useState("Semua Campaign");
  const [currentPage, setCurrentPage] = useState(1);

  const promos = [
    {
      id: 1,
      image: "/promo-card-1.png",
      title:
        "POINTASTIC PAYDAY! : Bonus 100% KlikPoin Setiap Transaksi (up to 7.000 KlikPoin)",
      startDate: "27 Juli 2026",
      endDate: "31 Juli 2026",
      service: "General Cleaning",
      location: "Jakarta",
      campaign: "Pointastic",
    },
    {
      id: 2,
      image: "/promo-card-2.png",
      title:
        "Promo Khusus Nasabah BCA Solitaire & BCA Prioritas : Diskon Rp 100.000 untuk Hydro Cleaning",
      startDate: "01 Juli 2026",
      endDate: "30 Juni 2027",
      service: "Hydro Cleaning",
      location: "Tangerang",
      campaign: "BCA Partnership",
    },
    {
      id: 3,
      image: "/promo-card-3.png",
      title:
        "Promo Khusus Nasabah BCA Solitaire & BCA Prioritas : Diskon Rp 50.000 untuk Pengguna Baru",
      startDate: "01 Juli 2026",
      endDate: "30 Juni 2027",
      service: "Deep Cleaning",
      location: "Depok",
      campaign: "BCA Partnership",
    },
    {
      id: 4,
      image: "/promo-card-1.png",
      title: "Diskon s.d 750RB Kelas Sparks Sports Academy & Sparks Swim",
      startDate: "09 Juli 2026",
      endDate: "31 Desember 2026",
      service: "Home Service",
      location: "Bekasi",
      campaign: "Sparks Sports",
    },
    {
      id: 5,
      image: "/promo-card-2.png",
      title: "Gratis Semua Kelas di Seluruh Lokasi RockStar Academy",
      startDate: "15 Juli 2026",
      endDate: "30 September 2026",
      service: "General Cleaning",
      location: "Bogor",
      campaign: "RockStar",
    },
    {
      id: 6,
      image: "/promo-card-3.png",
      title: "Ciptakan Memori, Temani Si Kecil Bereksplorasi di Gatari Edudays",
      startDate: "20 Juli 2026",
      endDate: "31 Agustus 2026",
      service: "AC Service",
      location: "Jakarta",
      campaign: "Gatari",
    },
  ];

  const services = [
    "Semua Layanan",
    "General Cleaning",
    "Hydro Cleaning",
    "Deep Cleaning",
    "AC Service",
    "Home Service",
  ];
  const locations = [
    "Semua Lokasi",
    "Jakarta",
    "Tangerang",
    "Depok",
    "Bekasi",
    "Bogor",
  ];
  const campaigns = [
    "Semua Campaign",
    "Pointastic",
    "BCA Partnership",
    "Sparks Sports",
    "RockStar",
    "Gatari",
  ];

  // Filter Logic
  const filteredPromos = promos.filter(
    (promo) =>
      (selectedService === "Semua Layanan" ||
        promo.service === selectedService) &&
      (selectedLocation === "Semua Lokasi" ||
        promo.location === selectedLocation) &&
      (selectedCampaign === "Semua Campaign" ||
        promo.campaign === selectedCampaign),
  );

  // Pagination Logic
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredPromos.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const displayedPromos = filteredPromos.slice(
    startIdx,
    startIdx + itemsPerPage,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Membuat key unik agar animasi mereset saat filter atau halaman berubah
  const gridKey = `${currentPage}-${selectedService}-${selectedLocation}-${selectedCampaign}`;

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
        >
          Lihat Semua Promo Terbaik
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Layanan Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-foreground/80 mb-2">
              Layanan
            </label>
            <select
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-3.5 border border-border rounded-xl bg-card text-foreground font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Lokasi Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-foreground/80 mb-2">
              Lokasi
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-3.5 border border-border rounded-xl bg-card text-foreground font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Campaign Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-foreground/80 mb-2">
              Campaign
            </label>
            <select
              value={selectedCampaign}
              onChange={(e) => {
                setSelectedCampaign(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-3.5 border border-border rounded-xl bg-card text-foreground font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
            >
              {campaigns.map((campaign) => (
                <option key={campaign} value={campaign}>
                  {campaign}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Handling Empty State */}
        {displayedPromos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-2xl border border-border border-dashed"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Promo Tidak Ditemukan
            </h3>
            <p className="text-foreground/60 max-w-md">
              Maaf, saat ini tidak ada promo yang tersedia untuk kombinasi
              filter yang Anda pilih. Silakan ubah filter untuk melihat promo
              lainnya.
            </p>
            <button
              onClick={() => {
                setSelectedService("Semua Layanan");
                setSelectedLocation("Semua Lokasi");
                setSelectedCampaign("Semua Campaign");
                setCurrentPage(1);
              }}
              className="mt-6 text-primary font-semibold hover:underline"
            >
              Reset Filter
            </button>
          </motion.div>
        ) : (
          /* Promo Cards Grid - DISINI LETAK PERBAIKANNYA */
          <motion.div
            key={gridKey} // <--- KUNCI PERBAIKAN ADA DI BARIS INI
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
          >
            {displayedPromos.map((promo) => (
              <motion.div
                key={promo.id}
                variants={itemVariants}
                className="h-full"
              >
                <div className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  {/* Image Implementation */}
                  <div className="relative h-56 w-full overflow-hidden bg-muted">
                    {/* <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full">
                        {promo.service}
                      </span>
                      <span className="px-3 py-1 text-xs font-bold text-secondary bg-secondary/10 rounded-full">
                        {promo.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-3 group-hover:text-primary transition-colors">
                      {promo.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm font-medium text-foreground/60 mt-auto mb-6">
                      <span className="text-base">📅</span>
                      <span>
                        {promo.startDate} - {promo.endDate}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full rounded-xl bg-primary/10 py-3.5 font-bold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <motion.button
              whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-border text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
            >
              ←
            </motion.button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <motion.button
                key={idx + 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(idx + 1)}
                className={`h-12 w-12 rounded-full font-bold transition-all ${
                  currentPage === idx + 1
                    ? "bg-secondary text-white shadow-lg"
                    : "border-2 border-border text-foreground hover:bg-muted"
                }`}
              >
                {idx + 1}
              </motion.button>
            ))}

            <motion.button
              whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-border text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
            >
              →
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
