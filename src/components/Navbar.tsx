"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ui/Switch";

const navlinks = [
  { title: "Home", className: "mr-4", slug: "/" },
  { title: "About", className: "mx-4", slug: "/about" },
  { title: "Projects", className: "mx-4", slug: "/projects" },
  { title: "Contact", className: "ml-4", slug: "/contact" },
];

const Logo = () => {
  return <h1 className="text-secondary text-2xl font-bold italic">L&R</h1>;
};

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-4">
      <Logo />
      <ul className="flex items-center justify-center">
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
    </div>
  );
};

export default Navbar;
