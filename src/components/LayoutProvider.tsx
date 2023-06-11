"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  if (path === "/studio") {
    return <div>{children}</div>;
  }
  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-32 text-dark bg-light dark:bg-dark dark:text-light min-h-screen w-full ">
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutProvider;
