import Image from "next/image";
import Product from "@components/Product";
import Welcome from "@components/Welcome";
import About from "@components/About";
import Contact from "@components/Contact";

export default function Home() {

  const productData = [
    {
      title:"React Query Rewind",
      description: "React Query Rewind allows developers using the state management tool React Query to time travel state directly in their browser. Simply install the Chrome extension, NPM Package, and place the custom component as close to the root of your application as possible",
      technicalDescription: "Built with TypeScript, React, & MaterialUI",
      website: "https://www.reactqueryrewind.com/",
      github: "https://github.com/oslabs-beta/react-query-rewind",
      npm: "https://www.npmjs.com/package/react-query-rewind",
      chrome: "https://chromewebstore.google.com/detail/rqrewind/jfljppnfglpckkgkpmdpgagnffloboel",
      medium: "https://medium.com/@teeringe/react-query-rewind-time-travel-debugging-made-simple-46aaeeafd497",
      linkedIn: "https://www.linkedin.com/company/react-query-rewind/about",
      imageURL: 'https://i.imgur.com/vfeEMJV.gif'
    },
    {
      title:"Super Market Sorter",
      description: "Description for Super Market Sorter",
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
      <div id="open-source" className="w-full">
        {productData.map((product, index) => {
          return (
            <Product
              title={product.title}
              description={product.description}
              technicalDescription={product.technicalDescription}
              website={product.website}
              websiteSVG={product.websiteSVG}
              github = {product.github}
              npm = {product.npm}
              chrome = {product.chrome}
              medium = {product.medium}
              linkedIn = {product.linkedIn}
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
