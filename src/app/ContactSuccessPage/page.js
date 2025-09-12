'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, Phone, Clock, Users, Wrench, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import successImg from '@/Assets/Images/aboutus-01.jpg'

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero / Confirmation */}
      <section className="relative bg-blue-950 text-white py-24 px-6 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
              <Check className="w-8 h-8 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Message Sent</h1>
            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              Thank you — your message has been sent. Our team has received your request and will reach out to you as soon as possible.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Next Steps / Contact Info */}
      <section className="py-16 px-6 lg:px-20">
        <SectionHeading
          first={"What's"}
          second={"Next"}
          paragraph={"Here’s what happens now and how to get in touch if you need help right away."}
        />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">What we’ll do</h3>
              <p className="text-gray-600 mb-4">
                Our support team reviews each message carefully — we may contact you to clarify details and provide the best possible solution.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><Clock className="w-5 h-5 mt-1 text-blue-600" /><span>Expect a reply within 1–2 business days.</span></li>
                <li className="flex items-start gap-3"><Users className="w-5 h-5 mt-1 text-blue-600" /><span>We may follow up by email or phone depending on your request.</span></li>
                <li className="flex items-start gap-3"><Wrench className="w-5 h-5 mt-1 text-blue-600" /><span>For product inquiries we might request additional details or photos.</span></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
            >
              <h4 className="text-lg font-semibold mb-3 text-blue-700">Need help sooner?</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:support@yourcompany.com" className="flex items-center gap-3 p-3 rounded-md border border-gray-100 hover:shadow">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-xs text-gray-500">trimzoenterprises1@mail.com</div>
                  </div>
                </a>

                <a href="tel:+1234567890" className="flex items-center gap-3 p-3 rounded-md border border-gray-100 hover:shadow">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Call Us</div>
                    <div className="text-xs text-gray-500">+92 0337 7282060</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href="/Contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 font-semibold hover:shadow transition">
                Send Another Message
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg"
          >
            <Image src={successImg} alt="Success" fill className="object-cover" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
