import React from 'react'
import Image from "next/image";


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
            ? '/assets/technologies/javascript-logo.svg'
            : technology === "typescript"
            ? '/assets/technologies/typescript-logo.svg'
            : technology === "react"
            ? '/assets/technologies/react-logo.svg'
            : technology === "jest"
            ? '/assets/technologies/jest-logo.svg'
            : technology === "testinglibrary"
            ? '/assets/technologies/testinglibrary-logo.svg'
            : technology === "materialui"
            ? '/assets/technologies/material-logo.svg'
            : technology === "tailwindcss"
            ? '/assets/technologies/tailwind-logo.svg'
            : technology === "webpack"
            ? '/assets/technologies/webpack-logo.svg'
            : technology === "django"
            ? '/assets/technologies/django-logo.svg'
            : technology === "express"
            ? '/assets/technologies/express-logo.svg'
            : technology === "rollup"
            ? '/assets/technologies/rollup-logo.svg'
            : technology === "mongodb"
            ? '/assets/technologies/mongodb-logo.svg'
            : technology === "aws"
            ? '/assets/technologies/aws-logo.svg'
            : technology === "docker"
            ? '/assets/technologies/docker-logo.svg'
            : technology === "vercel"
            ? '/assets/technologies/vercel-logo.svg'
            : technology === "jwt"
            ? '/assets/technologies/jwt-logo.svg'
            : technology === "jupyter"
            ? '/assets/technologies/jupyter-logo.svg'
            : technology === "nextjs"
            ? '/assets/technologies/nextjs-logo.svg'
            : technology === "nodejs"
            ? '/assets/technologies/nodejs-logo.svg'
            : technology === "npm"
            ? '/assets/technologies/npm-logo.svg'
            : technology === "python"
            ? '/assets/technologies/python-logo.svg'
            : technology === "tsnode"
            ? '/assets/technologies/tsnode-logo.svg'
            : technology === "pandas"
            ? '/assets/technologies/pandas-logo.svg'
            : technology === "githubactions"
            ? '/assets/technologies/githubactions-logo.svg'
            : technology === "fastapi"
            ? '/assets/technologies/fastapi-logo.svg'
            : technology === 'gemini'
            ? '/assets/technologies/gemini-logo.svg'
            : technology === 'postgresql'
            ? '/assets/technologies/postgresql-logo.svg'
            : technology === 'googlecloud'
            ? '/assets/technologies/googlecloud-logo.svg'
            : ""
          }
        alt={technology}
        width={130}
        height={28}
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