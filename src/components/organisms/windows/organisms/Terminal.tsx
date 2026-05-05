"use client"
import ArchLogo from "@/components/atoms/ArchLogoAscii";

export default function Terminal(){
    const height = screen.height;
    const width = screen.width;

    const drag = (e: React.DragEvent) => {
        e.dataTransfer.setData('text/plain', 'item-id');
    }
    return (
        <section className="max-w-[820px] h-[500px] bg-neutral-800 px-2 mx-[5rem] py-1 my-4 border border-neutral-900 rounded-xl" draggable onDragStart={drag}>
            <div className="max-w-[800px] h-[490px] bg-[#121212] p-2 rounded-xl">
                <p className="font-semibold">user@eheart: <span className="font-normal text-neutral-400">fastfetch</span></p>
                <div className="flex">
                    <ArchLogo />
                    <div className="text-sm">
                        <p>user@eheart</p>
                        <p>-----------</p>
                        <p><span className="text-[#1793d1]">OS</span>: Eheart x86_64</p>
                        <p><span className="text-[#1793d1]">Host</span>: NodeJS 20.12.0</p>
                        <p><span className="text-[#1793d1]">Kernel</span>: 1.0.0-arch1-1</p>
                        <p><span className="text-[#1793d1]">Packages</span>: 105 (visit my github!)</p>
                        <p><span className="text-[#1793d1]">Shell</span>: bash 5.1.8</p>
                        <p><span className="text-[#1793d1]">Resolution</span>: {width}x{height}</p>
                        <p><span className="text-[#1793d1]">Terminal</span>: /dev/tty1</p>
                        <p><span className="text-[#1793d1]">CPU</span>: Intel I5 14600k 5.3GHz</p>
                        <p><span className="text-[#1793d1]">GPU</span>: Nvidia RTX4060Ti</p>
                        <p><span className="text-[#1793d1]">Memory</span>: 1.4GiB / 31.7GiB</p>
                    </div>
                </div>
                <p>user@eheart: █</p>
            </div>
        </section>
    )
}