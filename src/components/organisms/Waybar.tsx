import Image from "next/image";

export default function Waybar(){ // a header but I prefer the waybar slug
    return (
        <header className="flex justify-between items-center px-[5rem] mx-[5rem] py-2 border-b-1 border-b-neutral-800 text-sm">
            <nav className="flex gap-4">
                <a href="#hero" className="home-number">Home</a>
                <a href="#" className="about-number">About</a>
                <a href="#" className="projects-number">Projects</a>
            </nav>
            <div>
                <p>▂▃▆▁▃▅▁</p>
            </div>
            <p>Gundes_Kernel</p>
        </header>
    )
}