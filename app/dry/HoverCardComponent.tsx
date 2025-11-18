import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardDescription, CardFooter, CardAction, CardTitle, CardContent } from "@/components/ui/card";

type arrParam = {
    infoArray: {
        btt: string,
        title: string,
        subTitle: string,
        desc1: string,
        desc2: string,
        skills: string[],
    }
}
export default function HoverCardComponent({ infoArray }: arrParam) {
    return (
        <>
            <HoverCard >
                <HoverCardTrigger className=" animated-underline">
                    <div className="flex items-center">
                        <Button variant='outline' size='sm'>{infoArray.btt}</Button>
                        <p className="ml-2">
                            {infoArray.title}
                        </p>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent>
                    <CardHeader>
                        <CardTitle>
                            <p>{infoArray.subTitle}</p>
                        </CardTitle>
                    </CardHeader>
                    <CardDescription>
                        <p >
                            {
                                infoArray.desc1
                            }
                        </p>
                        <p className="mt-3">
                            {
                                infoArray.desc2
                            }
                        </p>
                    </CardDescription>
                    {
                        infoArray.skills.length > 0 && (
                            <>
                                <p className="text-[14px] font-bold mt-1 mb-2">Key Technologies & Skills</p>
                                <CardAction>
                                    {infoArray.skills.map((sk) => (
                                        <Badge key={sk}>{sk}</Badge>
                                    ))}
                                </CardAction>

                            </>
                        )

                    }
                </HoverCardContent>
            </HoverCard>
            {infoArray.title !== 'Backend' &&
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 ml-1 mr-1"></div>
            }
        </>

    )
}