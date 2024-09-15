'use client'
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-lg text-gray-700">Something went wrong. We couldn't find the page you're looking for.</p>
        <div className="mt-6">
          <Link href="/">
            <b className="text-blue-500 hover:underline">Go back to the homepage</b>
          </Link>
        </div>
      </div>
    </div>
  );
}
