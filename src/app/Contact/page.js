'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import ContactUs from '@/components/Contactus'



import SectionHeading from '@/components/SectionHeading'
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact <span className="text-white">Us</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Have questions, need support, or want to collaborate? We’d love to hear from you.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 lg:px-20">
        <SectionHeading
          first="Get In"
          second="Touch"
          
          paragraph="Reach out to us through any of the following ways."
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Mail className="w-10 h-10 text-blue-600 mx-auto" />,
              title: "Email Us",
              info: "trimzoenterprises1@gmail.com",
            },
            {
              icon: <Phone className="w-10 h-10 text-blue-600 mx-auto" />,
              title: "Call Us",
              info: "+92 0337 7282060",
            },
            {
              icon: <MapPin className="w-10 h-10 text-blue-600 mx-auto" />,
              title: "Visit Us",
              info: "Nai Basti, Post Office Gohad Pur Bonakan, Sialkot - Pakistan ",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <SectionHeading
          first="Business"
          second="Hours"
          paragraph="We’re available to assist you during these times."
        />
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <ul className="text-lg text-gray-700 space-y-2">
            <li><strong>Monday - Friday:</strong> 9:00 AM – 6:00 PM</li>
            <li><strong>Saturday:</strong> 10:00 AM – 4:00 PM</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>
      </section>
<ContactUs/>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <SectionHeading
          first="Frequently Asked"
          second={"Questions"}

          paragraph="Quick answers to some common queries."
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "How long does delivery take?", a: "Delivery usually takes 5–7 business days depending on your location." },
            { q: "Do you offer international shipping?", a: "Yes, we ship worldwide with reliable partners." },
            { q: "Can I request custom instruments?", a: "Absolutely! We specialize in customization tailored to your needs." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <h4 className="font-semibold text-lg text-blue-700">{faq.q}</h4>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-6 lg:px-20 text-center">
        <SectionHeading
          first="Follow"
          second="Us"
          paragraph="Stay connected with us on social media."
        />
        <div className="flex justify-center space-x-6">
          {[
            { icon: <Facebook />, link: "#" },
            { icon: <Twitter />, link: "#" },
            { icon: <Instagram />, link: "#" },
            { icon: <Linkedin />, link: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="p-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <iframe
            className="w-full h-96 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.99169235382!2d74.535!3d32.510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f31e7!2sImran%20Idrees%20Hospital!5e0!3m2!1sen!2s!4v1693429338341"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
