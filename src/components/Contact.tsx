import React from "react";
import ExternalLink from "./ExternalLink";
import { svgPathD } from "@utils/externalLinkSVGPaths";

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

  return (
    <section id="contact" className="bg-slate-800 w-full">
    <h1 className="text-center font-bold text-6xl mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Contact Me</h1>
    {externalLinks &&
      externalLinks.map((obj, index) => (
        <ExternalLink key={index} type={obj.type} url={obj.url} />
      ))}
      <article>
        <p>Email: johnwdunn20@gmail.com</p>
      </article>
    </section>
  );
};

export default Contact;
