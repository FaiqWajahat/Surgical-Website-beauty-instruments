'use client'
import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
}

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white relative overflow-hidden">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand / About */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">MediCare Instruments</h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            Delivering precision-crafted surgical, dental, and beauty instruments trusted by professionals worldwide.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: <Facebook size={18} />, link: "#" },
              { icon: <Instagram size={18} />, link: "#" },
              { icon: <Twitter size={18} />, link: "#" },
              { icon: <Linkedin size={18} />, link: "#" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-blue-100">
            {['Home', 'About Us', 'Products', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="relative inline-block transition duration-300 hover:text-white group"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-blue-100">
            {['Surgical Instruments', 'Dental Tools', 'Salon & Beauty Equipment', 'Custom Manufacturing'].map(
              (service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative inline-block transition duration-300 hover:text-white group"
                  >
                    {service}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-5 text-blue-100">
            <li className="flex items-start gap-3 group">
              <Phone size={18} className="mt-1 group-hover:text-white transition" />
              <span className="transition group-hover:text-white">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3 group">
              <Mail size={18} className="mt-1 group-hover:text-white transition" />
              <span className="transition group-hover:text-white">info@medicalinstruments.com</span>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin size={18} className="mt-1 group-hover:text-white transition" />
              <span className="transition group-hover:text-white">
                123 Medical Plaza, Healthcare District, New York, NY 10001
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-white/20 py-6 text-center text-blue-100 text-sm relative z-10"
      >
        © {new Date().getFullYear()} MediCare Instruments. All rights reserved.
      </motion.div>
    </footer>
  )
}

export default Footer
