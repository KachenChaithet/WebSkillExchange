import { LogOut } from "lucide-react";
import { useChatStore } from "../../Store/useChatStore";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

const HeaderChat = ({ user }) => {

    const setFriend = useChatStore((e) => e.setFriend)
    const setCurrentUser = useChatStore((e) => e.setCurrentUser)
    const fetchMessage = useChatStore((e) => e.fetchMessage)
    const person = useChatStore((e) => e.friend)
    const onlineUsers = useChatStore((e) => e.onlineUsers)
    const { getToken } = useAuth()

    const isOnline = onlineUsers.includes(person?.clerkId)


    useEffect(() => {
        if (user?.id) {
            setCurrentUser(user.id);
        }

        if (person?.clerkId) {
            setFriend(person.clerkId);
            fetchMessage(person.clerkId, getToken)
        }
    }, [user, person]);

    return (
        <>
            {person && (
                <div className="py-2 px-4 ">
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10">
                            <img src={person.avatarUrl} alt="" className="w-full h-full rounded-full" />
                            <span className={`w-3 h-3 ${isOnline ? 'bg-green-500 ' : 'bg-gray-500 '} border-2 border-white absolute rounded-full bottom-0 right-0`} ></span>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-sans">{person.username}</h1>
                            <p className={`font-medium ${isOnline ? 'text-green-500 ' : 'text-gray-500 '}`}>{isOnline ? 'Online' : 'Offline'}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default HeaderChat