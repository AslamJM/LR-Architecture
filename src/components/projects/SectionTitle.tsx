import { FC, HtmlHTMLAttributes } from "react";

interface SectionTitleProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const SectionTitle: FC<SectionTitleProps> = ({ className, children }) => {
  return (
    <div className="py-4">
      <h3 className="font-semibold text-lg md:text-xl text-center sm:text-left">
        {children}
      </h3>
      <div className="mt-1 w-full sm:w-1/2 h-[2px] bg-dark dark:bg-light dark:sm:bg-gradient-to-r sm:bg-gradient-to-r from-dark to-light dark:from-light dark:to-dark" />
    </div>
  );
};

export default SectionTitle;
