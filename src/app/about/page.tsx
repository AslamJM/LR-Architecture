import React from "react";
import AboutImage from "@/components/about/AboutImage";
import SectionTitle from "@/components/projects/SectionTitle";

const AboutPage = () => {
  return (
    <div className="w-full  ">
      <SectionTitle>About</SectionTitle>
      <div className="flex flex-col-reverse md:flex-row xs:items-center items-center sm:space-x-4">
        <div className="w-full md:w-1/2 p-0 ">
          <div>
            <p className="my-2  md:text-base text-sm  text-dark dark:text-light  px-2 sm:px-0 leading-6  text-justify font-titsm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aut dolore eveniet, iusto voluptatibus vel reiciendis laudantium
              incidunt similique, necessitatibus quam voluptas tempore facilis
              eum. Fuga totam ipsam eligendi repudiandae tempore obcaecati nihil
              atque quaerat, fugit nobis laboriosam cupiditate voluptate
              repellendus iste, eum omnis. Cum.
            </p>
            <p className="mt-4  md:text-base text-sm  text-dark dark:text-light px-2 sm:px-0 leading-6  text-justify font-titsm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aut dolore eveniet, iusto voluptatibus vel reiciendis laudantium
              incidunt similique, necessitatibus quam voluptas tempore facilis
              eum. Fuga totam ipsam eligendi repudiandae tempore obcaecati nihil
              atque quaerat, fugit nobis laboriosam cupiditate voluptate
              repellendus iste, eum omnis. Cum.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-0 sm:p-4 px-2 sm:space-x-4">
          <AboutImage />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
