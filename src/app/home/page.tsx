"use client"
import DockButton from "@/components/atoms/DockButton"
import Waybar from "@/components/organisms/Waybar"

import browser from '../../../public/dock-icons/browser.svg';
import spotify from '../../../public/dock-icons/spotify.svg';
import terminal from '../../../public/dock-icons/terminal.svg';
import visualcode from '../../../public/dock-icons/visualstudiocode.svg';

import { useState } from "react"
import Window from "@/components/organisms/windows/Window";
import Browser from "@/components/organisms/windows/organisms/Browser";
import Terminal from "@/components/organisms/windows/organisms/Terminal";
import VisualStudio from "@/components/organisms/windows/organisms/VisualStudio";
import bgImage from '../../../public/wallpaper.png';
import Image from "next/image";

export default function Page(){
    const [activeWindow, setActiveWindow] = useState("");

    const handleToggle = (id: string) => {
        if(activeWindow === id){
            setActiveWindow("");
        }else{
            setActiveWindow(id);
        }
    }

    return (
        <>
            <Waybar />
            <main>
                <Window id="terminal" activeId={activeWindow}>
                    <Terminal />
                </Window>
                <Window id="browser" activeId={activeWindow}>
                    <Browser />
                </Window>
                <Window id="vscode" activeId={activeWindow}>
                    <VisualStudio />
                </Window>
                
                <div className="flex justify-center items-center">
                    <div className="flex bg-[#ffffff10] rounded-xl fixed absolute bottom-5">
                        <DockButton id="terminal" activeId={activeWindow} onClick={handleToggle} imgSrc={terminal} imgAlt="Terminal Icon (NeoFetch)" />
                        <DockButton id="browser" activeId={activeWindow} onClick={handleToggle} imgSrc={browser} imgAlt="Browser Icon (About Me)" />
                        <DockButton id="spotify" activeId={activeWindow} onClick={handleToggle} imgSrc={spotify} imgAlt="Spotify Icon (Musics or idk)" />
                        <DockButton id="vscode" activeId={activeWindow} onClick={handleToggle} imgSrc={visualcode} imgAlt="Visual Studio Icon (Code Snippets)" />
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}