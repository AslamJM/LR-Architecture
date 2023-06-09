"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: FC<ImageComponentProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-w-3 aspect-h-2   bg-gray-200 rounded overflow-hidden relative">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover hover:scale-110 transition-transform duration-300  cursor-pointer rounded",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 bulr-0 scale-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageComponent;
