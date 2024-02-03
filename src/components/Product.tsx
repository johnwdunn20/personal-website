import React from "react";
import Image from "next/image";
import ExternalLink from "./ExternalLink";
import TechnologyIcon from "./TechnologyIcon";

import placeHolderImage from "@assets/grocery.png";
import github from "@assets/github.svg";
import javascript from "@assets/technologies/javascript-logo.svg";
import typescript from "@assets/technologies/typescript-logo.svg";
import reactLogo from "@assets/technologies/react-logo.svg";
import materialUILogo from "@assets/technologies/materialui-logo.svg";



type ProductType = {
  title: string;
  description: string;
  bullets?: string[];
  technologies?: string[];
  darkBackground: boolean;
  externalLinks: any;
  website?: string;
  websiteSVG?: string;
  github?: string;
  npm?: string;
  chrome?: string;
  medium?: string;
  linkedIn?: string;
  imageURL?: string;
  docs?: string;
  tutorial?: string;
};

const Product: React.FC<ProductType> = ({
  title,
  description,
  bullets,
  technologies,
  darkBackground,
  externalLinks,
  website,
  websiteSVG,
  github,
  npm,
  chrome,
  medium,
  linkedIn,
  docs,
  tutorial,
  imageURL,
}) => {
  console.log("imageURL", imageURL);

  return (
    <section
      className={`flex flex-col w-full p-2 pt-12 ${
        darkBackground ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      {/* Text and Images */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 lg:gap-12">
        <article className="flex flex-col w-full md:w-2/3 xl:w-1/3 mx-4 sm:mx-2 md:mx-0">
          {/* Text */}
          <h1 className="text-4xl font-bold text-center w-full bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="w-full my-4 text-xl text-slate-200">{description}</p>
          <ul className="ml-4 mt-4 list-none">
            {bullets &&
              bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="text-lg m-2 text-slate-200 relative pl-5 before:absolute before:bg-blue-600 before:rounded-full before:w-3 before:h-3 before:left-0 before:top-1.5 before:content-['']"
                >
                  {bullet}
                </li>
              ))}
          </ul>
          {/* <p className="w-full my-4 italic self-center ml-12 text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
            Built with:
          </p> */}

          {/* Technologies */}
          <div className="flex flex-col justify-end h-full mt-4">
            <div className="flex justify-around flex-wrap">
              {/* Javascript */}
              {technologies?.includes("javascript") && (
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  className="transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Image
                    src={javascript}
                    alt="JavaScript"
                    width={140}
                    height={50}
                    className="rounded-lg shadow-2xl hover:shadow-inner transition-shadow duration-200 ease-in-out"
                  />
                </a>
              )}
              {/* TypeScript */}
              {technologies?.includes("typescript") && (
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  className="transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Image
                    src={typescript}
                    alt="TypeScript"
                    width={140}
                    height={50}
                    className="rounded-lg shadow-2xl hover:shadow-inner transition-shadow duration-200 ease-in-out"
                  />
                </a>
              )}
              {/* React */}
              {technologies?.includes("react") && (
                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Image
                    src={reactLogo}
                    alt="React"
                    width={140}
                    height={50}
                    className="rounded-lg shadow-2xl hover:shadow-inner transition-shadow duration-200 ease-in-out"
                  />
                </a>
              )}
              {/* MaterilUI */}
              {technologies?.includes("materialui") && (
                <a
                  href="https://mui.com/"
                  target="_blank"
                  className="transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <Image
                    src={materialUILogo}
                    alt="MaterialUI"
                    width={140}
                    height={50}
                    className="rounded-lg shadow-2xl hover:shadow-inner transition-shadow duration-200 ease-in-out"
                  />
                </a>
              )}
            </div>
          </div>
        </article>

        {/* Image */}
        {imageURL && (
          <div className="flex justify-end">
            <Image
              src={imageURL}
              alt="product image"
              width={800}
              height={800}
              className=""
            />
          </div>
        )}
      </div>
      {/* Icons */}
      {/* <div className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-6 sm:gap-x-6 sm:gap-y-8 items-center md:px-10 pt-5"> */}
      <div className="flex justify-center items-center flex-wrap sm:gap-2 md:gap-8 lg:gap-12">
          {/* New as separate component */}
          {externalLinks && externalLinks.map( (obj, index) => <ExternalLink
            key={index}
            type={obj.type}
            url={obj.url}
          />)}

        {/* website*/}
        {website && (
          <a
            className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group} flex flex-col items-center justify-center`}
            href={website}
            target="_blank"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex flex-col items-center justify-center shadow-lg mb-3">
              <svg
                className="fill-gray-200 group-hover:fill-blue-500 transition duration-150 ease-in-out"
                width="26"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.956.378a.47.47 0 0 0-.32-.347 1.662 1.662 0 0 0-.866.061S1.494 6.968.393 7.73c-.236.164-.316.26-.355.371-.19.546.402.78.402.78l4.968 1.607c.084.015.17.01.252-.015 1.13-.708 11.366-7.126 11.961-7.342.092-.027.162 0 .144.069-.237.823-9.083 8.622-9.131 8.669a.181.181 0 0 0-.066.16l-.464 4.815s-.194 1.498 1.315 0a42.204 42.204 0 0 1 2.612-2.373c1.708 1.171 3.546 2.466 4.339 3.143.27.26.633.398 1.008.385a1.13 1.13 0 0 0 .964-.849s3.51-14.03 3.627-15.909c.012-.182.028-.302.03-.428a1.591 1.591 0 0 0-.043-.435Z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <p className="font-uncut-sans text-xl text-gray-200 font-semibold hover:text-blue-500">
              Website
            </p>
          </a>
        )}

        {/* Github */}
        {github && (
          <a
            className="block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center"
            href={github}
            target="_blank"
          >
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200 ease-in-out">
              <svg
                className="fill-gray-200 shadow-lg group-hover:fill-blue-500 transition-all duration-200 ease-in-out"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out">
              GitHub
            </div>
          </a>
        )}

        {/* Medium*/}
        {medium && (
          <a
            className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center`}
            href={medium}
            target="_blank"
          >
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
              <svg
                className="fill-gray-200 group-hover:fill-blue-500 transition duration-150 ease-in-out"
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.083 0H.917A.917.917 0 0 0 0 .917v20.166c0 .507.41.917.917.917h20.166c.507 0 .917-.41.917-.917V.917A.917.917 0 0 0 21.083 0Zm-2.145 4.686L17.651 5.92a.376.376 0 0 0-.143.361v9.068a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.271l1.3-1.264c.128-.128.128-.166.128-.361V7.99l-3.621 9.2h-.489l-4.213-9.2v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271h-4.8v-.271l1.691-2.054a.82.82 0 0 0 .218-.707V7.027a.625.625 0 0 0-.2-.527L3.019 4.686v-.271h4.674l3.613 7.924 3.176-7.924h4.456v.271Z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="font-uncut-sans text-xl text-gray-200 font-semibold hover:text-blue-500">
              Medium
            </div>
          </a>
        )}

        {/* 5th Box */}
        {docs && (
          <a
            className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center`}
            href={docs}
            target="_blank"
          >
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
              <svg
                className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                width="23"
                height="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z"
                  fillRule="nonzero"
                  fillOpacity=".64"
                />
                <rect width="14" height="17" rx="1" />
              </svg>
            </div>
            <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
              Docs
            </div>
          </a>
        )}
        {/* Tutorial */}
        {tutorial && (
          <a
            className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center`}
            href={tutorial}
            target="_blank"
          >
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
              <svg
                className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                width="22"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.083 0H.917C.41 0 0 .448 0 1v16c0 .552.41 1 .917 1h20.166c.507 0 .917-.448.917-1V1c0-.552-.41-1-.917-1ZM9 13V5l6 4-6 4Z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
              Tutorials
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default Product;
