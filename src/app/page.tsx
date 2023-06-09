import { LargeHeading } from "@/components/home/Headings";
import SocialIcons from "@/components/home/SocialIcons";
import HomeImage from "@/components/home/HomeImage";

export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)] md:flex items-center relative ">
      <div className="h-full  flex items-center justify-center sm:h-full w-full md:w-1/2 absolute top-0 md:static z-10">
        <div>
          <LargeHeading>Building Your</LargeHeading>
          <LargeHeading>Dream Projects</LargeHeading>
          <p className=" my-4  text-lg tracking-wide">
            Transforming spaces with innovative design. Explore{" "}
            <span className="text-primary font-semibold inline-block">
              LR Chartered Architects
            </span>{" "}
            for inspired architectural solutions that blend functionality and
            aesthetics seamlessly.
          </p>
          <SocialIcons />
        </div>
      </div>
      <div className="w-full my-6 sm:my-0 md:w-1/2  flex items-center justify-center absolute top-0  opacity-30 dark:opacity-10 md:opacity-100 md:dark:opacity-100 md:static">
        <HomeImage />
      </div>
    </div>
  );
}
