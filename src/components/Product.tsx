import React from 'react'

type ProductType = {
  title: string;
  description: string;
  technicalDescription?: string;
  url?: string;
  github?: string;
  
}

const Product:React.FC<ProductType> = ({ title, description, technicalDescription, url, github }) => {
  return (
    <div>Product</div>
  )
}

export default Product