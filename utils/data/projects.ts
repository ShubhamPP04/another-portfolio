export interface Technology {
  name: string;
}

export const statusConfig = {
  active: {
    label: "Active",
    className:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  completed: {
    label: "Completed",
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  archived: {
    label: "Archived",
    className: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  },
  inactive: {
    label: "Inactive",
    className: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  },
} as const;

export type StatusType = keyof typeof statusConfig;

export interface ProjectStatus {
  type: StatusType;
  label?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: ProjectStatus;
  category: "web" | "mobile" | "api" | "tool" | "game" | "other" | "saas";
}

export const projects: ProjectItem[] = [
  {
    name: "Mind-It",
    description:
      "AI-powered notes platform with real-time web search capabilities using OpenRouter API and Exa search. Supports multiple AI models with source citation system.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "OpenRouter API" },
      { name: "Tailwind CSS" },
    ],
    githubUrl: "https://github.com/shubhamkumar/mind-it",
    status: {
      type: "completed",
    },
    category: "saas",
  },
  {
    name: "DocCollect",
    description:
      "Full-stack document management app with authentication, file upload, categorization, and note-taking. Features responsive UI with dark/light mode and Framer Motion animations.",
    technologies: [
      { name: "Next.js 14" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    githubUrl: "https://github.com/shubhamkumar/doccollect",
    status: {
      type: "completed",
    },
    category: "saas",
  },
  {
    name: "CROPC Website",
    description:
      "Official website for Climate Resilient Observing Systems Promotion Council with real-time weather data, news updates, and Google Maps integration.",
    technologies: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "Weather API" },
      { name: "Google Maps API" },
    ],
    liveUrl: "https://cropc.org/",
    status: {
      type: "completed",
    },
    category: "web",
  },
  {
    name: "Izzy App",
    description:
      "Mobile application that achieved over 1 lakh views on Reddit and was featured on Macked.",
    technologies: [
      { name: "React Native" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    status: {
      type: "active",
      label: "Featured",
    },
    category: "mobile",
  },
];
