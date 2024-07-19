import React from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <section className="flex flex-col max-w-7xl mx-auto items-center bg-dot-white/[0.2] border-red-500 border-8">
      <nav className="flex justify-around items-center text-white p-4 w-full">
        <div className="flex space-x-4">
          <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
            About
          </Link>
          <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </Link>
        </div>
      </nav>
    </section>
  )
}

export default Header