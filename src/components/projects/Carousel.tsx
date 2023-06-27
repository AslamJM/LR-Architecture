"use client";

import { FC, useState } from "react";
import ProjectImages from "./ProjectImage";
import { cn } from "@/lib/utils";

interface CarouselProps {
  images: string[];
  alt: string[];
}

const Carousel: FC<CarouselProps> = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="aspect-w-16 aspect-h-9 relative">
      <div className="absolute z-20 top-4 flex justify-center gap-2 pb-2">
        {images.map((image, index) => (
          <button
            key={image}
            className={cn(
              "h-1.5 w-10 rounded-none p-0 hover:bg-primary",
              index === current ? "bg-primary" : "bg-light"
            )}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">
              Slide {index + 1} of {images.length}
            </span>
          </button>
        ))}
      </div>
      <ProjectImages src={images[current]} alt={alt[current]} />
    </div>
  );
};

export default Carousel;
