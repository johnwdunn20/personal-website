"use client";

import React, { useEffect, useState, CSSProperties } from "react";

const Nav = () => {
  // Navigation bar should dissapear when scrolling down and reappear when scrolling up

  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  if (typeof window !== "undefined") {
    // handles SSR
    window.onscroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
  }

  return (
    <nav
      className={`p-2 text-white bg-slate-900 bg-opacity-90 sticky z-10 ${
        visible ? "top-0" : ""
      }`}
    >
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
};

export default Nav;
