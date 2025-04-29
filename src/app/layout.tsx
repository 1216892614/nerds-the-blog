import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nerds The Blog",
    description: "Programming, TTRPG, Sci-Fi and More!",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
