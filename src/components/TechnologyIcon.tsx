import React from 'react'
import Image from "next/image";
import javascriptLogo from "@assets/technologies/javascript-logo.svg";
import typescriptLogo from "@assets/technologies/typescript-logo.svg";
import reactLogo from "@assets/technologies/react-logo.svg";
import materialUILogo from "@assets/technologies/materialui-logo.svg";
import tailwindLogo from "@assets/technologies/tailwind-logo.svg";
import webpackLogo from "@assets/technologies/webpack-logo.svg";


type TechnologyIconType = {
  technology: string;
}

const TechnologyIcon:React.FC<TechnologyIconType> = ( {technology} ) => {

  console.log('technology: ', technology);

  const urls = {
    javascript: "https://www.javascript.com/",
    typescript: "https://www.typescriptlang.org/",
    react: "https://react.dev/",
    materialui: "https://material-ui.com/",
    tailwindcss: "https://tailwindcss.com/",
    webpack: "https://webpack.js.org/",
  }

  if (technology in urls) {
    return (
      <a
      href={urls[technology]}
      target="_blank"
      className="transform hover:scale-110 hover:rotate-3 transition duration-300 ease-in-out"
    >
      <Image
        src={
          technology === "javascript"
            ? javascriptLogo
            : technology === "typescript"
            ? typescriptLogo
            : technology === "react"
            ? reactLogo
            : technology === "materialui"
            ? materialUILogo
            : technology === "tailwindcss"
            ? tailwindLogo
            : technology === "webpack"
            ? webpackLogo
            : ""
          }
        alt={technology}
        width={140}
        height={50}
        className="rounded-lg hover:shadow-inner transition-shadow duration-200 ease-in-out"
        style={{
          boxShadow: '0 0 3px 1.5px #fff',
        }}
      />
    </a>
    )
  }
}

export default TechnologyIcon