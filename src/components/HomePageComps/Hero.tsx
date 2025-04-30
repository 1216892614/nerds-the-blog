"use client";

import useMainContainer from "@/hooks/useMainContainer";
import NerdsTheBlogLogo from "@/icons/NerdsTheBlogLogo";
import classNames from "classnames";
import { useScroll, motion, useTransform } from "motion/react";
import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react/GithubLogo";
import { Lightning } from "@phosphor-icons/react/Lightning";
import { useMemo } from "react";

const Hero = () => {
    const { mainContainerRef } = useMainContainer();
    const { scrollY } = useScroll({ container: mainContainerRef });

    const scrollRange = useMemo(
        () => [0, (mainContainerRef.current?.clientHeight ?? 1200) / 3],
        []
    );

    const lensFlareOpacity = useTransform(scrollY, scrollRange, [1, 0]);
    const opacity = useTransform(scrollY, scrollRange, [1, 0.5]);

    const lensFlareR = useTransform(scrollY, scrollRange, ["100vh", "0vh"]);

    return (
        <motion.section
            className={classNames(
                "w-screen h-screen neon-buzz font-[--font-geist-sans]",
                "relative flex flex-col items-center justify-center gap-4"
            )}
        >
            <motion.div style={{ opacity }}>
                <NerdsTheBlogLogo
                    className={classNames(
                        "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl",
                        "drop-voxel-shadow -translate-y-10"
                    )}
                />
            </motion.div>

            <motion.nav style={{ opacity }}>
                <ul
                    className={classNames(
                        "flex gap-4 -translate-y-10",
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
        </motion.section>
    );
};

export default Hero;
