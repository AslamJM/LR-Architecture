import React from "react";
import SectionTitle from "@/components/projects/SectionTitle";
import CategoryCard from "@/components/projects/CategoryCard";

import { getCategories } from "@/lib/sanity";

const ProjectsPage = async () => {
  const categories = await getCategories();

  return (
    <div>
      <SectionTitle>Project Categories</SectionTitle>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-6">
        {categories.map((category) => (
          <CategoryCard
            name={category.name}
            image={category.image}
            slug={category.slug}
            key={category._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
