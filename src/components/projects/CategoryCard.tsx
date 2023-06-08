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
        <div className="absolute bg-secondary px-4 py-2 bottom-0  mx-auto translate-y-1/2 translate-x-1/2 w-1/2 rounded">
          <p className="text-center text-md mt-2 group-hover:underline  text-primary tracking-wide">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
