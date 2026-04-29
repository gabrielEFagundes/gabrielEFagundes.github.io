import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GundesKernel",
    description: "Welcome to Gundes Kernel!",
};

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode}>){
    return (
        <body className="min-h-full flex flex-col">{children}</body>
    );
}