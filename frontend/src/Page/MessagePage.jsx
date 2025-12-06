import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Message/Sidebar"
import ChatArea from "../Components/Message/ChatArea"
import HeaderChat from "../Components/Message/HeaderChat"
import { useEventUser } from "../Store/useUserStore"
import { useUser } from "@clerk/clerk-react"
import InputChat from "../Components/Message/InputChat"

const MessagePage = () => {
    const fetchFriend = useEventUser((e) => e.fetchFriend)
    const friends = useEventUser((e) => e.friends)

    const { user } = useUser();






    useEffect(() => {
        fetchFriend(user.id)
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex ">
                <div className="hidden md:block">
                    <Sidebar friends={friends} />
                </div>
                <div className="flex flex-col flex-1">
                    <HeaderChat user={user} />
                    <div className="flex flex-col flex-1 ">
                        <div className="flex-1 overflow-y-auto bg-neutral-100 ">
                            <ChatArea />
                        </div>
                        <div>
                            <InputChat />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MessagePage