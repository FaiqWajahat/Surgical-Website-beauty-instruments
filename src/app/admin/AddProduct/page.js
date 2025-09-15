'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, Upload, ChevronDown, Check, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useStore } from '@/Store/states'
import { useRouter } from 'next/navigation'

export default function AddProductPage() {
  const router = useRouter()
  const { addProduct } = useStore()

  const [form, setForm] = useState({
    name: '',
    category: '',
    subcategory: '',
    article: '', 
    description: '',
    image: "",
  })
  const [preview, setPreview] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false) // ✅ loading state
  const [dropdowns, setDropdowns] = useState({
    category: false,
    subcategory: false,
  })

  const categories = {
    "Surgical Instruments": ["Scalpels", "Splinter Forceps", "Scissors", "Towel & Tubing Clamps", "Sutures", "Rhinologys"],
    "Scissors": ["Titanium Coated Hair Scissors", "Thinning Scissors", "Hair Cutting Scissors", "Economy Hair Thinning Scissors", "Cuticle & Personal Care Scissors", "Barracuda Hair Scissors"],
    "Tweezers": ["Adson Tweezers", "Dressing Tweezers", "Splinter Tweezers", "Fine Tip Tweezers", "Flat Tip Tweezers", "Curved Tweezers"],
    "Razors": ["Barber Razors", "Thinning Razors", "Bone and Horn Razors", "Damascus Razors", "Plastic Handle Razors", "Wood Handle Razors"],
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Product name is required'
    if (!form.category) newErrors.category = 'Category is required'
    if (!form.subcategory) newErrors.subcategory = 'Subcategory is required'
    if (!form.article) newErrors.article = 'SKU (Article) is required'
    if (!form.description) newErrors.description = 'Description is required'
    if (!form.image) newErrors.image = 'Product image is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }))
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true) // ✅ start loading
      await addProduct(form) // API call
      console.log("✅ Product Added:", form)

      // reset form
      setForm({
        name: '',
        category: '',
        subcategory: '',
        article: '',
        description: '',
        image: "",
      })
      setPreview(null)
    } catch (error) {
      console.error("❌ Failed to add product:", error)
    } finally {
      setLoading(false) // ✅ stop loading
    }
  }

  // Custom Select Component
  const CustomSelect = ({ name, value, options, placeholder, disabled = false }) => {
    const isOpen = dropdowns[name]

    const toggleDropdown = () => {
      setDropdowns({
        ...dropdowns,
        [name]: !dropdowns[name],
        ...(name === 'category' ? { subcategory: false } : { category: false }),
      })
    }

    const handleSelectChange = (name, value) => {
      setForm((prev) => ({
        ...prev,
        [name]: value,
        ...(name === 'category' ? { subcategory: '' } : {}),
      }))
      setDropdowns({ ...dropdowns, [name]: false })
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: '' }))
      }
    }

    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && toggleDropdown(name)}
          disabled={disabled}
          className={`
            mt-2 w-full border rounded-lg px-4 py-3 text-left
            shadow-sm transition-all duration-200 
            ${disabled
              ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white border-gray-300 hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer'}
            ${isOpen && !disabled ? 'ring-2 ring-blue-500 border-blue-500' : ''}
            ${errors[name] ? 'border-red-400 ring-1 ring-red-400' : ''}
          `}
        >
          <div className="flex items-center justify-between">
            <span className={value ? 'text-gray-900' : 'text-gray-500'}>
              {value || placeholder}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                disabled ? 'text-gray-400' : 'text-gray-600'
              } ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>

        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelectChange(name, option)}
                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 
                         border-b border-gray-100 last:border-b-0 flex items-center justify-between group"
              >
                <span className="text-gray-900 group-hover:text-blue-700">
                  {option}
                </span>
                {value === option && <Check className="w-4 h-4 text-blue-600" />}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full py-16 md:px-6 px-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg lg:p-10 md:p-5 p-4 border border-blue-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-8 px-2 border-b pb-4">
          <div className='flex gap-3 items-center'>
            <PlusCircle className="w-7 h-7 text-blue-600" />
            <h2 className="md:text-2xl text-xl font-bold text-blue-700">
              Add <span className='hidden md:inline-block'>New</span> Product
            </h2>
          </div>

          <button 
            onClick={() => router.push("/admin")} 
            className="px-4 py-2 bg-blue-700 text-white cursor-pointer rounded-md hover:bg-blue-800 transition-all duration-200 active:scale-95"
          >
            Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2.5 
                shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <CustomSelect
                name="category"
                value={form.category}
                options={Object.keys(categories)}
                placeholder="-- Select Category --"
              />
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* Subcategory */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Subcategory</label>
              <CustomSelect
                name="subcategory"
                value={form.subcategory}
                options={form.category ? categories[form.category] : []}
                placeholder="-- Select Subcategory --"
                disabled={!form.category}
              />
              {errors.subcategory && <p className="text-red-500 text-sm mt-1">{errors.subcategory}</p>}
            </div>

            {/* Article / SKU */}
            <div>
              <label className="block text-sm font-medium text-gray-700">SKU (Article)</label>
              <input
                type="text"
                name="article"
                value={form.article}
                onChange={handleChange}
                placeholder="Enter SKU code"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2.5 
                shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              />
              {errors.article && <p className="text-red-500 text-sm mt-1">{errors.article}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2.5 
                shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition resize-none"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
          </div>

          {/* Right Section - Image Upload */}
          <div className="space-y-6 h-full">
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <div className="border-2 border-dashed border-blue-300 rounded-md p-8 h-[90%] flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 transition">
              <Upload className="w-10 h-10 text-blue-500 mb-3" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Upload Image
              </label>
              {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
              {preview && (
                <div className="mt-4 relative w-44 lg:w-56 h-44 lg:h-56 rounded-md overflow-hidden shadow-lg">
                  <Image src={preview} alt="Preview" fill className="object-cover" />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex cursor-pointer items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-md font-semibold shadow-lg transition 
                ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Adding Product...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
