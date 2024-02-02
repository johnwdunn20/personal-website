import React from "react";
import Image from "next/image";
import placeHolderImage from "@assets/grocery.png";
import github from "@assets/github.svg";

type ProductType = {
  title: string;
  description: string;
  technicalDescription?: string;
  darkBackground: boolean;
  website?: string,
  websiteSVG?: string,
  github?: string,
  npm?: string
  chrome?: string,
  medium?: string,
  linkedIn?: string,
  imageURL?: string,
};

const Product: React.FC<ProductType> = ({
  title,
  description,
  technicalDescription,
  darkBackground,
  website,
  websiteSVG,
  github,
  npm,
  chrome,
  medium,
  linkedIn,
  imageURL,
}) => {

console.log('imageURL', imageURL);

  return (
    <section
      className={`flex flex-col w-full p-2 ${
        darkBackground ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      {/* Text and Images */}
      <div className="flex justify-center space-x-2">
        <article className="flex flex-col justify-around w-1/2">
          {/* Text */}
          <h1 className="text-4xl font-bold text-center">{title}</h1>
          <p className="">{description}</p>
          <p>{technicalDescription}</p>
        </article>

        {/* Image */}
        {imageURL && <div className=" flex justify-end">
          <Image
            src={imageURL}
            alt="product image"
            width={800}
            height={800}
            className=""
          />
        </div> }
      </div>
      {/* Icons */}
      <div className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-6 sm:gap-x-6 sm:gap-y-8 items-center md:px-10 pt-5">
        {/* website url*/}
        <a
          className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group}`}
          href="#0"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
            <svg
              className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
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
          <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
            Telegram
          </div>
        </a>
        {/* 2nd Box */}
        <a
          className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group`}
          href="#0"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
            <svg
              className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
              width="24"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.317 1.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0C9.095.88 8.852.406 8.641.037A.077.077 0 0 0 8.562 0c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.12.097.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.964 19.964 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.839-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 12.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
            Discord
          </div>
        </a>
        {/* 3rd Box */}
        <a
          className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group`}
          href="#0"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
            <svg
              className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
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
          <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
            Medium
          </div>
        </a>
        {/* 4th Box */}
        <a
          className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group`}
          href="#0"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
            <svg
              className="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
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
          <div className="font-uncut-sans text-xl text-gray-100 font-semibold">
            GitHub
          </div>
        </a>
        {/* 5th Box */}
        <a
          className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group`}
          href="#0"
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
        {/* 6th Box */}
        <a
          className={`block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group `}
          href="#0"
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
      </div>
    </section>
  );
};

export default Product;
