"use client";
import React, { useState } from "react";
import Image from "next/image";

const EmailLink = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const handleCopy = () => {
    setVisible(false);
    navigator.clipboard.writeText("johnwdunn20@gmail.com");
    // reset visible after .2 seconds and change copied to true
    setTimeout(() => {
      setVisible(true);
      setCopied(true);
    }, 200);

    // reset copy after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <article className="flex justify-center items-center mb-16 m-4">
      <a
        className="flex flex-wrap justify-center text-2xl text-gray-200 hover:text-blue-500 mr-4"
        href="mailto:your.johnwdunn20@gmail.com"
      >
        <span className="font-bold mr-1">Email: </span>
        <span className="ml-1 italic underline">johnwdunn20@gmail.com</span>
      </a>
      <div
        className={`ml-2 cursor-pointer transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.2s ease-in-out' }} 

        onClick={handleCopy}
      >
        <Image
          src={`${
            copied ? "/assets/icons/check.svg" : "/assets/icons/copy.svg"
          }`}
          alt="Copy"
          width={30}
          height={30}
        />
      </div>
    </article>
  );
};

export default EmailLink;
