"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterDlink() {
  const words = [
    {
      text: "Frontend",
    },
    {
      text: "Web",
      className: "text-blue-500 text-red-700",

    },
    {
      text: "Devloper",
      className: "text-blue-500 dark:text-blue-500 font-semibold",

    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-3">
      
      <TypewriterEffectSmooth words={words} className="mx-auto"/>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-slate-600 hover:text-slate-400">
          Resume
        </button>
        
      </div>
    </div>
  );
}
