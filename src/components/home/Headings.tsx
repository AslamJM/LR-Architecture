import { HtmlHTMLAttributes } from "react";

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}

export const LargeHeading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={`${className} text-4xl md:text-5xl lg:text-6xl font-semibold md:font-bold lg:font-extrabold my-2 tracking-wide`}
    >
      {children}
    </h1>
  );
};
