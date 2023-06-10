import { FC } from "react";
import Image from "next/image";

interface ProjectImagesProps {
  src: string[];
  alt: string[];
}

const ProjectImages: FC<ProjectImagesProps> = ({ src, alt }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
      {src.map((src, index) => (
        <div key={src} className="aspect-w-3 aspect-h-2">
          <Image src={src} fill alt={alt[index]} className="rounded" />
        </div>
      ))}
    </div>
  );
};

export default ProjectImages;
