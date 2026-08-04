"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutStats() {
  return (
    <section className="py-20 bg-primary/90 px-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row items-center"
        >
          {/* Bottom side - Stats Grid (3 Columns) */}
          <div className="grid grid-cols-1  gap-10 md:gap-8  max-w-6xl text-center ">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                13+ Layanan
              </h2>
              <p className="text-white/90 leading-relaxed text-lg  text-left max-w-xl">
                Kinclong telah memiliki 13 layanan yang tersedia, mulai dari
                General Cleaning, Deep Cleaning, Layanan AC, Hydro Cleaning,
                Cuci kasur, Sofa & Karpet, Cuci Mobil, Setrika, Pest Control,
                Poles Marmer, Fogging Disinfektan, hingga Steam Cleaning.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                9+ Kota
              </h2>
              <p className="text-white/90 leading-relaxed text-lg  text-left max-w-xl">
                Hadir memberikan kenyamanan menyeluruh bagi kamu yang tinggal di
                area Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung,
                Surabaya, dan Bali.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                30+ Partner
              </h2>
              <p className="text-white/90 leading-relaxed text-lg  text-left max-w-xl">
                Kinclong percaya bahwa kolaborasi adalah kunci untuk layanan
                terbaik. Bermitra dengan pihak handal memungkinkan kami terus
                berkembang dan meningkatkan kualitas.
              </p>
            </motion.div>
          </div>
          {/* Top side - Centered Illustration with service icons */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center mb-20 h-64 flex-1"
          >
            <div className="relative w-64 h-64">
              {/* Center mascot circle */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="w-36 h-36 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                  <div className="text-6xl">👍</div>
                </div>
              </motion.div>

              {/* Orbiting service icons */}
              {[
                { icon: "🏠", angle: 0 },
                { icon: "🧹", angle: 45 },
                { icon: "💼", angle: 90 },
                { icon: "🧽", angle: 135 },
                { icon: "🚗", angle: 180 },
                { icon: "❄️", angle: 225 },
                { icon: "📱", angle: 270 },
                { icon: "⚡", angle: 315 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-full h-full"
                >
                  <div
                    className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${item.angle}deg) translateY(-140px) rotate(-${item.angle}deg)`,
                      marginLeft: "-24px", // Memastikan ikon presisi di tengah garis orbit
                      marginTop: "-24px",
                    }}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
