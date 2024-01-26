import Image from "next/image";
import Product from "@components/Product";
import Welcome from "@components/Welcome";

export default function Home() {

  const productData = [
    {
      title:"React Query Rewind",
      description: "React Query Rewind allows developers using the state management tool React Query to time travel state directly in their browser. Simply install the Chrome extension, NPM Package, and place the custom component as close to the root of your application as possible",
      technicalDescription: "NPM Package and Chrome Extension",
      github: "url",
    },
    {
      title:"React Query Rewind",
      description: "Description for RQRewind",
      technicalDescription: "NPM Package and Chrome Extension",
      github: "url",
    },
    {
      title:"React Query Rewind",
      description: "Description for RQRewind",
      technicalDescription: "NPM Package and Chrome Extension",
      github: "url",
    }
  ]

  return (
    <main className="flex flex-col items-center">
      <Welcome/>
      <div id="product" className="w-full">
        {productData.map((product, index) => {
          return (
            <Product
              title={product.title}
              description={product.description}
              technicalDescription={product.technicalDescription}
              github={product.github}
              darkBackground={index % 2 === 0}
            />
          )
        })}
      </div>
    </main>
  );
}
