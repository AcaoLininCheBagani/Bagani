import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ComputerIcon } from "lucide-react";

export default function Intro() {
    return (
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
    )
}