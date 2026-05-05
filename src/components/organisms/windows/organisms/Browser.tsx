import Image from "next/image";
import SearchBar from "../molecules/SearchBar";
import archSynth from '../../../../../public/synthwave.jpg'
import ProjectCard from "../molecules/ProjectCard";

export default function Browser(){
    return (
        <section className="flex flex-col bg-neutral-800 px-2 mx-[5rem] py-1 my-4 border border-neutral-900 rounded-xl">
            <div className="flex justify-start">
                <div className="bg-neutral-700 rounded-t-xl px-10 mt-1">
                    <p>About me</p>
                </div>
            </div>
            <div className="bg-neutral-700 gap-4 rounded-tr-xl p-2">
                <SearchBar />
            </div>

            <div className="bg-[#121212] p-2 rounded-b-xl">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl font-bold italic text-purple-500">Hello there!</h1>
                    <p className="text-sm mt-2">I'm Gabriel, a <span className="text-purple-500">maddened</span> programmer that loves how these little complex machines work.</p>
                    <div className="flex justify-evenly items-center mt-[5rem]">
                        <div className="w-30/100">
                            <Image src={archSynth} alt="Arch Linux Synthwave Desktop" className="rounded-full mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%" />
                        </div>
                        <div className="flex flex-col items-start rounded-xl">
                            <strong className="text-purple-500">My interests:</strong>
                            <ul className="list-disc">
                                <li>Compilers</li>
                                <li>Interpreters</li>
                                <li>Game Modding</li>
                                <li>Ray Tracing Mathematics</li>
                                <li>Computer Science in General</li>
                                <li>Learning new stuff</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-purple-500 text-center font-bold italic text-xl mt-4">My Projects</h2>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                            <ProjectCard title="Feelytics" 
                                        desc="A dashboards platform designed to group data in one place." 
                                        language="Vue"
                                        color="#41b883"
                                        link="https://github.com/gabrielEFagundes/Feelytics" />
                            <ProjectCard title="commita" 
                                        desc="A git wrapper/framework that keeps git's terminal nature." 
                                        language="Go" 
                                        color="#00ADD8"
                                        link="https://github.com/gabrielEFagundes/commita" />
                            <ProjectCard title="silk" 
                                        desc="A Stupid Interpreted Language Knot." 
                                        language="Typescript" 
                                        color="#3178c6"
                                        link="https://github.com/gabrielEFagundes/silk" />
                        </div>
                    </div>
                    <p className="text-sm mt-10">I have to enhance this design lmao</p>
                </div>
            </div>
        </section>
    )
}