export const aboutText =
  "I like the moment when a complicated flow, like a checkout or a prize campaign, finally feels simple to the person using it. I'm a frontend developer based in Chiapas, Mexico, with experience building interfaces with React and TypeScript, most recently for e-commerce on VTEX IO. I use side projects to practice what I haven't used at work yet: lately, testing, CI and Next.js. When I'm not coding, you'll find me watching Korean dramas or reading psychology books about building better habits. I'm looking for my next frontend role, ideally remote, though I'm open to other arrangements.";

export interface SkillItem {
  name: string;
  learning?: boolean;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Sass" },
    ],
  },
  {
    title: "Libraries & frameworks",
    items: [
      { name: "Material UI" },
      { name: "Zustand" },
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "Vite" },
      { name: "Next.js", learning: true },
      { name: "Tailwind CSS", learning: true },
    ],
  },
  {
    title: "E-commerce",
    items: [
      { name: "VTEX IO" },
      { name: "VTEX Master Data" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Testing & quality",
    items: [
      { name: "Vitest" },
      { name: "Testing Library" },
      { name: "ESLint" },
      { name: "GitHub Actions" },
    ],
  },
  {
    title: "Backend & data",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Mongoose" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "Vercel Serverless" },
      { name: "C#" },
      { name: "SQL Server" },
    ],
  },
  {
    title: "Tools & workflow",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jira" },
      { name: "Scrum" },
      { name: "Vercel" },
    ],
  },
];

export interface Experience {
  role: string;
  context: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    context: "E-commerce (VTEX IO)",
    period: "Nov 2022 – Oct 2026",
    highlights: [
      "Built and styled highly interactive storefront interfaces with React, TypeScript and SCSS on VTEX IO.",
      "Integrated REST APIs and handled data in VTEX Master Data.",
      "Worked in Scrum teams using Git and Jira.",
    ],
  },
  {
    role: "Frontend / Fullstack Developer",
    context: "Software consultancy",
    period: "Jan 2019 – Sep 2022",
    highlights: [
      "Built user interfaces with React, TypeScript and Material UI.",
      "Developed backend services with Node.js, Express and Mongoose (MongoDB).",
      "Delivered responsive, modular layouts with CSS/SCSS and tracked sprints in Jira.",
    ],
  },
  {
    role: "Software Developer",
    context: "Software consultancy",
    period: "Jan 2016 – Dec 2018",
    highlights: [
      "Developed backend logic in SQL Server 2016 and C#.",
      "Implemented web services and supported core banking systems.",
    ],
  },
];

export const education = {
  degree: "Computer Systems Engineering",
  school: "Instituto Tecnológico de Tuxtla Gutiérrez",
  period: "2011 – 2015",
};
