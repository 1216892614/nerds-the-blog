"use client";

import useMainContainer from "@/hooks/useMainContainer";
import NerdsTheBlogLogo from "@/icons/NerdsTheBlogLogo";
import classNames from "classnames";
import { useScroll, motion, useTransform } from "motion/react";
import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react/GithubLogo";
import { Lightning } from "@phosphor-icons/react/Lightning";
import { useMemo } from "react";
import NerdsMiniLogo from "@/icons/NerdsMiniLogo";

const Hero = () => {
    const { mainContainerRef } = useMainContainer();
    const { scrollY } = useScroll({ container: mainContainerRef });

    const scrollRange = useMemo(
        () => [0, (mainContainerRef.current?.clientHeight ?? 1200) / 3],
        []
    );

    const lensFlareOpacity = useTransform(scrollY, scrollRange, [1, 0]);
    const opacity = useTransform(scrollY, scrollRange, [1, 0.5]);

    const lensFlareR = useTransform(scrollY, scrollRange, ["150vh", "0vh"]);

    return (
        <>
            <header
                className={classNames(
                    "sticky w-full h-40 sm:h-50 top-0 z-50",
                    "flex items-end justify-center",
                    "drop-voxel-shadow -mt-36 -mb-10"
                )}
            >
                <div
                    className={classNames(
                        "w-[90vw] py-4 flex justify-between",
                        "pl-5 sm:pl-10 pr-5 sm:pr-20 lg:pr-30 xl:pr-40"
                    )}
                >
                    <Link
                        href="/"
                        className="btn sm:btn-xl btn-ghost distortion-hover"
                    >
                        <NerdsMiniLogo className="h-6" /> THE BLOG
                    </Link>

                    <nav className="flex items-center">
                        <ul className="flex items-center gap-1 md:gap-4">
                            <li>
                                <Link
                                    href="/"
                                    className={classNames(
                                        "btn p-0 px-1 lg:px-2 btn-sm sm:btn-lg md:btn-xl btn-ghost uppercase distortion-hover"
                                    )}
                                >
                                    part 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className={classNames(
                                        "btn p-0 px-1 lg:px-2 btn-sm sm:btn-lg md:btn-xl btn-ghost uppercase distortion-hover"
                                    )}
                                >
                                    part 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className={classNames(
                                        "btn p-0 px-1 lg:px-2 btn-sm sm:btn-lg md:btn-xl btn-ghost uppercase distortion-hover"
                                    )}
                                >
                                    part 3
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section
                className={classNames(
                    "w-full h-screen neon-buzz font-[--font-geist-sans] z-10",
                    "relative flex flex-col items-center justify-center gap-4"
                )}
            >
                <motion.div
                    style={{ opacity }}
                    className="w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl"
                >
                    <NerdsTheBlogLogo
                        className={classNames("drop-voxel-shadow")}
                    />
                </motion.div>

                <motion.nav style={{ opacity }}>
                    <ul
                        className={classNames(
                            "flex gap-4",
                            "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl"
                        )}
                    >
                        <li>
                            <Link
                                href="https://github.com/1216892614"
                                target="__blank"
                                className={classNames(
                                    "btn btn-sm md:btn-md lg:text-2xl font-bold",
                                    "btn-ghost text-base-content distortion-hover",
                                    "hover:text-accent-content hover:btn-accent"
                                )}
                            >
                                <GithubLogo weight="fill" />
                                Github
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="https://diceshock.com/"
                                target="__blank"
                                className={classNames(
                                    "btn btn-sm md:btn-md lg:text-2xl font-bold",
                                    "btn-ghost text-base-content distortion-hover",
                                    "hover:text-accent-content hover:btn-accent"
                                )}
                            >
                                <Lightning weight="fill" />
                                DiceShock
                            </Link>
                        </li>
                    </ul>
                </motion.nav>

                <motion.div
                    style={{
                        opacity: lensFlareOpacity,
                        width: lensFlareR,
                        height: lensFlareR,
                    }}
                    className={classNames(
                        "fixed lens-flare pointer-events-none",
                        "flex items-center justify-center",
                        "absolute left-[10vw] top-[10vh] -translate-1/2"
                    )}
                >
                    <div
                        className={classNames(
                            "w-2/3 h-1/3 lens-flare",
                            "flex items-center justify-center"
                        )}
                    >
                        <motion.div
                            style={{ opacity: lensFlareOpacity }}
                            className="w-1/2 h-1/2 lens-overexposed"
                        ></motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;
