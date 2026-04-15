export interface Skill {
  name: string;
}

export type PositionType =
  | "Co-op"
  | "Internship"
  | "Part-time"
  | "Full-time"
  | "Self-Employed"
  | "Contract";

export interface Position {
  role: string;
  type: PositionType;
  startDate: Date;
  endDate: Date | "present";
  location: string;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  location: string;
  skills: Skill[];
  logo?: string;
  currentPosition: Position;
  promotions?: Position[];
  category: "work" | "education";
  note?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Logicxcel",
    companyUrl: "https://logicxcel.com/",
    location: "New Delhi",
    currentPosition: {
      role: "Data Cloud Engineer",
      type: "Full-time",
      startDate: new Date("2026-03-01"),
      endDate: "present",
      location: "New Delhi",
    },
    promotions: [
      {
        role: "Data Cloud Intern",
        type: "Internship",
        startDate: new Date("2025-11-01"),
        endDate: new Date("2026-03-01"),
        location: "New Delhi",
      },
    ],
    skills: [
      { name: "Salesforce Data Cloud" },
      { name: "Data Modeling" },
      { name: "Segmentation" },
      { name: "Data Ingestion" },
      { name: "Activation" },
    ],
    category: "work",
    note: "Promoted from Data Cloud Intern to Data Cloud Engineer in March 2026",
  },
  {
    company: "Akai Space",
    companyUrl: "https://akaispace.com/",
    location: "New Delhi",
    currentPosition: {
      role: "Front-End Developer Intern",
      type: "Internship",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-05-01"),
      location: "New Delhi",
    },
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
    ],
    category: "work",
    note: "Led the end-to-end design and development of the official Akai Space website",
  },
  {
    company: "Climate Resilient Observing Systems Promotion Council (CROPC)",
    companyUrl: "https://cropc.org/",
    location: "New Delhi",
    currentPosition: {
      role: "Front-End Developer Intern",
      type: "Internship",
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-09-01"),
      location: "New Delhi",
    },
    skills: [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "API Integration" },
      { name: "Axios" },
    ],
    category: "work",
    note: "Developed CROPC website with real-time weather data and news API integrations",
  },
  {
    company: "Guru Tegh Bahadur Institute of Technology (GGSIPU)",
    location: "New Delhi",
    currentPosition: {
      role: "Bachelor of Technology in Information Technology",
      type: "Full-time",
      startDate: new Date("2021-08-01"),
      endDate: new Date("2025-05-01"),
      location: "New Delhi",
    },
    skills: [{ name: "C++" }, { name: "Java" }, { name: "Python" }, { name: "SQL" }],
    category: "education",
    note: "CGPA: 9.26",
  },
];
