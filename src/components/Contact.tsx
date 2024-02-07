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
  ];

  return (
    <section id="contact" className="bg-slate-900 w-full">
    <h1 className="text-center text-4xl mt-4">Contact Me</h1>
      {externalLinks &&
        externalLinks.map((obj, index) => (
          <ExternalLink key={index} type={obj.type} url={obj.url} />
        ))}
    </section>
  );
};

export default Contact;
