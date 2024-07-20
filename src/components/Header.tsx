"useclient";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true); // default to true so that it doesn't show on load when on mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  return (
    <section className="flex flex-col w-full mx-auto items-center bg-dot-white/[0.2] bg-slate-950 text-gray-300">
      {/* Top Nav Bar */}
      <nav className="flex p-4 w-full ">
        <div className="flex flex-col flex-wrap justify-center space-x-4 md:flex-row md:justify-end text-xl w-full pr-64">
          {!isMobile && (
            <>
            {/* *** Internal links might need to be a tags, not Link */}
              <Link
                href="#open-source"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Open Source
              </Link>
              <Link
                href="#projects"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Projects
              </Link>
              <Link
                href="#about"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                About
              </Link>

              {/* Divider between internal and external links */}
              <div className="px-1 py-2">|</div>

              <Link
                href="https://www.linkedin.com/in/johnwdunn/"
                target="_blank"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/johnwdunn20"
                target="_blank"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Github
              </Link>
              <Link
                href="/assets/John_Dunn_Resume.pdf"
                target="_blank"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Download Resume
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Title and Image */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-6 pb-0 px-4 md:px-48">
        {/* Text */}
        <div className="flex flex-col items-center">
          {/* <h1
            className="text-6xl md:text-8xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent py-1"
            style={{
              filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
            }}
          >
            John Dunn
          </h1> */}

          <h1
            className="text-6xl md:text-8xl font-bold text-center text-gray-100 py-1"
            style={{
              filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
            }}
          >
            John Dunn
          </h1>
          <h5 className="text-2xl md:text-4xl py-2">Software Engineer</h5>
          <Link
            className="bg-sky-800 hover:bg-sky-600 hover:cursor-pointer rounded mt-2 py-2 px-8 text-lg"
            href="#contact"
            >
            Contact
          </Link>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/assets/headshot_bw.png"
            alt="John Dunn"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
