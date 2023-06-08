"use client";

import { FC } from "react";
import Image from "next/image";

interface AboutImageProps {}

const AboutImage: FC<AboutImageProps> = ({}) => {
  return (
    <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3 md:aspect-h-4 md:aspect-w-3  bg-gray-200 rounded-lg overflow-hidden">
      <Image
        src="/images/about.jpeg"
        alt="about image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default AboutImage;
