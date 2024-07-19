import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

  return (
    <section className="flex flex-col w-full mx-auto items-center bg-dot-white/[0.2] border-red-500 border-8 text-white" >
      <nav className="flex justify-around items-center  p-4 ">
        <div className="flex space-x-4">
          <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
            About
          </Link>
          <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </Link>
        </div>
      </nav>
      <div className='flex p-8'>
        {/* Text */}
        <div className='flex flex-col'>
          <h1>John Dunn</h1>
          <h5>Software Engineer</h5>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/assets/headshot_bw.png"
            alt="John Dunn"
            width={500}
            height={500}
            />
        </div>
      </div>
    </section>
  )
}

export default Header