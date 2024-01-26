import React from "react";
import Image from "next/image";
import placeHolderImage from "@assets/grocery.png";

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
    <section className={`flex flex-col w-full ${darkBackground ? "bg-slate-800" : "bg-slate-700"}`}>
      {/* Text and Images */}
      <div
        className='flex justify-around'
      >
        <article className="flex flex-col justify-between">
          {/* Text */}
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="">{description}</p>
          <p>{technicalDescription}</p>
        </article>

        {/* Image */}
        <div className="pr-4">
          <Image
            src={placeHolderImage}
            alt="product image"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex justify-center">
        <div>Icon 1</div>
        <div>Icon 2</div>
        <div>Icon 3</div>
      </div>
    </section>
  );
};

export default Product;
