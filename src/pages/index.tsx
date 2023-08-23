import { PageSEO } from "@/components/PageSEO";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Project from "@/components/ProjectShowcase";
import { PROJECT_SHOWCASE } from "@/data/projects";

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        // color="hsla(302, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <PageSEO
        title="Muh. Irfan Arfah  | Home"
        description="Homepage of Muh. Irfan Arfah 's portfolio"
      />
      <Hero />
      <Skills />
      <Project projects={PROJECT_SHOWCASE} />
    </>
  );
}
