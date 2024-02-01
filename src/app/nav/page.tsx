"use client"

import Link from "next/link"

export default function navPage(){
    return(
        <>
        <nav className="flex justify-between px-5 py-2">
            <h1 className="font-serif  bg-black text-white cursor-pointer px-2 py-1 rounded">DashBoard</h1>
            <li className="list-none">
                <Link className="px-8 rounded hover:bg-slate-800 hover:text-cyan-300 w-2" href={"https://github.com/shuvajitgayan/shuvajitgayan-assignment"}> GitHub Link</Link>
            </li>
            </nav>

            
        </>
    )
}