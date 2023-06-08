import { FC } from "react";
import SectionTitle from "@/components/projects/SectionTitle";

interface pageProps {
  params: {
    category: string;
  };
}

// @ts-expect-error Server Component
const page: FC<pageProps> = async ({ params }) => {
  return (
    <div>
      <SectionTitle>{params.category}</SectionTitle>
    </div>
  );
};

export default page;
