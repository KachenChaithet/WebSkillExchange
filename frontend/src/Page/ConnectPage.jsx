import { Search } from "lucide-react"
import Navbar from "../Components/Navbar"

const ConnectPage = () => {
    return (


        <>
            <Navbar />
            <div className="min-h-screen bg-neutral-100 p-4 ">
                <div className=" flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold">Connect with TalentedPeople</h1>
                    <p className="max-w-[620px] text-center text-neutral-500 font-medium text-md">Search for users by name,username,or skill. Expand yournetwork and collaborate with others in the community.</p>

                    {/* SeachTerm */}
                    <div className="flex  items-center w-full max-w-[40%] bg-white shadow-md rounded-xl overflow-hidden ">
                        <div className="flex items-center justify-center p-3 border-r border-neutral-200 cursor-pointer hover:scale-105 transition-transform">
                            <Search className="text-neutral-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by name,username or skill..."
                            className="flex-1 px-4 py-3 text-lg font-medium outline-none focus:ring-2 focus:ring-neutral-200"
                        />
                    </div>
                </div>


            </div>


        </>
    )
}
export default ConnectPage