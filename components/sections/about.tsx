import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPosts } from "@/lib/marble/queries";
import { events } from "@/utils/data/events";
import { projects, statusConfig } from "@/utils/data/projects";

function SectionHeader({
  title,
  href,
  linkText,
}: {
  title: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-xl">{title}</h2>
      <Link
        className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        href={href}
      >
        {linkText} &rarr;
      </Link>
    </div>
  );
}

function ProjectPreview() {
  const previewProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader href="/projects" linkText="View all" title="Projects" />
      <div className="flex flex-col gap-4">
        {previewProjects.map((project) => {
          const config = statusConfig[project.status.type];
          const label = project.status.label ?? config.label;
          const href = project.liveUrl ?? project.githubUrl;

          return (
            <a
              className="group -mx-2 flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted/50"
              href={href}
              key={project.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Avatar className="h-10 w-10">
                {project.image && (
                  <AvatarImage alt={project.name} src={project.image} />
                )}
                <AvatarFallback>{project.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium group-hover:underline">
                    {project.name}
                  </h3>
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-xs ${config.className}`}
                  >
                    {label}
                  </span>
                </div>
                <p className="truncate text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function EventPreview() {
  const upcomingEvents = events.slice(0, 1);

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Events</h2>
      <div className="flex flex-col gap-4">
        {upcomingEvents.map((event) => (
          <a
            className="-mx-2 flex cursor-pointer flex-col gap-3 rounded-md p-2 transition-colors hover:bg-muted/50"
            href={`https://lu.ma/event/${event.lumaEventId}?utm_source=dominikkoch.dev`}
            key={event.name}
            target="_blank"
          >
            <div className="flex items-start gap-3">
              {event.image ? (
                <Image
                  alt={event.name}
                  className="rounded-md object-cover"
                  height={80}
                  src={event.image}
                  width={80}
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-md bg-muted font-medium text-xl">
                  {event.name.charAt(0)}
                </div>
              )}
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-medium">{event.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {event.date} &middot; {event.time}
                </p>
                <p className="text-muted-foreground text-sm">
                  {event.location}
                </p>
              </div>
            </div>
            <p className="line-clamp-2 text-muted-foreground text-sm">
              {event.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

async function BlogPreview() {
  const posts = await getBlogPosts();
  const previewPosts = posts.slice(0, 2);

  if (previewPosts.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader href="/blog" linkText="Read more" title="Blog" />
      <div className="flex flex-col gap-3">
        {previewPosts.map((post) => {
          const publishDate = new Date(post.publishedAt);
          const formattedDate = publishDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <Link
              className="group flex flex-col gap-1 rounded-md transition-colors"
              href={`/blog/${post.slug}`}
              key={post.id}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium group-hover:underline">
                  {post.title}
                </h3>
                <time className="shrink-0 text-muted-foreground text-sm">
                  {formattedDate}
                </time>
              </div>
              <p className="line-clamp-1 text-muted-foreground text-sm">
                {post.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function SkillsPreview() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Technical Skills</h2>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="font-medium text-sm">Languages</h3>
          <p className="text-muted-foreground text-sm">C++, C, Java, Python, HTML/CSS, JavaScript, SQL, SOQL</p>
        </div>
        <div>
          <h3 className="font-medium text-sm">Cloud/CRM</h3>
          <p className="text-muted-foreground text-sm">Salesforce Data Cloud, Salesforce CRM, Data Modeling, Segmentation, Data Ingestion, Activation</p>
        </div>
        <div>
          <h3 className="font-medium text-sm">Technologies/Frameworks</h3>
          <p className="text-muted-foreground text-sm">React.js, Node.js, Next.js, MySQL, MongoDB, GitHub, Supabase, WordPress</p>
        </div>
        <div>
          <h3 className="font-medium text-sm">Developer Tools</h3>
          <p className="text-muted-foreground text-sm">VS Code, Git, Salesforce Setup</p>
        </div>
      </div>
    </div>
  );
}

function EducationPreview() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Education</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">Guru Tegh Bahadur Institute of Technology (GGSIPU)</h3>
            <p className="text-muted-foreground text-sm">Bachelor of Technology in Information Technology</p>
          </div>
          <span className="text-muted-foreground text-sm shrink-0">2021 – 2025</span>
        </div>
        <p className="text-muted-foreground text-sm">CGPA: 9.26 | New Delhi</p>
      </div>
    </div>
  );
}

function CertificationsPreview() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Certifications</h2>
      <div className="flex flex-col gap-2">
        <a 
          className="group flex flex-col gap-1"
          href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=7465327"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium group-hover:underline">Salesforce Certified Data Cloud Consultant</h3>
            <span className="text-muted-foreground text-sm">Feb 2026</span>
          </div>
          <p className="text-muted-foreground text-sm">Credential ID: 7465327</p>
        </a>
      </div>
    </div>
  );
}

function AchievementsPreview() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">Achievements</h2>
      <ul className="flex flex-col gap-2 text-muted-foreground text-sm list-disc list-inside">
        <li>Secured All India Rank 680 in TCS CodeVita Season 12 (Round 2)</li>
        <li>1st position in Devathon by IEEE GTBIT & IIIT-Delhi</li>
        <li>3rd position in Designathon by IEEE GTBIT & IIIT-Delhi</li>
        <li>Izzy app featured on Macked with 1 lakh+ Reddit views</li>
      </ul>
    </div>
  );
}

export function About() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">About</h1>
        <p className="text-muted-foreground">
          Data Cloud Engineer & Full-Stack Developer with expertise in Salesforce Data Cloud 
          implementations and modern web development. Experienced in building SaaS products, 
          implementing data modeling and segmentation solutions, and creating responsive web applications. 
          Passionate about leveraging cloud technologies to drive business insights and deliver 
          exceptional user experiences.
        </p>
      </div>

      <EducationPreview />
      <SkillsPreview />
      <CertificationsPreview />
      <ProjectPreview />
      <AchievementsPreview />
    </div>
  );
}
