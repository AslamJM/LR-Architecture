import { FC } from "react";
import ImageComponent from "../ui/ImageComponent";
import Link from "next/link";

interface CategoryCardProps {
  slug: string;
  name: string;
  image: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ slug, name, image }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative">
        <ImageComponent src={image} alt={name} />
        <div className="absolute bg-secondary px-4 py-2 bottom-0  mx-auto translate-y-1/2 translate-x-1/4 w-2/3 rounded flex items-center justify-center">
          <p className="text-center text-sm mt-2 group-hover:underline  text-light tracking-widest font-titthin">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
