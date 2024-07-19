import React from "react";
import ExternalLink from "./ExternalLink";
import EmailLink from "./EmailLink";
import { svgPathD } from "@utils/externalLinkSVGPaths";
import { productData } from "@utils/productData";

type ExternalLinkType = {
  url: string;
  type: keyof typeof svgPathD;
};

const Contact = () => {
  const externalLinks: ExternalLinkType[] = [
    {
      type: "GitHub",
      url: "https://github.com/johnwdunn20",
    },
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/johnwdunn/",
    },
  ];


  let countProducts = productData.length;

  return (
    <section id="contact" className={`${countProducts / 2 !== 0 ? 'bg-slate-800' : 'bg-slate-700'}  w-full bg-dot-white/[0.2]`}>
      <h1
        className="text-center font-bold text-6xl mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
        style={{
          filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
        }}
      >
        Contact Me
      </h1>
      {/* LinkedIn and Github */}
      <article className="flex justify-center items-center">
        {/* LinkedIn */}
        <a
          className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-6 group flex items-center justify-center"
          href="https://www.linkedin.com/in/johnwdunn/"
          target="_blank"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200 ease-in-out mr-2">
            <svg
              className="fill-gray-200 shadow-lg group-hover:fill-blue-500 transition-all duration-200 ease-in-out ml-3"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out ml-2 mb-3">
            LinkedIn
          </div>
        </a>

        {/* Github */}
        <a
          className="relative before:content-['']before:absolute before:-z-10 before:inset-0 p-6 group flex items-center justify-center"
          href="https://github.com/johnwdunn20"
          target="_blank"
        >
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200 ease-in-out mr-2">
            <svg
              className="fill-gray-200 shadow-lg group-hover:fill-blue-500 transition-all duration-200 ease-in-out"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"></path>
            </svg>
          </div>
          <div className="font-uncut-sans shadow-lg text-xl text-gray-200 font-semibold group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200 ease-in-out ml-2 mb-3">
            Github
          </div>
        </a>
      </article>

      {/* Email - include form later */}
      <EmailLink />
    </section>
  );
};

export default Contact;
