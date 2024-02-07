import { svgPathD } from "./externalLinkSVGPaths"

export type ProductDataType = {
  title: string,
  description: string,
  bullets: string[],
  technologies: string[],
  externalLinks: {
    type: keyof typeof svgPathD,
    url: string,
  }[],
  imageURL?: string,
}

export const productData: ProductDataType[] = [
  // React Query Rewind
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
      'webpack',
      'rollup',
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
  // Super Market Sorter
  {
    title:"Super Market Sorter",
    description: "Automatically sort groceries by aisle",
    bullets: [
      'Enter your grocery list and watch it sort',
      'Check off items as you shop'
    ],
    technologies: [
      'react',
      'express',
      'mongodb',
      'typescript',
      'tailwindcss',
      'webpack',
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
  // React JsonDiffPatch
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
  },
  // PGAdmin AI
  {
    title:"pgAdmin AI",
    description: "Use AI to automatically generate SQL queries",
    bullets: [
      'Add your OpenAI API key',
      'Watch the AI generate SQL queries for you',
      'Forked from pgAdmin4',
    ],
    technologies: [
      'python',
      'django'
    ],
    externalLinks: [
      {
        type: 'GitHub',
        url: ''
      },
    ]
  },
  // Social Media
  {
    title:"Social Media Placeholder",
    description: "Exploring integrations in NextJS",
    bullets: [
      'TBD',
    ],
    technologies: [
      'nextjs',
      'typescript',
      'tailwindcss',
    ],
    externalLinks: [
      {
        type: 'GitHub',
        url: ''
      },
    ]
  },
]
