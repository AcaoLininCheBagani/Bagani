// external components
// components
import Header from "@/components/Header";
import Intro from "./pageComponents/Intro";
import InfoCard from "./pageComponents/InfoCards";
import AboutMe from "./pageComponents/AboutMe";
import Experience from "./pageComponents/Experience";
import Skills from "./pageComponents/Skills";
import Project from "./pageComponents/Project";
import ContactMe from "./pageComponents/ContactMe";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      {/* Button text */}
      <div className="m-10 sm:m-auto max-w-2xl">
        <div className="flex flex-col">
          <div className="mt-10">
            <Intro />
          </div>
          <div>
            <p className="text-[25px] p-1 mt-5">
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
        <div className="mt-7">
          <Project/>
        </div>
        <div className="mt-7">
          <ContactMe/>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Bagani. All rights reserved.
      </footer>
    </main>
  );
}