'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, Loader2, CheckCircle, 
  Building, Award, Users, Facebook, Twitter, Linkedin, Instagram 
} from 'lucide-react'

const ContactUs = () => {
  const [form, setForm] = useState({ 
    name: '', email: '', phone: '', company: '', message: '' 
  })
  const [status, setStatus] = useState(null) // "loading", "success", "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // fake API
      setStatus("success")
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch {
      setStatus("error")
    }
  }

  const contactInfo = [
    { icon: Phone, title: "Phone", text: "+1 (555) 123-4567", subtext: "Sales & Support" },
    { icon: Mail, title: "Email", text: "info@medicalinstruments.com", subtext: "24/7 Response" },
    { icon: MapPin, title: "Address", text: "123 Medical Plaza, Healthcare District", subtext: "New York, NY 10001" },
  ]

  const features = [
    { icon: Award, title: "ISO Certified", desc: "Quality guaranteed instruments" },
    { icon: Users, title: "Expert Support", desc: "Professional consultation team" },
    { icon: Building, title: "Global Reach", desc: "Worldwide shipping available" },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
     
     {/* Heading */}
     <motion.div
       className="text-center mb-16"
       initial={{ y: 50, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       viewport={{ once: true }}
     >
       <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
         {["Get", "In","Touch"].map((word, index) => (
           <motion.span
             key={word}
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ 
               duration: 0.8, 
               delay: 0.4 + index * 0.1,
               ease: [0.25, 0.46, 0.45, 0.94]
             }}
             viewport={{ once: true }}
             className="inline-block mr-4 bg-black bg-clip-text text-transparent"
           >
             {word}
           </motion.span>
         ))}
       </h1>

       <motion.div
         initial={{ scaleX: 0 }}
         whileInView={{ scaleX: 1 }}
         transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
         viewport={{ once: true }}
         className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-lg origin-center mb-6"
       />

       <motion.p
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, delay: 1 }}
         viewport={{ once: true }}
         className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
       >
         We are a collective of dreamers, builders, and innovators, united by a passion for transforming ideas into reality.
       </motion.p>
     </motion.div>

     {/* Features */}
     <motion.div
       variants={fadeUp}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className="max-w-6xl mx-auto mb-10 sm:mb-12"
     >
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
         {features.map((feature, i) => (
           <motion.div
             key={feature.title}
             variants={fadeUp}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             transition={{ delay: i * 0.2 }}
             className="flex items-center gap-3 sm:gap-4 bg-blue-600 p-4 rounded-md shadow-sm"
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
       
       {/* Contact Form */}
       <motion.div
         variants={fadeUp}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="lg:col-span-3"
       >
         <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-blue-100">
           <div className="mb-6 sm:mb-8">
             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Send us a Message</h3>
             <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
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

             {/* Submit */}
             <button
               type="submit"
               disabled={status === "loading"}
               className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base text-white shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                 status === "success"
                   ? "bg-green-600"
                   : status === "error"
                   ? "bg-red-600"
                   : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
               }`}
             >
               {status === "loading" && <Loader2 size={18} className="animate-spin" />}
               {status === "success" && <CheckCircle size={18} />}
               {status === "error" && <span>❌</span>}
               <Send size={16} />
               {status === "loading"
                 ? "Sending..."
                 : status === "success"
                 ? "Message Sent!"
                 : status === "error"
                 ? "Failed! Try Again"
                 : "Send Message"}
             </button>
           </form>
         </div>
       </motion.div>

       {/* Contact Info + Social */}
       <motion.div
         variants={fadeUp}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="lg:col-span-2"
       >
         <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between">
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
           <motion.div
             variants={fadeUp}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="flex items-center justify-center gap-4 sm:gap-6 mt-6"
           >
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-blue-600 transition">
               <Facebook size={22} />
             </a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-blue-600 transition">
               <Twitter size={22} />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-blue-600 transition">
               <Linkedin size={22} />
             </a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 sm:p-3 rounded-md bg-white/20 hover:bg-white text-white hover:text-pink-600 transition">
               <Instagram size={22} />
             </a>
           </motion.div>
         </div>
       </motion.div>
     </div>
    </section>
  )
}

export default ContactUs
