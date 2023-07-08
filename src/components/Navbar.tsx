"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ui/Switch";
import { MenuIcon, XIcon } from "lucide-react";


import {Roboto_Slab} from 'next/font/google'

const League_Gothic_F = Roboto_Slab({subsets:['latin']}) 

const navlinks = [
  { title: "Home", className: "mr-2 lg:mr-4", slug: "/" },
  { title: "About", className: "mx-2 lg:mx-4", slug: "/about" },
  { title: "Projects", className: "mx-2 lg:mx-4", slug: "/projects" },
  { title: "Contact", className: "ml-2 lg:ml-4", slug: "/contact" },
];

const Logo = () => {
  return <div>
    <Link href="/">
      <h2 className={`${League_Gothic_F.className} text-2xl font-bold tracking-`}>LUTHFUR RAHMAN</h2>
      <h5 className={`${League_Gothic_F.className} text-md font-base tracking-[.27em]`}>Chartered Architects.</h5>
    </Link>
  </div>
};

const Navbar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const onPath = (slug: string) => {
    if (pathname === "/" && slug === "/") {
      return true;
    }
    if (slug !== "/") {
      return pathname.startsWith(slug);
    }
  };

  return (
    <div className=" flex items-center justify-between py-4 h-[80px] w-full  ">
      <Logo />
      <div className="flex item-center">
      <ul className="hidden md:flex items-center justify-center">
        {navlinks.map((item) => (
          <li key={item.title} className={`${item.className} px-1 py-2`}>
            <Link
              href={item.slug}
              className={`${
                onPath(item.slug)
                  ? "text-primary font-semibold"
                  : "text-dark dark:text-light dark:hover:text-primary"
              }  hover:text-primary tracking-widest `}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      </div>
      <button
        className="p-1 md:hidden rounded-full hover:bg-dark/10 dark:hover:bg-light/10 transition-all duration-300"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        type="button"
      >
        <MenuIcon
          className="w-6 h-6  text-dark dark:text-light hover:text-primary dark:hover:text-primary"
          onClick={() => setShow(true)}
        />
      </button>
      <div
        className={`fixed md:hidden w-[300px] h-full top-0 right-0 bg-primary opacity-95 z-30  transition-all duration-500 ${
          show ? "translate-x-0" : "translate-x-full"
        } `}
        id="drawer-navigation"
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
                onClick={() => setShow(false)}
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
