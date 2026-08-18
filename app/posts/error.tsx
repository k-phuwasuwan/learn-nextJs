"use client"
import React from 'react'

function ErrorPage({ error, reset }: {error: Error, reset: () => void}) {
  return (
    <main className="p-8">
        <h1 className="text-2xl font-bold">An error occurred</h1>
      <p className="mt-4">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
        Try again
      </button>
    </main>
  )
}

export default ErrorPage