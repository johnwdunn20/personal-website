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
  externalLinks?: {
    type: string;
    url: string;
  }[];
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
      <div className="flex justify-center items-center flex-wrap sm:gap-2 md:gap-8 lg:gap-12">
          {/* New as separate component */}
          {externalLinks && externalLinks.map( (obj, index) => <ExternalLink
            key={index}
            type={obj.type}
            url={obj.url}
          />)}

      </div>
    </section>
  );
};

export default Product;
