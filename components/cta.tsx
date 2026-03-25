'use client'

import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"

interface CTAProps {
  setCurrentPage: (page: 'home' | 'contact' | 'faq') => void
}

export default function CTA({ setCurrentPage }: CTAProps) {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.section
      ref={ref}
      className="py-12 md:py-20 bg-gray-50"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-2xl p-6 md:p-12 text-center border border-gray-200 shadow-sm">

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Pet Match?
          </h2>

          <p className="text-sm md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and discover the joy of pet adoption.
            Smart matching, secure adoption, and lifetime support.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

            <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg">
              Download App
            </Button>

            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-lg">
              Sign Up
            </Button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">

            <div>
              <div className="text-3xl font-bold text-gray-900">
                {isInView && <CountUp end={50} duration={2} />}K+
              </div>
              <p className="text-sm text-gray-600">Happy Families</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-gray-900">
                {isInView && <CountUp end={500} duration={2} />}+
              </div>
              <p className="text-sm text-gray-600">Partner Vets</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-gray-900">
                {isInView && <CountUp end={100} duration={2} />}K+
              </div>
              <p className="text-sm text-gray-600">Pets Matched</p>
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  )
}