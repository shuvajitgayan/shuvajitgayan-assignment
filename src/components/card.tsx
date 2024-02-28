"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { TypewriterDlink } from "./writerOrDlink";

export function MyCard() {
  return (
    <div className="mt-36 px-4">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-5 sm:p-10 bg-white dark:bg-zinc-900 ">
        <text className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          <TypewriterDlink />
        </text>

        <text className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            <span className="text-slate-950 text-2xl">My self  <span className="font-semibold">Shuvajit Gayen</span></span> <br /> 
            <p className="mt-2">Frontend web developer proficient in JavaScript, React, Next.js, with backend basics. Passionate about intuitive user experiences, innovation, and high-quality solutions. Constantly expanding skills, staying updated with trends, and committed to excellence.</p>
        </text>
      </BackgroundGradient>
    </div>
  );
}
