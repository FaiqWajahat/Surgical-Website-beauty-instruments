'use client'
import { Phone } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef(null);
  const closeTimer = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Close when clicking outside the products wrapper
  useEffect(() => {
    const handleDocClick = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDocClick);
    return () => document.removeEventListener('mousedown', handleDocClick);
  }, []);

  const openProducts = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setProductsOpen(true);
  };

  const scheduleCloseProducts = (delay = 150) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setProductsOpen(false);
      closeTimer.current = null;
    }, delay);
  };

  const onProductsKeyDown = (e) => {
    if (e.key === 'Escape') {
      setProductsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      
      {/* Minimalist Top Bar */}
      <div className="border-b border-gray-100/50 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            
            {/* Left: Social Links */}
            <div className="hidden md:flex items-center gap-4">
              {[
                { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-8 h-8 rounded-md bg-gray-50 hover:bg-blue-50 flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 text-blue-700 group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Center: Search */}
            <div className="hidden lg:flex items-center flex-1 lg:translate-x-7 justify-center max-w-md mx-8">
              <div className="relative w-full">
                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search instruments..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Right: Contact */}
            <div className="flex items-center gap-3 text-sm">
              <div className="hidden md:flex items-center gap-2 text-white">
              <div className='p-2 rounded-md group bg-white' stroke="0">
                <Phone className='size-3.5 text-blue-600 group-hover:scale-105 transition-all fill-blue-600'/>
              </div>
                <a href="tel:+923146997979" className=" transition-colors text-lg ">
                  +92 314 6997979
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Trizmo</span>
              <div className="text-xs text-gray-500 tracking-wide -mt-1">Enterprises</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Home', href: '#' },
              { name: 'About', href: '#' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </a>
            ))}

            {/* Products Dropdown */}
            <div
              ref={productsRef}
              className="relative"
              onMouseEnter={openProducts}
              onMouseLeave={() => scheduleCloseProducts(150)}
              onFocus={openProducts}
              onBlur={() => scheduleCloseProducts(150)}
              onKeyDown={onProductsKeyDown}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors relative group focus:outline-none"
                onClick={() => setProductsOpen(v => !v)}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-3 w-72 bg-white rounded-md border border-gray-100 shadow-xl z-50 transform transition-all duration-200 ${
                  productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                role="menu"
              >
                <div className="p-2">
                  {[
                    { name: 'General Surgery', desc: 'Scalpels, forceps, scissors' },
                    { name: 'Dental Instruments', desc: 'Probes, elevators, pliers' },
                    { name: 'Orthopedic Tools', desc: 'Bone tools, implants' },
                    { name: 'Beauty & Salon', desc: 'Professional scissors, tweezers' },
                    { name: 'Custom Solutions', desc: 'Tailored to your needs' }
                  ].map((product) => (
                    <a
                      key={product.name}
                      href="#"
                      className="block p-3 rounded-md hover:bg-gray-50 transition-colors group"
                      role="menuitem"
                    >
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {product.desc}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {['Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 bg-white/95 backdrop-blur-md ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="p-6 space-y-1">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          
          <details className="group">
            <summary className="py-3 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-colors">
              Products
            </summary>
            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
              {['General Surgery', 'Dental Instruments', 'Orthopedic Tools', 'Beauty & Salon', 'Custom Solutions'].map((product) => (
                <a
                  key={product}
                  href="#"
                  className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {product}
                </a>
              ))}
            </div>
          </details>

          <div className="pt-4 border-t border-gray-100">
            <a
              href="#"
              className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Get Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}