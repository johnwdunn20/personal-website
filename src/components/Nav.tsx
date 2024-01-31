import React from "react";

const Nav = () => {
  return (
    <nav className="p-2 text-white bg-slate-900 sticky z-10">
      <ul className="flex justify-end w-full">
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
