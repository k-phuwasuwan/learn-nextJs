import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts | Next.js Basic ',
  description: 'This is the posts page of Next.js Basic',
}
type Post = {
    id: number,
    title: string,
    body: string
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }
    return res.json()
}

async function PostsPage() {
    const posts = await getPosts()
  return (
    <main className="p-8">
        <h1 className="text-3xl font-bold"></h1>
        <div className="mt-6 grid gap-4">
            {posts.slice(0, 10).map((post) => {
                return (
                    <article key={post.id}
                    className="rounded-lg border p-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-gray-600">{post.body}</p>
                    </article> 
                )
            })}
        </div>
    </main>
  )
}

export default PostsPage