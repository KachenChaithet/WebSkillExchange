import { Filter, Search } from "lucide-react"
import Navbar from "../Components/Navbar"
import CardUserConnect from "../Components/Cards/CardUserConnect"
import { useEventUser } from "../Store/useUserStore"
import { useState } from "react"

const ConnectPage = () => {
    const users = useEventUser((e) => e.userAll)
    const [searchTerm, setSearchTerm] = useState('')

    if (!users || users.length === 0) {
        return <div className="">Loading...</div>
    }
    console.log(users);

    const filterUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.status?.toLowerCase().includes(searchTerm.toLowerCase())
    )


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
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            type="text"
                            placeholder="Search by name,username or skill..."
                            className="flex-1 px-4 py-3 text-lg font-medium outline-none focus:ring-2 focus:ring-neutral-200"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {filterUsers.length === 0 && (
                        <div className="">not found</div>
                    )}

                    {
                        filterUsers.map((user) => (
                            <CardUserConnect
                                user={user}
                                key={user.id}
                                id={user.clerkId}
                                img={user.avatarUrl}
                                name={user.username}
                                title="hi"
                                status={user.status}
                            />
                        ))
                    }
                </div>


            </div>


        </>
    )
}
export default ConnectPage