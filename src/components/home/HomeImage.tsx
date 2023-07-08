"use client";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import HomeImageItem from "../../../public/images/home.png";
import HeroImage from '../../../public/images/hero.png'

const HomeImage = () => {
  return (
    <div className="h-full w-full xs:h-auto  ">
      <Image src={HeroImage} alt="home" height={500} />
    </div>
  );
};

export default HomeImage;
