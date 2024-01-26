import React from 'react'
import Image from 'next/image'
import placeHolderImage from '@assets/grocery.png'

type ProductType = {
  title: string;
  description: string;
  technicalDescription?: string;
  url?: string;
  github?: string;
  
}

const Product:React.FC<ProductType> = ({ title, description, technicalDescription, url, github }) => {
  return (
    <section>
      <article className='flex'>
        {/* Text */}
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{technicalDescription}</p>
        </div>

        {/* Image */}
        <Image
          src={placeHolderImage}
          alt='product image'
          width={100}
          height={100}
        />
      </article>
    </section>
  )
}

export default Product