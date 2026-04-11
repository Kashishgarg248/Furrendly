'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20 px-4 font-['Arial']">
      <div className="max-w-5xl mx-auto">

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
          Privacy Policy
        </motion.h1>

        {/* CONTENT CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200"
        >

          {/* DATE BADGE */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 
               px-6 py-3 rounded-2xl text-gray-700 font-medium">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Furrendly Privacy Policy
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Effective Date: April 11, 2026
              </span>
            </div>
          </div>

          {/* INTRO */}
          <p className="mb-10 text-base sm:text-lg leading-8 text-black">
            Furrendly (“we”, “our”, or “us”) operates a community-driven platform connecting
            pet owners with pet-related services. This Privacy Policy explains how we collect,
            use, and protect your information.
          </p>

          {/* SECTIONS */}
          <div className="space-y-12">

            <Section
              number="1"
              title="Information We Collect"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email, phone, pet details.</li>
                  <li><strong>Business Information:</strong> Business name, services, verification details.</li>
                  <li><strong>Device & Usage:</strong> Device type, IP address, usage behavior.</li>
                  <li><strong>Location Data:</strong> Used to show nearby services.</li>
                </ul>
              }
            />

            <Section
              number="2"
              title="How We Use Information"
              content={
                <p>
                  We use your information for account management, service matching, app improvement,
                  customer support, and ensuring platform safety.
                </p>
              }
            />

            <Section
              number="3"
              title="Data Sharing"
              content={
                <p>
                  Your information may be shared with service providers, third-party partners,
                  and legal authorities when required by law.
                </p>
              }
            />

            <Section
              number="4"
              title="Data Security"
              content={
                <p>
                  We implement appropriate security measures to protect your data. However,
                  no method of transmission or storage is 100% secure.
                </p>
              }
            />

            <Section
              number="5"
              title="Children's Privacy"
              content={
                <p>
                  Our platform is not intended for children under 13. If such data is identified,
                  it will be promptly deleted.
                </p>
              }
            />

            <Section
              number="6"
              title="User Rights"
              content={
                <p>
                  You have the right to access, correct, or delete your data and withdraw consent
                  at any time.
                </p>
              }
            />

            <Section
              number="7"
              title="Changes to Policy"
              content={
                <p>
                  We may update this Privacy Policy periodically. Changes will be reflected
                  on this page.
                </p>
              }
            />

            <Section
              number="8"
              title="Contact"
              content={
                <div className="space-y-2">
                  <p><strong>Email:</strong> team@furrendly.com</p>
                  <p><strong>Address:</strong> C31A Dayalbagh, Faridabad, Haryana 121009, India</p>
                </div>
              }
            />

          </div>

          {/* FOOTER */}
          <div className="mt-16 pt-12 border-t border-gray-800/50 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © 2026 Furrendly Pvt. Ltd. All rights reserved.
            </p>
            <p className="font-semibold text-pink-800 mt-1">
              Making pet parenting joyful, one paw at a time 🐾
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({ number, title, content }: any) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-black">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-base sm:text-lg leading-8 text-black font-['Arial']">
        {content}
      </div>
    </section>
  );
}