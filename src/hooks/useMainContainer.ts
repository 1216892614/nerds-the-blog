import { atom, useAtom } from "jotai";
import React, { useCallback, useEffect } from "react";

const mainA = atom<React.RefObject<HTMLElement | null>>({ current: null });

export default function useMainContainer() {
    const [mainContainerRef, setMainContainerRef] = useAtom(mainA);

    const sync = useCallback(() => {
        if (mainContainerRef.current) return;

        const main = globalThis.document.body;

        setMainContainerRef({ current: main });
    }, []);

    useEffect(() => {
        sync();
    }, []);

    return { mainContainerRef };
}
