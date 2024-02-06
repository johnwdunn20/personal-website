"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
  // ***** TESTING REMOTE TASKS IDEAS *****
  if (true) {
    const [showNavbar, setShowNavbar] = useState(true); // Start with navbar visible
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      // Calculate how much the user has scrolled up or down
      const scrolledUp = prevScrollPos - currentScrollPos > 0; // Check if scrolled up
  
      // Update navbar visibility based on scroll direction
      setShowNavbar(scrolledUp);
  
      // Update navbar position using translateY
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.transform = `translateY(${scrolledUp ? 0 : '-100%'}`; // Hide when down
      }
  
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, handleScroll]);
  

    return (
      <nav className="fixed top-0 w-full z-10">
        {/* Your navbar content here */}
        <ul className="flex flex-wrap justify-end w-full">
          <li className="ml-4 mr-2 rounded-lg bg-violet-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-violet-500">
            <a href="#open-source">Open Source</a>
          </li>
          <li className="ml-4 rounded-lg bg-violet-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-violet-500">
            <a href="#about">About</a>
          </li>
          <li className="ml-4 rounded-lg bg-violet-700 py-2 px-4  cursor-pointer shadow-lg hover:bg-violet-500">
            <a href="#work">Work</a>
          </li>
          <li className="ml-4 mr-2 rounded-lg bg-violet-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-violet-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }

  // Ideally Nav bar moves at the speed the user scrolls - this is simple right now

  // Navigation bar should dissapear when scrolling down and reappear when scrolling up

  // const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  // const [visible, setVisible] = React.useState(true);

  // if (typeof window !== "undefined") {
  //   // handles SSR
  //   window.onscroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setVisible(prevScrollPos > currentScrollPos);
  //     setPrevScrollPos(currentScrollPos);
  //   };
  // }

  // return (
  //   <nav
  //     className={`p-2 text-white bg-slate-900 bg-opacity-90 sticky z-10 ${
  //       visible ? "top-0" : ""
  //     }`}
  //   >
  // <ul className="flex flex-wrap justify-end w-full">
  //   <li className="ml-4 mr-2 rounded-lg bg-violet-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-violet-500">
  //     <a href="#open-source">Open Source</a>
  //   </li>
  //   <li className="ml-4 rounded-lg bg-violet-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-violet-500">
  //     <a href="#about">About</a>
  //   </li>
  //   <li className="ml-4 rounded-lg bg-violet-700 py-2 px-4  cursor-pointer shadow-lg hover:bg-violet-500">
  //     <a href="#work">Work</a>
  //   </li>
  //   <li className="ml-4 mr-2 rounded-lg bg-violet-700 py-2 px-4 cursor-pointer shadow-lg hover:bg-violet-500">
  //     <a href="#contact">Contact</a>
  //   </li>
  // </ul>
  //   </nav>
  // );
};

export default Nav;
