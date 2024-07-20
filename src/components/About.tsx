import React from "react";
import Image from "next/image";
import { productData } from "@utils/productData";

const About = () => {
  let countProducts = productData.length;

  return (
    <section
      data-aos="fade"
      data-aos-delay="100"
      id="about"
      className={`flex flex-col ${countProducts / 2 === 0 ? "bg-slate-950" : "bg-slate-900"} bg-dot-white/[0.2]`}
    >
      {/* Header and image */}
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <h1
          className="font-bold text-7xl m-4 text-gray-300"
          style={{
            filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
          }}
        >
          About
        </h1>
        <Image
          src={"/assets/headshot.png"}
          width={300}
          height={300}
          alt="Profile Picture"
          className="rounded-2xl m-4"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col  items-center justify-between mx-8  font-sans text-2xl text-gray-200">
        <p className="lg:w-[80%]">
          {`I'm John, and I'm passionate about building great products.`}
        </p>
        <br />
        <p className="lg:w-[80%]">
          {`I've spent the last 6 years in health tech, working as both an engineer and a product manager. I enjoy everything from cleaning large data sets and building pipelines to optimizing browser performance and ensuring a seamlesss user experience.`}
        </p>
      </div>
      {/* Resume Download */}
      <div className="flex justify-center items-center m-8">
        <a
          className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-2 group flex items-center justify-center"
          href={"/assets/John_Dunn_Resume.pdf"}
          download={"John_Dunn_Resume.pdf"}
          target="_blank"
        >
          <div className="relative h-12 w-12 flex items-center justify-center mb-3 transition-transform duration-200 ease-in-out ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 group-hover:fill-blue-500 mr-2"
            >
              <path
                d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                stroke="#334155"
                strokeWidth="1.5"
              ></path>{" "}
              <path
                d="M8 12H16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M8 8H16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M8 16H13"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                fillRule="nonzero"
              ></path>{" "}
            </svg>
          </div>
          <div className="font-uncut-sans text-blue-600 font-semibold group-hover:text-blue-500 text-2xl ml-2 mb-2">
            Download Resume
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
