import { Metadata } from "next";
import Image from "next/image";

import bgImage from '../../../public/wallpaper.png';

export const metadata: Metadata = {
    title: "GundesKernel",
    description: "Welcome to Gundes Kernel!",
};

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode}>){
    return (
        <body className="min-h-full flex flex-col">
            <Image src={bgImage} alt="Background Image" fill sizes="100vw" className="object-cover -z-10" priority />
            {children}
        </body>
    );
}