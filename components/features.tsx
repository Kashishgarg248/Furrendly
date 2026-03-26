'use client'

import React from 'react'
import { motion } from "framer-motion"

export default function Features() {

  const features = [
    {
      id: 1,
      icon: "🐶",
      title: 'Find a Match',
      description: 'Smart matching algorithm to find your perfect pet companion',
      color: 'from-pink-400 to-pink-500'
    },
    {
      id: 2,
      icon: "🏡",
      title: 'Re-Home',
      description: 'Safe and secure rehoming services for pets needing new families',
      color: 'from-orange-400 to-orange-500'
    },
    {
      id: 3,
      icon: "🐾",
      title: 'Adoption',
      description: 'Browse adoptable pets and complete adoption process seamlessly',
      color: 'from-purple-400 to-purple-500'
    }
  ]

  const futureServices = [
    { icon: '🏥', label: 'Vet' },
    { icon: '✂️', label: 'Grooming' },
    { icon: '🏪', label: 'Pet Store' },
    { icon: '🎓', label: 'Training' }
  ]

  return (

    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            One App, All Solutions
          </h2>

          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Furrendly is the place where all your pet-related needs are handled
            with care. We love your family friends 🐾
          </p>

        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">

          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${feature.color}`} />

              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Future Scope */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 md:p-14 
          bg-gradient-to-br from-green-50 to-emerald-100 
          border border-green-100 shadow-lg"
        >

          {/* Title */}
          <div className="text-center mb-12">

            <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">
              Future Services
            </span>

            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              More Pet Services Coming Soon
            </h3>

            <p className="text-gray-600 max-w-xl mx-auto">
              Furrendly is expanding into a complete pet ecosystem with
              healthcare, grooming, training and shopping.
            </p>

          </div>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-6">

            {futureServices.map((service, index) => (

              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.07 }}
                className="flex items-center gap-3 
                bg-white/80 backdrop-blur-md 
                px-6 py-4 rounded-full 
                border border-white/50 
                shadow-sm hover:shadow-md transition cursor-pointer"
              >

                <span className="text-2xl">
                  {service.icon}
                </span>

                <span className="font-semibold text-gray-800">
                  {service.label}
                </span>

                <span className="text-xs text-green-600 font-semibold">
                  Coming Soon
                </span>

              </motion.div>

            ))}

          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-sm text-gray-600 mt-10"
          >
            💡 Turn on notifications — Be the first to know when these launch.
          </motion.p>

        </motion.div>

      </div>

    </section>

  )
}