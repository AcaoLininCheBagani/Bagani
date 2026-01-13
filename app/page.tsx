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
      <div className="m-10 sm:m-auto ">
        <div className="flex flex-col m-auto max-w-4xl">
          <div className="mt-10 m-auto max-w-2xl">
            <Intro />
          </div>
          <div className="m-auto max-w-2xl">
            <p className="text-[25px] p-1 mt-5">
              Full stack software engineer building scalable web application with React and Laravel.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 mb-5 items-center m-auto max-w-2xl">
            <InfoCard />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:gap-5 mb-5">
            <div className="max-w-105">
              <div>
                <AboutMe />
              </div>
              <div className="">
                <div className="mt-7 mb-7">
                  <Experience />
                </div>
              </div>
            </div>
            <div className="max-w-96">
              <Skills />
            </div>
          </div>
          {/* Projects */}
          <div className="max-w-207 m-auto">
            <Project />
          </div>
          <div className="mt-7 ml-auto mr-auto max-w-207">
            <ContactMe />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Bagani. All rights reserved.
      </footer>
    </main>
  );
}