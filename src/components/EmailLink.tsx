"use client";
import React, { useState } from "react";
import Image from "next/image";

const EmailLink = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText("johnwdunn20@gmail.com");
    // reset copy after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <article className="flex justify-center items-center mb-16">
      <a
        className="text-2xl text-gray-200 hover:text-blue-500 mr-4"
        href="mailto:your.johnwdunn20@gmail.com"
      >
        <span className="font-bold">Email: </span>
        <span className="italic underline">johnwdunn20@gmail.com</span>
      </a>
      <div className='ml-2' onClick={handleCopy}>
            <Image
              src={`${copied ?  '/assets/icons/check.svg': '/assets/icons/copy.svg'}`}
              alt='copy'
              width={30}
              height={30}
            />
          </div>
    </article>
  );
};

export default EmailLink;
