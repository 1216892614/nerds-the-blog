"use client";

import React, { useRef, useCallback } from "react";
import useMainContainer from "@/hooks/useMainContainer";
import {
    useScroll,
    motion,
    transformValue,
    MotionValue,
    transform,
    useInView,
} from "motion/react";
import classNames from "classnames";

export default function BladeRunner({
    contents,
    className,
    cfg: { offset = 100, inlineDelay = 10, inlineRange = 200 } = {},
    ...props
}: Omit<React.ComponentProps<"div">, "className"> & {
    contents: React.ReactNode[][];
    cfg?: { offset?: number; inlineDelay?: number; inlineRange?: number };
    className?: {
        container?: string;
        outer?: string;
        inner?: string;
    };
}) {
    const { mainContainerRef } = useMainContainer();
    const { scrollY } = useScroll({ container: mainContainerRef });

    const containerRef = useRef<HTMLDivElement>(null);

    const inView = useInView(containerRef, { margin: "10px" });

    const itemRefs = useRef(new Map<`${number}-${number}`, HTMLElement>());

    const getOpacity = useCallback(
        (idx1: number, idx2: number): MotionValue<number> | undefined => {
            const el = itemRefs.current.get(`${idx1}-${idx2}`);
            const main = mainContainerRef.current;

            if (!el || !main || !inView) return;

            const { top: elTop } = el.getBoundingClientRect();
            const { top: mainTop } = main.getBoundingClientRect();

            const bottom =
                elTop - mainTop - main.clientHeight + main.scrollTop + offset;

            return transformValue(() =>
                transform(
                    scrollY.get(),
                    [
                        bottom + idx2 * inlineDelay,
                        bottom + inlineRange + idx2 * inlineDelay,
                    ],
                    [0, 1]
                )
            );
        },
        [inView, mainContainerRef, scrollY, offset, inlineDelay, inlineRange]
    );

    return (
        <div className={className?.container} ref={containerRef} {...props}>
            {contents.map((l1, idx1) => (
                <div key={idx1} className={className?.outer}>
                    {l1.map((l2, idx2) => (
                        <motion.div
                            className={classNames("inline", className?.inner)}
                            style={{ opacity: getOpacity(idx1, idx2) }}
                            ref={(el) => {
                                if (el)
                                    itemRefs.current.set(`${idx1}-${idx2}`, el);
                            }}
                            key={`${idx1}-${idx2}`}
                        >
                            {l2}
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
}
