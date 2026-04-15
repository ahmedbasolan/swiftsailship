"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/get-quote" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed w-full z-50 bg-gray-900 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img src="/assets/img/Untitled design.png" alt="Swift Sail Logo" className="h-14 w-auto" />
            </Link>
            <span className="font-display font-bold text-xl text-white tracking-wider uppercase">Swift Sail</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link transition-colors text-sm font-medium ${
                  pathname === link.href
                    ? "active text-white hover:text-primary"
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/get-quote"
              className="hidden sm:inline-block bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-md font-medium transition-colors text-sm btn-shine"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4`}>
        <div className="flex flex-col space-y-3 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link transition-colors text-sm font-medium py-2 ${
                pathname === link.href
                  ? "active text-white hover:text-primary"
                  : "text-gray-300 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-quote"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-md font-medium transition-colors text-sm text-center sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
