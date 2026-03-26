'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import QRCode from "react-qr-code"
import { useState, useEffect } from "react"

const images = [
  "/pets/img1.jpeg",
  "/pets/img2.jpeg",
  "/pets/img3.jpeg",
  "/pets/img4.jpeg"
]

export default function Hero() {
  const [showQR, setShowQR] = useState(false)
  const [index, setIndex] = useState(0)

  const appLink = "https://play.google.com/store/apps/details?id=furrendly"

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">

      {/* 🔥 Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="pet"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl text-white flex flex-col items-center">

        {/* 🔥 Logo (animate once, then stay) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.08 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2 leading-none"
        >
          <Image
            src="/logo-transparent.png"
            alt="Furrendly Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[140px] md:h-[200px] lg:h-[260px] w-auto object-contain brightness-0 invert drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-lg mb-5 leading-tight text-white/90"
        >
          Find, Care, and Adopt — all in one friendly pet ecosystem.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href={appLink}
            target="_blank"
            className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition shadow-lg"
          >
            Download App
          </a>

          <button
            onClick={() => setShowQR(true)}
            className="bg-white/90 text-black px-6 py-3 rounded-xl shadow-md font-semibold hover:bg-white transition"
          >
            Scan QR
          </button>
        </motion.div>

      </div>

      {/* 🔥 QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowQR(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 z-10"
            >
              <p className="font-semibold text-gray-800">
                Scan to Download
              </p>

              <QRCode value={appLink} size={160} />

              <button
                onClick={() => setShowQR(false)}
                className="text-sm text-gray-500 hover:text-black"
              >
                Close
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}