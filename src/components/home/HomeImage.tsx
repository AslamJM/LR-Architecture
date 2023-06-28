"use client";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import HomeImageItem from "../../../public/images/home.png";

const HomeImage = () => {
  return (
    <div className="h-full w-full aspect-w-1 aspect-h-2 xs:aspect-w-1 xs:aspect-h-1 ">
      <Image src={HomeImageItem} alt="home" fill className="object-cover" />
    </div>
  );
};

export default HomeImage;
