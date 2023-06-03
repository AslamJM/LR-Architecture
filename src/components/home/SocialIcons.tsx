import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "facebook",
    href: "",
    icon: FacebookIcon,
    className: "mr-4",
  },
  {
    name: "twitter",
    href: "",
    icon: TwitterIcon,
    className: "mx-4",
  },
  {
    name: "instgram",
    href: "",
    icon: InstagramIcon,
    className: "mx-4",
  },
  {
    name: "linkedIn",
    href: "",
    icon: LinkedinIcon,
    className: "ml-4",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center my-4">
      {socialLinks.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={`${link.className} p-2 hover:bg-dark/20 dark:hover:bg-light/20 rounded-full z-[9]`}
        >
          <link.icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
