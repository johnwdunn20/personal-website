import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

  return (
    <section className="flex flex-col w-full mx-auto items-center bg-dot-white/[0.2] bg-slate-800 text-gray-100" >
      {/* Top Nav Bar */}
      <nav className="flex p-4 w-full ">
        <div className="flex justify-end space-x-4 text-xl w-full pr-64">
          <Link href="#open-source" className="hover:bg-gray-700 px-3 py-2 rounded">
            Open Source
          </Link>
          <Link href="#about" className="hover:bg-gray-700 px-3 py-2 rounded">
            About
          </Link>
          <Link href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </Link>
          
          {/* Divider between internal and external links */}
          <div className="px-1 py-2">|</div>

          <Link href="https://www.linkedin.com/in/johnwdunn/" target='_blank' className="hover:bg-gray-700 px-3 py-2 rounded">
            LinkedIn
          </Link>
          <Link href="https://github.com/johnwdunn20" target='_blank'  className="hover:bg-gray-700 px-3 py-2 rounded">
            Github
          </Link>
          <Link 
          href="/assets/John_Dunn_Resume.pdf"
          target='_blank'
          className="px-3 py-2 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent"
          >
            Download Resume
          </Link>
        </div>
      </nav>

      {/* Title and Image */}
      <div className='flex justify-between items-center w-full py-8 px-48'>
        {/* Text */}
        <div className='flex flex-col'>
          
          <h1 className="text-8xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent py-1"
          style={{
            filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
          }}>
          John Dunn
          </h1>
          <h5 className='text-4xl'>Software Engineer</h5>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/assets/headshot_bw.png"
            alt="John Dunn"
            width={450}
            height={450}
            />
        </div>
      </div>
    </section>
  )
}

export default Header