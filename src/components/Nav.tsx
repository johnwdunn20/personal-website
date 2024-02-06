"use client";

import React, { useEffect, useState, CSSProperties } from "react";
import Link from "next/link";


interface ScrollDirectionState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  visibilityHeight: number;
}


const useScrollDirection = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visibilityHeight, setVisibilityHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const navbarHeight = 60;

      // Calculate visibility height
      let newVisibilityHeight = visibilityHeight + (lastScrollY - currentScrollY);
      if (scrollingDown) {
        newVisibilityHeight = visibilityHeight - (currentScrollY - lastScrollY);
      }
      newVisibilityHeight = Math.max(0, Math.min(newVisibilityHeight, navbarHeight));

      setVisibilityHeight(newVisibilityHeight);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    console.log('visibilityHeight', visibilityHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, visibilityHeight]);

  return visibilityHeight;
};

const Nav = () => {

    const visibilityHeight = useScrollDirection();
    const navbarHeight = 60;
  
    const navbarStyle: React.CSSProperties = {
      position: 'fixed',
      top: `-${navbarHeight - visibilityHeight}px`,
      left: 0,
      right: 0,
      transition: 'top 0.3s ease',
      height: `${navbarHeight}px`,
    };

    return (
      <nav style={navbarStyle} className="bg-slate-900 bg-opacity-90">
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
