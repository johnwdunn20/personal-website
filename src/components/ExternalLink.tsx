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
      <>
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
        
      </>
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
