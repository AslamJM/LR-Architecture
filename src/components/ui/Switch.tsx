"use client";

import { useTheme } from "next-themes";
import * as Switch from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center">
      <Sun className="w-8 h-8 text-primary dark:text-light/50" />
      <Switch.Root
        className="w-[55px] h-[30px] bg-light/90 border-dark border-2 rounded-full mx-2 relative focus:shadow-[0_0_0_2px] focus:shadow-dark dark:focus:shadow-light data-[state=checked]:bg-dark/90 data-[state=checked]:border-light"
        onCheckedChange={(checked) => {
          if (checked) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] rounded-full bg-primary shadow-sm shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[29px]" />
      </Switch.Root>
      <Moon className="w-8 h-8 text-dark/50 dark:text-primary" />
    </div>
  );
};

export default ThemeToggle;
