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
      borderColor: 'border-pink-400'
    },
    {
      id: 2,
      icon: "🏡",
      title: 'Re-Home',
      description: 'Safe and secure rehoming services for pets needing new families',
      borderColor: 'border-orange-400'
    },
    {
      id: 3,
      icon: "🐾",
      title: 'Adoption',
      description: 'Browse adoptable pets and complete adoption process seamlessly',
      borderColor: 'border-purple-400'
    }
  ]

  const futureServices = [
    { icon: '🏥', label: 'Vet' },
    { icon: '✂️', label: 'Grooming' },
    { icon: '🏪', label: 'Pet Store' },
    { icon: '🎓', label: 'Training' }
  ]

  return (

    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One App, All Solutions
          </h2>

          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Furrendly is the place where all your pet-related needs are handled
            with care. We love your family friends 🐾
          </p>

        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">

          {features.map((feature) => (

            <motion.div
              key={feature.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`border-2 ${feature.borderColor} rounded-2xl p-6 bg-white hover:shadow-xl transition`}
            >

              <div className="text-3xl mb-3">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
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
          className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100"
        >

          {/* Title */}
          <div className="text-center mb-10">

            <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Future Services
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
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
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border hover:shadow-md transition"
              >

                <span className="text-2xl">
                  {service.icon}
                </span>

                <span className="font-semibold text-gray-800">
                  {service.label}
                </span>

                <span className="text-xs text-green-600 font-medium">
                  Coming Soon
                </span>

              </motion.div>

            ))}

          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-gray-600 mt-10">
            💡 Turn on notifications — Be the first to know when these launch.
          </p>

        </motion.div>

      </div>

    </section>

  )
}