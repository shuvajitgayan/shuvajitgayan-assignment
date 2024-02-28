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
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          <TypewriterDlink/>
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </BackgroundGradient>
    </div>
  );
}
