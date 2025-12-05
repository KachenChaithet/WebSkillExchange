import { LogOut } from "lucide-react";
import { useChatStore } from "../../Store/useChatStore";
import { useEffect } from "react";

const HeaderChat = ({ user }) => {

    const setFriend = useChatStore((e) => e.setFriend)
    const setCurrentUser = useChatStore((e) => e.setCurrentUser)
    const fetchMessage = useChatStore((e) => e.fetchMessage)
    const person = useChatStore((e) => e.friend)


    useEffect(() => {
        if (user?.id) {
            setCurrentUser(user.id);
        }

        if (person?.clerkId) {
            setFriend(person.clerkId);
            fetchMessage(person.clerkId)
        }
    }, [user, person]);

    return (
        <>
            {person && (
                <div className="py-2 px-4 ">
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10">
                            <img src={person.avatarUrl} alt="" className="w-full h-full rounded-full" />
                            <span className="w-3 h-3 bg-green-500 border-2 border-white absolute rounded-full bottom-0 right-0" ></span>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-sans">{person.username}</h1>
                            <p className="font-medium text-green-500">Online</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default HeaderChat