"use client"
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className="rounded-lg border p-4">
        <p className="text-xl">Count: {count}</p>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white mt-4 px-4 py-2 rounded">
            Increment
        </button>
    </div>
  )
}

export default Counter