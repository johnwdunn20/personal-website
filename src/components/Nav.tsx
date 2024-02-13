"use client";

import React, { useEffect, useState, CSSProperties } from "react";

const Nav = () => {
  // Navigation bar should dissapear when scrolling down and reappear when scrolling up

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(true); // default to true so that it doesn't show on load when on mobile

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // invoke resize on load
    handleResize();

    // handle resize when user changes the size of the window
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  if (isMobile) return <></>

  return (
    <nav
      className={`p-2 text-white bg-slate-900 bg-opacity-90 sticky z-10 ${
        visible ? "top-0" : ""
      }`}
    >
      <ul className="flex flex-wrap justify-end w-full">
        <li className="ml-4 mr-2 rounded-lg py-2 px-4 cursor-pointer shadow-lg gradient-non-hover gradient-hover">
          <a href="#open-source">Open Source</a>
        </li>
        <li className="ml-4 mr-2 rounded-lg py-2 px-4 cursor-pointer shadow-lg gradient-non-hover gradient-hover">
          <a href="#about">About</a>
        </li>
        <li className="mt-2 sm:mt-0 ml-4 mr-2 rounded-lg py-2 px-4 cursor-pointer shadow-lg gradient-non-hover gradient-hover gradient-hover">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
