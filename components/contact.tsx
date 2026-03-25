'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

interface ContactProps {
  setCurrentPage: (page: 'home' | 'contact' | 'faq') => void
}

export default function Contact({ setCurrentPage }: ContactProps) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submitted:", formData)

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 md:text-lg">
            Get in touch with us — we'd love to hear from you
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">

                <Mail className="w-6 h-6 text-gray-700" />

                <div>
                  <p className="font-semibold text-gray-900">
                    Email
                  </p>

                  <p className="text-gray-600">
                    team@furrendly.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">

                <Phone className="w-6 h-6 text-gray-700" />

                <div>
                  <p className="font-semibold text-gray-900">
                    Phone
                  </p>

                  <p className="text-gray-600">
                    +91 8448119295
                  </p>
                </div>

              </div>

              {/* Social Media */}
              <div className="pt-4">

                <p className="font-semibold text-gray-900 mb-3">
                  Follow Us
                </p>

                <div className="flex gap-4">

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-50 hover:scale-110 transition"
                  >
                    <Facebook className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-sky-50 hover:scale-110 transition"
                  >
                    <Twitter className="w-5 h-5 text-gray-700 hover:text-sky-500" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-pink-50 hover:scale-110 transition"
                  >
                    <Instagram className="w-5 h-5 text-gray-700 hover:text-pink-500" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-50 hover:scale-110 transition"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-700" />
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>

                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  required
                />

              </div>

              {/* Email */}
              <div>

                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  required
                />

              </div>

              {/* Subject */}
              <div>

                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  required
                />

              </div>

              {/* Message */}
              <div>

                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your Message
                </label>

                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us more..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none transition"
                  required
                />

              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </Button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}