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
          Account Deletion Policy
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
                Furrendly Account Deletion Policy
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Effective Date: April 11, 2026
              </span>
            </div>
          </div>

          {/* INTRO */}
          <p className="mb-10 text-base sm:text-lg leading-8 text-black">
            This document explains how users of the Furrendly app can request deletion 
            of their account and associated personal data.
          </p>

          {/* SECTIONS */}
          <div className="space-y-12">

            <Section
              number="1"
              title="How to Request Account Deletion"
              content={
                <>
                  <p>
                    Currently, Furrendly does not provide an in-app delete account button. 
                    Users can request account deletion through the Contact Us process:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Open the Furrendly app</li>
                    <li>Navigate to Profile / Dashboard</li>
                    <li>Click on "Help and Support"</li>
                    <li>Select "Contact Us"</li>
                    <li>Choose issue type as <strong>Account Issue</strong></li>
                    <li>Submit a request with your reason for deletion</li>
                  </ul>

                  <p className="mt-6">
                    Alternatively, you can email us directly:
                  </p>
                  <p className="mt-2 font-medium">
                    Email: team@furrendly.com <br />
                    Subject: <strong>Account Deletion Request</strong>
                  </p>
                </>
              }
            />

            <Section
              number="2"
              title="Verification Process"
              content={
                <p>
                  To protect user privacy and prevent unauthorized requests, we may verify 
                  your identity before processing your deletion request.
                </p>
              }
            />

            <Section
              number="3"
              title="What Data is Deleted"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>User profile information (name, email, phone number)</li>
                  <li>Pet profiles and related data</li>
                  <li>User-generated content associated with the account</li>
                </ul>
              }
            />

            <Section
              number="4"
              title="What Data May Be Retained"
              content={
                <>
                  <p>
                    Certain information may be retained for legal, compliance, and security purposes:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Transaction records (if applicable)</li>
                    <li>Logs required for fraud prevention, dispute resolution, or legal obligations</li>
                  </ul>
                </>
              }
            />

            <Section
              number="5"
              title="Retention Period"
              content={
                <p>
                  Retained data is stored only as long as necessary for compliance purposes, 
                  typically up to 90 days unless a longer period is required by law.
                </p>
              }
            />

            <Section
              number="6"
              title="Processing Time"
              content={
                <p>
                  Account deletion requests are processed within <strong>7–10 working days</strong> 
                  after successful verification.
                </p>
              }
            />

            <Section
              number="7"
              title="Contact Information"
              content={
                <p>
                  For any issues or follow-ups, contact us at:
                  <br />
                  <strong>Email:</strong> team@furrendly.com
                </p>
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