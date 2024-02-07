import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="flex flex-col bg-slate-900">
      {/* Header and image */}
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <h1 className="font-bold text-7xl m-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          About
        </h1>
        <Image
          src={"/assets/headshot.png"}
          width={300}
          height={300}
          alt="Profile Picture"
          className="rounded-2xl m-4"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col  items-center justify-between mx-8  font-sans text-2xl">
        <p className="lg:w-[80%]">
          {`I'm John, and I'm passionate about building great products.`}
        </p>
        <br />
        <p className="lg:w-[80%]">
          {`I spent 5 years in health tech as a developer and product manager where I built products to price hospital-insurance claims according to their contracted rate, normalize data, and identify underpaid claims for our hospital clients.`}
        </p>
      </div>
      {/* Resume Download */}
      <div className="flex justify-center items-center m-8">
        <a
          className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-2 group flex items-center justify-center"
          href={"/assets/resume.pdf"}
          download={'John Dunn Resume.pdf'}
          target="_blank"
        >
          <div className="relative h-12 w-12 flex items-center justify-center shadow-lg mb-3 transition-transform duration-200 ease-in-out ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 shadow-lg group-hover:fill-blue-500 mr-2"
            >
            
                <path
                  d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  
                ></path>{" "}
                <path
                  d="M8 12H16"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  fillRule="nonzero"
                ></path>{" "}
                <path
                  d="M8 8H16"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  fillRule="nonzero"
                ></path>{" "}
                <path
                  d="M8 16H13"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  fillRule="nonzero"
                ></path>{" "}
            </svg>
          </div>
          <div className="font-uncut-sans shadow-lg text-blue-600 font-semibold group-hover:text-blue-500 text-2xl ml-2 mb-2">
            Download Resume
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
