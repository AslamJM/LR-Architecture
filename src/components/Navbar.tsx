"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ui/Switch";
import { MenuIcon, XIcon } from "lucide-react";

const navlinks = [
  { title: "Home", className: "mr-2 lg:mr-4", slug: "/" },
  { title: "About", className: "mx-2 lg:mx-4", slug: "/about" },
  { title: "Projects", className: "mx-2 lg:mx-4", slug: "/projects" },
  { title: "Awards", className: "mx-2 lg:mx-4", slug: "/awards" },
  { title: "Contact", className: "ml-2 lg:ml-4", slug: "/contact" },
];

const Logo = () => {
  return <h1 className="text-secondary text-2xl font-bold italic">L&R</h1>;
};

const Navbar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center justify-between py-4">
      <Logo />
      <ul className="hidden md:flex items-center justify-center">
        {navlinks.map((item) => (
          <li key={item.title} className={`${item.className} px-1 py-2`}>
            <Link
              href={item.slug}
              className={`${
                pathname === item.slug
                  ? "text-primary font-semibold"
                  : "text-dark dark:text-light dark:hover:text-primary"
              }  hover:text-primary`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <button className="p-1 md:hidden rounded-full hover:bg-dark/10 dark:hover:bg-light/10 transition-all duration-300">
        <MenuIcon
          className="w-6 h-6  text-dark dark:text-light hover:text-primary dark:hover:text-primary"
          onClick={() => setShow(true)}
        />
      </button>
      <div
        className={`absolute md:hidden w-[300px] h-full top-0 right-0 bg-primary opacity-95 z-10 ${
          show ? "translate-x-[0px]" : "translate-x-[300px]"
        } transition-all duration-500 `}
      >
        <button
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-dark/10 transition-colors duration-300"
          onClick={() => setShow(false)}
        >
          <XIcon className="w-8 h-8 text-secondary hover:text-dark" />
        </button>
        <ul className="mt-32">
          {navlinks.map((item) => (
            <li key={item.title} className={` px-4 py-2`}>
              <Link
                href={item.slug}
                className={`${
                  pathname === item.slug
                    ? "text-dark font-semibold"
                    : "text-secondary"
                }  hover:text-dark text-lg`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
