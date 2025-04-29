import FillTrans from "@/components/FillTrans";
import BladeRunner from "@/components/HomePageComps/BladeRunner";
import Hero from "@/components/HomePageComps/Hero";
import { X } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import React from "react";

export default function Home() {
    return (
        <>
            <Hero />

            <FillTrans
                className={{ scrollContainer: "-mt-52" }}
                itemHeight={96}
                itemWidth={96}
                item={
                    <div className="size-24 bg-base-200 flex justify-center items-center">
                        <X className="size-6 text-amber-200" />
                    </div>
                }
                startFrom={
                    <BladeRunner
                        cfg={{
                            inlineRange: 100,
                            inlineDelay: 0,
                            offset: -100,
                        }}
                        className={{
                            container: classNames(
                                "mx-auto drop-voxel-shadow text-amber-200",
                                "text-lg md:text-xl lg:text-2xl xl:text-3xl",
                                "w-1/2 sm:w-sm md:w-md lg:w-lg xl:w-xl",
                                "-translate-y-24"
                            ),
                        }}
                        contents={[
                            ["雨季..."],
                            ["异常潮湿的", "时节..."],
                            [<br />],
                            [
                                "正是在那阴雨绵绵的日子里，",
                                "供奉夜之女神拉特莉的神庙中传出了祈祷。",
                            ],
                            [
                                "祈祷并非来自指尖拨动的绳结或不断旋转的经筒，",
                                "而是源于神庙中一台巨大的祈祷机。",
                            ],
                            [<br />],
                            [
                                "高频的祈祷信号直指苍穹，",
                                "穿过大气层，",
                                "进入了被称作“诸神之桥”的金色祥云。",
                            ],
                            [
                                "祥云环绕着整个世界，夜间宛若青铜的虹彩，",
                                "每到正午时分，火红的太阳会在这里化作一团橙色。",
                            ],
                            [<br />],
                            ["---《光明王》(美)罗杰·泽拉兹尼"],
                        ]}
                    />
                }
                endTo={
                    <div
                        className={classNames(
                            "flex flex-col gap-2 items-center",
                            "-translate-y-20"
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
                            1138, 4EB位于7809层
                        </h3>
                    </div>
                }
            />
        </>
    );
}
