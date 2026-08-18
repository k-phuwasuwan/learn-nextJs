import React from 'react'
import Counter from '../components/counter' 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counter | Next.js Basic ',
  description: 'This is the counter page of Next.js Basic',
}

function CounterPage() {
  return (
    <main className="p-8">
        <h1 className="text-3xl font-bold">Counter</h1>
        <div className="mt-6">
            <Counter/>
        </div>
    </main>
  )
}

export default CounterPage