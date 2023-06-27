import { FC } from "react";
import { getSingleProject } from "@/lib/sanity";
import SectionTitle from "@/components/projects/SectionTitle";
import Carousel from "@/components/projects/Carousel";
import ProjectPageLinks from "@/components/projects/ProjectPageLinks";

interface pageProps {
  params: {
    project: string;
  };
}

// @ts-expect-error Server Component
const page: FC<pageProps> = async ({ params }) => {
  const projectData = await getSingleProject(params.project);
  return (
    <div className="min-h-screen">
      <SectionTitle>{projectData.name}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-7  gap-2 ">
        <div className="col-span-2 flex items-center justify-center">
          <p className="font-light text-sm md:text-md">
            {projectData.description}
          </p>
        </div>
        <div className="col-span-5 mt-5 md:mt-0">
          <Carousel images={projectData.images} alt={projectData.alts} />
        </div>
      </div>
      <ProjectPageLinks />
    </div>
  );
};

export default page;
