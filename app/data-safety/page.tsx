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
          Data Safety & Privacy Disclosure
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
                Furrendly Data Safety Disclosure
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Effective Date: April 11, 2026
              </span>
            </div>
          </div>

          {/* INTRO */}
          <p className="mb-10 text-base sm:text-lg leading-8 text-black">
            This document outlines how Furrendly collects, uses, and handles user data in compliance 
            with Google Play Data Safety requirements.
          </p>

          {/* SECTIONS */}
          <div className="space-y-12">

            <Section
              number="1"
              title="Overview"
              content={
                <p>
                  Furrendly is a platform connecting pet owners with service providers. The app may 
                  collect certain user data to provide core functionalities such as matchmaking, 
                  bookings, and service discovery.
                </p>
              }
            />

            <Section
              number="2"
              title="Data Collection"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email, phone number</li>
                  <li><strong>Profile Data:</strong> Pet details (breed, age, preferences)</li>
                  <li><strong>Business Data:</strong> Service provider information</li>
                  <li><strong>Location Data:</strong> Approximate or precise location</li>
                  <li><strong>Device Data:</strong> IP address, device type, OS, app usage logs</li>
                </ul>
              }
            />

            <Section
              number="3"
              title="Data Sharing"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers for fulfilling bookings</li>
                  <li>Third-party services (analytics, hosting, payments)</li>
                  <li>Legal authorities when required by law</li>
                  <li className="font-medium text-green-700">We do NOT sell user data</li>
                </ul>
              }
            />

            <Section
              number="4"
              title="Data Usage"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account creation and management</li>
                  <li>Connecting users with services</li>
                  <li>Improving user experience</li>
                  <li>Customer support and notifications</li>
                  <li>Fraud detection and safety</li>
                </ul>
              }
            />

            <Section
              number="5"
              title="Data Security"
              content={
                <p>
                  Furrendly implements reasonable security practices such as encryption and secure storage.
                  However, no system is completely secure.
                </p>
              }
            />

            <Section
              number="6"
              title="Data Retention"
              content={
                <p>
                  User data is retained only as long as necessary for service delivery and legal compliance.
                </p>
              }
            />

            <Section
              number="7"
              title="User Control"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access their data</li>
                  <li>Request corrections or deletion</li>
                  <li>Withdraw consent</li>
                </ul>
              }
            />

            <Section
              number="8"
              title="Children's Data"
              content={
                <p>
                  Furrendly does not knowingly collect data from children under 13.
                </p>
              }
            />

            <Section
              number="9"
              title="SDKs & Third Parties"
              content={
                <p>
                  The app may use third-party SDKs (such as analytics and payment providers) that may 
                  collect data according to their own privacy policies.
                </p>
              }
            />

            <Section
              number="10"
              title="Contact Information"
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