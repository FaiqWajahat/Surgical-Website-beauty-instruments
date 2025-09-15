'use client'
import React, { useEffect } from 'react'
import AdminStats from '@/components/AdminStats'
import ProductsTable from '@/components/ProductTable'
import { useStore } from '@/Store/states'

const AdminPage = () => {
  const { productData , getProduct} = useStore()

  useEffect(() => {
    const fetchProducts = async () => {
      if (productData.length === 0) {
       
        await getProduct()
        
      }
    }
    fetchProducts()
  }, [getProduct, productData.length])

  return (
    <div className="min-h-screen px-2 lg:px-8 py-16 space-y-10">
      {/* Dashboard Stats */}
      <AdminStats products={productData.length} category={4} subCategory={24} />

      {/* Products Table */}
      <ProductsTable products={productData ?? []} />
    </div>
  )
}

export default AdminPage
