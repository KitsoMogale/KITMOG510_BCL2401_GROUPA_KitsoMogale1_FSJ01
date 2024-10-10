import React from 'react';
import Link from 'next/link';
import {SearchBar} from './SearchBar'

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
      <SearchBar/>

        <Link href='/logout' className='text-red-400'>Logout</Link>
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
