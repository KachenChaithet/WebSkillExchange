import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useChatStore } from "../../Store/useChatStore"
import { useState } from "react"

const Sidebar = ({ friends }) => {
    const navigate = useNavigate()
    const setSelcetFriend = useChatStore((e) => e.setSelcetFriend)
    const onlineUsers = useChatStore((e) => e.onlineUsers)
    const currentFriend = useChatStore((e) => e.currentFriend)

    const [searchTerm, setSearchTerm] = useState('')

    const handleSelectFriend = (friend) => {
        setSelcetFriend(friend)
        navigate(`/message/${friend.username}`)

    }

    const filterFriends = friends.filter((friend) =>
        friend.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )

    return (
        <div className="w-100 max-h-screen h-[860px]  bg-white border border-neutral-200 overflow-y-auto ">


            {/* SeachTerm */}
            <div className="p-4 border-b border-neutral-200 space-y-4">
                <h1 className="text-2xl font-semibold">Conversations</h1>

                <div className="flex items-center w-full   bg-neutral-100 shadow-md rounded-lg overflow-hidden ">
                    <div className="flex items-center justify-center p-2 cursor-pointer active:scale-105 transition-transform">
                        <Search className="text-neutral-500" size={20} />
                    </div>
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        type="text"
                        placeholder="Search conversaions"
                        className="flex-1 px-1 py-1 text-md font-medium outline-none "
                    />
                </div>
            </div>

            {filterFriends.length === 0 && (
                <div className="p-4 text-neutral-500">No users found</div>
            )}


            {/* UsersConversations */}
            {filterFriends.map((person) => {
                const isOnline = onlineUsers.includes(person.clerkId)

                const activeFriend = currentFriend === person.clerkId




                return (
                    <div key={person.clerkId} onClick={() => handleSelectFriend(person)} className={` p-4 flex items-center justify-between border-l-3  ${activeFriend ? ' border-[#2287ee] bg-[#e9f3fd]' : 'border-transparent'} hover:bg-[#e9f3fd]  `}>
                        <div className="flex items-center gap-4">
                            <div className="relative w-10 h-10">
                                <img src={person.avatarUrl} alt="" className="w-10 h-10 rounded-full" />
                                <span className={`w-3 h-3 ${isOnline ? 'bg-green-600' : 'bg-gray-600'}  border-2 border-white rounded-full absolute bottom-0 right-0`}></span>

                            </div>

                            <div className="">
                                <h1 className={`text-xl ${activeFriend && 'text-blue-500'} font-sans`}>{person.username}</h1>
                                <p className={`font-medium ${activeFriend ? 'text-blue-500' : 'text-neutral-500'} `}>explain user</p>
                            </div>
                        </div>
                        <h1 className="text-sm text-neutral-600">{isOnline ? 'online' : 'old'}</h1>
                    </div>
                )
            })}
        </div >
    )
}
export default Sidebar