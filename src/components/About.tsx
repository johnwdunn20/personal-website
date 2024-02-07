import React from 'react'
import Image from 'next/image'
import headshot from '/assets/headshot.png'

const About = () => {
  return (
    <section id='about' className='flex flex-col'>
      {/* Header and image */}
      <div className='flex items-center justify-around'>
        <h1 className='font-bold text-7xl m-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent'>About</h1>
        <Image
          src={'/assets/headshot.png'}
          width={300}
          height={300}
          alt='Profile Picture'
          className='rounded-2xl m-4'
        />
      </div>
      {/* Text */}
      <div className='flex flex-col  items-center justify-between mx-8  font-sans text-2xl'>
        <p className='lg:w-[80%]'>
          {`I'm John, and I'm passionate about building great products.`}
        </p>
        <br />
        <p className='lg:w-[80%]'>
          {`I spent 5 years in health tech as a developer and product manager where I built products to price hospital-insurance claims according to their contracted rate, normalize data, and identify underpaid claims for our hospital clients.`}
        </p>
      </div>
      {/* Resume Download */}
      <div>
        **Download Resume Placeholder - see Balsamiq**
      </div>

    </section>
  )
}

export default About