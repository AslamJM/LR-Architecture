import React from "react";
import { LargeHeading } from "@/components/home/Headings";
import AboutImage from "@/components/about/AboutImage";

const AboutPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row xs:items-center relative ">
      <LargeHeading className=" absolute top-8 sm:top-2 md:top-6 text-center sm:text-left w-full">
        About.
      </LargeHeading>

      <div className="w-full md:w-1/2 flex md:items-center justify-center h-1/2 md:h-full">
        <div>
          <p className="my-2 md:text-base text-md lg:text-lg text-slate-700 dark:text-slate-200 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut
            dolore eveniet, iusto voluptatibus vel reiciendis laudantium
            incidunt similique, necessitatibus quam voluptas tempore facilis
            eum. Fuga totam ipsam eligendi repudiandae tempore obcaecati nihil
            atque quaerat, fugit nobis laboriosam cupiditate voluptate
            repellendus iste, eum omnis. Cum.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-auto md:h-full ">
        <div>
          <AboutImage />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
