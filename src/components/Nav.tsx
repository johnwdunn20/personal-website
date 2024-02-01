'use client';

import React from "react";

const Nav = () => {
  // Navigation bar should dissapear when scrolling down and reappear when scrolling up
  // ** Needs to be transition
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  window.onscroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  }

  return (
    <nav className={`p-2 text-white bg-fuchsia-400 bg-opacity-75 sticky z-10 ${visible ? 'top-0' : ''}`}>
      <ul className="flex flex-wrap justify-end w-full">
        <li className="ml-4 mr-2 rounded-lg bg-purple-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-purple-500">
          <a href="#open-source">Open Source</a>
        </li>
        <li className="ml-4 rounded-lg bg-purple-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-purple-500">
          <a href="#about">About</a>
        </li>
        <li className="ml-4 rounded-lg bg-purple-700 py-2 px-4  cursor-pointer shadow-lg hover:bg-purple-500">
          <a href="#work">Work</a>
        </li>
        <li className="ml-4 mr-2 rounded-lg bg-purple-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-purple-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
