'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CTA from '@/components/cta'
import Team from '@/components/team'
import Contact from '@/components/contact'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'faq'>('home')

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
          <CTA setCurrentPage={setCurrentPage} />
          <Team />
          <Footer setCurrentPage={setCurrentPage} />
        </>
      )}
      
      {currentPage === 'contact' && (
        <>
          <Contact setCurrentPage={setCurrentPage} />
          <Footer setCurrentPage={setCurrentPage} />
        </>
      )}
      
      {currentPage === 'faq' && (
        <>
          <FAQ setCurrentPage={setCurrentPage} />
          <Footer setCurrentPage={setCurrentPage} />
        </>
      )}
    </div>
  )
}
