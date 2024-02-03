import React from "react";

type ExternalLinkType = {
  url: string;
  type: string;
}

const ExternalLink: React.FC<ExternalLinkType> = ({url, type}) => {

  const svgPathD = {
    github: "M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
  }

  return (
    <a
    className="block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group flex flex-col items-center justify-center"
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
          d={svgPathD[type]}
          fillRule="nonzero"
        />
      </svg>
    </div>
    <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out">
      GitHub
    </div>
  </a>
  );
};

export default ExternalLink;
