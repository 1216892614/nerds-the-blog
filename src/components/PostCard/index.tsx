"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import { HTMLMotionProps, motion } from "motion/react";
import Link from "next/link";

const motionGetter = (delay: number): HTMLMotionProps<any> => ({
    initial: { opacity: 0, y: 10 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { delay, when: "afterChildren" },
    },
    exit: { opacity: 0, y: 10 },
});

const PostCard = () => {
    return (
        <motion.section
            {...motionGetter(0.2)}
            className={classNames(
                "drop-voxel-shadow mx-auto text-base-content",
                "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl mt-20",
                "flex flex-col gap-4 border-b-1 pb-8 my-2",
                "relative scroll-in-visible"
            )}
        >
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-md"
                />
            </figure>

            <motion.h3
                {...motionGetter(0.2)}
                className="w-full text-wrap text-4xl truncate line-clamp-2"
            >
                如何拍摄一双鞋子? 如何拍摄一双鞋子? 如何拍摄一双鞋子?
                如何拍摄一双鞋子? 如何拍摄一双鞋子? 如何拍摄一双鞋子?
                如何拍摄一双鞋子? 如何拍摄一双鞋子?
            </motion.h3>

            <motion.p
                {...motionGetter(0.3)}
                className="w-full text-wrap text-lg truncate line-clamp-5"
            >
                如何拍摄一双鞋子? 如何拍摄一双鞋子? 如何拍摄一双鞋子?
                如何拍摄一双鞋子? 如何拍摄一双鞋子? 如何拍摄一双鞋子?
                如何拍摄一双鞋子? 如何拍摄一双鞋子?
            </motion.p>

            <motion.div
                {...motionGetter(0.4)}
                className="flex items-end justify-between"
            >
                <p>2025-04-27</p>

                <Link
                    href="/"
                    className="btn btn-square btn-outline hover:btn-accent distortion-hover"
                >
                    <ArrowUpRight className="size-full" weight="fill" />
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default PostCard;
