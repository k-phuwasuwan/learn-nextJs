import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Next.js Basic ',
  description: 'This is the about page of Next.js Basic',
}

function AboutPage() {
  return (
         <main className="p-8">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="mt-4">Welcome to the About Page</p>
    </main>
  )
}

export default AboutPage