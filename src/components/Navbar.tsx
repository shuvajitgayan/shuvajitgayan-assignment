"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, } from "@tabler/icons-react";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";


export default function Navbar(){

    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-350 dark:text-white" />,
        },
        {
          name: "About",
          link: "/about",
          icon: <IconUser className="h-4 w-4 text-neutral-350 dark:text-white" />,
        },
        {
          name: "Project",
          link: "/project",
          icon: (
            <GoProject className="h-4 w-4 text-neutral-350 dark:text-white" />
          ),
        },
        {
          name: "Skils",
          link: "/skils",
          icon: (
            <GiSkills className="h-4 w-4 text-neutral-350 dark:text-white" />
          ),
        },
        {
          name: "Contact",
          link: "/contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-350 dark:text-white" />
          ),
        },
      ];
      return (
        <>
          
          <div className="relative  w-full sm:hidden">
            <FloatingNav navItems={navItems} className="bg-black"/>
          </div>
        </>
      );
}
