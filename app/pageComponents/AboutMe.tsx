import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function AboutMe() {
    return (
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
    )
}