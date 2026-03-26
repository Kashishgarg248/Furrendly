'use client'

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  setCurrentPage: (page: 'home' | 'contact' | 'faq') => void
  currentPage: 'home' | 'contact' | 'faq'
}

export default function Header({ setCurrentPage, currentPage }: HeaderProps) {

  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Contact", page: "contact" },
    { name: "FAQ", page: "faq" }
  ]

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center"
        >
          <Image
  src="/logo-transparent.png"
  alt="Furrendly Logo"
  width={0}
  height={0}
  sizes="100vw"
  className="h-30 w-auto object-contain"
  priority
/>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setCurrentPage(item.page as any)}
              className={`transition ${
                currentPage === item.page
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.name}
            </button>
          ))}

        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-6 text-gray-700 font-medium"
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page as any)
                  setOpen(false)
                }}
                className={`text-left transition ${
                  currentPage === item.page
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}