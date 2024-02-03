import React from "react";

type ExternalLinkType = {
  url: string;
  type: string;
}

const ExternalLink: React.FC<ExternalLinkType> = ({url, type}) => {

  console.log('url: ', url);
  console.log('type: ', type);
  
  const svgPathD = {
    GitHub: "M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z",
    Website: "M21.956.378a.47.47 0 0 0-.32-.347 1.662 1.662 0 0 0-.866.061S1.494 6.968.393 7.73c-.236.164-.316.26-.355.371-.19.546.402.78.402.78l4.968 1.607c.084.015.17.01.252-.015 1.13-.708 11.366-7.126 11.961-7.342.092-.027.162 0 .144.069-.237.823-9.083 8.622-9.131 8.669a.181.181 0 0 0-.066.16l-.464 4.815s-.194 1.498 1.315 0a42.204 42.204 0 0 1 2.612-2.373c1.708 1.171 3.546 2.466 4.339 3.143.27.26.633.398 1.008.385a1.13 1.13 0 0 0 .964-.849s3.51-14.03 3.627-15.909c.012-.182.028-.302.03-.428a1.591 1.591 0 0 0-.043-.435Z",
    Medium: "M21.083 0H.917A.917.917 0 0 0 0 .917v20.166c0 .507.41.917.917.917h20.166c.507 0 .917-.41.917-.917V.917A.917.917 0 0 0 21.083 0Zm-2.145 4.686L17.651 5.92a.376.376 0 0 0-.143.361v9.068a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.271l1.3-1.264c.128-.128.128-.166.128-.361V7.99l-3.621 9.2h-.489l-4.213-9.2v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271h-4.8v-.271l1.691-2.054a.82.82 0 0 0 .218-.707V7.027a.625.625 0 0 0-.2-.527L3.019 4.686v-.271h4.674l3.613 7.924 3.176-7.924h4.456v.271Z",
    // Need to update placeholder to be something better
    placeholder: "M21.956.378a.47.47 0 0 0-.32-.347 1.662 1.662 0 0 0-.866.061S1.494 6.968.393 7.73c-.236.164-.316.26-.355.371-.19.546.402.78.402.78l4.968 1.607c.084.015.17.01.252-.015 1.13-.708 11.366-7.126 11.961-7.342.092-.027.162 0 .144.069-.237.823-9.083 8.622-9.131 8.669a.181.181 0 0 0-.066.16l-.464 4.815s-.194 1.498 1.315 0a42.204 42.204 0 0 1 2.612-2.373c1.708 1.171 3.546 2.466 4.339 3.143.27.26.633.398 1.008.385a1.13 1.13 0 0 0 .964-.849s3.51-14.03 3.627-15.909c.012-.182.028-.302.03-.428a1.591 1.591 0 0 0-.043-.435Z",
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
          d={svgPathD[type] ? svgPathD[type] : svgPathD['placeholder']}
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
