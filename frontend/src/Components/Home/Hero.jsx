import { Search } from "lucide-react"
import { useState } from "react"
import ModalRequestSkill from "../modal/ModalForm"

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [openForm, setOpenForm] = useState(false)

    console.log(openForm);

    return (<>

        {openForm && <ModalRequestSkill isClose={() => setOpenForm((prev) => !prev)} />}
        <div className="flex flex-col items-center justify-center min-h-[600px] gap-10 ">
            {/* Text */}
            <div className="space-y-2 text-center">
                <h1 className="text-[22px] md:text-6xl font-bold ">Unlock Your Potential. Share Your Skills.</h1>
                <p className=" text-sm md:text-xl font-semibold text-neutral-400 w-[400px] md:w-[800px] mx-auto">Find experts or offer your own skill to our vibrant community. What are you looking for today?</p>
            </div>

            {/* SeachTerm */}
            <div className="flex items-center w-full max-w-[1000px] bg-white shadow-md rounded-xl overflow-hidden ">
                <div className="flex items-center justify-center p-3 border-r border-neutral-200 cursor-pointer hover:scale-105 transition-transform">
                    <Search className="text-neutral-500" />
                </div>
                <input
                    type="text"
                    placeholder="What Skill are you looking for?"
                    className="flex-1 px-4 py-3 text-lg font-medium outline-none focus:ring-2 focus:ring-neutral-200"
                />
            </div>

            {/* Offen and Request */}
            <div className="flex gap-2">
                <button className="bg-[#2b8cee] text-white py-3 min-w-[220px] text-xl font-semibold rounded-md hover:bg-blue-600">Offer a Skill</button>
                <button className="border-2 border-neutral-200 bg-white  py-3 min-w-[220px] text-xl font-semibold rounded-md hover:bg-neutral-200" onClick={() => setOpenForm((prev) => !prev)}>Request a Skill</button>
            </div>
        </div>
    </>
    )
}
export default Hero