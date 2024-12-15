import { svgPathD } from "./externalLinkSVGPaths";
import { technologyURLs } from "./technologyURLs";

export type ProductDataType = {
  title: string;
  winner?: string;
  description: string;
  bullets: string[];
  technologies: (keyof typeof technologyURLs)[];
  externalLinks: {
    type: keyof typeof svgPathD;
    url: string;
  }[];
  image?: {
    url: string;
    alt: string;
    height: number;
    width: number;
  };
};

export const productData: ProductDataType[] = [
  // React Query Rewind
  {
    title: "React Query Rewind",
    description:
      "React Query Rewind allows developers using the state management tool TanStack (React) Query to time travel state directly in their browser. An official TanStack (React) Query Community Package",
    bullets: [
      "Install the NPM package and Chrome Extension",
      "Place the custom component next to the root of your application",
      "Happy debugging!",
      "Available for React, Svelte, & Vue",
    ],
    technologies: [
      "react",
      "typescript",
      "materialui",
      "npm",
      "webpack",
      "rollup",
      "jest",
      "testinglibrary",
      "githubactions",
    ],
    externalLinks: [
      {
        type: "Website",
        url: "https://www.reactqueryrewind.com/",
      },
      {
        type: "GitHub",
        url: "https://github.com/oslabs-beta/react-query-rewind",
      },
      {
        type: "NPM",
        url: "https://www.npmjs.com/package/react-query-rewind",
      },
      {
        type: "Chrome",
        url: "https://chromewebstore.google.com/detail/rqrewind/jfljppnfglpckkgkpmdpgagnffloboel",
      },
      {
        type: "Medium",
        url: "https://medium.com/@teeringe/react-query-rewind-time-travel-debugging-made-simple-46aaeeafd497",
      },
      {
        type: "LinkedIn",
        url: "https://www.linkedin.com/company/react-query-rewind/about",
      },
    ],
    image: {
      url: "https://i.imgur.com/vfeEMJV.gif",
      // url: 'https://i.imgur.com/g8KrqAg.gif',
      alt: "React Query Rewind",
      height: 309 * 1.4,
      width: 563 * 1.4,
      // height: 338*1.2,
      // width: 600*1.2
    },
  },
  // Open Forge
  {
    title: "Open Forge",
    winner: "DeveloperWeek 2024 Hackathon Challenge Winner",
    description:
      "If you want to go fast, go alone. If you want to go far, go together. Find like-minded developers for your open source projects.",
    image: {
      url: "/assets/products/open-forge.png",
      alt: "Open Forge",
      height: 304 * 1.3,
      width: 600 * 1.3,
      // 1.971 ratio
    },
    bullets: [
      "DeveloperWeek 2024 Hackathon Challenge Winner - the nation's largest challenge-driven in-person and online hackathon",
      "OpenForge is a portal that allows you to find like-minded developers to build open source products. Create a profile and tell the community about yourself - what technologies you like, the areas you're passionate about, and any projects you're currently working on.",
    ],
    technologies: ["nextjs", "typescript", "mongodb", "vercel"],
    externalLinks: [
      {
        type: "GitHub",
        url: "https://github.com/OpenSourceMatching/OpenSourceMatching",
      },
      {
        type: "Website",
        url: "https://open-forge.vercel.app/",
      },
      {
        type: "DevPost",
        url: "https://devpost.com/software/team-team",
      },
    ],
  },
  // Super Market Sorter
  {
    title: "Super Market Sorter",
    description:
      "Mobile-first web app that automatically sorts grocery items by aisle",
    bullets: [
      "Enter your grocery list and watch it organize your shopping list",
      "Check off items as you shop",
      "Toggle between all items and remaining items",
    ],
    technologies: [
      "react",
      "tailwindcss",
      "typescript",
      "tsnode",
      "jwt",
      "express",
      "mongodb",
      "webpack",
      "aws",
      "docker",
    ],
    externalLinks: [
      {
        type: "Website",
        url: "https://www.supermarketsorter.com/",
      },
      {
        type: "GitHub",
        url: "https://github.com/johnwdunn20/grocery-list",
      },
    ],
    image: {
      url: "https://i.imgur.com/cCR8VHI.gif",
      alt: "Super Market Sorter",
      height: 600,
      width: 269,
      // 2.23 ratio
    },
  },
  // React JSON Difference
  {
    title: "React JSON Difference",
    description: "Displays JSON diffs in a human readable format",
    image: {
      url: "/assets/products/react-json-difference.png",
      alt: "React Json Difference",
      height: 200,
      width: 500,
    },
    bullets: [
      "Built for React",
      "Install the NPM package and use the custom component to display diffs",
      "Display all fields (left) or only changed fields (right)",
    ],
    technologies: ["react", "typescript", "npm", "rollup"],
    externalLinks: [
      {
        type: "GitHub",
        url: "https://github.com/johnwdunn20/react-jsondiff",
      },
      {
        type: "NPM",
        url: "https://www.npmjs.com/package/react-json-difference",
      },
    ],
  },
];
