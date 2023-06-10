import { FC } from "react";
import SectionTitle from "@/components/projects/SectionTitle";
import { getCategoryProjects, getCategoryName } from "@/lib/sanity";
import ProjectCard from "@/components/projects/ProjectCard";

interface pageProps {
  params: {
    category: string;
  };
}

// @ts-expect-error Server Component
const page: FC<pageProps> = async ({ params }) => {
  const name = await getCategoryName(params.category);
  const projects = await getCategoryProjects(params.category);

  return (
    <div>
      <SectionTitle>{name.name}</SectionTitle>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-10">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            category={params.category}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
