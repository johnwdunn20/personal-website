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

import { svgPathD } from "@utils/externalLinkSVGPaths";

type ProductType = {
  title: string;
  description: string;
  bullets?: string[];
  technologies?: string[];
  darkBackground: boolean;
  externalLinks?: {
    type: keyof typeof svgPathD;
    url: string;
  }[];
  imageURL?: string;
};

const Product: React.FC<ProductType> = ({
  title,
  description,
  bullets,
  technologies,
  darkBackground,
  externalLinks,
  imageURL,
}) => {

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
              
              {technologies &&
                technologies.map((tech, index) => (
                  <TechnologyIcon key={index} technology={tech} />
                ))}
              
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
        {externalLinks &&
          externalLinks.map((obj, index) => (
            <ExternalLink key={index} type={obj.type} url={obj.url} />
          ))}
      </div>
    </section>
  );
};

export default Product;
