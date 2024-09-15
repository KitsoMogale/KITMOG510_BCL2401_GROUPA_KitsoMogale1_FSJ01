import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <p className="text-white hover:text-gray-400">BuyNext</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <p className="hover:text-gray-400">Products</p>
          </Link>
          <Link href="/">
            <p className="hover:text-gray-400">About</p>
          </Link>
          <Link href="/">
            <p className="hover:text-gray-400">Contact</p>
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1.68 6.58a2 2 0 001.905 1.5H17.5a2 2 0 001.905-1.5L22 3h2m-3 14H8.5a2 2 0 01-1.905-1.5L4 5H2m0 0v2a2 2 0 002 2h.5m11 0h.5a2 2 0 002-2V5m-2 0v2m-1.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0m3 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0" />
              </svg>
            </p>
          </Link>

          {/* User Icon */}
          <Link href="/">
            <p>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-9m0 0l-9-9m9 9H3" />
              </svg>
            </p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className="md:hidden bg-gray-700 text-white">
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link href="/">
            <p className="block hover:text-gray-400">Products</p>
          </Link>
          <Link href="/">
            <p className="block hover:text-gray-400">About</p>
          </Link>
          <Link href="/">
            <p className="block hover:text-gray-400">Contact</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
