import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Experience() {
    return (
        <Card>
            <CardContent>
                <p className="font-bold">
                    Experience
                </p>
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex justify-between w-[100%]">
                                    <div className="flex">
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
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Maintained and modernized legacy codebases by applying clean code principles.
                                    Designed and developed fullstack web applications.
                                    Mentored interns and OJT trainees, fostering a collaborative and supportive team environment.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </CardContent>
        </Card>
    )
}