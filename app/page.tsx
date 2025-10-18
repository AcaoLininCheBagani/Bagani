import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ComputerIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      {/* Button text */}
      <div className="max-w-2xl m-auto">
        <div className="flex flex-col">

          <div className="mt-10">
            <Card className="max-w-fit p-3">
              <CardContent>
                <div className="flex flex-row items-center ">
                  <ComputerIcon size={25} />
                  <p className="text-[20px] ml-5">
                    Hi! i'm Linin che bagani
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <p className="text-[35px] p-1 mt-5">
              Full stack software engineer building scalable web application with React and Laravel.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-5 mb-5 items-center">
            <div className="flex items-center">
              <Button variant='outline' size='sm'>3+</Button>
              <p className="ml-2">
                Years of experience
              </p>
            </div>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 ml-1 mr-1"></div>
            <div className="flex items-center">
              <Button variant='outline' size='sm'>50%</Button>
              <p className="ml-2">
                Frontend
              </p>
            </div>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 ml-1 mr-1"></div>
            <div className="flex items-center">
              <Button variant='outline' size='sm'>50%</Button>
              <p className="ml-2">
                Backend
              </p>
            </div>
          </div>

          <div>
            <Card>
              <CardContent>
                <p className="font-bold">
                  About me
                </p>
                <p className="mt-5">
                  I am a Full Stack Software Engineer with more than 3 years of experience building web applications.
                  My core stack includes React, Next.js, Laravel, Node.js and  MySQL.
                  I’ve collaborated with clients in Australia to deliver reliable production ready applications.
                  I’m deeply commited to writing clean, simple, maintainable code
                  When I'm not coding, I'm exploring and learning new technologies especially AI development always growing steady and stong.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-7">
            <Card>
              <CardContent>
                <p className="font-bold">
                  Experience
                </p>
                <div>
                  <CardHeader>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarImage src="/images/fligno.webp" />
                          <AvatarFallback>F</AvatarFallback>
                        </Avatar>
                        <div className="ml-5">
                          <p className="font-medium">Fligno Software Philippines</p>
                          <p className="font-light"> Full Stack Engineer</p>
                        </div>
                      </div>
                      <p className="font-light">
                        Jan 2022 - Nov 2025
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p >
                      Maintained and modernized legacy codebases by applying clean code principles.
                      Designed and developed fullstack web applications.
                      Mentored interns and OJT trainees, fostering a collaborative and supportive team environment.
                    </p>
                  </CardContent>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-7">
            <Card>
              <CardContent>
                <p className="font-bold">
                  Skills
                </p>
                <div>
                  <CardContent>
                    <p >
                    I build scalable web applications using modern full-stack technologies React and Next.js on the frontend, and Laravel with MySQL on the backend. 
                    </p>
                  </CardContent>
                </div>
              </CardContent>
            </Card>
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