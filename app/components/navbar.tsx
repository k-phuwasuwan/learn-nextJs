import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="flex gap-4 border-b p-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
        </nav>
  )
}

export default Navbar