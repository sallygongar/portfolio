export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  demoUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    slug: "prize-wheel",
    title: "Prize Wheel",
    description:
      "A gamification wheel for e-commerce marketing campaigns. Prizes and probabilities come from Supabase, each email can play once per event, and the result is stored in the browser and in the database.",
    image: "/projects/ruleta.gif",
    imageAlt:
      "Screen recording of the prize wheel spinning and showing a coupon",
    stack: [
      "React",
      "TypeScript",
      "HTML5 Canvas",
      "Supabase",
      "Vercel Serverless",
      "Vitest",
    ],
    demoUrl: "https://ruleta-sagongar.vercel.app/",
    codeUrl:
      "https://github.com/sallygongar/react-advanced-apps/tree/main/ruleta",
  },
  {
    slug: "premium-ecommerce",
    title: "Premium E-Commerce",
    description:
      "An online store with a product catalog, a persistent cart and a checkout with card validation. The payment is simulated.",
    image: "/projects/ecommerce.gif",
    imageAlt:
      "Screen recording of the store: browsing products, adding to the cart and checking out",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Sass Modules",
    ],
    demoUrl: "https://sallygongar-ecommerce.vercel.app",
    codeUrl:
      "https://github.com/sallygongar/react-advanced-apps/tree/main/ecommerce-premium",
  },
];
