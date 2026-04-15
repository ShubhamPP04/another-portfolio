import Image from "next/image";

interface ToolProps {
  name: string;
  icon?: string;
}

interface ToolGroupProps {
  title: string;
  tools: ToolProps[];
}

const toolGroups: ToolGroupProps[] = [
  {
    title: "Languages",
    tools: [
      { name: "C++" },
      { name: "C" },
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "SOQL" },
      { name: "HTML/CSS" },
    ],
  },
  {
    title: "Frontend",
    tools: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "WordPress" },
    ],
  },
  {
    title: "Backend & Database",
    tools: [
      { name: "Node.js" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "API Integration" },
      { name: "Axios" },
    ],
  },
  {
    title: "Cloud & CRM",
    tools: [
      { name: "Salesforce Data Cloud" },
      { name: "Salesforce CRM" },
      { name: "Data Modeling" },
      { name: "Segmentation" },
      { name: "Data Ingestion" },
      { name: "Activation" },
    ],
  },
  {
    title: "Developer Tools",
    tools: [
      { name: "VS Code" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Salesforce Setup" },
      { name: "Docker" },
    ],
  },
];

function ToolCard({ name, icon }: ToolProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon ? (
        <div className="flex h-10 w-10 items-center justify-center">
          <Image alt={name} height={32} loading="eager" src={icon} width={32} />
        </div>
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <span className="font-bold text-xs text-zinc-600 dark:text-zinc-400">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <span className="text-muted-foreground text-xs text-center">{name}</span>
    </div>
  );
}

export function Tools() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-12">
      {toolGroups.map((group) => (
        <div className="flex flex-col gap-6" key={group.title}>
          <h2 className="font-bold text-2xl">{group.title}</h2>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
            {group.tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
