import Link from "next/link";

export default function ProjectCard(props: any){
    return (
        <div className="flex flex-col items-start bg-transparent border p-3 rounded-xl" style={{borderColor: props.color}}>
            <Link href={props.link} className="hover:text-white hover:font-semibold text-xl">{props.title}</Link>
            <p className="text-sm">{props.desc}</p>
            <div className="flex text-xs">
                <p>Language: <span style={{color: props.color, fontWeight: 500}}>{props.language}</span></p>
            </div>
        </div>
    )
}