import React from 'react'
import Image from 'next/image'
import placeholderimage from '@assets/grocery.png'

const About = () => {
  return (
    <section id='about'>
      <div className='flex items-center justify-around'>
        <h1 className='font-bold text-4xl'>About</h1>
        <Image
          src={placeholderimage}
          width={100}
          height={100}
          alt='Profile Picture'
        />
      </div>
      <br />
      <p>{`I'm John, and I'm passionate about building great products. I spent 5 years in health tech as a developer and product manager`}</p>
    </section>
  )
}

export default About