import { Search } from "lucide-react"
import { useState } from "react"

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (<>
        <div className="flex flex-col items-center justify-center min-h-[600px] gap-10 ">
            {/* Text */}
            <div className="space-y-2 text-center">
                <h1 className="text-[22px] md:text-6xl font-bold ">Unlock Your Potential. Share Your Skills.</h1>
                <p className=" text-sm md:text-xl font-semibold text-neutral-400 w-[400px] md:w-[800px] mx-auto">Find experts or offer your own skill to our vibrant community. What are you looking for today?</p>
            </div>

            {/* SeachTerm */}
            <div className="flex items-center min-w-2xs md:min-w-[1000px] rounded-xl bg-white shadow-md">
                <div className=" hover:scale-105 transition-all cursor-pointer p-4 border-neutral-200 border-r">  <Search className="text-neutral-500 " /></div>
                <input type="text" placeholder="What Skill are you looking for?" className="text-xl flex-1  px-2 py-4 font-semibold outline-0 rounded-xl focus:outline-3 focus:outline-neutral-200 " />
            </div>

            {/* Offen and Request */}
            <div className="flex gap-2">
                <button className="bg-[#2b8cee] text-white py-3 min-w-[220px] text-xl font-semibold rounded-md">Offer a Skill</button>
                <button className="border-2 border-neutral-200 bg-white  py-3 min-w-[220px] text-xl font-semibold rounded-md">Requuest a Skill</button>
            </div>
        </div>
    </>
    )
}
export default Hero