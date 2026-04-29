import Image from "next/image";

export default function DockButton({imgSrc, imgAlt}: {imgSrc: string, imgAlt: string}){
    return (
        <Image 
        src={imgSrc}
        width={60}
        height={60}
        alt={imgAlt}
        />
    )
}