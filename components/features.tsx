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
    { icon: '✂️', label: 'Spa & Styling' },
    { icon: '🏪', label: 'Curated Essentials' },
    { icon: '🎓', label: 'Expert Coaching' }
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
            The Complete Pet Ecosystem
          </h2>

          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            From finding your new best friend to lifelong care, everything your pet needs is
            right here.
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
bg-gradient-to-br from-green-50/80 to-emerald-100/80 
border border-white/40 
shadow-xl backdrop-blur-md"
        >

          {/* Title */}
          <div className="text-center mb-12">

            <span className="inline-block bg-green-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md">
              Future Services
            </span>

            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
              Paws and progress
            </h3>

            <p className="text-gray-600 max-w-xl mx-auto">
              We are expanding our platform to bring healthcare, grooming, training, and
              premium essentials directly to your fingertips.
            </p>

          </div>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">

            {futureServices.map((service, index) => (

              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex items-center gap-3 
bg-white/90 
px-5 py-3 rounded-full 
border border-gray-200 
shadow-md hover:shadow-lg 
transition-all duration-300 
cursor-pointer
whitespace-nowrap flex-shrink-0"
              >

                <span className="text-xl md:text-2xl">
                  {service.icon}
                </span>

                <span className="font-semibold text-gray-800">
                  {service.label}
                </span>

                {/* FIXED: always single line */}
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full whitespace-nowrap">
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
            💡 Notify Me on Launch
          </motion.p>

        </motion.div>

      </div>

    </section>

  )
}