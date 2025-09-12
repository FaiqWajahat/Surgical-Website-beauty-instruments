'use client'

import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  Building,
  Award,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

// NOTE: prefer storing these in your .env.local as NEXT_PUBLIC_EMAILJS_*
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_tfeudsm'
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_cc7dlwa'
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'orBqo6XBefuVDVTrd'

const ContactUs = ({getQuote}) => {
  const formRef = useRef(null)
  const initialForm = { name: '', email: '', phone: '', company: '', message: '' }
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY)
      } catch (err) {
        console.warn('emailjs.init failed (non-fatal):', err)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill the required fields: Name, Email and Message.')
      setStatus('error')
      return
    }

    if (!validateEmail(form.email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    if (!formRef.current) {
      setErrorMsg('Form reference not found.')
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
      setStatus('success')
      setForm(initialForm)
      setErrorMsg('')
      setTimeout(() => setStatus(null), 3500)
      router.push("/ContactSuccessPage")
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setErrorMsg('Failed to send message. Please try again later.')
    }
  }

  const contactInfo = [
    { icon: Phone, title: 'Phone', text: '+92 0337 7282060', subtext: 'Sales & Support' },
    { icon: Mail, title: 'Email', text: 'trimzoenterprises1@gmail.com', subtext: '24/7 Response' },
    { icon: MapPin, title: 'Address', text: 'Nai Basti, Post Office Gohad Pur Bonkan', subtext: 'Sialkot,Pakistan' },
  ]

  const features = [
    { icon: Award, title: 'ISO Certified', desc: 'Quality guaranteed instruments' },
    { icon: Users, title: 'Expert Support', desc: 'Professional consultation team' },
    { icon: Building, title: 'Global Reach', desc: 'Worldwide shipping available' },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }
  const router=useRouter()
  return (
    <section ref={getQuote} className="w-full px-4 sm:px-6 lg:px-16 py-12 sm:py-20">
      {/* Heading */}
      <SectionHeading
        first={'Contact'}
        second={'Us'}
        paragraph={
          "Have questions or need assistance? Our dedicated team is here to help you with all your medical and beauty instrument needs. Reach out to us today!"
        }
      />

      {/* Features */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto mb-10 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-3 sm:gap-4 bg-blue-700 p-4 rounded-md shadow-sm"
            >
              <div className="p-2 sm:p-3 rounded-md bg-white text-blue-600">
                <feature.icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-white/80">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {/* Contact Form (unchanged UI, fixed functionality) */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-3">
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-2xl border border-blue-100">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" aria-live="polite">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company/Practice</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your organization"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Please describe your requirements..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                ></textarea>
              </div>

              {/* Error Message */}
              {status === 'error' && errorMsg && (
                <p className="text-red-600 text-sm">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full cursor-pointer flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base text-white shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  status === 'success'
                    ? 'bg-green-600'
                    : status === 'error'
                    ? 'bg-red-600'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                }`}
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'success' && <CheckCircle size={18} />}
                {status === 'error' && <span>❌</span>}
                <Send size={16} />
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Failed! Try Again'
                  : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info + Social (unchanged) */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-2">
          <div className="bg-blue-700 text-white p-6 sm:p-8 rounded-md shadow-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Get in Touch</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Our professional team is here to assist you with all your medical and beauty instrument needs.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <div className="p-2 sm:p-2 rounded-md bg-white/20">
                      <item.icon size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-blue-200 uppercase tracking-wide font-medium">{item.title}</p>
                      <p className="font-semibold text-white text-sm sm:text-base mb-0.5">{item.text}</p>
                      <p className="text-xs sm:text-sm text-blue-200">{item.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center justify-center gap-4 sm:gap-6 mt-2">
              <a
               href="https://www.facebook.com/trimzoenterprises?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-blue-600 transition"
              >
                <Facebook size={22} />
              </a>
              <a
                  href="https://www.instagram.com/trimzo_enterprises1?igsh=MXY4OW1hdXA3b3Fucw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-pink-600 transition"
              >
              <Instagram size={22} />
              </a>
            
              <a
                href="https://wa.me/+923377282060"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-green-600 transition"
              >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12.04 2c-5.52 0-10 4.39-10 9.8 0 1.73.47 3.41 1.36 4.89l-1.44 5.26 5.43-1.42c1.43.78 3.03 1.19 4.65 1.19h.01c5.52 0 10-4.39 10-9.8s-4.48-9.8-10-9.8Zm0 17.96c-1.36 0-2.69-.35-3.87-1.01l-.28-.16-3.21.84.86-3.12-.18-.32a7.6 7.6 0 0 1-1.13-3.99c0-4.22 3.54-7.65 7.9-7.65 2.11 0 4.09.8 5.58 2.24a7.5 7.5 0 0 1 2.32 5.41c0 4.22-3.54 7.65-7.9 7.65Zm4.28-5.67c-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.52.12-.16.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.11-.97-.36-1.84-1.12-.68-.6-1.15-1.34-1.28-1.56-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.11-.52-1.23-.71-1.68-.19-.45-.38-.38-.52-.39h-.44c-.15 0-.4.06-.61.28-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.6 2.48 3.86 3.37.54.23.96.36 1.28.46.54.17 1.03.15 1.42.09.43-.06 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.11-.21-.17-.44-.28Z" />
                </svg> 
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs