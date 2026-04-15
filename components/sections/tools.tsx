interface ToolProps {
  name: string;
  icon?: string;
  color?: string;
}

interface ToolGroupProps {
  title: string;
  tools: ToolProps[];
}

const toolGroups: ToolGroupProps[] = [
  {
    title: "Languages",
    tools: [
      { name: "C++", color: "#00599C" },
      { name: "C", color: "#A8B9CC" },
      { name: "Java", color: "#007396" },
      { name: "Python", color: "#3776AB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "SQL", color: "#F29111" },
      { name: "HTML/CSS", color: "#E34F26" },
    ],
  },
  {
    title: "Frontend",
    tools: [
      { name: "React.js", icon: "/tools/react.svg" },
      { name: "Next.js", icon: "/tools/nextjs_icon.svg" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "/tools/tailwindcss.svg" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "WordPress", color: "#21759B" },
    ],
  },
  {
    title: "Backend & Database",
    tools: [
      { name: "Node.js", icon: "/tools/nodejs.svg" },
      { name: "MySQL", color: "#4479A1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "APIs", color: "#FF6C37" },
      { name: "Git", color: "#F05032" },
    ],
  },
  {
    title: "Cloud & CRM",
    tools: [
      { name: "Salesforce", color: "#00A1E0" },
      { name: "Data Cloud", color: "#0176D3" },
      { name: "Data Modeling", color: "#FF5722" },
      { name: "Docker", icon: "/tools/docker.svg" },
      { name: "AWS", color: "#FF9900" },
    ],
  },
];

function getInitials(name: string): string {
  return name
    .split(/[\s/.]+/)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ToolCard({ name, icon, color }: ToolProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon ? (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 shadow-sm dark:bg-zinc-800">
          <img
            alt={name}
            className="h-8 w-8 object-contain"
            loading="lazy"
            src={icon}
          />
        </div>
      ) : (
        <div
          className="flex h-12 w-12 items-center justify-center rounded-lg font-bold text-sm shadow-sm text-white"
          style={{ backgroundColor: color || "#6B7280" }}
          title={name}
        >
          {getInitials(name)}
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
