import React from 'react'
import Image from "next/image";

// Import technology logos
import javascriptLogo from "@assets/technologies/javascript-logo.svg";
import typescriptLogo from "@assets/technologies/typescript-logo.svg";
import reactLogo from "@assets/technologies/react-logo.svg";
import materialUILogo from "@assets/technologies/materialui-logo.svg";
import tailwindLogo from "@assets/technologies/tailwind-logo.svg";
import webpackLogo from "@assets/technologies/webpack-logo.svg";
import djangoLogo from "@assets/technologies/django-logo.svg";
import expressLogo from "@assets/technologies/express-logo.svg";
import rollupLogo from "@assets/technologies/rollup-logo.svg";
import mongodbLogo from "@assets/technologies/mongodb-logo.svg";
import awsLogo from "@assets/technologies/aws-logo.svg";
import dockerLogo from "@assets/technologies/docker-logo.svg";
import vercelLogo from "@assets/technologies/vercel-logo.svg";
import jwtLogo from "@assets/technologies/jwt-logo.svg";
import jupyterLogo from "@assets/technologies/jupyter-logo.svg";
import nextjsLogo from "@assets/technologies/nextjs-logo.svg";
import nodejsLogo from "@assets/technologies/nodejs-logo.svg";
import tsnodeLogo from "@assets/technologies/tsnode-logo.svg";
import npmLogo from "@assets/technologies/npm-logo.svg";
import pythonLogo from "@assets/technologies/python-logo.svg";


// types
import { technologyURLs } from '@utils/technologyURLs';

type TechnologyIconType = {
  technology: keyof typeof technologyURLs;
}

// Icons can be found here: https://github.com/alexandresanlim/Badges4-README.md-Profile

const TechnologyIcon:React.FC<TechnologyIconType> = ( {technology} ) => {


  // Log messages to make it easier to find missing technologies
  if (!(technology in technologyURLs)) console.error(`**** Technology ${technology} not found in TechnologyIcon ****`);
  
  if (technology in technologyURLs) {
    return (
      <a
      href={technologyURLs[technology]}
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
            : technology === "django"
            ? djangoLogo
            : technology === "express"
            ? expressLogo
            : technology === "rollup"
            ? rollupLogo
            : technology === "mongodb"
            ? mongodbLogo
            : technology === "aws"
            ? awsLogo
            : technology === "docker"
            ? dockerLogo
            : technology === "vercel"
            ? vercelLogo
            : technology === "jwt"
            ? jwtLogo
            : technology === "jupyter"
            ? jupyterLogo
            : technology === "nextjs"
            ? nextjsLogo
            : technology === "nodejs"
            ? nodejsLogo
            : technology === "npm"
            ? npmLogo
            : technology === "python"
            ? pythonLogo
            : technology === "tsnode"
            ? tsnodeLogo
            : ""
          }
        alt={technology}
        width={140}
        height={50}
        className="rounded-lg hover:shadow-inner transition-shadow duration-200 ease-in-out m-2 sm:m-3"
        style={{
          boxShadow: '0 0 3px 1.5px #fff',
        }}
      />
    </a>
    )
  }
}

export default TechnologyIcon