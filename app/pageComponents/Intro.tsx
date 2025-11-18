import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ComputerIcon } from "lucide-react";

export default function Intro() {
    return (
        <Card className="max-w-fit p-3">
            <CardContent>
                <div className="flex flex-row items-center ">
                    <ComputerIcon size={25} />
                    <p className="text-2xl md:text-4xl font-semibold animate-fade-in-up ml-5">
                        Hello, i'm Linin che bagani
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}