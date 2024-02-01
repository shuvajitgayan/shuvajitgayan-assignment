export default function cardPage(){
    return(
        
            <div className="py-3 px-2 h-auto w-auto bg-sky-300 overflow-hidden rounded-2xl">
                <div className=" flex flex-col gap-2">
                    <div className="h-16 w-16 rounded-full bg-slate-400  place-content-center">
                        
                    </div>
                    <button className="bg-blue-600 text-black px-2 py-1 rounded">Add Friend</button>
                    <button className="top-2/3 bg-blue-600 text-black px-2 py-1 rounded">Profile</button>
                </div>
            </div>
        
        
    )
}