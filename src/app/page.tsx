import Image from "next/image";
import Product from "@components/Product";
import Welcome from "@components/Welcome";
import About from "@components/About";
import Contact from "@components/Contact";

export default function Home() {

  const productData = [
    {
      title:"React Query Rewind",
      description: "React Query Rewind allows developers using the state management tool React Query to time travel state directly in their browser",
      bullets: [
        'Install the NPM package and Chrome Extension',
        'Placed the custom component next to the root of your application',
        'Happy debugging',
      ],
      technologies: [
        'react',
        'typescript',
        'materialui',
      ],
      externalLinks: [
        {
          type: 'Website',
          url: "https://www.reactqueryrewind.com/",
        },
        {
          type: 'GitHub',
          url: "https://github.com/oslabs-beta/react-query-rewind",
        },
        {
          type: 'NPM',
          url: "https://www.npmjs.com/package/react-query-rewind",
        },
        {
          type: 'Chrome',
          url: "https://chromewebstore.google.com/detail/rqrewind/jfljppnfglpckkgkpmdpgagnffloboel",
        },
        {
          type: 'Medium',
          url: "https://medium.com/@teeringe/react-query-rewind-time-travel-debugging-made-simple-46aaeeafd497",
        },
        {
          type: 'LinkedIn',
          url: "https://www.linkedin.com/company/react-query-rewind/about",
        },
      ],
      imageURL: 'https://i.imgur.com/vfeEMJV.gif'
    },
    {
      title:"Super Market Sorter",
      description: "Automatically sort groceries by aisle",
      bullets: [
        'Enter your grocery list and watch it sort',
        'Check off items as you shop'
      ],
      technologies: [
        'react',
        'typescript',
      ],
      externalLinks: [
        {
          type: 'Website',
          url: "https://www.supermarketsorter.com/",
        },
        {
          type: 'GitHub',
          url: "https://github.com/johnwdunn20/grocery-list",
        },
      ],
      imageURL: ''
    },
    {
      title:"React JsonDiffPatch",
      description: "Displays json diffs in a human readable format and allows users to toggle nodes open and closed",
      bullets: [
        'Install the NPM package',
        'Use the custom component to display diffs',
      ],
      technologies: [
        'react',
        'typescript'
      ],
      externalLinks: [
        {
          type: 'GitHub',
          url: ''
        },
        {
          type: 'NPM',
          url: "",
        },
      ]
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
