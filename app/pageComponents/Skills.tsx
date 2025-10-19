import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ToggleComponent from "./ToggleComponent";
export default function Skills() {
    const skills = [
        { src: '/icons/react.svg', alt: 'R' },
        { src: '/icons/laravel.svg', alt: 'L' },
        { src: '/icons/nextjs.svg', alt: 'N' },
        { src: '/icons/mysql.svg', alt: 'M' },
        { src: '/icons/ts.svg', alt: 'T' },
        { src: '/icons/js.svg', alt: 'J' },
        { src: '/icons/php.svg', alt: 'P' },
        { src: '/icons/nodejs.svg', alt: 'P' },
        { src: '/icons/git.svg', alt: 'G' },
        { src: '/icons/aws.svg', alt: 'A' },
        { src: '/icons/postman.svg', alt: 'P' },
    ]
    return (
        <Card>
            <CardContent>
                <p className="font-bold">
                    Skills
                </p>
                <div>
                    <CardContent>
                        <p className="mt-3 text-[0.875rem]">
                            I build scalable web applications using modern full-stack technologies.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-5 mb-5">
                            {
                                skills && skills.map((itm, key) => (
                                    <ToggleComponent
                                        key={key}
                                        src={itm.src}
                                        alt={itm.alt}
                                    />
                                ))
                            }
                        </div>
                    </CardContent>
                </div>
            </CardContent>
        </Card>
    )
}