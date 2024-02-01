"use client"
import Link from "next/link"
import CardPage from "../card/page"

export default function dashboard() {
    return (
        
        <div className="h-screen bg-black  sm:bg-sky-300 flex gap-4 px-2 py-1">
            <div className="min-h-full w-60 px-2 bg-white py-4 ">
                <div className="h-16 w-16 rounded-full bg-slate-400  place-content-center">
                </div>

                <label 
                className="px-2"
                htmlFor="">Profile</label>

                <div className="py-2">
                    <label htmlFor=""><Link href={"/"}>Notification </Link></label>
                </div>
            </div>
            <div className="min-h-full w-full  bg-white">
                <nav className="p-2 px-4 w-full flex justify-between md:flex-row flex-col items-center">
                    <div className="flex content-center justify-center">

                        <input className="text-cyan-950 text-center h-8 "
                        type="search"
                        placeholder="Search hear" /> <label htmlFor=""><button className="bg-black text-cyan-100 px-2 rounded-lg ">search</button></label>
                    </div>
                
                </nav>
                <div className="px-2 flex gap-1 max-w-full">
                    <CardPage/>
                    <CardPage/>
                    <CardPage/>
                    <CardPage/>
                    <CardPage/>
                    <CardPage/>
                    
                </div>

            </div>
            <div className="min-h-full w-40 bg-white">

            </div>
        </div>
        
    )
}