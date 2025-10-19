import Image from "next/image";
import clsx from "clsx";

export function ImageComponent({ src, width, height, className }) {
    return (
        <Image
            src={src}
            alt="imagen lateral"
            width={width}
            height={height}
            className="rounded-lg object-cover h-full w-full"
        />

    );
}