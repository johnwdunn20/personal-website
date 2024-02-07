"use client";
import React, { useState } from "react";

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
    <article className="flex justify-center items-center mb-4">
      <a
        className="text-2xl text-purple-500 hover:text-purple-300"
        href="mailto:your.johnwdunn20@gmail.com"
      >
        Email: Johnwdunn20@gmail.com
      </a>
    </article>
  );
};

export default EmailLink;
