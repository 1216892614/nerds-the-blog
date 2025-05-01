import classNames from "classnames";
import HeroImg from "./HeroImg";
import LatestTitle from "@/icons/LatestTitle";

export default function SecondScreen() {
    return (
        <>
            <div className="w-full h-screen relative">
                <div
                    className={classNames(
                        "size-80 rounded-full bg-orange-400 distortion",
                        "absolute left-1/2 -top-5 -translate-x-1/2",
                        "drop-voxel-shadow"
                    )}
                />

                <HeroImg />

                <LatestTitle
                    aria-label="latest posts"
                    className={classNames(
                        "absolute left-1/2 top-[16rem]",
                        "w-1/2 -translate-1/2 rotate-2",
                        "text-warning drop-voxel-shadow"
                    )}
                />

                <div
                    className={classNames(
                        "absolute right-0 top-2/3 -rotate-12 bg-accent",
                        "w-full h-screen"
                    )}
                />

                <div className="absolute right-0 top-[34rem] -rotate-12">
                    <div
                        className={classNames(
                            "w-[200vw] h-8 shadow-2xl bg-info"
                        )}
                    />

                    <div
                        className={classNames(
                            "w-[200vw] h-8 shadow-2xl bg-success"
                        )}
                    />

                    <div
                        className={classNames(
                            "w-[200vw] h-8 shadow-2xl bg-warning"
                        )}
                    />

                    <div
                        className={classNames(
                            "w-[200vw] h-8 shadow-2xl bg-error"
                        )}
                    />
                </div>
            </div>
        </>
    );
}
