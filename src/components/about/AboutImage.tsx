"use client";

import { FC } from "react";
import Image from "next/image";

interface AboutImageProps {}

const AboutImage: FC<AboutImageProps> = ({}) => {
  return (
    <div className="w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[300px] lg:h-[500px] relative flex items-center justify-center">
      <Image
        src="/images/about.jpeg"
        alt="about image"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default AboutImage;
