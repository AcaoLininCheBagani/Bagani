import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const lng = [
    {l:'React'},
    {l:'Laravel'},
    {l:'Firebase'},
    {l:'React Native'},
  ]
  return (
    <Card  className="  border 
           hover:border-blue-400/90 
           transition-all 
           duration-500 
           select-none 
           shadow-lg 
           backdrop-blur-sm 
           animate-fade-in-up ">
      <CardContent>
        <p className="font-bold">
          Projects
        </p>
        <CardContent>
          <Card className="mt-5">
            <CardHeader>
              <div className="flex justify-between w-[100%]">
                <div className="flex items-center">
                  <img
                    src="/icons/sana-all-vertical.png"
                    alt="sn"
                    className="w-15 h-17"
                  />
                  <div className="ml-5">
                    <p className="font-medium text-[14px]">Sana All App</p>
                    <p className="font-light text-[14px]"> Full Stack Software Engineer</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Ticketing platform for Filipino concert and entertainment events in Australia.
              </p>
              <div>
                <ul className="">
                  <li>Developed and maintained frontend and backend features.</li>
                  <li>Built admin dashboards with user management, real-time purchase tracking and push notifications.</li>
                </ul>
              </div>
            </CardContent>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {lng.map((el, key) => (
                  <Button variant='outline' key={key}>{el.l}</Button>
                ))}
                <a
                  href="https://apps.apple.com/ph/app/sana-all/id6456751289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink />
                  <span>Visit Project</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </CardContent>
    </Card>
  )
}