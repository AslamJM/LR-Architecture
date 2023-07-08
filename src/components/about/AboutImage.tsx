"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";

import AboutImageItem from '../../../public/images/aboutimag.jpg'
import AboutDark from '../../../public/images/about-dark.png'

interface AboutImageProps {}

const AboutImage: FC<AboutImageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const {theme} = useTheme()

  return (
    <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3 md:aspect-h-4 md:aspect-w-3  bg-transparent rounded-lg overflow-hidden">
      <Image
        src={AboutImageItem}
        alt="about image"
        fill
        className={cn(
          "object-cover",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 bulr-0 scale-100",
            theme==="dark"?"hidden":"block"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <Image
        src={AboutDark}
        alt="about image"
        fill
        className={cn(
          "object-cover",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 bulr-0 scale-100",theme==="dark"?"block":"hidden"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
    
    
  );
};

export default AboutImage;
