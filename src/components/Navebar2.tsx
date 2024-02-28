"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar2({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);

    return(
        <>
            <nav className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}>
                <Menu setActive={setActive}>
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home">
                            <HoveredLink href={'/'}>Go to home page</HoveredLink>
                        </MenuItem>
                    </Link>
                    <Link href={"/about"}>
                        <MenuItem setActive={setActive} active={active} item="About Me">
                            <HoveredLink href={'/about'}>Do you interested to khow about me</HoveredLink>
                        </MenuItem>
                    </Link>
                    <Link href={"/project"}>
                        <MenuItem setActive={setActive} active={active} item="Projects">
                        <HoveredLink href={'/project'}>There are some projects list</HoveredLink>
                        </MenuItem>
                    </Link>
                    <Link href={"/skils"}>
                        <MenuItem setActive={setActive} active={active} item="Skils">
                            <HoveredLink href={'/skils'}>My technical skills</HoveredLink>
                        </MenuItem>
                    </Link>
                    <Link href={"/contact"}>
                        <MenuItem setActive={setActive} active={active} item="Contact">
                            <HoveredLink href={'/contact'}>Connect with me</HoveredLink>
                        </MenuItem>
                    </Link>
                </Menu>
            </nav>
        </>
    )
}