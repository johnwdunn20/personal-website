import { svgPathD } from "./externalLinkSVGPaths"
import { technologyURLs } from "./technologyURLs"

export type ProductDataType = {
  title: string,
  description: string,
  bullets: string[],
  technologies: (keyof typeof technologyURLs)[],
  externalLinks: {
    type: keyof typeof svgPathD,
    url: string,
  }[],
  image?: {
    url: string,
    alt: string,
    height: number,
    width: number
  },
}

export const productData: ProductDataType[] = [
  // React Query Rewind
  {
    title:"React Query Rewind",
    description: "React Query Rewind allows developers using the state management tool React Query to time travel state directly in their browser",
    bullets: [
      'Install the NPM package and Chrome Extension',
      'Place the custom component next to the root of your application',
      'Happy debugging!',
    ],
    technologies: [
      'react',
      'typescript',
      'materialui',
      'npm',
      'webpack',
      'rollup',
      'jest',
      'testinglibrary',
      // 'githubactions',
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
    image: {
      url: 'https://i.imgur.com/vfeEMJV.gif',
      alt: 'React Query Rewind',
      height: 309,
      width: 563
    }
  },
  // Scraping Evo
  {
    title:"Scraping Evo",
    description: "Scrapes Evo.com to find detailed ski specs and allows users to filter by any attribute",
    bullets: [
      "Evo's built-in search functionality only allows customers to filter skis by a handful of attributes",
      "But any skier knows there's more to a ski than size and rocker",
      'This script pulls in all ski specifications, allowing you to find the perfect pair for you style',
    ],
    technologies: [
      'python',
      'pandas',
    ],
    externalLinks: [
      {
        type: 'GitHub',
        url: "https://github.com/johnwdunn20/ScrapingEvo",
      },
    ],
  },
  // Open Forge
  {
    title:"Open Forge",
    description: "If you want to go fast, go alone. If you want to go far, go together. Find like-minded developers for your open source projects.",
    image: {
      url: '/assets/products/open-forge.png',
      alt: 'Open Forge',
      height: 1041,
      width: 2052
    },
    bullets: [
      "DeveloperWeek 2024 Hackathon Challenge Winner - the nation's largest challenge-driven in-person and online hackathon",
      "The open source community's greatest strength is its size and active community. But for developers less entrenched in the community, it can be a tough, intimidating world to first enter.",
      "OpenForge is a portal that allows you to find like-minded developers to build open source products. Create a profile and tell the community about yourself - what technologies you like, the areas you're passionate about, and any projects you're currently working on."
    ],
    technologies: [
      'nextjs',
      'typescript',
      'mongodb',
      'vercel',
    ],
    externalLinks: [
      {
        type: 'GitHub',
        url: 'https://github.com/OpenSourceMatching/OpenSourceMatching'
      },
      {
        type: 'Website',
        url: "https://open-forge.vercel.app/",
      },
    ]
  },
  // Super Market Sorter
  {
    title:"Super Market Sorter",
    description: "Mobile-first web app that automatically sorts grocery items by aisle",
    bullets: [
      'Enter your grocery list and watch it organize your shopping list',
      'Check off items as you shop',
      'Toggle between all items and remaining items',
    ],
    technologies: [
      'react',
      'tailwindcss',
      'typescript',
      'tsnode',
      'jwt',
      'express',
      'mongodb',
      'webpack',
      'aws',
      'docker',
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
    image: {
      url: 'https://i.imgur.com/cCR8VHI.gif',
      alt: 'Super Market Sorter',
      height: 847,
      width: 390
    }
  },
  // React JSON Difference
  {
    title:"React JSON Difference",
    description: "Displays JSON diffs in a human readable format",
    image: {
      url: '/assets/products/react-json-difference.png',
      alt: 'React Json Difference',
      height: 200,
      width: 500
    },
    bullets: [
      'Built for React',
      'Install the NPM package and use the custom component to display diffs',
      'Display all fields (left) or only changed fields (right)',
    ],
    technologies: [
      'react',
      'typescript',
      'npm',
      'rollup'
    ],
    externalLinks: [
      {
        type: 'GitHub',
        url: 'https://github.com/johnwdunn20/react-jsondiff'
      },
      {
        type: 'NPM',
        url: "https://www.npmjs.com/package/react-json-difference",
      },
    ]
  },
  // PGAdmin AI
  // {
  //   title:"pgAdmin AI",
  //   description: "Use AI to automatically generate SQL queries",
  //   bullets: [
  //     'Add your OpenAI API key',
  //     'Watch the AI generate SQL queries for you',
  //     'Forked from pgAdmin4',
  //   ],
  //   technologies: [
  //     'python',
  //     'django'
  //   ],
  //   externalLinks: [
  //     {
  //       type: 'GitHub',
  //       url: ''
  //     },
  //   ]
  // },
  // // Social Media
  // {
  //   title:"Social Media Placeholder",
  //   description: "Exploring integrations in NextJS",
  //   bullets: [
  //     'TBD',
  //   ],
  //   technologies: [
  //     'nextjs',
  //     'typescript',
  //     'tailwindcss',
  //   ],
  //   externalLinks: [
  //     {
  //       type: 'GitHub',
  //       url: ''
  //     },
  //   ]
  // },
]
