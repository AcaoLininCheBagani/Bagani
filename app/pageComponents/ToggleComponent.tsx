import { Toggle } from "@/components/ui/toggle"

interface toggleInt {
    src : string,
    alt : string
}

export default function ToggleComponent({src, alt} : toggleInt) {
    return (
        <div 
        style={{
            MozAnimationDelay: '1000ms'
        }}
        className="
        grayscale 
        hover:grayscale-0 
        transition 
        duration-400 
        ">
            <Toggle variant='outline' size="lg" className="h-20 w-20 ">
                <img
                    src={src}
                    alt={alt}
                    className="w-15 h-17"
                />
            </Toggle>
        </div>
    )
}