import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"
import { io } from 'socket.io-client'

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
            <div>MessagePage</div>
            <input type="text" placeholder="enter message " className="border p-2" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="bg-green-500 rounded-md p-2" onClick={sendMessage}>send message</button>
        </>
    )
}
export default MessagePage