"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProjectPageLinksProps {}

const ProjectPageLinks: FC<ProjectPageLinksProps> = ({}) => {
  const path = usePathname();
  return (
    <div className="flex mt-5 items-center justify-between">
      <Link
        href="/projects"
        className="underline underline-offset-4 hover:text-primary"
      >
        All Categories
      </Link>
      <Link
        href={path.split("/").slice(0, -1).join("/")}
        className="underline underline-offset-4 hover:text-primary"
      >
        All Projects
      </Link>
    </div>
  );
};

export default ProjectPageLinks;
