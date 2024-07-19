import React from "react";
import Image from "next/image";
import ExternalLink from "./ExternalLink";
import TechnologyIcon from "./TechnologyIcon";

// types
import { ProductDataType } from "@utils/productData";

type AdditionalData = {
  darkBackground: boolean;
};

type ExtendedProductType = ProductDataType & AdditionalData;

const Product: React.FC<ExtendedProductType> = ({
  title,
  winner,
  description,
  bullets,
  technologies,
  darkBackground,
  externalLinks,
  image,
}) => {
  return (
    <section
      // ${darkBackground ? "bg-slate-800" : "bg-slate-700"}
      className={`flex flex-col w-full p-2 pt-2 bg-black-900
      `}
    >
      {/* Title */}
      <div className="flex flex-wrap justify-center items-center my-4">
        {/* <h1
          className="text-5xl font-bold text-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent h-full p-2"
          style={{
            filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
          }}
        >
          {title}
        </h1> */}
          <h1
          className="text-5xl font-bold text-center bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 bg-clip-text text-transparent h-full p-2"
          style={{
            filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
          }}
        >
          {title}
        </h1>
        {winner && (
          <div className="flex items-center pl-6 pr-8">
            <Image
              src="/assets/icons/winner.svg"
              alt="Award"
              width={60}
              height={60}
            />
            <h3 className="text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent italic p-2">
              Hackathon Challenge Winner
            </h3>
          </div>
        )}
      </div>
      {/* Text and Images */}
      <div
        data-aos={`${darkBackground ? "slide-left" : "slide-right"}`}
        data-aos-delay="200"
        className="flex items-center justify-center flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12 lg:mx-14"
      >
        {/* Text */}
        <article className="flex justify-center items-center flex-col w-full md:w-1/2 xl:w-1/3">
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
        {image && image?.url && (
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex items-center justify-center relative h-full mr-0 md:mr-4 lg:md-10"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              // fill
              // layout="responsive"
              // objectFit="contain"
              // quality={100}
              style={{
                // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                // borderRadius: "8px",
                objectFit: "contain",
              }}
              className="max-w-full h-auto"
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
