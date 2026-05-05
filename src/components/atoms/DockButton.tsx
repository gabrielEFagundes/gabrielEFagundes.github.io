"use client"
import Image from "next/image";
import Link from "next/link";

export default function DockButton({id, activeId, onClick, imgSrc, imgAlt}: {id: string, activeId: string, onClick: any, imgSrc: string, imgAlt: string}){
    return (
        <button onClick={() => onClick(id)} className="hover:cursor-pointer">
            <Image 
            src={imgSrc}
            width={60}
            height={60}
            alt={imgAlt}
            />
        </button>
    )
}