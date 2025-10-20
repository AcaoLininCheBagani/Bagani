"use client"
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
export default function AboutMe() {
    const handleDownloadPDF = (): void  => {
        const link = document.createElement('a');
        link.href = '/linin-resume.pdf';
        link.download = 'linin_resume.pdf';
        link.click();
    }
    return (
        <Card>
            <CardContent>
                <p className="font-bold">
                    About me
                </p>
                <p className="mt-5 text-[0.875rem]">
                    I am a Full Stack Software Engineer with more than 3 years of experience building web applications.
                    My core stack includes React, Next.js, Laravel, Node.js and  MySQL.
                    I’ve collaborated with clients in Australia to deliver reliable production ready applications.
                    I’m deeply commited to writing clean, simple, maintainable code
                    When I'm not coding, I'm exploring and learning new technologies especially AI development always growing steady and stong.
                </p>
                <Button className="mt-5" onClick={handleDownloadPDF} variant='outline'>
                    <DownloadIcon />
                    Download My Resume
                </Button>
            </CardContent>
        </Card>
    )
}