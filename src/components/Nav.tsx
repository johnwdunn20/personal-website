import React from 'react'

const Nav = () => {
  
  return (
    <nav className='p-2 bg-purple-700 text-white'>
      <ul className='flex justify-end w-full'>
        <li className='ml-4'>
          <a href="#about">About</a>
          </li>
        <li className='ml-4'>
          <a href="#work">Work</a>
          </li>
        <li className='ml-4 mr-2'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav