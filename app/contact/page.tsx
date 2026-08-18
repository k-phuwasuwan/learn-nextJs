import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Next.js Basic ',
  description: 'This is the contact page of Next.js Basic',
}

function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contact Page</h1>
      <p className="mt-4">Welcome to Contact Page</p>
    </main>
  )
}

export default ContactPage