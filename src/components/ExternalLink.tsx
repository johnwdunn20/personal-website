import React from "react";
import { svgPathD } from "@utils/externalLinkSVGPaths";

type SvgPathKeys = keyof typeof svgPathD;

type ExternalLinkType = {
  url: string;
  type: keyof typeof svgPathD;
};

const ExternalLink: React.FC<ExternalLinkType> = ({ url, type }) => {
  // console.log('url: ', url);
  // console.log('type: ', type);

  if (type === "NPM") {
    return (
        <a
          className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center"
          href={url}
          target="_blank"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200 ease-in-out">
            <svg
              className="fill-gray-200 shadow-lg group-hover:fill-blue-500 transition-all duration-200 ease-in-out pb-2"
              width="38"
              height="38"
              viewBox="0 0 256 1"
            >
              <path
                d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out">
            {type}
          </div>
        </a>
    );
  } else if (type === "LinkedIn" || type === "Chrome") {
    return (
      <a
        className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center"
        href={url}
        target="_blank"
      >
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200 ease-in-out">
          <svg
            className="fill-gray-200 shadow-lg group-hover:fill-blue-500 transition-all duration-200 ease-in-out ml-3"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={svgPathD[type] ? svgPathD[type] : svgPathD["placeholder"]}
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out">
          {type}
        </div>
      </a>
    );
  } else if (type === "Website") {
    return (
      <a
        className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center"
        href={url}
        target="_blank"
      >
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200 ease-in-out">
          <svg
            className="fill-gray-200 shadow-lg group-hover:fill-blue-500 transition-all duration-200 ease-in-out"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path
                d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
              ></path>
          </svg>
        </div>
        <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out">
          {type}
        </div>
      </a>
    );
  }

  return (
    <a
      className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center"
      href={url}
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
            d={svgPathD[type] ? svgPathD[type] : svgPathD["placeholder"]}
            fillRule="nonzero"
          />
        </svg>
      </div>
      <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out">
        {type}
      </div>
    </a>
  );
};

export default ExternalLink;
