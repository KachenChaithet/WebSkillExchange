import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Message/Sidebar"
import ChatArea from "../Components/Message/ChatArea"
import HeaderChat from "../Components/Message/HeaderChat"
import { useEventUser } from "../Store/useUserStore"
import { useUser } from "@clerk/clerk-react"
import InputChat from "../Components/Message/InputChat"
import { useChatStore } from "../Store/useChatStore"

const MessagePage = () => {
    const fetchFriend = useEventUser((e) => e.fetchFriend)
    const friends = useEventUser((e) => e.friends)
    const initSocket = useChatStore((e) => e.initSocket)
    const disconnectSocket = useChatStore((e) => e.disconnectSocket)
    const { user } = useUser();




    useEffect(() => {
        initSocket()
        return () => disconnectSocket()
    }, [])

    useEffect(() => {
        fetchFriend(user.id)
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex ">
                <Sidebar friends={friends} />
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