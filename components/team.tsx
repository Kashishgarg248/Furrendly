'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Team() {

  const team = [
    {
      id: 1,
      name: 'I Found a Loved Treasure',
      role: 'Pet Owner & Happy Client',
      image: '/team-1.jpg',
      bio: 'Used Furrendly to find my perfect match!'
    },
    {
      id: 2,
      name: 'Dr. Alex Veterinary',
      role: 'Veterinary Partner',
      image: '/team-2.jpg',
      bio: 'Trusted by vets for quality care'
    },
    {
      id: 3,
      name: 'Sarah Pet Friend',
      role: 'Community Member',
      image: '/team-3.jpg',
      bio: 'Love connecting with other pet lovers'
    },
    {
      id: 4,
      name: 'I Found a Loved Friend',
      role: 'Pet Adoptee',
      image: '/team-4.jpg',
      bio: 'My adoption journey was smooth!'
    }
  ]

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Community
          </h2>

          <p className="text-lg text-gray-600">
            Real stories from real pet lovers and families
          </p>

        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {team.map((member, index) => (

            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >

              <div className="relative h-48 mb-4 rounded-xl overflow-hidden shadow-sm">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              <p className="text-sm text-gray-600 font-medium mb-2">
                {member.role}
              </p>

              <p className="text-sm text-gray-500">
                {member.bio}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200"
        >

          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Joining Us
          </h3>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of pet families who trust Furrendly for care,
            connection, and adoption.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>

              <div className="text-4xl font-bold text-gray-900 mb-2">
                50K+
              </div>

              <p className="text-sm text-gray-600">
                Happy Families
              </p>

            </div>

            <div>

              <div className="text-4xl font-bold text-gray-900 mb-2">
                500+
              </div>

              <p className="text-sm text-gray-600">
                Partner Vets
              </p>

            </div>

            <div>

              <div className="text-4xl font-bold text-gray-900 mb-2">
                100K+
              </div>

              <p className="text-sm text-gray-600">
                Pets Matched
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}