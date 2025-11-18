import { Button } from "@/components/ui/button";
import HoverCardComponent from "../dry/HoverCardComponent";
export default function InfoCard() {
    
    const infoArray = [
        { btt: '3+',
            title: 'Years of experience', 
            subTitle: 'Overview', 
            desc1: `With Over 3+ years of hands on experience building web applications, I'm eager to deliver quality and impactful applications.
            My eagerness to learn new technologies drives my inner developer to push and never give up bein a software developer.
            `, 
            desc2: '', 
            skills: [] },
        { btt: '50%',
            title: 'Frontend', 
            subTitle: 'Frontend Development & User Experience', 
            desc1: `My frontend development expertise spans on modern Javascript/Typescript frameworks and libraries.
                With Over 3 years of React development has given me the understanding of component architecture, state management, and performance optimization.
            `, 
            desc2: `I'm proficient in javascript/typescript, My approach on frontend development emphasizes simple, clean, maintainable code and user experience across devices.
            `, 
            skills: ["React", "Next.js", "Typescript", "Javascript", "HTML/CSS", "Tailwind Css", "Responsive Design"] },
        {
            btt: '50%',
            title: 'Backend', 
            subTitle: 'Backend Development & System Architecture', 
            desc1: `With over 3 years of experience in backend development, I specialize in building robust,
                            scalable server-side applications. I've developed from a simple API to Complex microservices systems.`, 
            desc2: ` I have extensive experience with MySQL as my goto relational database and worked with noSQL such as MongoDB, also had experience with GraphQL.
                            My Approach in making APIs follows a RESTful design pattern. Ensuring a simple, clean, maintainable, and well-documented interfaces.`, 
            skills: ["Python", "PHP (Laravel)", "MongoDB", "Node.Js", "MySQL", "GraphQL", "REST APIs"]
        },
    ]
    return (
        <>
            { infoArray && 
            infoArray.map((ia) => (
                <HoverCardComponent infoArray={ia} key={ia.title} />
            ))
            }
        </>
    )
}