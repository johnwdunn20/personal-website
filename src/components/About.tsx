import React from 'react'
import Image from 'next/image'
import placeholderimage from '@assets/grocery.png'

const About = () => {
  return (
    <section id='about' className='flex flex-col'>
      {/* Header and image */}
      <div className='flex items-center justify-around'>
        <h1 className='font-bold text-7xl m-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent'>About</h1>
        <Image
          src={placeholderimage}
          width={200}
          height={200}
          alt='Profile Picture'
        />
      </div>
      <p>{`I'm John, and I'm passionate about building great products. I spent 5 years in health tech as a developer and product manager`}</p>
    </section>
  )
}

export default About