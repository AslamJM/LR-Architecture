import Link from "next/link";
import { FC } from "react";
import ImageComponent from "../ui/ImageComponent";

interface ProjectCardProps {
  project: ProjectCard;
  category: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, category }) => {
  const { name, _id, slug, image } = project;
  return (
    <Link href={`/projects/${category}/${slug}`}>
      <div className="group relative">
        <ImageComponent src={image} alt={name} />
        <div className="absolute bg-secondary px-4 py-2 bottom-0  mx-auto translate-y-1/2 translate-x-1/4 w-2/3 rounded flex items-center justify-center">
          <p className="text-center text-sm mt-2 group-hover:underline  text-primary tracking-widest font-light">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
