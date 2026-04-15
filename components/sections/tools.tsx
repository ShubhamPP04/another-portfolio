interface ToolProps {
  name: string;
  icon: string;
}

interface ToolGroupProps {
  title: string;
  tools: ToolProps[];
}

const toolGroups: ToolGroupProps[] = [
  {
    title: "Languages",
    tools: [
      { name: "C++", icon: "/tools/cplusplus.svg" },
      { name: "Java", icon: "/tools/java.svg" },
      { name: "Python", icon: "/tools/python.svg" },
      { name: "JavaScript", icon: "/tools/javascript.svg" },
      { name: "TypeScript", icon: "/tools/typescript.svg" },
      { name: "SQL", icon: "/tools/mysql.svg" },
    ],
  },
  {
    title: "Frontend",
    tools: [
      { name: "React.js", icon: "/tools/react.svg" },
      { name: "Next.js", icon: "/tools/nextdotjs.svg" },
      { name: "Tailwind CSS", icon: "/tools/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/tools/bootstrap.svg" },
      { name: "HTML5", icon: "/tools/html5.svg" },
      { name: "CSS3", icon: "/tools/css3.svg" },
    ],
  },
  {
    title: "Backend & Database",
    tools: [
      { name: "Node.js", icon: "/tools/nodejs.svg" },
      { name: "MySQL", icon: "/tools/mysql.svg" },
      { name: "MongoDB", icon: "/tools/mongodb.svg" },
      { name: "Supabase", icon: "/tools/supabase.svg" },
    ],
  },
  {
    title: "Cloud, CRM & Tools",
    tools: [
      { name: "Salesforce", icon: "/tools/supabase.svg" },
      { name: "Docker", icon: "/tools/docker.svg" },
      { name: "Git", icon: "/tools/git.svg" },
    ],
  },
];

function ToolCard({ name, icon }: ToolProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 shadow-sm dark:bg-zinc-800">
        <img
          alt={name}
          className="h-8 w-8 object-contain"
          loading="lazy"
          src={icon}
        />
      </div>
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
