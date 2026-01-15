import Image from "next/image";
import { ImagesProps } from "./Images.type";

export default function Images({ src, alt, width, height, className }: ImagesProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
}