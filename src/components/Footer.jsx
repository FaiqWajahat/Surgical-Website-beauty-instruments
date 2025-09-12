"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Animation variants
const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const pathname = usePathname();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Contact", href: "/Contact" },
  ];

  const productLinks = [
    { name: "Surgical Instruments", href: "/Surgical-Instruments" },
    { name: "Scissors", href: "/Scissors" },
    { name: "Tweezers", href: "/Tweezers" },
    { name: "Razors", href: "/Razors" },
  ];

  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand / About */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">TRIMZO ENTERPRISES</h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            Delivering precision-crafted surgical, dental, and beauty
            instruments trusted by professionals worldwide.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: <Facebook size={18} />, link: "https://www.facebook.com/trimzoenterprises?mibextid=ZbWKwL" },
              { icon: <Instagram size={18} />, link: "https://www.instagram.com/trimzo_enterprises1?igsh=MXY4OW1hdXA3b3Fucw==" },
              { icon:<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12.04 2c-5.52 0-10 4.39-10 9.8 0 1.73.47 3.41 1.36 4.89l-1.44 5.26 5.43-1.42c1.43.78 3.03 1.19 4.65 1.19h.01c5.52 0 10-4.39 10-9.8s-4.48-9.8-10-9.8Zm0 17.96c-1.36 0-2.69-.35-3.87-1.01l-.28-.16-3.21.84.86-3.12-.18-.32a7.6 7.6 0 0 1-1.13-3.99c0-4.22 3.54-7.65 7.9-7.65 2.11 0 4.09.8 5.58 2.24a7.5 7.5 0 0 1 2.32 5.41c0 4.22-3.54 7.65-7.9 7.65Zm4.28-5.67c-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.52.12-.16.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.11-.97-.36-1.84-1.12-.68-.6-1.15-1.34-1.28-1.56-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.11-.52-1.23-.71-1.68-.19-.45-.38-.38-.52-.39h-.44c-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.6 2.48 3.86 3.37.54.23.96.36 1.28.46.54.17 1.03.15 1.42.09.43-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.11-.21-.17-.44-.28Z" />
                </svg> , link:"https://wa.me/+923377282060"}
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
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
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`relative inline-block transition duration-300 group ${
                    pathname === item.href
                      ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                      : "hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-3 text-blue-100">
            {productLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`relative inline-block transition duration-300 group ${
                    pathname.startsWith(item.href)
                      ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                      : "hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
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
              <span className="transition group-hover:text-white">
                +(92) 0337 7282060
              </span>
            </li>
            <li className="flex items-start gap-3 group">
              <Mail size={18} className="mt-1 group-hover:text-white transition" />
              <span className="transition group-hover:text-white">
               trimzoenterprises1@mail.com
              </span>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin size={18} className="mt-1 group-hover:text-white transition" />
              <span className="transition group-hover:text-white">
               Nai Basti, Post Office Gohad Pur Bonkan, Sialkot, Pakistan
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
        © {new Date().getFullYear()} Trimzo Enterprises. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
