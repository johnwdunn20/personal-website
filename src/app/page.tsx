import Image from "next/image";
import Product from "@components/Product";
import Welcome from "@components/Welcome";
import About from "@components/About";
import Contact from "@components/Contact";
import { productData } from "@utils/productData";

export default function Home() {

  return (
    <main className="flex flex-col items-center">
      <Welcome/>
      <div id="open-source" className="w-full">
        {productData.map((product, index) => {
          return (
            <Product
              key={index}
              title={product.title}
              description={product.description}
              bullets={product.bullets}
              technologies={product.technologies}
              externalLinks={product.externalLinks}
              imageURL = {product.imageURL}
              darkBackground={index % 2 === 0}
            />
          )
        })}
      </div>
      <About/>
      <Contact/>
    </main>
  );
}
