"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AboutImageProps {}

const AboutImage: FC<AboutImageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3 md:aspect-h-4 md:aspect-w-3  bg-gray-200 rounded-lg overflow-hidden">
      <Image
        src="/images/about.jpeg"
        alt="about image"
        fill
        className={cn(
          "object-cover",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 bulr-0 scale-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default AboutImage;
