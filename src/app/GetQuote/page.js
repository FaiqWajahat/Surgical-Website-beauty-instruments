'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { Send } from 'lucide-react'
import Image from 'next/image'
import { useStore } from '@/Store/states'

import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation'

export default function GetQuotePage() {
  const { article, productData } = useStore()
  const [image, setImage] = useState(null)
  const router = useRouter()
  const formRef = useRef(null)

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_tfeudsm'
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_cc7dlwa'
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'orBqo6XBefuVDVTrd'

  useEffect(() => {
    if (article) {
      const filterData = productData.filter(
        (v) => v.article.toLowerCase() === article.toLowerCase()
      )
      setImage(filterData[0]?.image)
    }
  }, [article])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success')
          setFormData({ name: '', email: '', phone: '', company: '', message: '' })
          router.push('/ContactSuccessPage')
        },
        (error) => {
          console.error('EmailJS error:', error)
          setStatus('error')
        }
      )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-blue-950 text-white py-20 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Request a Quote
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Share your details with us, and we’ll respond with a tailored solution for you.
        </motion.p>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumbs text-md max-w-6xl mx-auto px-4 py-4 lg:px-20 bg-gray-100 mt-10 rounded-md">
        <ul>
          <li>Home</li>
          <li>Get Quote</li>
        </ul>
      </div>

      {/* Form & Product */}
      <section className="py-16 px-6 lg:px-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionHeading
              first="Get"
              second="Quote"
              paragraph="Fill out the form below"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {article && (
              <input
                type="text"
                name="article"
                value={article}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-70"
            >
              <Send className="w-5 h-5" />
              {status === 'loading' ? 'Sending...' : 'Submit Request'}
            </motion.button>

            {status === 'error' && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>

          {/* Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center bg-white shadow-xl rounded-2xl p-6 border border-gray-100"
          >
            {image ? (
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt={`Product ${article}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
                No Product Selected
              </div>
            )}
            {article && (
              <p className="mt-4 text-lg font-semibold text-blue-700">
                Article No: {article}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
