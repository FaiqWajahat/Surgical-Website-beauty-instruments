<div align="center">

# 🔬 Trimzo Enterprises

### Premium Surgical & Beauty Instruments — Global Exporter

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

> **FDA-approved** surgical and beauty instruments, crafted with precision and exported to **150+ countries** worldwide.

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Product Categories](#-product-categories)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Admin Panel](#-admin-panel)
- [Contact](#-contact)

---

## 🌟 Overview

**Trimzo Enterprises** is a modern, full-stack e-commerce and product showcase website built for a leading manufacturer and exporter of high-quality surgical and beauty instruments. The platform allows customers worldwide to browse an extensive product catalog, request quotes, and get in touch — while giving administrators full control to manage the product inventory through a secure admin panel.

Built with **Next.js 15** (App Router + Turbopack), the site delivers a blazing-fast, responsive experience with rich animations and a professional design.

---

## 🚀 Live Demo

> 🔗 Coming soon — deploy to Vercel with one click using the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## ✨ Features

### 🎨 User Experience
- **Animated Hero Section** — Full-screen background video with play/pause controls and Framer Motion entrance animations
- **Product Catalog** — Browse products by category and subcategory with a clean card-based layout
- **Smart Search** — Real-time product search powered by global Zustand state
- **Smooth Scroll Navigation** — CTA buttons that smoothly scroll to featured products or the quote form
- **Animated Statistics** — Count-up number animations showcasing company milestones
- **Swiper Carousel** — Touch-friendly product sliders for featured items
- **Sticky WhatsApp Button** — Instant direct messaging for quick customer support

### 📦 Product Management
- Full **CRUD operations** via REST API (Add, View, Delete products)
- **Cloudinary** integration for optimized cloud image storage and delivery
- **MongoDB** database with Mongoose ORM for persistent product data
- Article number uniqueness validation to prevent duplicate entries

### 📬 Contact & Quoting
- **EmailJS-powered** contact form for direct email delivery without a backend mail server
- Dedicated **Get a Quote** section with smooth scroll anchor linking
- Success confirmation page after form submission

### 🔒 Admin Panel
- Password-protected admin dashboard
- Product upload form with image preview and Cloudinary upload
- Product table with delete functionality and stats overview

### 📱 Responsive Design
- **Mobile-first** layout with collapsible hamburger navigation
- Full **desktop mega-menu** with animated dropdowns for all product categories
- Glassmorphism-effect navbar that adapts on scroll

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **State Management** | [Zustand 5](https://zustand-demo.pmnd.rs/) |
| **Database** | [MongoDB](https://www.mongodb.com/) via [Mongoose 8](https://mongoosejs.com/) |
| **Media Storage** | [Cloudinary](https://cloudinary.com/) |
| **Email Service** | [EmailJS](https://www.emailjs.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Carousel** | [Swiper.js 11](https://swiperjs.com/) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/) |
| **Count Animations** | [React CountUp](https://www.npmjs.com/package/react-countup) |

---

## 📁 Project Structure

```
surgical/
├── public/                    # Static assets (logo, favicon, fallback image)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── About/             # About Us page
│   │   ├── Contact/           # Contact page
│   │   ├── ContactSuccessPage/# Post-form success page
│   │   ├── GetQuote/          # Request a Quote page
│   │   ├── Search/            # Product search results
│   │   ├── Services/          # Services page
│   │   ├── [SubCategory]/     # Dynamic product subcategory pages
│   │   │   └── [product]/     # Dynamic individual product pages
│   │   ├── admin/             # Admin dashboard (protected)
│   │   ├── api/               # REST API routes
│   │   │   ├── addProducts/   # POST - add a new product
│   │   │   ├── deleteProduct/ # DELETE - remove a product
│   │   │   └── getProduct/    # GET - fetch all products
│   │   ├── layout.js          # Root layout (Navbar, Footer, Toaster)
│   │   └── page.js            # Home page
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Responsive navbar with mega-menu dropdowns
│   │   ├── Hero.jsx           # Full-screen video hero section
│   │   ├── Category.jsx       # Product category grid
│   │   ├── FeaturedProducts.jsx  # Featured products carousel
│   │   ├── Stats.jsx          # Animated statistics counter
│   │   ├── Services.jsx       # Services showcase section
│   │   ├── About.jsx          # About us section
│   │   ├── Contactus.jsx      # Contact/Quote form (EmailJS)
│   │   ├── Footer.jsx         # Site footer with links & socials
│   │   ├── ProductCard.jsx    # Individual product card component
│   │   ├── ProductTable.jsx   # Admin product management table
│   │   ├── AdminStats.jsx     # Admin dashboard stats panel
│   │   ├── StickyWhatsappButton.jsx  # Floating WhatsApp CTA
│   │   ├── SubCategoryCard.jsx       # Subcategory listing card
│   │   ├── ProductSkeleton.jsx       # Loading skeleton for products
│   │   └── SectionHeading.jsx        # Reusable section title
│   ├── models/
│   │   └── product.js         # Mongoose Product schema
│   ├── lib/
│   │   └── mongodb.js         # MongoDB connection utility
│   ├── Store/
│   │   └── states.js          # Zustand global store (products, search)
│   ├── Assets/                # Static assets imported in components
│   └── scripts/
│       └── seed.js            # Database seeding script
├── next.config.mjs            # Next.js configuration
├── package.json
└── .env.local                 # Environment variables (not committed)
```

---

## 🗺️ Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — Hero, Categories, Featured Products, Stats, Services, Contact |
| `/About` | Company history, mission, and values |
| `/Services` | Services offered (manufacturing, export, OEM, etc.) |
| `/Contact` | Contact form with EmailJS integration |
| `/GetQuote` | Request a product quote |
| `/Search` | Search results filtered from global state |
| `/ContactSuccessPage` | Success confirmation after form submission |
| `/[category]/[SubCategory]` | Dynamic product listing by subcategory |
| `/admin` | Admin dashboard — add & manage products |

---

## 🏷️ Product Categories

The catalog is organized into **4 main categories**, each with multiple subcategories:

<table>
<tr>
<td>

### 🏥 Surgical
- Scalpels
- Splinter Forceps
- Scissors
- Towel & Tubing Clamps
- Sutures
- Rhinologys

</td>
<td>

### ✂️ Scissors
- Titanium Coated Hair Scissors
- Thinning Scissors
- Hair Cutting Scissors
- Economy Hair Thinning Scissors
- Cuticle & Personal Care Scissors
- Barracuda Hair Scissors

</td>
</tr>
<tr>
<td>

### 🔬 Tweezers
- Adson Tweezers
- Dressing Tweezers
- Splinter Tweezers
- Fine Tip Tweezers
- Flat Tip Tweezers
- Curved Tweezers

</td>
<td>

### 🪒 Razors
- Barber Razors
- Thinning Razors
- Bone and Horn Razors
- Damascus Razors
- Plastic Handle Razors
- Wood Handle Razors

</td>
</tr>
</table>

---

## 🔌 API Reference

All API routes are located under `/src/app/api/`.

### `POST /api/addProducts`
Add a new product to the catalog.

**Request Body:**
```json
{
  "name": "Adson Tweezers",
  "category": "Tweezers",
  "subcategory": "Adson-Tweezers",
  "article": "TW-001",
  "description": "Delicate tissue handling instrument.",
  "image": "data:image/jpeg;base64,..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product added successfully",
  "product": { ... }
}
```

---

### `GET /api/getProduct`
Fetch all products from the database.

**Response:**
```json
{
  "success": true,
  "products": [ { "name": "...", "category": "...", ... } ]
}
```

---

### `DELETE /api/deleteProduct`
Delete a product by its ID.

**Request Body:**
```json
{ "id": "64f3abc..." }
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [MongoDB](https://www.mongodb.com/) Atlas account (or local instance)
- [Cloudinary](https://cloudinary.com/) account
- [EmailJS](https://www.emailjs.com/) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/trimzo-enterprises.git
   cd trimzo-enterprises
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in the values — see Environment Variables section below
   ```

4. **Seed the database** *(optional)*
   ```bash
   npm run seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at **[http://localhost:3000](http://localhost:3000)** with Turbopack for fast HMR.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/trimzo

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# EmailJS (used client-side)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **Never commit your `.env.local` file.** It is already listed in `.gitignore`.

---

## 🛡️ Admin Panel

Navigate to `/admin` to access the admin dashboard. The panel provides:

- 📊 **Stats Overview** — Total products, categories, and inventory count
- ➕ **Add Product** — Upload product name, category, subcategory, article number, description, and image
- 🗑️ **Delete Product** — Remove products directly from the product table
- 🔒 **Protected Route** — Secured with password authentication

---

## 📞 Contact

**Trimzo Enterprises**

| Channel | Details |
|---|---|
| 📞 Phone | +92 0337 7282060 |
| 💬 WhatsApp | [Chat Now](https://wa.me/+923377282060) |
| 🌐 Facebook | [trimzoenterprises](https://www.facebook.com/trimzoenterprises) |
| 📸 Instagram | [@trimzo_enterprises1](https://www.instagram.com/trimzo_enterprises1) |

---

## 📄 License

This project is **private** and proprietary to Trimzo Enterprises. All rights reserved.

---

<div align="center">

Built with ❤️ using **Next.js 15**, **React 19**, and **Tailwind CSS v4**

</div>
