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
      className={`flex flex-col w-full p-2 pt-12 ${
        darkBackground ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      {/* Text and Images */}
      <div
        data-aos={`${darkBackground ? "slide-left" : "slide-right"}`}
        data-aos-delay="200"
        className="flex justify-center flex-wrap gap-4 md:gap-8 lg:gap-12"
      >
        <article className="flex flex-col w-full md:w-2/3 xl:w-1/3 mx-4 sm:mx-2 md:mx-0">
          {/* Text */}
          <div className="flex flex-wrap justify-center items-center">
            <h1
              className="text-4xl font-bold text-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
              }}
            >
              {title}
            </h1>
            {winner && (
              <div className="flex items-center pl-6">
                <Image
                  src="/assets/icons/winner.svg"
                  alt="Award"
                  width={60}
                  height={60}
                />
                <h3 className="text-xl italic">Hackathon Challenge Winner</h3>
              </div>
            )}
          </div>
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
            className="flex justify-end shadow-md max-w-[600px] max-h-[600px]"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              // layout="responsive"
              // objectFit="contain"
              quality={100}
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                borderRadius: "8px",
              }}
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
