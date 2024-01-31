import React from "react";
import Image from "next/image";
import placeHolderImage from "@assets/grocery.png";
import github from '@assets/github.svg'

type ProductType = {
  title: string;
  description: string;
  technicalDescription?: string;
  darkBackground: boolean;
  url?: string;
  github?: string;
};

const Product: React.FC<ProductType> = ({
  title,
  description,
  technicalDescription,
  darkBackground,
  url,
  github,
}) => {
  return (

    <section className={`flex flex-col w-full p-4 ${darkBackground ? "bg-slate-800" : "bg-slate-700"}`}>
      {/* Text and Images */}
      <div
        className='flex justify-center space-x-2'
      >
        <article className="flex flex-col justify-around w-1/2">
          {/* Text */}
          <h1 className="text-4xl font-bold text-center">{title}</h1>
          <p className="">{description}</p>
          <p>{technicalDescription}</p>
        </article>

        {/* Image */}
        <div className="w-1/2 mr-0">
          <Image
            src={placeHolderImage}
            alt="product image"
            width={400}
            height={400}
            className="m-0"
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex justify-center space-x-4">
        <div>
          Icon 1
        </div>
        <div>Icon 2</div>
        <div>Icon 3</div>
      </div>
    </section>
  );
};

export default Product;
