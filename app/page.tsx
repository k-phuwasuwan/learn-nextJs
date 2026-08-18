import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Next.js Basic ',
  description: 'This is the home page of Next.js Basic',
}

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="mt-4">Welcome to Home Page</p>
    </main>
  );
}
