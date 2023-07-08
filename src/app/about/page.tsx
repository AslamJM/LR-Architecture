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
              LUTHFUR RAHAMAN CHARTERED ARCHITECT is a dynamic architectural
              practice founded in 2018. With a focus on professional growth and
              environmentally sustainable designs, the firm comprises a talented
              team of young Sri Lankan architects with overseas experience. They
              offer exceptional architectural designs and consultancy services,
              backed by a strategic alliance with the Centre for Architectural
              and Interior Design Research.
            </p>
            <p className="mt-4  md:text-base text-sm  text-dark dark:text-light px-2 sm:px-0 leading-6  text-justify font-titsm">
              We are dedicated to environmentally sustainable design and optimizing
              architectural and interior creativity. The practice emphasizes key
              issues such as eco-friendly architecture, efficient energy and
              material use, and maximizing human comfort through passive design.
              By incorporating leading-edge research, design principles,
              technology, and effective management, the firm strives for
              architectural excellence.
            </p>
            <p className="mt-4  md:text-base text-sm  text-dark dark:text-light px-2 sm:px-0 leading-6  text-justify font-titsm">
              We are a multi-disciplinary architectural firm offering
              comprehensive consultancy services. With a focus on integrated
              design and research practices, we collaborate with external
              specialists to achieve excellence in the built environment. From
              initial design to project completion, our expertise covers all
              aspects of the project.
            </p>
            <p className="mt-4  md:text-base text-sm  text-dark dark:text-light px-2 sm:px-0 leading-6  text-justify font-titsm">
              We are a dynamic architectural practice with a dedicated team of
              directors and specialist consultants. From design to completion,
              we offer comprehensive services, ensuring efficient project
              management and optimal results.
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
