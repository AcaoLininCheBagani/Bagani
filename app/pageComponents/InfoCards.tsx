import { Button } from "@/components/ui/button";


export default function InfoCard() {
    return (
        <>
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
        </>
    )
}