"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2017",
    title: "Kinclong Launch",
    description:
      "Hadir dengan 7 layanan di Jakarta, Depok, Bekasi, Kota Tangerang dan Tangerang Selatan.",
    position: "left",
  },
  {
    year: "2019",
    title: "Expansion Phase",
    description: "Kinclong terus berkembang. Hadir dengan 8 layanan di 7 kota.",
    position: "right",
  },
  {
    year: "2020",
    title: "Growth & Innovation",
    description:
      "Kinclong memiliki 10 layanan di 10 kota. Kinclong juga membuka layanan B2B.",
    position: "left",
  },
  {
    year: "2024",
    title: "New Era",
    description:
      "Kinclong semakin berkomitmen memberikan layanan terbaik dan merilis Revamp Mobile Apps.",
    position: "right",
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-background mx-auto w-full">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16"
        >
          Perjalanan Kinclong
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - Di kiri untuk HP, di tengah untuk Desktop */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                // Di HP selalu rata kiri, di Desktop mengikuti posisi (left/right)
                className={`relative flex items-center justify-start ${
                  event.position === "left"
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline dot - Di kiri untuk HP, di tengah untuk Desktop */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"
                />

                {/* Card Container */}
                <div
                  className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    event.position === "left" ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border transition-all hover:shadow-xl hover:border-primary/30">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
