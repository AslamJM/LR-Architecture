"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImagesProps {
  src: string;
  alt: string;
}

const ProjectImages: FC<ProjectImagesProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="absolute aspect-w-16 aspect-h-9   bg-gray-200 rounded overflow-hidden ">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover  rounded",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 bulr-0 scale-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ProjectImages;
