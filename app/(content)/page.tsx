import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { EventJsonLd } from "@/components/seo/event-json-ld";
import { events } from "@/utils/data/events";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://dominikkoch.dev";

export const metadata: Metadata = {
  title: "Shubham Kumar | Data Cloud Engineer & Full-Stack Developer",
  description: "Data Cloud Engineer & Full-Stack Developer based in New Delhi. Salesforce Data Cloud Consultant with expertise in React.js, Node.js, Next.js, and modern web technologies.",
};

export default async function Page() {
  return (
    <>
      <EventJsonLd baseUrl={BASE_URL} events={events} />
      <About />
    </>
  );
}
