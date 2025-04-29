"use client";

import useMainContainer from "@/hooks/useMainContainer";
import classNames from "classnames";
import { range } from "lodash";
import {
    transformValue,
    useScroll,
    motion,
    useTransform,
    useMotionValue,
    transform,
} from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

export type FillTransProps = {
    item: (args: {
        x: number;
        y: number;
        xLen: number;
        yLen: number;
    }) => React.ReactNode;
    endTo: React.ReactNode;
    startFrom: React.ReactNode;
    itemWidth: number;
    itemHeight: number;
    className?: {
        scrollContainer?: string;
        gridContainer?: string;
        start?: string;
        item?: string;
        end?: string;
    };
};

const vhHeight = 4;

export default function FillTrans({
    item,
    endTo,
    startFrom,
    itemWidth,
    itemHeight,
    className = {},
}: FillTransProps) {
    const { mainContainerRef } = useMainContainer();
    const { scrollY } = useScroll({ container: mainContainerRef });

    const topRef = useRef<HTMLDivElement>(null);

    const [scrollRange, setScrollRange] = useState([0, 9999]);

    const progress = useMotionValue(0);

    useEffect(() => {
        return scrollY.on("change", (v) =>
            progress.jump(transform(v, scrollRange, [0, 1]))
        );
    }, [scrollY, scrollRange]);

    const [{ rowRepeat: yLen, colRepeat: xLen }, setRepeat] = useState({
        rowRepeat: 30,
        colRepeat: 30,
    });

    const sync = useCallback(() => {
        const topEl = topRef.current;
        const main = mainContainerRef.current;

        if (!topEl || !main || typeof window === "undefined") return;

        const { top: elTop } = topEl.getBoundingClientRect();
        const { top: mainTop } = main.getBoundingClientRect();

        const top = elTop - mainTop - main.clientHeight + main.scrollTop;

        setScrollRange([
            top + main.clientHeight,
            top + window.innerHeight * vhHeight - main.clientHeight / 2,
        ]);

        setRepeat({
            rowRepeat: Math.round(window.innerHeight / itemHeight) + 1,
            colRepeat: Math.round((window.innerWidth / itemWidth) * 1.2) + 1,
        });
    }, [mainContainerRef]);

    useEffect(() => {
        const main = window?.document.documentElement;

        if (!main) return;

        const ob = new ResizeObserver(sync);

        setTimeout(sync, 500);

        ob.observe(main);

        return () => {
            ob.disconnect();
        };
    }, [sync]);

    return (
        <>
            <div
                className={classNames(
                    "w-full relative",
                    className.scrollContainer
                )}
                style={{ height: `${vhHeight}00vh` }}
            >
                <div ref={topRef} />

                <div
                    className={classNames(
                        "grid sticky top-0 w-full min-h-screen",
                        "justify-center content-center pointer-events-none",
                        className.gridContainer
                    )}
                    style={{
                        gridTemplateRows: `repeat(${yLen}, 1fr)`,
                        gridTemplateColumns: `repeat(${xLen}, 1fr)`,
                    }}
                >
                    {range(0, yLen).map((y) =>
                        range(0, xLen).map((x) => (
                            <motion.div
                                className={classNames("z-10", className.item)}
                                style={{
                                    opacity: transformValue(() => {
                                        const p = progress.get();

                                        const len = yLen * xLen;
                                        const idx = y * xLen + x;

                                        if (p < (len - idx) / len / 2) return 0;

                                        if (p > (1 - idx / len) / 2 + 0.5)
                                            return 0;

                                        return 1;
                                    }),
                                }}
                                key={`${x}-${y}`}
                            >
                                {item({
                                    xLen,
                                    yLen,
                                    x,
                                    y,
                                })}
                            </motion.div>
                        ))
                    )}

                    <motion.div
                        style={{
                            opacity: transformValue(() =>
                                progress.get() < 0.5 ? 0 : 1
                            ),
                            pointerEvents: transformValue(() =>
                                progress.get() < 0.5 ? "none" : "auto"
                            ),
                        }}
                        className={classNames(
                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                            className.start
                        )}
                    >
                        {endTo}
                    </motion.div>

                    <motion.div
                        style={{
                            opacity: transformValue(() =>
                                progress.get() >= 0.5 ? 0 : 1
                            ),
                            pointerEvents: transformValue(() =>
                                progress.get() < 0.5 ? "auto" : "none"
                            ),
                        }}
                        className={classNames(
                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                            "pointer-events-auto",
                            className.end
                        )}
                    >
                        {startFrom}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
