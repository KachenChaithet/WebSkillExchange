import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"
import { io } from 'socket.io-client'
import Sidebar from "../Components/Message/Sidebar"
import ChatArea from "../Components/Message/ChatArea"
import HeaderChat from "../Components/Message/HeaderChat"
import { useEventUser } from "../Store/useUserStore"
import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

const MessagePage = () => {
    const fetchFriend = useEventUser((e) => e.fetchFriend)
    const friends = useEventUser((e) => e.friends)
    const [message, setMessage] = useState('')
    const ws = useRef(null)
    const { user } = useUser();
   
    useEffect(() => {
        const socket = io('http://localhost:5000')
        ws.current = socket

        return () => socket.disconnect()
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
                    <HeaderChat />
                    <div className="flex flex-1">
                        <ChatArea />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MessagePage