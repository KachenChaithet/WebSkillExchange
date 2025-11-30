import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"
import { io } from 'socket.io-client'
import Sidebar from "../Components/Message/Sidebar"
import ChatArea from "../Components/Message/ChatArea"
import HeaderChat from "../Components/Message/HeaderChat"

const MessagePage = () => {

    const [message, setMessage] = useState('')
    const ws = useRef(null)

    const sendMessage = async () => {
        if (ws.current) {
            ws.current.emit('send_message', { message })
        }
        setMessage('')
    }
    useEffect(() => {
        const socket = io('http://localhost:5000')
        ws.current = socket
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
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