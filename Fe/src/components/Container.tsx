import { cn } from "@/libs/utils";
import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
    withGrain?: boolean;
    url_img?: string;
    classOverlay?: string;
    overlay?: boolean;
    classNameUrlImg?: string
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({
    children,
    className,
    url_img,
    classOverlay,
    overlay = false,
    classNameUrlImg,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col overflow-x-clip overflow-y-scroll",
                className
            )}
            {...props}
        >
            {url_img && (
                <div className={cn(
                    "absolute inset-0 z-0 pointer-events-none select-none",
                    classNameUrlImg
                )}>
                    <img
                        src={`${url_img}`}
                        alt=""
                        className={cn(
                            "w-full object-cover h-full object-cover object-center",
                        )}
                    />
                </div>
            )}

            {overlay && (
                <div className={cn(
                    "absolute z-1 bg-gray-400/40 w-full h-full",
                    classOverlay
                )}></div>
            )}

            <div className="flex relative h-full z-10 max-w-[1680px] w-full mx-auto flex-col px-4">
                {children}
            </div>
        </div>
    );
}

