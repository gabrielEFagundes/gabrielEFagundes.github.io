import Link from "next/link";

export default function ProjectCard(props: any){
    return (
        <>
            <Link href={props.link}>
                <div className="flex flex-col items-start bg-transparent border p-3 rounded-xl" style={{borderColor: props.color}}>
                    <p className="font-semibold text-xl">{props.title}</p>
                    <p className="text-sm">{props.desc}</p>
                    <div className="flex text-xs">
                        <p>Language: <span style={{color: props.color, fontWeight: 500}}>{props.language}</span></p>
                    </div>
                </div>
            </Link>
        </>
    )
}