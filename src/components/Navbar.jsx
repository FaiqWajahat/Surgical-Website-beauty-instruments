'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Facebook, Instagram, Phone, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const closeTimer = useRef(null)
  const pathname = usePathname()

  // Scroll style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Click outside to close any open dropdown
  useEffect(() => {
    const handleDocClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleDocClick)
    return () => document.removeEventListener('mousedown', handleDocClick)
  }, [])

  // Cleanup close timer
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const openNow = (id) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(id)
  }

  const scheduleClose = (delay = 150) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null)
      closeTimer.current = null
    }, delay)
  }

  const toggleMenu = (id) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu((prev) => (prev === id ? null : id))
  }

  const onDropdownKeyDown = (e) => {
    if (e.key === 'Escape') setOpenMenu(null)
  }

  // ----------------- MENU DATA -----------------
  const MENUS = [
  {
    id: 'surgical',
    label: 'Surgical',
    items: [
      { name: 'Scalpels & Blades', desc: 'Precision cutting' },
      { name: 'Forceps & Clamps', desc: 'Grip & hold' },
      { name: 'Needle Holders', desc: 'Suture tools' },
      { name: 'Retractors', desc: 'Tissue retraction' },
      { name: 'Surgical Scissors', desc: 'Fine cutting' },
      { name: 'Speculums', desc: 'Cavity access' },
    ],
  },
  {
    id: 'scissors',
    label: 'Scissors',
    items: [
      { name: 'Barber Scissors', desc: 'Hair cutting' },
      { name: 'Thinning Shears', desc: 'Blend hair' },
      { name: 'Surgical Scissors', desc: 'Medical use' },
      { name: 'Embroidery/Detail', desc: 'Fine tips' },
      { name: 'Left-Handed', desc: 'Ergonomic fit' },
      { name: 'Utility Scissors', desc: 'General use' },
    ],
  },
  {
    id: 'razors',
    label: 'Razors',
    items: [
      { name: 'Straight Razors', desc: 'Classic shave' },
      { name: 'Safety Razors', desc: 'Safe shaving' },
      { name: 'Disposable Razors', desc: 'Single-use' },
      { name: 'Razor Blades', desc: 'Sharp edges' },
      { name: 'Strops & Care', desc: 'Blade care' },
      { name: 'Electric Razors', desc: 'Quick trim' },
    ],
  },
  {
    id: 'tweezers',
    label: 'Tweezers',
    items: [
      { name: 'Slant Tip', desc: 'Everyday use' },
      { name: 'Pointed Tip', desc: 'Fine grip' },
      { name: 'Flat Tip', desc: 'Wide grip' },
      { name: 'Medical Tweezers', desc: 'Surgical use' },
      { name: 'Custom Finishes', desc: 'Stylish look' },
      { name: 'Curved Tip', desc: 'Angled grip' },
    ],
  },
];


  // ----------------- MAIN RETURN -----------------
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}
      ref={navRef}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-100/50 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
       {/* Left socials */}
<div className="hidden md:flex items-center gap-4">
  {/* Facebook */}
  <Link
    href="#"
    className="p-1.5 rounded-md bg-white/20 hover:bg-white text-white hover:text-blue-600"
    aria-label="Facebook"
  >
    <Facebook className="w-4 h-4" strokeWidth={2} />
  </Link>

  {/* Instagram */}
  <Link
    href="#"
    className="p-1.5 rounded-md bg-white/20 hover:bg-white text-white hover:text-pink-600"
    aria-label="Instagram"
  >
    <Instagram className="w-4 h-4" strokeWidth={2} />
  </Link>

  {/* WhatsApp */}
  <Link
    href="#"
    className="p-1.5 rounded-md bg-white/20 hover:bg-white text-white hover:text-green-600"
    aria-label="WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <path d="M12.04 2c-5.52 0-10 4.39-10 9.8 0 1.73.47 3.41 1.36 4.89l-1.44 5.26 5.43-1.42c1.43.78 3.03 1.19 4.65 1.19h.01c5.52 0 10-4.39 10-9.8s-4.48-9.8-10-9.8Zm0 17.96c-1.36 0-2.69-.35-3.87-1.01l-.28-.16-3.21.84.86-3.12-.18-.32a7.6 7.6 0 0 1-1.13-3.99c0-4.22 3.54-7.65 7.9-7.65 2.11 0 4.09.8 5.58 2.24a7.5 7.5 0 0 1 2.32 5.41c0 4.22-3.54 7.65-7.9 7.65Zm4.28-5.67c-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.52.12-.16.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.11-.97-.36-1.84-1.12-.68-.6-1.15-1.34-1.28-1.56-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.11-.52-1.23-.71-1.68-.19-.45-.38-.38-.52-.39h-.44c-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.6 2.48 3.86 3.37.54.23.96.36 1.28.46.54.17 1.03.15 1.42.09.43-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.11-.21-.17-.44-.28Z"/>
    </svg>
  </Link>
</div>


            {/* Center search */}
            <div className="hidden lg:flex items-center flex-1 lg:-translate-x-5 justify-center max-w-md mx-8">
              <div className="relative w-full">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-900" />
                <input
                  type="text"
                  placeholder="Search instruments..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Right contact */}
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 rounded-md bg-white/20 hover:bg-white text-white hover:text-blue-600">
                <Phone className="size-3.5 " />
              </div>
              <a href="tel:+923146997979" className="text-md font-semibold">
                +92 337 7282060
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-700">Trimzo</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[{ name: 'Home', href: '/' }, { name: 'About', href: '/About' }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdowns */}
            {MENUS.map((menu) => {
              const isOpen = openMenu === menu.id
              const panelId = `${menu.id}-menu`
              return (
                <div
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => openNow(menu.id)}
                  onMouseLeave={() => scheduleClose(150)}
                  onFocus={() => openNow(menu.id)}
                  onBlur={() => scheduleClose(150)}
                  onKeyDown={onDropdownKeyDown}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={`flex items-center gap-1 font-medium transition-colors relative group focus:outline-none ${
                      pathname.includes(menu.id) ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                    }`}
                    onClick={() => toggleMenu(menu.id)}
                  >
                    {menu.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    id={panelId}
                    role="menu"
                    className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[500px] bg-white rounded-lg border border-gray-100 shadow-2xl z-50 transform transition-all duration-200 ${
                      isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-4 p-4 ">
                      {menu.items.map((it) => (
                        <Link
                          key={it.name}
                          href={`/${menu.id}/${it.name.toLowerCase().replace(/\s+/g, '-')}`}
                          role="menuitem"
                          className="flex flex-col p-3 rounded-md hover:bg-blue-50 transition-colors group"
                        >
                          <div className="font-medium text-gray-900 group-hover:text-blue-700">{it.name}</div>
                          <div className="text-sm text-gray-500">{it.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {[{ name: 'Services', href: '/Services' }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-700'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/Contact"
              className="px-6 py-2.5 bg-blue-700 hover:scale-105 text-white font-medium rounded-md transition-transform duration-200 shadow-md "
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {[{ name: 'Home', href: '/' }, { name: 'About', href: '/About' }].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium ${
                pathname === item.href ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdowns in Mobile */}
          {MENUS.map((menu) => {
            const isOpen = openMenu === menu.id
            return (
              <div key={menu.id}>
                <button
                  onClick={() => toggleMenu(menu.id)}
                  className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-blue-700"
                >
                  {menu.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {menu.items.map((it) => (
                      <Link
                        key={it.name}
                        href={`/${menu.id}/${it.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-gray-600 hover:text-blue-700 text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {it.name}
                      </Link>
                    ))}
                    
                  </div>
                )}
              </div>
            )
          })}
{[ { name: 'Services', href: '/Services' }].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium ${
                pathname === item.href ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/Contact"
            className="mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md text-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
