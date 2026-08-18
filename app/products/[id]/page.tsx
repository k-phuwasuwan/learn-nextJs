import React from 'react'

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