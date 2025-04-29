import classNames from "classnames";
import { Geist, Geist_Mono, Fira_Code, IBM_Plex_Mono } from "next/font/google";
import NoiseFilterTar from "@/components/NoiseFilterTar";

const IbmPlexMono = IBM_Plex_Mono({
    variable: "--IBM-Plex-Mono",
    style: ["normal"],
    weight: ["200", "400", "700"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    style: ["normal"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default async function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-cn">
            <body
                className={classNames(
                    geistSans.variable,
                    geistMono.variable,
                    firaCode.variable,
                    IbmPlexMono.variable,
                    "antialiased crt-container",
                    "text-base-content pt-20"
                )}
            >
                {children}

                <NoiseFilterTar />
            </body>
        </html>
    );
}
