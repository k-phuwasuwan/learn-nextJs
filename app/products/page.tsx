import React from 'react'


type Product = {
    id: number;
    name: string;
    price: number;
}

async function getProducts(): Promise<Product[]> {
    return [{
        id: 1,
        name: 'ครัวเป็นแสน',
        price: 40
    },
    {
        id: 2,
        name: 'ป๊อบคอร์น',
        price: 50
    },
    {
        id: 3,
        name: 'จกพุง',
        price: 30
    }
]
}

async function ProductsPage() {
    const products = await getProducts();
  return (
    <main className="p-8">
        <h1 className="text-3xl font-bold">Product List</h1>
        <div className="mt-6 grid gap-4">
            { products.map((product) => {
                return (
                    <div key={product.id} className="rounded-lg border p-4">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-2xl font-bold">{product.price}</p>
                    </div>
                );
            }) }
        </div>
    </main>
  )
}

export default ProductsPage