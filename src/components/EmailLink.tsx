"use client";
import React, { useState } from "react";
import Image from "next/image";

const EmailLink = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText("johnwdunn20@gmail.com");
    // reset copy after 1 second
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <article className="flex justify-center items-center mb-16">
      <a
        className="text-2xl text-purple-500 hover:text-purple-300 mr-4"
        href="mailto:your.johnwdunn20@gmail.com"
      >
        Email: Johnwdunn20@gmail.com
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
