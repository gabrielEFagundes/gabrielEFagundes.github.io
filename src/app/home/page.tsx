import Dock from "@/components/organisms/Dock"
import Waybar from "@/components/organisms/Waybar"
import Browser from "@/components/organisms/windows/Browser"

export default function Page(){
    return (
        <>
            <Waybar />
            <main>
                <Browser />
                <div className="flex justify-center items-center">
                    <Dock />
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}