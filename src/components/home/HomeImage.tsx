"use client";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const HomeImage = () => {
  return (
    <AspectRatio.Root ratio={1} className="flex items-center justify-center">
      <Image
        src="/images/home.png"
        alt="home"
        width={450}
        height={450}
        className="object-contain"
      />
    </AspectRatio.Root>
  );
};

export default HomeImage;
