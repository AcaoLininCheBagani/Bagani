// external components
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Separator } from "@/components/ui/separator"

// components
import Header from "@/components/Header";
import Intro from "./pageComponents/Intro";
import InfoCard from "./pageComponents/InfoCards";
import AboutMe from "./pageComponents/AboutMe";
import Experience from "./pageComponents/Experience";
import Skills from "./pageComponents/Skills";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      {/* Button text */}
      <div className="max-w-2xl m-auto">
        <div className="flex flex-col">

          <div className="mt-10">
            <Intro />
          </div>

          <div>
            <p className="text-[35px] p-1 mt-5">
              Full stack software engineer building scalable web application with React and Laravel.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-5 mb-5 items-center">
            <InfoCard/>
          </div>

          <div>
            <AboutMe />
          </div>

          <div className="mt-7">
            <Experience />
          </div>

          <div className="mt-7">
           <Skills/>
          </div>
        </div>

        {/* Projects */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Bagani. All rights reserved.
      </footer>
    </main>
  );
}