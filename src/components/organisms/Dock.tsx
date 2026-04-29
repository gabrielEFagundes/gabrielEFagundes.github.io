import Image from "next/image";
import browser from '../../../public/dock-icons/browser.svg';
import spotify from '../../../public/dock-icons/spotify.svg';
import terminal from '../../../public/dock-icons/terminal.svg';
import visualcode from '../../../public/dock-icons/visualstudiocode.svg';
import DockButton from "../atoms/DockButton";

export default function Dock(){
    return (
        <div className="flex bg-[#ffffff10] rounded-xl fixed absolute bottom-5">
            <DockButton imgSrc={terminal} imgAlt="Terminal Icon (NeoFetch)" />
            <DockButton imgSrc={browser} imgAlt="Terminal Icon (NeoFetch)" />
            <DockButton imgSrc={spotify} imgAlt="Terminal Icon (NeoFetch)" />
            <DockButton imgSrc={visualcode} imgAlt="Terminal Icon (NeoFetch)" />
        </div>
    )
}