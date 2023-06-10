import { FC } from "react";
import { getSingleProject } from "@/lib/sanity";
import SectionTitle from "@/components/projects/SectionTitle";
import ProjectImages from "@/components/projects/ProjectImages";
ProjectImages;

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
      <ProjectImages src={projectData.images} alt={projectData.alts} />
    </div>
  );
};

export default page;
