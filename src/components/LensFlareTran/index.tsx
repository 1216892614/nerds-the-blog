const LensFlareTran = () => (
    <div
        className={classNames(
            "w-full h-full lens-flare",
            "flex items-center justify-center",
            "absolute left-[10vw] bottom-0 -translate-x-1/2 translate-y-1/2"
        )}
    >
        <div
            className={classNames(
                "w-2/3 h-1/3 lens-flare",
                "flex items-center justify-center"
            )}
        >
            <div className="w-1/2 h-1/2 lens-overexposed"></div>
        </div>
    </div>
);
