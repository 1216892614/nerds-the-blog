"use client";

import FillTrans from "@/components/FillTrans";
import BladeRunner from "@/components/HomePageComps/BladeRunner";
import Hero from "@/components/HomePageComps/Hero";
import { ArrowSquareUpRight, File } from "@phosphor-icons/react";
import { ArrowUpRight, X } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <>
            <FillTrans
                itemHeight={96}
                itemWidth={96}
                item={({ x, y, xLen, yLen }) =>
                    y === Math.round(yLen / 2) && x === Math.round(xLen / 2) ? (
                        <div className="size-24 bg-base-200 flex justify-center items-center">
                            <X
                                className="size-6 text-amber-200"
                                weight="fill"
                            />
                        </div>
                    ) : (
                        <div className="size-24 bg-base-200 flex justify-center items-center">
                            <X className="size-6 text-amber-200" />
                        </div>
                    )
                }
                startFrom={<Hero />}
                endTo={
                    <div
                        className={classNames(
                            "flex flex-col items-center justify-center",
                            "-translate-y-20 w-screen h-screen gap-2"
                        )}
                    >
                        <p
                            className={classNames(
                                "text-info",
                                "text-md md:text-lg lg:text-xl xl:text-2xl"
                            )}
                        >
                            PART 1
                        </p>
                        <h3
                            className={classNames(
                                "text-warning",
                                "text-lg md:text-xl lg:text-2xl xl:text-3xl md:font-bold"
                            )}
                        >
                            袭春寒因它在晚冬突然出现而得名
                        </h3>
                    </div>
                }
            />

            <BladeRunner
                className={{
                    container: classNames(
                        "mx-auto drop-voxel-shadow text-amber-200",
                        "text-lg md:text-xl lg:text-2xl xl:text-3xl",
                        "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl mb-[50vh]",
                        "text-center"
                    ),
                }}
                contents={[
                    ["这里存放的是", "我之前写或者"],
                    ["正在写的一些", "随笔."],
                ]}
            />

            <BladeRunner
                className={{
                    container: classNames(
                        "mx-auto drop-voxel-shadow text-amber-200",
                        "text-lg md:text-xl lg:text-2xl xl:text-3xl",
                        "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl mb-20"
                    ),
                }}
                contents={[
                    ["雪落成的夜里, ", "冷的没有一点声音."],
                    [<br />],
                    [
                        "袭春寒因它在晚冬突然出现而得名, ",
                        "漠北狂暴的冰元素们游荡了几乎一整个冬天, ",
                        "终于在兀山山脉的迷踪里走通了前往锡萨克盆地的路, ",
                        "带着几乎力竭的寒流浸没了大小淮岭里的无数生灵.",
                    ],
                    [<br />],
                    [
                        "就像过去一样, ",
                        "锡萨克人在这个冬天经历了太多的磨难, ",
                        "但只有挺过了开春前最后的夜, ",
                        "才能迎来那真正的黎明...",
                    ],
                    [<br />],
                    ["---", " 春日远征, 2025.4.30", ,],
                    [<br />],
                    [
                        <Link href="/" className="w-full btn distortion-hover">
                            <ArrowUpRight className="size-10" />
                        </Link>,
                    ],
                ]}
            />

            <BladeRunner
                className={{
                    container: classNames(
                        "mx-auto drop-voxel-shadow text-amber-200",
                        "text-lg md:text-xl lg:text-2xl xl:text-3xl",
                        "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl mb-20"
                    ),
                }}
                contents={[
                    ["2016年 ", "投稿于科幻者之家."],
                    [<br />],
                    ["当我和你谈起Tenuma时，", "那是洛杉矶的1991年12月24日。"],
                    [<br />],
                    ["“该死的，这玩意怎么用？", "或者说他到底能不能用？”"],
                    [<br />],
                    [
                        "在那边暴躁踢着加油机的海博最终还是让油枪流出了粘稠的柴油。",
                        "HUMMER H1在喝到这堆不明液体后愤怒发出痛苦的嘶吼。",
                    ],
                    [<br />],
                    ["“哈，这也是人类的一大步。”"],
                    [<br />],
                    [
                        "“我去商店里看了看，拿了这些。”",
                        "我把东西放到车上，打开钱包，",
                        "数了数为数不多的零钱，",
                        "顺便看了一眼萨拉的照片...",
                    ],
                    [<br />],
                    ["---", <> 与暴风雪同行, 2025.4.30</>, ,],
                    [<br />],
                    [
                        <Link href="/" className="w-full btn distortion-hover">
                            <ArrowUpRight className="size-10" />
                        </Link>,
                    ],
                ]}
            />

            <FillTrans
                itemHeight={96}
                itemWidth={96}
                item={({ x, y }) =>
                    x % 2 === 0 && y % 2 === 0 ? (
                        <div className="size-24 bg-base-200 flex justify-center items-center">
                            <File
                                className="size-6 text-amber-200"
                                weight="fill"
                            />
                        </div>
                    ) : (
                        <div className="size-24 bg-base-200 flex justify-center items-center">
                            <File className="size-6 text-amber-200" />
                        </div>
                    )
                }
                startFrom={
                    <Link
                        href="/"
                        className={classNames(
                            "btn btn-xl btn-primary distortion-hover",
                            "-translate-y-20"
                        )}
                    >
                        查看更多
                        <ArrowSquareUpRight weight="fill" className="size-10" />
                    </Link>
                }
                endTo={
                    <div
                        className={classNames(
                            "flex flex-col items-center justify-center",
                            "-translate-y-20 w-screen h-screen gap-2",
                            "bg-teal-800 text-amber-300"
                        )}
                    >
                        <p
                            className={classNames(
                                "text-md md:text-lg lg:text-xl xl:text-2xl"
                            )}
                        >
                            PART 2
                        </p>
                        <h3
                            className={classNames(
                                "text-lg md:text-xl lg:text-2xl xl:text-3xl md:font-bold"
                            )}
                        >
                            他们随意塑造我们的记忆, 目的是寻找人性
                        </h3>
                    </div>
                }
            />

            <div className="w-full h-screen bg-teal-800 -mt-40" />
        </>
    );
}
