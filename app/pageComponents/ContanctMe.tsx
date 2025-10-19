import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ContactMe() {
    return (
        <Card>
            <CardContent>
                <p className="font-bold">
                    Contact
                </p>
                <CardContent className="flex mt-5">
                    <CardContent>

                        <a
                            href="https://www.linkedin.com/in/linin-che-bagani-acao-36175233b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src='/icons/in.svg'
                                alt='in'
                                className="w-8 h-10"
                            />
                            <span>LinkedIn</span>
                        </a>
                    </CardContent>
                    <CardContent>


                        <a href="mailto:Linin.che.bagani@gmail.com" className="flex items-center gap-2">
                            <img
                                src='/icons/gm.svg'
                                alt='gm'
                                className="w-10 h-10"
                            />
                            <span>Linin.che.bagani@gmail.com</span>
                        </a>
                    </CardContent>
                </CardContent>
            </CardContent>
        </Card>
    )
}