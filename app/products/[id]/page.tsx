import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Next.js Basic ',
  description: 'This is the products page of Next.js Basic',
}

type ProductDetailPageProps = {
    params: {
        id: string
    }
}


async function ProductDetailPageProps({ params }: ProductDetailPageProps) {
    const { id } = await params
  return (
    <main className="text-3xl font-bold">
        Product Detail
        <p className="text-sm mt-4">Product ID: {id}</p>
    </main>

  )
}

export default ProductDetailPageProps