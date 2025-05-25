'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleMenuToggle = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const handleMenuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-[#00274D] to-[#003366] shadow-lg' 
        : 'bg-gradient-to-r from-[#00274D]/90 to-[#003366]/90 backdrop-blur-sm'
    } z-50`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img src="/logo.png" alt="Bold Font Logo" className="h-12 w-12 sm:h-16 sm:w-16" />
            <span className="font-heading text-xl sm:text-2xl font-bold text-white">Bold Font</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
            onClick={handleMenuToggle}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-md bg-[#FF8C00] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFA500] transition-all duration-300 border border-white/20"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          aria-hidden="true"
          onClick={handleMenuClose}
        />
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-[#00274D] to-[#003366] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={handleMenuClose}>
              <img src="/logo.png" alt="Bold Font Logo" className="h-12 w-12 sm:h-16 sm:w-16" />
              <span className="font-heading text-xl sm:text-2xl font-bold text-white">Bold Font</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
              onClick={handleMenuClose}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-white/90 hover:text-white hover:bg-white/5 transition-colors active:bg-white/10"
                    onClick={handleMenuClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-white bg-[#FF8C00] hover:bg-[#FFA500] transition-all duration-300 border border-white/20 active:bg-[#FF7C00]"
                  onClick={handleMenuClose}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 