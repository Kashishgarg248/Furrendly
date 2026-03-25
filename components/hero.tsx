'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import QRCode from "react-qr-code"
import { useState } from "react"

const images = [
  "/pets/dog1.webp",
  "/pets/cat1.webp",
  "/pets/dog2.webp",
  "/pets/cat2.webp",
  "/pets/dog3.webp",
  "/pets/dog4.webp",
  "/pets/cat3.webp",
  "/pets/cat4.webp"
]

export default function Hero() {
  const [showQR, setShowQR] = useState(false)
  const appLink = "https://play.google.com/store/apps/details?id=furrendly"

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">

      {/* Animated Background Images */}
      <motion.div
        className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 opacity-50"
        animate={{ y: ["0%", "-20%", "0%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-56 md:h-80 rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt="pet"
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover blur-[1px]"
            />
          </div>
        ))}
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Furrendly
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Find, Care, and Adopt — all in one friendly pet ecosystem.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Download Button */}
          <a
            href={appLink}
            target="_blank"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Download App
          </a>

          {/* QR Code Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setShowQR(!showQR)}
              className="bg-white px-6 py-3 rounded-xl shadow-md font-semibold hover:bg-gray-100 transition"
            >
              {showQR ? "Hide QR" : "Scan QR"}
            </button>

            {showQR && (
              <div className="bg-white p-3 rounded-xl shadow-md mt-3">
                <QRCode value={appLink} size={100} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}